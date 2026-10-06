/* ============================================================
   HOME PAGE SCRIPT  -  index.html only
   Hero slider, product search, the category sidebar and the
   product grid filter. Needs the #products markup to be present.
   ============================================================ */

const searchForm = document.querySelector('#searchForm');
        const productSearch = document.querySelector('#productSearch');
        const productCards = document.querySelectorAll('.product-card');
        const noResults = document.querySelector('#noResults');
        const heroSlides = document.querySelectorAll('.hero-slide');
        const heroDots = document.querySelectorAll('.hero-dot');
        const previousHeroButton = document.querySelector('.hero-arrow.previous');
        const nextHeroButton = document.querySelector('.hero-arrow.next');
        let activeFilter = 'all';
        let categoryPicked = false;   /* true when the sidebar chose the filter */
        let activeHeroSlide = 0;
        let heroTimer;

/* Loose word match so "Cements" also finds "cement", and so
           "Glass Ionomer & Cements" finds a card that lists all three. */
        function termMatches(text, query) {
            if (!query) return true;
            if (text.indexOf(query) !== -1) return true;
            var words = query.split(/[^a-z0-9]+/).filter(Boolean);
            if (!words.length) {
                /* Arabic (or any non-Latin) query: the stemmer can do
                   nothing with it, so the substring test above is the
                   whole answer. Latin-only punctuation still shows all. */
                return !/[^\x00-\x7F]/.test(query);
            }
            return words.every(function (word) {
                var stem = word.length > 3 ? word.replace(/s$/, '') : word;
                return text.indexOf(stem) !== -1 ||
                       text.indexOf(stem + 's') !== -1 ||
                       text.indexOf(stem + 'es') !== -1;
            });
        }

        function filterProducts() {
            const query = productSearch.value.trim().toLowerCase();
            let visibleCount = 0;

            function pass(useQuery) {
                visibleCount = 0;
                productCards.forEach(function(card) {
                    const matchesCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
                    const searchableText = (card.textContent + ' ' + (card.dataset.keywords || '')).toLowerCase();
                    const matchesSearch = useQuery ? termMatches(searchableText, query) : true;
                    const isVisible = matchesCategory && matchesSearch;
                    card.style.display = isVisible ? '' : 'none';
                    if (isVisible) visibleCount += 1;
                });
            }

            pass(true);

            /* a sidebar row that matches no product still shows its section */
            if (!visibleCount && categoryPicked && activeFilter !== 'all') pass(false);

            noResults.style.display = visibleCount ? 'none' : 'block';

            if (typeof syncCategoryUI === 'function') syncCategoryUI();
        }

        /* Typing a word searches the WHOLE catalogue, so the sidebar filter
           drops back to "All Categories" instead of fighting the search box. */
        function searchTyped() {
            activeFilter = 'all';
            categoryPicked = false;
            filterProducts();
        }

        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            searchTyped();
        });

        productSearch.addEventListener('input', searchTyped);


        /* ============================================================

/* ============================================================
   STORE CATEGORIES  -  >>> EDIT HERE <<<
   The whole sidebar (3 levels) is generated from this list.
   ------------------------------------------------------------
   name : label shown in the sidebar
   key  : optional. Must match the data-category of the product
          card this section should show. Leave it out and a slug
          is built from the name automatically.
   groups : second level
   items  : third level (optional - a group with no items just
            filters on its own name, like "Instrument")
   ============================================================ */
const CATEGORY_TREE = [
  {
    name: 'Restorative', icon: 'restorative', groups: [
      {
        name: 'Consumables', items: [
          'Composite', 'Amalgam', 'Glass Ionomer & Cements', 'Base Liners',
          'Matrix materials & wedges', 'Isolation Materials', 'Finishing & Polishing',
          'Acid Etch & Bonding Agents', 'Bleaching Kits', 'Caries Detectors',
          'Temporary Fillings', 'Dental Burs', 'Crown Forms', 'Membrane & Dressing'
        ]
      },
      {
        name: 'Instrument', items: [
          'Composite Instruments', 'Glass Ionomer Instruments', 'Amalgam Instruments', 'Matrix Holder'
        ]
      },
      { name: 'Equipment', items: ['Amalgamators', 'Light Cure Units', 'Light Cure Accessories'] }
    ]
  },
  {
    name: 'Endodontics', icon: 'endodontics', groups: [
      {
        name: 'Consumables', items: [
          'Manual Files', 'Paper Points', 'Gutta Percha', 'Gates Glidden & Pesso Reamer',
          'Sealers', 'Endo Accessories', 'Rotary Files', 'Vitality Testers',
          'Medication & Irrigation', 'Barbed Broach', 'Regenerative Cements',
          'Spreaders & Pluggers', 'Endodontic Burs', 'Paste Carriers'
        ]
      },
      {
        name: 'Equipment', items: [
          'Endomotors', 'Apex Locator', 'Endodontic Handpieces', 'Obturation Systems',
          'Irrigation System', 'Gutta Percha Cutter', 'MAP System'
        ]
      },
      { name: 'Instrument' }
    ]
  },
  {
    name: 'Orthodontics', icon: 'orthodontics', groups: [
      {
        name: 'Consumables', items: [
          'Bracket Systems', 'Adhesives', 'Wires & Expansion screws', 'Bands',
          'Elastic O-Ties & Ligatures', 'Buttons & Cleats', 'Buccal Tubes',
          'Cheek Retractors', 'Alginate'
        ]
      },
      {
        name: 'Instrument', items: [
          'Bracket Holders', 'Band Seaters', 'Pliers', 'Cutters', 'Force Gauges'
        ]
      }
    ]
  },
  {
    name: 'Implant', icon: 'implant', groups: [
      { name: 'Consumables', items: ['Dental Implants', 'Prosthetic Parts'] },
      { name: 'Instruments', items: ['Surgical Kits', 'Burs & Drills'] },
      { name: 'Equipment', items: ['UltraSonic Surgery', 'Implant Micro-Motors'] },
      { name: 'Miscellaneous' }
    ]
  },
  {
    name: 'Prosthetics', icon: 'prosthetics', groups: [
      {
        name: 'Consumables', items: [
          'Impression Materials & Accessories', 'Permanent Cements', 'Temporary Cements',
          'Temporary Crown', 'Crowns, Bands & shells', 'Posts & Drills',
          'Core Build Up Materials', 'Burs & Stones', 'Softliner',
          'Gingival Retractors', 'Occlusal Adjustment Materials',
          'Acrylic Teeth & Cast', 'Handpiece Oil'
        ]
      },
      {
        name: 'Equipment', items: [
          'Articulators', 'Articulator Accessories', 'Mixing Guns',
          'Shade Guide', 'Surveyor', 'Face-bow'
        ]
      },
      {
        name: 'Instrument', items: [
          'Mixing Gun', 'Impression Instruments', 'Crown Remover',
          'Mixing Bowls', 'Packers', 'Caliber'
        ]
      }
    ]
  },
  {
    name: 'Perio & Surgery', icon: 'surgery', groups: [
      {
        name: 'Consumables', items: [
          'General Consumables', 'Protection & Disinfection', 'Napkins, Cups, Gauze & Cotton',
          'X-Ray Film & Materials', 'Disposables', 'Scalpels & Surgical Blades',
          'Membrane & Bone grafts', 'Medications', 'Sutures & Needles',
          'Haemostatic agents', 'Perio packs', 'Cleaning & Polishing',
          'Acrylic Teeth & Cast', 'Handpiece Oil'
        ]
      },
      {
        name: 'Instruments', items: [
          'Scissors & Tissue forceps', 'Extraction Forceps', 'Elevators & Retractors',
          'Surgical Burs', 'Perio probes, scalers & Curettes', 'Bone files & Surgical Curettes',
          'Mallets & Osteotomes', 'Micro-surgical Instruments', 'UltraSonic Tips',
          'Disposable Prophy Cups & Brushes', 'Surgical Blades', 'Scalpel Handle'
        ]
      },
      { name: 'Miscellaneous' },
      { name: 'Equipment' }
    ]
  },
  {
    /* both hygiene sections point at the same product card */
    name: 'Hygiene & Prevention', key: 'hygiene', icon: 'hygiene', groups: [
      {
        name: 'Instrument', items: [
          'General Instrument', 'Disinfectants for instrument', 'Miscellaneous'
        ]
      },
      {
        name: 'Equipment', items: [
          'Sterilization Systems', 'x-Ray', 'Microscopes', 'Turbines & Micromotors',
          'Handpieces', 'Loupes & Head Lamps', 'Lasers', 'Soft Tissue Lasers',
          'Intraoral Cameras', 'Compressors', 'Bleaching Systems',
          'Ultrasonic Scaler & Polisher', 'Units & Accessories',
          'Dental Units', 'Dental Unit Accessories'
        ]
      },
      { name: 'Anesthesia', items: ['Needles', 'Topical'] },
      { name: 'Oral Hygiene', items: ['Water Flossers', 'Preventive Products', 'Tooth Polishing'] }
    ]
  },
  {
    name: 'Oral Hygiene', key: 'hygiene', icon: 'oral', groups: [{ name: 'Miscellaneous' }]
  },
];

/* ---------- section -> product-card key ---------- */
const CATEGORY_KEYS = {};
CATEGORY_TREE.forEach(function (cat) {
  CATEGORY_KEYS[cat.name] = cat.key ||
    cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
});

/* ---------- line icons ---------- */
const TOOTH =
  '<path d="M12 4.2c2-1.9 6-2 7.4.4 1.3 2.3-.4 4.6-1.4 6.6-.9 1.8-1.3 3.5-1.4 5.4' +
  '-.1 1.7-.8 3-1.8 3s-1.4-1.5-1.4-3.2c0-.9-.5-1.4-1.4-1.4s-1.4.5-1.4 1.4' +
  'c0 1.7-.4 3.2-1.4 3.2s-1.7-1.3-1.8-3c-.1-1.9-.5-3.6-1.4-5.4-1-2-2.7-4.3-1.4-6.6' +
  'C6 2.2 10 2.3 12 4.2z"/>';

const CATEGORY_ICONS = {
  restorative:
    '<path d="M6.4 3.2h11.2a2 2 0 0 1 2 2v13.6a2 2 0 0 1-2 2H6.4a2 2 0 0 1-2-2V5.2a2 2 0 0 1 2-2z"/>' +
    '<path d="M8 7.6h8M8 11h8M8 14.4h5"/>',

  endodontics: TOOTH +
    '<path d="M12 7.6v8.2"/>' +
    '<path d="M9.6 8.8c-1.1 1.5-1.1 3.3.1 4.8"/>' +
    '<path d="M14.4 8.8c1.1 1.5 1.1 3.3-.1 4.8"/>',

  orthodontics:
    '<path d="M3.4 10.6h17.2"/>' +
    '<path d="M5.6 6.4v3.4a2 2 0 0 0 4 0V6.4"/>' +
    '<path d="M14.4 6.4v3.4a2 2 0 0 0 4 0V6.4"/>' +
    '<path d="M12 10.2v9.6"/>',

  implant:
    '<path d="M12 2.8c3.2 0 5.4 2.3 5.4 5.2 0 2.4-1.5 3.8-2.4 5-.7.9-1 1.5-1 2.6H10' +
    'c0-1.1-.3-1.7-1-2.6-.9-1.2-2.4-2.6-2.4-5 0-2.9 2.2-5.2 5.4-5.2z"/>' +
    '<path d="M9.2 17.4h5.6M9.7 20.8h4.6"/>',

  prosthetics: TOOTH +
    '<path d="M6.9 9.6c1.5-2.3 3.2-3.4 5.1-3.4s3.6 1.1 5.1 3.4"/>' +
    '<path d="M8.4 11.4c2.3 1 4.9 1 7.2 0"/>',

  surgery:
    '<path d="M14.8 3.3a4.6 4.6 0 0 0-6.1 5.8L3.6 14.2a1.9 1.9 0 0 0 2.7 2.7l5.1-5.1' +
    'a4.6 4.6 0 0 0 5.8-6.1L14.4 8.5l-2.3-.6-.6-2.3 3.3-2.3z"/>' +
    '<path d="M3.9 20.1 6.6 17.4"/>',

  hygiene:
    '<path d="M12 2.8c3.4 3.6 5.4 6.5 5.4 9a5.4 5.4 0 0 1-10.8 0c0-2.5 2-5.4 5.4-9z"/>' +
    '<path d="M9.3 11.6l2.1 2.1 3.5-3.9"/>',

  oral: TOOTH,

  lab:
    '<path d="M9.6 3.4v5.8L4.9 17.3A2 2 0 0 0 6.6 20.4h10.8a2 2 0 0 0 1.7-3.1l-4.7-8.1V3.4"/>' +
    '<path d="M8.4 3.4h7.2"/>' +
    '<path d="M7.4 14.4h9.2"/>',

  derma:
    '<path d="M5.2 4.8c2.7-1.5 5.5-1.5 7.6-.4"/>' +
    '<path d="M4.4 9.6c-.6 3 .6 5.7 2.9 7.1"/>' +
    '<path d="M12 21.2c3-1.3 5-3.5 5.8-6.6.8-3.1.4-6.2-1.3-8.6"/>' +
    '<path d="M8.2 10.6c.6-.7 1.5-.7 2.1 0M13.6 10.2c.6-.7 1.5-.7 2.1 0"/>' +
    '<path d="M10.9 14.8c1.1.9 2.3.9 3.4 0"/>',

  medical:
    '<path d="M4.6 6.4h14.8v13.2H4.6z"/>' +
    '<path d="M9.4 6.4V4.8a1.4 1.4 0 0 1 1.4-1.4h2.4a1.4 1.4 0 0 1 1.4 1.4v1.6"/>' +
    '<path d="M12 10.4v5.2M9.4 13h5.2"/>',

  cleaning:
    '<path d="M15.4 3.4l1.8 1.8M17.4 8.4l-1.8 1.8"/>' +
    '<path d="M13.6 5.2 4.9 13.9a3 3 0 0 0 0 4.2l1.5 1.5a3 3 0 0 0 4.2 0l8.7-8.7"/>'
};

/* ============================================================
   BUILD THE SIDEBAR
   ============================================================ */
(function () {
  const host = document.getElementById('catSidebar');
  if (!host) return;

  const esc = function (s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };
  const chev =
    '<svg class="cat-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M9 6l6 6-6 6"/></svg>';

  let html =
    '<button type="button" class="cat-head" id="catHead" aria-expanded="false" aria-controls="catList">' +
      '<span data-i18n="cat.title">' + SD.t('cat.title') + '</span>' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M6 9l6 6 6-6"/></svg>' +
    '</button>' +
    '<button type="button" class="cat-all active" data-key="all">' +
      '<span class="cat-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" ' +
        'stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M4.6 5.4h14.8M4.6 12h14.8M4.6 18.6h14.8"/></svg></span>' +
      '<span class="cat-label" data-i18n="cat.all">' + SD.t('cat.all') + '</span>' +
      '<span class="cat-num" data-role="count">0</span>' +
    '</button>' +
    '<div class="cat-list" id="catList">';

  CATEGORY_TREE.forEach(function (cat, i) {
    const groups = cat.groups || [];
    const count = groups.reduce(function (n, g) {
      return n + 1 + ((g.items && g.items.length) ? g.items.length : 0);
    }, 0);

    html +=
      '<div class="cat-node">' +
        '<button type="button" class="cat-btn cat-l1" data-name="' + esc(cat.name) + '" ' +
                'data-key="' + esc(CATEGORY_KEYS[cat.name]) + '" data-term="" data-level="1" ' +
                'aria-expanded="false" aria-controls="cg' + i + '">' +
          '<span class="cat-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" ' +
            'stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
            (CATEGORY_ICONS[cat.icon] || '') + '</svg></span>' +
          '<span class="cat-label" data-i18n-cat="' + esc(cat.name) + '">' + esc(SD.tr(cat.name)) + '</span>' +
          '<span class="cat-num">' + count + '</span>' + chev +
        '</button>' +
        '<div class="cat-group" id="cg' + i + '">';

    groups.forEach(function (g, gi) {
      const gitems = g.items || [];
      const hasKids = gitems.length > 0;

      html +=
        '<div class="cat-node">' +
          '<button type="button" class="cat-btn cat-l2' + (hasKids ? '' : ' cat-leaf') + '" ' +
                  'data-name="' + esc(cat.name) + '" data-key="' + esc(CATEGORY_KEYS[cat.name]) + '" ' +
                  'data-term="' + esc(g.name) + '" data-term-ar="' + esc(SD.ar(g.name)) + '" data-level="2"' +
                  (hasKids
                    ? ' aria-expanded="false" aria-controls="cg' + i + 'g' + gi + '"'
                    : '') + '>' +
            '<span class="cat-dot" aria-hidden="true"></span>' +
            '<span class="cat-label" data-i18n-cat="' + esc(g.name) + '">' + esc(SD.tr(g.name)) + '</span>' +
            '<span class="cat-num">' + (hasKids ? gitems.length : 1) + '</span>' +
            (hasKids ? chev : '') +
          '</button>';

      if (hasKids) {
        html += '<div class="cat-items" id="cg' + i + 'g' + gi + '">';
        gitems.forEach(function (label) {
          html +=
            '<button type="button" class="cat-btn cat-l3" data-name="' + esc(cat.name) + '" ' +
                    'data-key="' + esc(CATEGORY_KEYS[cat.name]) + '" ' +
                    'data-term="' + esc(label) + '" data-term-ar="' + esc(SD.ar(label)) + '" data-level="3">' +
              '<span class="cat-label" data-i18n-cat="' + esc(label) + '">' + esc(SD.tr(label)) + '</span>' +
            '</button>';
        });
        html += '</div>';
      }

      html += '</div>';   /* close this level-2 node */
    });

    html += '</div></div>';
  });

  host.innerHTML = html + '</div>';
})();

/* ============================================================
   BEHAVIOUR
   ============================================================ */
const catSidebar = document.getElementById('catSidebar');
const catHead = document.getElementById('catHead');
const catList = document.getElementById('catList');
const catAllBtn = catSidebar ? catSidebar.querySelector('.cat-all') : null;
const catBtns = catSidebar ? catSidebar.querySelectorAll('.cat-btn') : [];

/* The term a row filters on. data-term stays English (that is what the
   card keywords are written in); in Arabic the row shows and fills the
   search box with its own Arabic label instead. */
function activeTerm(btn) {
  if (!btn) return '';
  if (btn.dataset.level === '1') return '';
  if (window.SD && SD.lang === 'ar' && btn.dataset.termAr) return btn.dataset.termAr;
  return btn.dataset.term || '';
}

function catSetActive(btn) {
  catBtns.forEach(function (b) { b.classList.remove('active'); });
  if (catAllBtn) catAllBtn.classList.toggle('active', !btn);
  if (btn) btn.classList.add('active');
}

/* every panel on the way down to this button must stay open, otherwise
   the row itself would be clipped out of view */
function catKeepIds(btn) {
  const keep = {};
  if (!btn) return keep;

  const own = btn.getAttribute('aria-controls');
  if (own) keep[own] = true;

  let node = btn.parentElement;
  while (node && node !== catSidebar) {
    if ((node.classList.contains('cat-group') || node.classList.contains('cat-items')) && node.id) {
      keep[node.id] = true;
    }
    node = node.parentElement;
  }
  return keep;
}

function catCloseGroups(except) {
  if (!catSidebar) return;
  const keep = catKeepIds(except);

  catSidebar.querySelectorAll('.cat-btn[aria-expanded]').forEach(function (b) {
    if (b === except) return;
    const panel = b.getAttribute('aria-controls');
    if (panel && keep[panel]) { b.setAttribute('aria-expanded', 'true'); return; }
    b.setAttribute('aria-expanded', 'false');
  });

  catSidebar.querySelectorAll('.cat-group, .cat-items').forEach(function (g) {
    if (!keep[g.id]) g.classList.remove('is-open');
    else g.classList.add('is-open');
  });
}

/* scroll the row the user just picked into view inside the sidebar */
function catReveal(btn) {
  if (!btn) return;
  const box = btn.getBoundingClientRect();
  const pane = btn.closest('.cat-list');
  if (!pane) return;
  const paneBox = pane.getBoundingClientRect();
  if (box.top >= paneBox.top && box.bottom <= paneBox.bottom) return;
  if (typeof pane.scrollTo === 'function') {
    pane.scrollTop += (box.top - paneBox.top) - paneBox.height * 0.25;
  }
}

if (catHead && catList) {
  catHead.addEventListener('click', function () {
    const open = catHead.getAttribute('aria-expanded') === 'true';
    catHead.setAttribute('aria-expanded', open ? 'false' : 'true');
    catList.classList.toggle('is-open', !open);
  });
}

if (catAllBtn) {
  catAllBtn.addEventListener('click', function () {
    activeFilter = 'all';
    categoryPicked = true;
    productSearch.value = '';
    catCloseGroups(null);
    catSetActive(null);
    filterProducts();
  });
}

catBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    const isActive = btn.classList.contains('active');

    /* clicking the row that is already open just folds it back up */
    if (isOpen && isActive) {
      catCloseGroups(null);
      return;
    }

    catCloseGroups(btn);

    if (btn.hasAttribute('aria-expanded')) {
      btn.setAttribute('aria-expanded', 'true');
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      if (panel) panel.classList.add('is-open');
    }

    activeFilter = btn.dataset.key || 'all';
    categoryPicked = true;
    productSearch.value = activeTerm(btn);
    catSetActive(btn);
    catReveal(btn);
    filterProducts();
  });
});

/* keep the highlight + the counter in step with the current filter */
function syncCategoryUI() {
  if (!catSidebar) return;

  const match = [].slice.call(catBtns).filter(function (b) {
    return b.dataset.key === activeFilter && activeTerm(b) === productSearch.value;
  })[0];
  catSetActive(match || null);
  catReveal(match);

  const counter = catSidebar.querySelector('[data-role="count"]');
  if (counter) {
    let shown = 0;
    productCards.forEach(function (c) {
      if (c.style.display !== 'none') shown++;
    });
    counter.textContent = shown;
  }
}

syncCategoryUI();

/* ============================================================
   LANGUAGE SWITCH  -  the sidebar is built once, so relabel it
   in place instead of rebuilding the whole accordion.
   ============================================================ */
function syncCatLabels() {
  document.querySelectorAll('[data-i18n-cat]').forEach(function (el) {
    el.textContent = SD.tr(el.getAttribute('data-i18n-cat'));
  });
}

if (window.SD) {
  window.SD.onLangChange = function () {
    syncCatLabels();
    /* the active row's search term just changed language, so refill the
       box from it before re-filtering; a typed query is left alone */
    const act = document.querySelector('.cat-btn.active');
    if (act) productSearch.value = activeTerm(act);
    filterProducts();
  };
  syncCatLabels();   /* in case the page booted straight into Arabic */
}

function showHeroSlide(index) {
            activeHeroSlide = (index + heroSlides.length) % heroSlides.length;
            heroSlides.forEach(function(slide, slideIndex) {
                slide.classList.toggle('active', slideIndex === activeHeroSlide);
            });
            heroDots.forEach(function(dot, dotIndex) {
                dot.classList.toggle('active', dotIndex === activeHeroSlide);
            });
        }

        function restartHeroTimer() {
            clearInterval(heroTimer);
            heroTimer = setInterval(function() {
                showHeroSlide(activeHeroSlide + 1);
            }, 6000);
        }

        previousHeroButton.addEventListener('click', function() {
            showHeroSlide(activeHeroSlide - 1);
            restartHeroTimer();
        });

        nextHeroButton.addEventListener('click', function() {
            showHeroSlide(activeHeroSlide + 1);
            restartHeroTimer();
        });

        heroDots.forEach(function(dot, dotIndex) {
            dot.addEventListener('click', function() {
                showHeroSlide(dotIndex);
                restartHeroTimer();
            });
        });

restartHeroTimer();
