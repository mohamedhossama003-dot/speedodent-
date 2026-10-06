/* ============================================================
   I18N  -  English (default) + Arabic        [index.html + info.html]

   English is the source language and the default. Arabic is only
   applied when the visitor presses the EN / ع button, and the
   choice is remembered in localStorage("sd_lang").

   Load this file BEFORE site.js and home.js so that everything
   the other scripts render already knows the active language.

   Exposed globally as:
       SD.t(key)      -> UI string for the current language
       SD.tr(english) -> sidebar/category label for the current language
       SD.lang        -> 'en' | 'ar'
       SD.setLang(x)  -> switch language
       SD.onLangChange-> set by home.js, called after a switch
   ============================================================ */
(function () {
    'use strict';

    var STORE_KEY = 'sd_lang';

    /* ============================================================
       ENGLISH  -  source / default
       ============================================================ */
    var EN = {
        /* navigation */
        'nav.home':        'Home',
        'nav.products':    'Products',
        'nav.info':        'Info',
        'nav.menu.open':   'Open menu',
        'nav.menu.close':  'Close menu',
        'nav.lang':        'Language',

        /* search */
        'search.label':    'Product search',
        'search.input':    'Search products',
        'search.ph':       'Search products...',
        'search.submit':   'Search',

        /* hero */
        'hero.title':      'Speedo <span>for Premium Quality</span>',
        'hero.lead':       'Your choice for premium quality and professionally designed details',
        'hero.cta1':       'Explore Products',
        'hero.cta2':       'Contact Us',

        /* products */
        'products.title':  'Our Products',
        'products.more':   'Discover More',
        'products.none':   'No products found.',
        'products.aria':   'Product categories',

        /* sidebar */
        'cat.title':       'Categories',
        'cat.all':         'All Categories',

        /* info banner */
        'info.crumb':      'Speedo Dent',
        'info.title':      'Information',
        'info.lead':       'Everything about the store in one place — who we are, how you can pay, how to reach us and where to follow us.',
        'info.jump':       'Jump to a section',
        'info.lead.html':  'Everything about the store in one place — who we are, how you can pay, how to reach us and where to follow us.',

        /* sections */
        's.contact':       'Contact Us',
        's.about':         'About Us',
        's.payment':       'Ways to Pay',
        's.social':        'Follow Us',

        'about.text':      'We specialize in premium dental products that meet the highest international quality standards. For more than 10 years, we have served dentists and clinics across Egypt with reliable service and responsive order support.',
        'payment.lead':    'Pick whatever is easiest for you — send the payment confirmation on WhatsApp and we will process your order right away.',
        'social.lead':     'Reach us on whichever channel you use most — we usually reply within a few hours.',

        /* contact card */
        'c.phone':         'Phone',
        'c.whatsapp':      'WhatsApp',
        'c.location':      'Location',
        'c.email':         'Email',
        'c.hours':         'Hours',
        'c.shipping':      'Shipping',
        'c.lead':          'Fastest way to reach us is WhatsApp — send us what you need and we will answer with price and availability.',
        'c.chat':          'Chat on WhatsApp',
        'c.call':          '\uD83D\uDCDE Call us',
        'c.browse':        'Browse Products \u2192',

        /* payment notes */
        'p.instapay':      'Bank transfer or wallet',
        'p.vodafone':      'From your Vodafone line',
        'p.paypal':        'Card or PayPal balance',
        'p.visa':          'Credit / debit card',
        'p.cash':          'Pay on delivery',
        'p.accepted':      '{n} accepted',

        /* social */
        's.notSet':        ' (link not set yet)',

        /* footer */
        'footer.rights':   '\u00A9 2025 Speedo Dent - All rights reserved',

        /* aria */
        'aria.wa':         'Contact us on WhatsApp',
        'aria.home':       'Speedo Dent - home',

        /* product cards */
        'p.restorative.t': 'Restorative',
        'p.restorative.d': 'Composite, amalgam, glass ionomer, liners, matrices, etching and bonding, caries detectors, temporary fillings, burs and crown forms.',
        'p.endodontics.t': 'Endodontics',
        'p.endodontics.d': 'Manual and rotary files, gutta percha, sealers, endo motors, apex locators, irrigation and obturation systems.',
        'p.orthodontics.t':'Orthodontics',
        'p.orthodontics.d':'Bracket systems, wires, bands, adhesives, buccal tubes, elastics and orthodontic pliers.',
        'p.implant.t':     'Implant',
        'p.implant.d':     'Dental implants, prosthetic parts, surgical kits, surgical burs and implant micro-motors.',
        'p.prosthetics.t': 'Prosthetics',
        'p.prosthetics.d': 'Impression materials, permanent and temporary cements, crowns, posts, articulators, shade guides and surveyors.',
        'p.perio.t':       'Perio & Surgery',
        'p.perio.d':       'Scalpels and blades, sutures, haemostatic agents, perio packs, extraction forceps, elevators and surgical burs.',
        'p.hygiene.t':     'Hygiene & Prevention',
        'p.hygiene.d':     'Sterilization systems, X-ray units, turbines, lasers, cameras, ultrasonic scalers, anesthesia and preventive care.',
        'p.rest.img':      'Composite restorative product',
    };

    /* ============================================================
       ARABIC  -  only used after the visitor presses the ع button
       ============================================================ */
    var AR = {
        /* navigation */
        'nav.home':        'الرئيسية',
        'nav.products':    'المنتجات',
        'nav.info':        'معلومات',
        'nav.menu.open':   'فتح القائمة',
        'nav.menu.close':  'إغلاق القائمة',
        'nav.lang':        'اللغة',

        /* search */
        'search.label':    'البحث عن المنتجات',
        'search.input':    'ابحث عن المنتجات',
        'search.ph':       'ابحث عن المنتجات...',
        'search.submit':   'بحث',

        /* hero */
        'hero.title':      'Speedo <span>لأجود جودة</span>',
        'hero.lead':       'اختيارك لأجود جودة وتفاصيل مصممة باحتراف',
        'hero.cta1':       'استكشف المنتجات',
        'hero.cta2':       'تواصل معنا',

        /* products */
        'products.title':  'منتجاتنا',
        'products.more':   'اكتشف المزيد',
        'products.none':   'لا توجد منتجات.',
        'products.aria':   'أقسام المنتجات',

        /* sidebar */
        'cat.title':       'الأقسام',
        'cat.all':         'كل الأقسام',

        /* info banner */
        'info.crumb':      'Speedo Dent',
        'info.title':      'معلومات',
        'info.lead':       'كل ما يخص المتجر في مكان واحد — من نحن، كيف يمكنك الدفع، كيف تصل إلينا، وأين تتابعنا.',
        'info.jump':       'انتقل إلى قسم',
        'info.lead.html':  'كل ما يخص المتجر في مكان واحد — من نحن، كيف يمكنك الدفع، كيف تصل إلينا، وأين تتابعنا.',

        /* sections */
        's.contact':       'تواصل معنا',
        's.about':         'من نحن',
        's.payment':       'طرق الدفع',
        's.social':        'تابعنا',

        'about.text':      'نتخصص في منتجات الأسنان عالية الجودة التي تلبي أعلى المعايير الدولية. لأكثر من عشر سنوات ونحن نخدم أطباء الأسنان والعيادات في مختلف محافظات مصر بخدمة موثوقية ودعم سريع للطلبات.',
        'payment.lead':    'اختر الطريقة الأنسب لك — أرسل تأكيد الدفع على واتساب وسنجهز طلبك على الفور.',
        'social.lead':     'تواصل معنا على القناة التي تفضلها — نرد عادة خلال ساعات قليلة.',

        /* contact card */
        'c.phone':         'الهاتف',
        'c.whatsapp':      'واتساب',
        'c.location':      'الموقع',
        'c.email':         'البريد الإلكتروني',
        'c.hours':         'مواعيد العمل',
        'c.shipping':      'الشحن',
        'c.lead':          'أسرع طريقة للتواصل معنا هي واتساب — أرسل لنا ما تحتاجه ونرد عليك بالسعر والتوفر.',
        'c.chat':          'راسلنا على واتساب',
        'c.call':          '\uD83D\uDCDE اتصل بنا',
        'c.browse':        'تصفّح المنتجات \u2192',

        /* payment notes */
        'p.instapay':      'تحويل بنكي أو محفظة',
        'p.vodafone':      'من خط فودافون الخاص بك',
        'p.paypal':        'بطاقة أو رصيد باي بال',
        'p.visa':          'بطاقة ائتمان أو خصم',
        'p.cash':          'الدفع عند الاستلام',
        'p.accepted':      'وسيلة دفع: {n}',

        /* social */
        's.notSet':        ' (اللينك لسه مش متضاف)',

        /* footer */
        'footer.rights':   '\u00A9 2025 Speedo Dent - جميع الحقوق محفوظة',

        /* aria */
        'aria.wa':         'تواصل معنا على واتساب',
        'aria.home':       'Speedo Dent - الرئيسية',

        /* product cards */
        'p.restorative.t': 'الترميمي',
        'p.restorative.d': 'الكمبوزيت والأمالجام والجلاس أيونومر والطبقات العازلة والقوالب والحموضة والتثبيت وكاشفات التسوس والحشوات المؤقتة والبورات وأشكال التيجان.',
        'p.endodontics.t': 'علاج الجذور',
        'p.endodontics.d': 'ملفات يدوية ودورانية وجوتا بيرشا ومعالجات ومحركات وأجهزة تحديد نهايات الجذور وأنظمة الغسيل والحشو.',
        'p.orthodontics.t':'تقويم الأسنان',
        'p.orthodontics.d':'أنظمة تقويم وأسلاك وحزوم ومثبتات وأنابيب باكال ومطاطيات وكماشات التقويم.',
        'p.implant.t':     'الزرعات',
        'p.implant.d':     'زرعات أسنان وأجزاء تركيبية وأطقم جراحة وبورات جراحية ومحركات مصغرة للزراعة.',
        'p.prosthetics.t': 'التركيبات',
        'p.prosthetics.d': 'مواد طبع وأسمنت دائم ومؤقت وتيجان وجذور ومفصلات ودليل ألوان وأجهزة قياس.',
        'p.perio.t':       'اللثة والجراحة',
        'p.perio.d':       'سكاكين وشفرات وغرز وموانع نزيف وضمادات لثوية وكماشات خلع ورافعات وبورات جراحية.',
        'p.hygiene.t':     'النظافة والوقاية',
        'p.hygiene.d':     'أنظمة تعقيم وأجهزة أشعة وتوربينات وليزر وكاميرات وجرافات فوق صوتية وتخدير ورعاية وقائية.',
        'p.rest.img':      'منتج كمبوزيت ترميمي',
    };

    /* ============================================================
       CATEGORY SIDEBAR  -  English source label -> Arabic label
       Only the DISPLAYED label changes. data-key / data-term stay
       English so filtering never breaks.
       ============================================================ */
    var AR_CAT = {
        /* ---- level 1 ---- */
        'Restorative': 'الترميمي',
        'Endodontics': 'علاج الجذور',
        'Orthodontics': 'تقويم الأسنان',
        'Implant': 'الزرعات',
        'Prosthetics': 'التركيبات',
        'Perio & Surgery': 'اللثة والجراحة',
        'Hygiene & Prevention': 'النظافة والوقاية',
        'Oral Hygiene': 'نظافة الفم',
        'Dental LAB': 'معمل الأسنان',
        'Dermatology': 'الجلدية والتجميل',
        'Medical': 'مستلزمات طبية',
        'Cleaning': 'التنظيف',

        /* ---- level 2 ---- */
        'Consumables': 'مستهلكات',
        'Instrument': 'أدوات',
        'Instruments': 'أدوات',
        'Equipment': 'أجهزة',
        'Miscellaneous': 'متنوعات',
        'Anesthesia': 'تخدير',
        'CAD/CAM & 3D Printing': 'CAD/CAM والطباعة ثلاثية الأبعاد',
        'Injectables': 'حقن',
        'Skincare Products': 'منتجات العناية بالبشرة',
        'Aesthetic Devices & Tools': 'أجهزة وأدوات تجميلية',
        'Hair Treatments': 'علاجات الشعر',
        'Lip & Eye Care': 'العناية بالشفاه والعينين',
        'Body Contouring': 'نحت الجسم',
        'Cosmotics': 'مستحضرات تجميل',
        'Medical Supplies': 'مستلزمات طبية',
        'Neuro': 'الأعصاب',
        'Cleaning and Sanitization': 'التنظيف والتعقيم',

        /* ---- Restorative ---- */
        'Composite': 'الكمبوزيت',
        'Amalgam': 'الأمالجام',
        'Glass Ionomer & Cements': 'الجلاس أيونومر والأسمنت',
        'Base Liners': 'الطبقات العازلة',
        'Matrix materials & wedges': 'مواد القوالب والسنابل',
        'Isolation Materials': 'مواد العزل',
        'Finishing & Polishing': 'التشطيب والتلميع',
        'Acid Etch & Bonding Agents': 'الحموضة ومثبتات الترابط',
        'Bleaching Kits': 'أدوات التبييض',
        'Caries Detectors': 'كاشفات التسوس',
        'Temporary Fillings': 'الحشوات المؤقتة',
        'Dental Burs': 'بورات الأسنان',
        'Crown Forms': 'أشكال التيجان',
        'Membrane & Dressing': 'الأغشية والضمادات',
        'Composite Instruments': 'أدوات الكمبوزيت',
        'Glass Ionomer Instruments': 'أدوات الجلاس أيونومر',
        'Amalgam Instruments': 'أدوات الأمالجام',
        'Matrix Holder': 'ماسك القالب',
        'Amalgamators': 'خالطات الأمالجام',
        'Light Cure Units': 'أجهزة التثبيت بالضوء',
        'Light Cure Accessories': 'ملحقات التثبيت بالضوء',

        /* ---- Endodontics ---- */
        'Manual Files': 'الملفات اليدوية',
        'Paper Points': 'النقاط الورقية',
        'Gutta Percha': 'جوتا بيرشا',
        'Gates Glidden & Pesso Reamer': 'ملفات جيتس جليدن وبسو',
        'Sealers': 'معالجات الأنبوبة',
        'Endo Accessories': 'ملحقات علاج الجذور',
        'Rotary Files': 'الملفات الدورانية',
        'Vitality Testers': 'أجهزة حيوية العصب',
        'Medication & Irrigation': 'الدواء والغسيل',
        'Barbed Broach': 'البروش المشوك',
        'Regenerative Cements': 'الأسمنت التجديدي',
        'Spreaders & Pluggers': 'أدوات النشر والحشو',
        'Endodontic Burs': 'بورات علاج الجذور',
        'Paste Carriers': 'حاملات المعجون',
        'Endomotors': 'محركات علاج الجذور',
        'Apex Locator': 'جهاز تحديد نهايات الجذور',
        'Endodontic Handpieces': 'المثاقب الخاصة بعلاج الجذور',
        'Obturation Systems': 'أنظمة حشو الجذور',
        'Irrigation System': 'نظام الغسيل',
        'Gutta Percha Cutter': 'قاطع جوتا بيرشا',
        'MAP System': 'نظام MAP',

        /* ---- Orthodontics ---- */
        'Bracket Systems': 'أنظمة التثبيت',
        'Adhesives': 'المثبتات اللاصقة',
        'Wires & Expansion screws': 'الأسلاك وبراغي التوسيع',
        'Bands': 'الحزوم المعدنية',
        'Elastic O-Ties & Ligatures': 'الرباط المطاطي والربطات',
        'Buttons & Cleats': 'الأزرار والمثبتات',
        'Buccal Tubes': 'الأنابيب الباكال',
        'Cheek Retractors': 'مبادد الخد',
        'Alginate': 'الألجينات',
        'Bracket Holders': 'ماسكات التثبيت',
        'Band Seaters': 'داعمات الحزوم',
        'Pliers': 'الكماشات',
        'Cutters': 'القواطع',
        'Force Gauges': 'مقاييس القوة',

        /* ---- Implant ---- */
        'Dental Implants': 'زرعات الأسنان',
        'Prosthetic Parts': 'الأجزاء التركيبية',
        'Surgical Kits': 'أطقم الجراحة',
        'Burs & Drills': 'البورات وأدوات الحفر',
        'UltraSonic Surgery': 'الجراحة فوق الصوتية',
        'Implant Micro-Motors': 'المحركات المصغرة للزراعة',

        /* ---- Prosthetics ---- */
        'Impression Materials & Accessories': 'مواد الطبع وملحقاتها',
        'Permanent Cements': 'الأسمنت الدائم',
        'Temporary Cements': 'الأسمنت المؤقت',
        'Temporary Crown': 'التاج المؤقت',
        'Crowns, Bands & shells': 'التيجان والحزوم والأصداف',
        'Posts & Drills': 'الجذور وأدوات الحفر',
        'Core Build Up Materials': 'مواد بناء الجذر',
        'Burs & Stones': 'البورات والأحجار',
        'Softliner': 'الطبقة الناعمة',
        'Gingival Retractors': 'مبادد اللثة',
        'Occlusal Adjustment Materials': 'مواد تعديل الإطباق',
        'Acrylic Teeth & Cast': 'الأسنان الأكريليك والسبائك',
        'Handpiece Oil': 'زيت المثقب',
        'Articulators': 'المفصلات',
        'Articulator Accessories': 'ملحقات المفصلات',
        'Mixing Guns': 'ماسكات الخلط',
        'Shade Guide': 'دليل الألوان',
        'Surveyor': 'جهاز القياس',
        'Face-bow': 'قوس الوجه',
        'Mixing Gun': 'ماسك الخلط',
        'Impression Instruments': 'أدوات الطبع',
        'Crown Remover': 'مزيل التيجان',
        'Mixing Bowls': 'أوعية الخلط',
        'Packers': 'أدوات الضغط',
        'Caliber': 'الأداة القياسية',
        'Calibers': 'أدوات القياس',

        /* ---- Perio & Surgery ---- */
        'General Consumables': 'المستهلكات العامة',
        'Protection & Disinfection': 'الحماية والتعقيم',
        'Napkins, Cups, Gauze & Cotton': 'المناديل والأكواب والشاش والقطن',
        'X-Ray Film & Materials': 'أفلام وأدوية الأشعة',
        'Disposables': 'الأدوات المستهلكة',
        'Scalpels & Surgical Blades': 'السكاكين والشفرات الجراحية',
        'Membrane & Bone grafts': 'الأغشية والزرعات العظمية',
        'Medications': 'الأدوية',
        'Sutures & Needles': 'الغرز والإبر',
        'Haemostatic agents': 'موانع النزيف',
        'Perio packs': 'الضمادات اللثوية',
        'Cleaning & Polishing': 'التنظيف والتلميع',
        'Scissors & Tissue forceps': 'المقصات وكماشات الأنسجة',
        'Extraction Forceps': 'كماشات الخلع',
        'Elevators & Retractors': 'الرافعات والمبادد',
        'Surgical Burs': 'البورات الجراحية',
        'Perio probes, scalers & Curettes': 'المسبار والجرافات والملعقات اللثوية',
        'Bone files & Surgical Curettes': 'المبارد العظمية والملعقات الجراحية',
        'Mallets & Osteotomes': 'المطارق وأدوات التفريغ العظمي',
        'Micro-surgical Instruments': 'أدوات الجراحة الدقيقة',
        'UltraSonic Tips': 'الرؤوس فوق الصوتية',
        'Disposable Prophy Cups & Brushes': 'أكواب وفرشاة التلميع المستهلكة',
        'Surgical Blades': 'الشفرات الجراحية',
        'Scalpel Handle': 'مقبض السكين',

        /* ---- Hygiene & Prevention ---- */
        'General Instrument': 'الأدوات العامة',
        'Disinfectants for instrument': 'معقمات الأدوات',
        'Sterilization Systems': 'أنظمة التعقيم',
        'x-Ray': 'جهاز الأشعة',
        'Microscopes': 'المجاهر',
        'Turbines & Micromotors': 'التوربينات والمحركات المصغرة',
        'Handpieces': 'المثاقب',
        'Loupes & Head Lamps': 'العدسات المكبرة ولمبات الرأس',
        'Lasers': 'الليزر',
        'Soft Tissue Lasers': 'ليزر الأنسجة الرخوة',
        'Intraoral Cameras': 'الكاميرات داخل الفم',
        'Compressors': 'الضواغط',
        'Bleaching Systems': 'أنظمة التبييض',
        'Ultrasonic Scaler & Polisher': 'الجراف والمبرد فوق الصوتي',
        'Units & Accessories': 'الوحدات والملحقات',
        'Dental Units': 'وحدات الأسنان',
        'Dental Unit Accessories': 'ملحقات وحدة الأسنان',
        'Needles': 'الإبر',
        'Topical': 'الموضعي',
        'Water Flossers': 'مزيلات الجير بالماء',
        'Preventive Products': 'المنتجات الوقائية',
        'Tooth Polishing': 'تلميع الأسنان',

        /* ---- Dental LAB ---- */
        'Lab consumables': 'مستهلكات المعامل',
        'CAD CAM Materials': 'مواد CAD/CAM',
        'Wax': 'الشمع',
        'Ceramics & Zirconia': 'الخزف والزيركونيا',
        'Cast Alloy': 'السبائك المسبقة',
        'Gauge Tips': 'رؤوس القياس',
        'Waxing Instrument': 'أدوات الشمع',
        'Knives & Carvers': 'السكاكين والمنحوتات',

        /* ---- Dermatology ---- */
        'Dermal Fillers': 'فيلر البشرة',
        'Botulinum Toxin (Botox)': 'البوتولينوم (بوتوكس)',
        'Skin Boosters': 'منشطات البشرة',
        'Skin Booster': 'منشط البشرة',
        'Mesotherapy': 'الميزوثيرابي',
        'PRP Kits': 'أطقم PRP',
        'Peeling': 'التقشير',
        'Exosome': 'الإكزوسوم',
        'Serums': 'السيرومات',
        'Moisturizers': 'المرطبات',
        'Anti-aging Creams': 'كريمات مكافحة الشيخوخة',
        'Brightening / Whitening Products': 'منتجات الإشراق والتفتيح',
        'Acne Treatments': 'علاجات حب الشباب',
        'Sunscreens': 'الواقيات الشمسية',
        'Cleansers': 'المنظفات',
        'Microneedling Pens / Derma Pens': 'أقلام المايكرونيدلينج والديرما',
        'RF Devices': 'أجهزة RF',
        'LED Masks': 'أقنعة LED',
        'IPL & Laser Devices': 'أجهزة IPL والليزر',
        'Hair Mesotherapy': 'ميزوثيرابي الشعر',
        'Hair Growth Serums': 'سيرومات نمو الشعر',
        'Scalp Treatments': 'علاجات فروة الرأس',
        'Lip Fillers': 'فيلر الشفاه',
        'Eye Serums / Fillers': 'سيرومات وفيلر العين',
        'Dark Circle Treatments': 'علاجات الهالات السوداء',
        'Fat Dissolvers': 'مذيبات الدهون',
        'Cellulite Treatments': 'علاجات السيلولايت',
        'Firming Creams': 'كريمات الشد',
        'Cold Peel': 'التقشير البارد',
        'Stem Cells': 'الخلايا الجذعية',

        /* ---- Medical ---- */
        'Wires': 'الأسلاك',
        'Micro Guidewires': 'أسلاك الدليل الدقيقة',
        'Catheters': 'القسطرات',
        'Microcatheters': 'القسطرات الدقيقة',
        'Stents': 'الدعامات',
        'Flow Diverters': 'مشتتات التدفق'
    };

    /* ============================================================
       LANGUAGE STATE
       ============================================================ */
    var lang = (document.documentElement.lang === 'ar') ? 'ar' : 'en';

    function has(map, key) {
        return Object.prototype.hasOwnProperty.call(map, key);
    }

    function t(key) {
        if (lang === 'ar' && has(AR, key)) return AR[key];
        if (has(EN, key)) return EN[key];
        if (lang === 'ar' && has(AR_CAT, key)) return AR_CAT[key];
        return key;
    }

    /* sidebar / category label: pass the English source, get it back
       unchanged when the site is in English */
    function tr(en) {
        if (lang === 'ar' && has(AR_CAT, en)) return AR_CAT[en];
        return en;
    }

    /* always the Arabic label, whatever the current language - used for
       values that must survive a language switch (data-term-ar) */
    function ar(en) {
        return has(AR_CAT, en) ? AR_CAT[en] : en;
    }

    /* ============================================================
       STATIC HTML  -  everything carrying data-i18n*
       ============================================================ */
    function applyStatic() {
        var i, els, parts, j, pair, colon;

        els = document.querySelectorAll('[data-i18n]');
        for (i = 0; i < els.length; i++) {
            els[i].textContent = t(els[i].getAttribute('data-i18n'));
        }

        els = document.querySelectorAll('[data-i18n-html]');
        for (i = 0; i < els.length; i++) {
            els[i].innerHTML = t(els[i].getAttribute('data-i18n-html'));
        }

        els = document.querySelectorAll('[data-i18n-attr]');
        for (i = 0; i < els.length; i++) {
            parts = els[i].getAttribute('data-i18n-attr').split(',');
            for (j = 0; j < parts.length; j++) {
                pair = parts[j].trim();
                colon = pair.indexOf(':');
                if (colon > 0) {
                    els[i].setAttribute(pair.slice(0, colon).trim(),
                                        t(pair.slice(colon + 1).trim()));
                }
            }
        }
    }

    /* ============================================================
       THE EN / ع BUTTON
       ============================================================ */
    function paintToggle() {
        var btns = document.querySelectorAll('.lang-switch [data-lang]');
        for (var i = 0; i < btns.length; i++) {
            var on = btns[i].getAttribute('data-lang') === lang;
            btns[i].classList.toggle('on', on);
            btns[i].setAttribute('aria-pressed', on ? 'true' : 'false');
        }
    }

    function setLang(next) {
        if (next !== 'ar' && next !== 'en') return;
        if (next === lang) return;

        lang = next;
        window.SD.lang = lang;

        try { window.localStorage.setItem(STORE_KEY, lang); } catch (e) { /* private mode */ }

        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

        applyStatic();
        paintToggle();

        /* re-render everything the other scripts build */
        if (typeof renderContact === 'function') renderContact();
        if (typeof syncWhatsAppButton === 'function') syncWhatsAppButton();
        if (typeof renderPaymentMethods === 'function') renderPaymentMethods();
        if (typeof renderSocialLinks === 'function') renderSocialLinks();
        if (typeof window.SD.onLangChange === 'function') window.SD.onLangChange();

        document.dispatchEvent(new CustomEvent('sd:langchange', { detail: { lang: lang } }));
    }

    document.addEventListener('click', function (event) {
        var node = event.target;
        if (!node || typeof node.closest !== 'function') return;
        var btn = node.closest('.lang-switch [data-lang]');
        if (btn) setLang(btn.getAttribute('data-lang'));
    });

    /* ============================================================
       BOOT
       ============================================================ */
    window.SD = window.SD || {};
    window.SD.lang = lang;
    window.SD.t = t;
    window.SD.tr = tr;
    window.SD.ar = ar;
    window.SD.setLang = setLang;
    window.SD.onLangChange = null;

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    applyStatic();
    paintToggle();
}());
