/* ============================================================
   AI CHAT WIDGET  -  self contained, no build step
   Black + Silver theme, WhatsApp green CTA

   Store details & Gemini API key live in store-config.js
   which is loaded just before this file.
   ============================================================ */

/* the launcher + panel markup, injected so both pages share it */
(function () {
  document.body.insertAdjacentHTML('beforeend', `
<button class="dc-launcher" id="dcLauncher" aria-label="Open chat" aria-expanded="false">
  <span class="dc-pulse"></span>
  <span class="dc-dot" id="dcDot"></span>
  <img src="logo-mark-96.png" alt="" width="36" height="36">
</button>

<section class="dc-panel" id="dcPanel" role="dialog" aria-modal="false" aria-label="Chat with support">
  <header class="dc-head">
    <div class="dc-avatar" aria-hidden="true"><img src="logo-mark-96.png" alt="" width="28" height="28"></div>
    <div class="dc-head-txt">
      <p class="dc-title" id="dcTitle">speedo chat</p>
      <p class="dc-sub" id="dcSub">Typically replies instantly</p>
    </div>
    <button class="dc-head-btn" id="dcClear" title="Clear conversation" aria-label="Clear conversation">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7h12l-1 13H7L6 7Zm3-3h6l1 2H8l1-2Zm-4 2h14v2H5V6Z"/></svg>
    </button>
    <button class="dc-head-btn" id="dcClose" title="Close" aria-label="Close chat">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 10.6 5.3-5.3 1.4 1.4-5.3 5.3 5.3 5.3-1.4 1.4-5.3-5.3-5.3 5.3-1.4-1.4 5.3-5.3-5.3-5.3 1.4-1.4 5.3 5.3Z"/></svg>
    </button>
  </header>

  <div class="dc-body" id="dcBody" aria-live="polite"></div>

  <div class="dc-chips" id="dcChips"></div>

  <a class="dc-wa dc-hidden" id="dcWa" target="_blank" rel="noopener noreferrer">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.8c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 6 6 0 0 0 1.9.3 3.2 3.2 0 0 0 2.1-1.4 2.6 2.6 0 0 0 .2-1.5c-.1-.1-.2-.2-.5-.3Z"/></svg>
    <span>Chat on WhatsApp</span>
  </a>

  <p class="dc-hint">Enter to send · Shift+Enter for a new line</p>

  <form class="dc-form" id="dcForm">
    <textarea class="dc-input" id="dcInput" rows="1" placeholder="اكتب رسالتك... / Type your message..." aria-label="Message"></textarea>
    <button class="dc-send" id="dcSend" type="submit" aria-label="Send">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.4 20.4 21 12 3.4 3.6 3.4 10l12.6 2-12.6 2v6.4Z"/></svg>
    </button>
  </form>
</section>
`);
})();

/* ============================================================
   ▓▓▓  CONFIG  -  edit only this block  ▓▓▓
   ============================================================ */


/* buying intent -> reveals the WhatsApp button */
const INTENT_WORDS = ['سعر','اسعار','اشتري','اطلب','متوفر','متاح','كم','السعر','عروض','خصم',
                      'price','buy','order','cost','available','cheap','discount','quote','want to purchase'];

const $ = id => document.getElementById(id);
const el = {
  launcher:$('dcLauncher'), panel:$('dcPanel'), body:$('dcBody'), form:$('dcForm'),
  input:$('dcInput'), send:$('dcSend'), clear:$('dcClear'), close:$('dcClose'),
  chips:$('dcChips'), wa:$('dcWa'), dot:$('dcDot'), sub:$('dcSub')
};

const hasKey = () => CONFIG.API_KEY && CONFIG.API_KEY.length > 20 && !CONFIG.API_KEY.startsWith('PASTE_');
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const isRTL = s => /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(s);

/* ---------- storage ---------- */
let history = [];
try { history = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEY)) || []; } catch (e) { history = []; }
if (!Array.isArray(history)) history = [];
const save = () => { try { localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(history.slice(-40))); } catch (e) {} };

/* ---------- rendering ---------- */
function addMsg(role, text, isError){
  const wrap = document.createElement('div');
  wrap.className = 'dc-msg ' + (role === 'user' ? 'dc-user' : 'dc-bot') + (isError ? ' dc-err' : '');
  wrap.dir = isRTL(text) ? 'rtl' : 'ltr';
  // escape first, then allow a tiny safe subset of markdown
  const safe = esc(text)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/\n/g, '<br>');
  wrap.innerHTML = '<p>' + safe + '</p>';
  el.body.appendChild(wrap);
  scroll();
  return wrap;
}

function showTyping(){
  const t = document.createElement('div');
  t.className = 'dc-typing';
  t.innerHTML = '<span></span><span></span><span></span>';
  el.body.appendChild(t);
  scroll();
  return t;
}

function scroll(){ el.body.scrollTop = el.body.scrollHeight; }

function buildChips(){
  el.chips.innerHTML = '';
  CONFIG.CHIPS.forEach(c => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'dc-chip'; b.textContent = c.label;
    b.addEventListener('click', () => { el.chips.classList.add('dc-hidden'); send(c.text); });
    el.chips.appendChild(b);
  });
}

function waLink(topic){
  const msg = topic
    ? 'مرحباً، أنا مهتم بـ ' + topic + '. ممكن تفاصيل أكثر؟'
    : 'مرحباً، عندي استفسار من موقع speedo chat.';
  return 'https://wa.me/' + CONFIG.STORE.whatsapp + '?text=' + encodeURIComponent(msg);
}

function showWa(topic){
  el.wa.href = waLink(topic);
  el.wa.classList.remove('dc-hidden');
}

function renderAll(){
  el.body.innerHTML = '';
  if (!history.length){
    addMsg('bot', /[\u0600-\u06FF]/.test(navigator.language) ? CONFIG.WELCOME_AR : CONFIG.WELCOME_EN);
    el.chips.classList.remove('dc-hidden');
    buildChips();
  } else {
    history.forEach(m => addMsg(m.role, m.text));
    el.chips.classList.add('dc-hidden');
    if (history.some(m => m.role === 'user' && hasIntent(m.text))) showWa(guessTopic());
  }
  scroll();
}

function hasIntent(t){
  const s = String(t).toLowerCase();
  return INTENT_WORDS.some(w => s.includes(w));
}

/* Pick the product the user is talking about, for a clean WhatsApp hand-off */
const CATALOG = [
  { ar:'أطقم الأسنان', en:'dental prosthetics / dentures', ar2:['طقم أسنان','أطقم اسنان','الأسنان',' dentures','prosthetic'] },
  { ar:'أدوات الفحص',  en:'examination tools',      ar2:['فحص','exam','diagnostic'] },
  { ar:'مستلزمات التخدير', en:'anesthesia supplies', ar2:['تخدير','anaesthesia','anesthesia',' anesthetic'] },
  { ar:'أطقم جراحية',  en:'surgical kits',          ar2:['جراح','surgical','surgery'] },
  { ar:'أدوات التجميل', en:'cosmetic tools',         ar2:['تجميل','cosmetic','estheti'] },
  { ar:'مواد التعقيم',  en:'sterilization materials',ar2:['تعقيم','steril','disinfect'] }
];

function guessTopic(){
  const last = history.slice().reverse().find(m => m.role === 'user');
  const text = (last ? last.text : '').toLowerCase();
  if (!text) return '';

  // 1) a named product
  for (const p of CATALOG){
    if (p.ar2.some(k => text.includes(k.toLowerCase()))) return p.ar;
  }
  // 2) otherwise a short, readable slice of what they typed
  const clean = (last.text || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= 40) return clean;
  return clean.slice(0, 40).replace(/\s\S*$/, '') + '…';
}

/* ---------- API ---------- */
const SYSTEM_PROMPT = `You are the AI sales assistant for "${CONFIG.STORE.name}", a dental supplies store in ${CONFIG.STORE.location}.

STORE INFORMATION
- Name: ${CONFIG.STORE.name}
- Location: ${CONFIG.STORE.location}
- Phone: ${CONFIG.STORE.phone}
- WhatsApp: ${CONFIG.STORE.phone}
- Working hours: ${CONFIG.STORE.hours}
- Shipping: ${CONFIG.STORE.shipping}
- Email: ${CONFIG.STORE.email}

PRODUCTS AND PRICES
1. أطقم أسنان (Dental Prosthetics / Dentures) - starting from 500 EGP
2. أدوات الفحص (Examination Tools) - starting from 150 EGP
3. مستلزمات التخدير (Anesthesia Supplies) - starting from 200 EGP
4. أطقم جراحية (Surgical Kits) - starting from 1200 EGP
5. أدوات التجميل (Cosmetic Tools) - starting from 300 EGP
6. مواد التعقيم (Sterilization Materials) - starting from 250 EGP

RULES
1. Reply in the SAME language the user writes in (Arabic or English). Use Arabic if unclear.
2. Be friendly, warm, concise and sales-oriented. 2-4 short sentences unless detail is asked for.
3. Only answer questions about this store, its products, prices, hours, shipping and contact.
   For anything unrelated, politely say you can only help with store questions and offer to help with products.
4. Never invent products, discounts, offers or policies that are not listed above.
   Prices are "starting from" - always say so.
5. End every reply with a short call to action, e.g. asking if they want to order, to chat on
   WhatsApp, or to browse products. Suggest the relevant product category when it fits.
6. Use light markdown: **bold** for product names and prices, and short bullet lists for menus.
7. Keep it warm and human. Use at most one emoji per message.`;

function buildContents(){
  const turns = history.slice(-CONFIG.HISTORY_LIMIT).map(m => ({
    role: m.role === 'user' ? 'user' : 'model',
    parts: [{ text: m.text }]
  }));
  // Gemini requires the first entry to be role "user"
  while (turns.length && turns[0].role !== 'user') turns.shift();
  return turns;
}

async function callGemini(text){
  const payload = {
    system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents: buildContents().concat([{ role: 'user', parts: [{ text }] }]),
    generationConfig: { temperature: 0.7, maxOutputTokens: 800, topP: 0.95 }
  };

  let lastErr = null;
  for (const model of CONFIG.MODELS){
    const url = CONFIG.API_BASE + model + ':generateContent?key=' + encodeURIComponent(CONFIG.API_KEY);
    try {
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), 25000);
      const res = await fetch(url, {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify(payload),
        signal: ctl.signal
      });
      clearTimeout(timer);

      if (res.status === 404){ lastErr = new Error('model ' + model + ' unavailable'); continue; }
      if (res.status === 429){ lastErr = new Error('rate limit'); throw lastErr; }
      if (!res.ok){
        let d = ''; try { d = (await res.json()).error?.message || ''; } catch(e){}
        lastErr = new Error(res.status + ' ' + d);
        if (res.status === 400 || res.status === 401 || res.status === 403) throw lastErr;
        continue;
      }
      const data = await res.json();
      const out = data?.candidates?.[0]?.content?.parts?.map(p => p.text || '').join('').trim();
      if (out) return out;
      lastErr = new Error('empty response');
    } catch (e){
      if (e.name === 'AbortError') lastErr = new Error('timeout');
      else if (!lastErr) lastErr = e;
      if (e.message === 'rate limit') throw e;   // no point trying other models
    }
  }
  throw lastErr || new Error('request failed');
}

/* ---------- flow ---------- */
let busy = false;

async function send(text){
  const msg = String(text || '').trim();
  if (!msg || busy) return;

  el.chips.classList.add('dc-hidden');
  el.input.value = '';
  autosize();

  history.push({ role:'user', text: msg });
  addMsg('user', msg);
  save();

  if (hasIntent(msg)) showWa(guessTopic());

  if (!hasKey()){
    const tip = document.createElement('div');
    tip.className = 'dc-msg dc-bot dc-err';
    tip.dir = 'rtl';
    tip.innerHTML = '<p>⚠️ <b>Chatbot not configured yet.</b></p>' +
      '<p>Open the file in a text editor, find <code>API_KEY</code> at the top of the script and paste your free Gemini key from <b>aistudio.google.com/apikey</b>.</p>';
    el.body.appendChild(tip); scroll();
    return;
  }

  busy = true;
  el.send.disabled = true;
  el.sub.textContent = 'typing…';
  const typing = showTyping();

  try {
    const reply = await callGemini(msg);
    typing.remove();
    history.push({ role:'bot', text: reply });
    addMsg('bot', reply);
    save();
  } catch (e){
    typing.remove();
    const replyAr = 'معذراً، حصلت مشكلة بسيطة في الاتصال. ممكن تحاول تاني؟ أو ابعتنا على واتساب وهنرد عليك على طول.';
    const replyEn = "Sorry, something went wrong on my side. Could you try again, or message us on WhatsApp and we'll reply right away?";
    addMsg('bot', (isRTL(msg) || /[\u0600-\u06FF]/.test(navigator.language)) ? replyAr : replyEn, true);
    showWa(guessTopic());
  } finally {
    busy = false;
    el.send.disabled = false;
    el.sub.textContent = 'Typically replies instantly';
    autosize();
  }
}

/* ---------- UI ---------- */
function open(){
  el.panel.classList.add('dc-open');
  el.launcher.setAttribute('aria-expanded','true');
  el.dot.classList.add('dc-hidden');
  setTimeout(() => { if (window.innerWidth > 480) el.input.focus(); }, 280);
}
function close(){
  el.panel.classList.remove('dc-open');
  el.launcher.setAttribute('aria-expanded','false');
}

function autosize(){
  el.input.style.height = 'auto';
  el.input.style.height = Math.min(el.input.scrollHeight, 96) + 'px';
}

el.launcher.addEventListener('click', () => el.panel.classList.contains('dc-open') ? close() : open());
el.close.addEventListener('click', close);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && el.panel.classList.contains('dc-open')) close(); });

el.clear.addEventListener('click', () => {
  history = []; save();
  el.wa.classList.add('dc-hidden');
  renderAll();
});

el.form.addEventListener('submit', e => { e.preventDefault(); send(el.input.value); });

el.input.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey){ e.preventDefault(); send(el.input.value); }
});
el.input.addEventListener('input', autosize);

el.wa.addEventListener('click', () => {
  history.push({ role:'user', text:'[shared on WhatsApp]' });
  save();
});

renderAll();
