/* ============================================================
   STORE CONFIG  -  >>> EDIT THIS FILE ONLY <<<
   Shared by index.html and info.html through chat-widget.js.
   ============================================================ */

window.CONFIG = {
  // 1) Get a free key: https://aistudio.google.com/apikey
  //    IMPORTANT: in AI Studio click the key -> "Edit" -> API restrictions ->
  //    add your domain under "HTTP referrers". Unrestricted keys are
  //    rejected by Google since June 2026.
  API_KEY: 'PASTE_YOUR_GEMINI_API_KEY_HERE',

  // 2) Model list is tried in order; the first that responds wins.
  //    gemini-1.5-flash is RETIRED by Google - do not put it here.
  MODELS: ['gemini-3.5-flash-lite', 'gemini-3.8-flash', 'gemini-3.6-flash'],

  API_BASE: 'https://generativelanguage.googleapis.com/v1beta/models/',

  // 3) Your store details
  STORE: {
    name: 'speedo chat',
    location: 'Alexandria, Egypt',
    phone: '+20 104 093 1823',
    whatsapp: '201040931823',          // digits only, no +
    hours: 'Saturday to Thursday, 10 AM - 9 PM',
    shipping: 'All of Egypt, 2-4 days',
    email: 'info@dentalstore.com'
  },

  WELCOME_AR: 'أهلاً 👋 أنا مساعد speedo chat الذكي. كيف أقدر أساعدك النهاردة؟',
  WELCOME_EN: "Hello 👋 I'm the speedo chat assistant. How can I help you today?",

  CHIPS: [
    { label: 'المنتجات',  text: 'عايز أعرف المنتجات المتاحة' },
    { label: 'الأسعار',    text: 'أسعار المنتجات كام؟' },
    { label: 'الشحن',      text: 'الشحن بياخد قد إيه وبكام؟' },
    { label: 'تواصل معنا', text: 'عايز أتواصل معكم' }
  ],

  HISTORY_LIMIT: 10,                   // messages kept for context
  STORAGE_KEY: 'speedo_chat_history'
};
