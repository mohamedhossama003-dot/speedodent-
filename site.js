/* ============================================================
   SHARED SITE SCRIPT  -  index.html + info.html
   Navigation, "Ways to Pay" and "Follow Us".
   ============================================================ */

const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('#menuToggle');

/* ============================================================
           SOCIAL LINKS  -  >>> FILL YOUR REAL ACCOUNTS IN HERE <<<

           Just replace the url / handle values below. Both the
           "Follow Us" section and the footer icons are generated
           from this one list, so this is the only place to edit.

           Set a url to '' to hide that platform completely.
           Any url still containing "your-..." is shown with a
           dashed border so you can spot what is not filled in yet.
           ============================================================ */
        const SOCIAL_LINKS = [
            { id: 'facebook',  name: 'Facebook',  handle: '@your-page',   url: 'https://facebook.com/your-page' },
            { id: 'instagram', name: 'Instagram', handle: '@your-handle',  url: 'https://instagram.com/your-handle' },
            { id: 'telegram',  name: 'Telegram',  handle: '@yourchannel',  url: 'https://t.me/yourchannel' },
            { id: 'snapchat',  name: 'Snapchat',  handle: '@yourhandle',  url: 'https://snapchat.com/add/yourhandle' },
            { id: 'tiktok',    name: 'TikTok',    handle: '@yourhandle',  url: 'https://tiktok.com/@yourhandle' }
        ];

        const SOCIAL_ICONS = {
            facebook: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>',
            instagram: '<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"/>',
            telegram: '<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>',
            snapchat: '<path d="M12 1.8C8.75 1.8 5.9 4.65 5.9 8.1c0 1.7.3 2.8.3 4.2 0 1.4-.7 2.1-1.6 2.1-.5 0-.9-.4-1.6-.4-.9 0-1.6.8-1.6 1.7 0 .9.6 1.4 1.3 1.9.8.6 1.2 1.4 1.2 2.5 0 1.5 1.3 2.6 3.2 2.6 1.2 0 2-.3 3-.3.7 0 1.2.3 1.9.3.7 0 1.2-.3 1.9-.3 1.9 0 3.2-1.1 3.2-2.6 0-1.1.4-1.9 1.2-2.5.7-.5 1.3-1 1.3-1.9 0-.9-.7-1.7-1.6-1.7-.7 0-1.1.4-1.6.4-.9 0-1.6-.7-1.6-2.1 0-1.4.3-2.5.3-4.2C18.1 4.65 15.25 1.8 12 1.8z"/>',
            tiktok: '<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>'
        };

        /* ============================================================
           PAYMENT METHODS  -  add, remove or reorder freely.
           Each id must have a matching entry in PAYMENT_ICONS below.
           The "Ways to Pay" section and the footer badges are both
           generated from this one list.
           ============================================================ */
        const PAYMENT_METHODS = [
            { id: 'instapay', name: 'InstaPay',      note: 'Bank transfer or wallet' },
            { id: 'vodafone', name: 'Vodafone Cash', note: 'From your Vodafone line' },
            { id: 'paypal',   name: 'PayPal',        note: 'Card or PayPal balance' },
            { id: 'visa',     name: 'Visa',          note: 'Credit / debit card' },
            { id: 'cash',     name: 'Cash',          note: 'Pay on delivery' }
        ];

        const PAYMENT_ICONS = {
            /* InstaPay - phone with a transfer arrow */
            instapay: '<rect x="6" y="2" width="12" height="20" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 6.5v6.2M9.4 10.6 12 13.2l2.6-2.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 17h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
            /* Vodafone Cash - the speech-mark bubble */
            vodafone: '<path d="M12 2.4c5.2 0 9.4 3.7 9.4 8.3s-4.2 8.3-9.4 8.3c-.9 0-1.8-.11-2.6-.32L4 21.4l1.6-4.1C3.5 15.9 2.6 13.5 2.6 10.7 2.6 6.1 6.8 2.4 12 2.4z" fill="currentColor"/><path d="M8.4 10.4c1.4-1.5 3.2-2.2 5.1-2.1" fill="none" stroke="#0a0a0a" stroke-width="1.5" stroke-linecap="round" opacity=".55"/><path d="M8.4 13.6c1.4 1.5 3.2 2.2 5.1 2.1" fill="none" stroke="#0a0a0a" stroke-width="1.5" stroke-linecap="round" opacity=".55"/>',
            /* PayPal - the two overlapping Ps */
            paypal: '<g fill-rule="evenodd"><path d="M4 1.5h5.3a3.2 3.2 0 0 1 0 6.4H7.1v9.6H4zM7.1 3.5v2.4h1.7a1.2 1.2 0 0 0 0-2.4z" fill="#003087"/><path d="M11 4.5h5.3a3.2 3.2 0 0 1 0 6.4h-2.2v9.6H11zM14.1 6.5v2.4h1.7a1.2 1.2 0 0 0 0-2.4z" fill="#009cde"/></g>',
            /* Visa - the wordmark over the gold swoosh */
            visa: '<text x="12" y="16.2" text-anchor="middle" textLength="20" lengthAdjust="spacingAndGlyphs" font-family="Arial,Helvetica,sans-serif" font-size="10.5" font-weight="900" fill="currentColor">VISA</text><path d="M3.6 19.6c3.4-1.5 13.4-1.5 16.8 0" fill="none" stroke="#f7b600" stroke-width="1.6" stroke-linecap="round"/>',
            /* Cash - a fanned pair of notes */
            cash: '<rect x="2.4" y="6.6" width="14.2" height="10.2" rx="1.6" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="9.5" cy="11.7" r="2.3" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M5.6 8.9h.01M13.4 14.4h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="16.6" y="9.4" width="5" height="9.8" rx="1.4" fill="none" stroke="currentColor" stroke-width="1.7" opacity=".7"/>'
        };

        function renderPaymentMethods() {
            const grid = document.getElementById('paymentGrid');
            const foot = document.getElementById('payFoot');
            if (!grid && !foot) return;   /* a page may have only one of the two */

            PAYMENT_METHODS.forEach(function (method) {
                if (!PAYMENT_ICONS[method.id]) return;

                const svg = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                            PAYMENT_ICONS[method.id] + '</svg>';

                const card = document.createElement('div');
                card.className = 'pay-card';
                card.innerHTML =
                    '<span class="pay-ico p-' + method.id + '">' + svg + '</span>' +
                    '<span class="pay-name">' + method.name + '</span>' +
                    '<span class="pay-note">' + method.note + '</span>';
                if (grid) grid.appendChild(card);

                const link = document.createElement('div');
                link.className = 'pay-foot-link p-' + method.id;
                link.setAttribute('role', 'img');
                link.setAttribute('aria-label', method.name + ' accepted');
                link.innerHTML = svg + '<span>' + method.name + '</span>';
                if (foot) foot.appendChild(link);
            });
        }

        function renderSocialLinks() {
            const grid = document.getElementById('socialGrid');
            const foot = document.getElementById('socialFoot');
            if (!grid && !foot) return;   /* a page may have only one of the two */

            SOCIAL_LINKS.forEach(function (social) {
                if (!social.url || !SOCIAL_ICONS[social.id]) return;

                // a url the owner has not replaced yet -> dashed border
                const empty = /your[-_]?(page|handle|channel)/i.test(social.url);
                const label = social.name + (empty ? ' (link not set yet)' : '');
                const svg = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
                            SOCIAL_ICONS[social.id] + '</svg>';

                const card = document.createElement('a');
                card.className = 'social-card';
                card.href = social.url;
                card.target = '_blank';
                card.rel = 'noopener noreferrer';
                card.setAttribute('aria-label', label);
                if (empty) card.dataset.empty = '1';
                card.innerHTML =
                    '<span class="social-ico s-' + social.id + '">' + svg + '</span>' +
                    '<span class="social-name">' + social.name + '</span>' +
                    '<span class="social-handle">' + social.handle + '</span>';
                if (grid) grid.appendChild(card);

                const link = document.createElement('a');
                link.className = 'social-foot-link';
                link.href = social.url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.setAttribute('aria-label', label);
                if (empty) link.dataset.empty = '1';
                link.innerHTML = svg;
                if (foot) foot.appendChild(link);
            });
        }

menuToggle.addEventListener('click', function() {
            const isOpen = navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        });

renderPaymentMethods();
        renderSocialLinks();

// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    document.querySelector('.nav-links').classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.setAttribute('aria-label', 'Open menu');
                }
            });
        });
