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
        'nav.theme.light': 'Switch to light theme',
        'nav.theme.dark':  'Switch to dark theme',

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
        'g.composite':     'Composite',
        'g.hint':          'Photo and name for each product — press "Know more" for the full details.',
        'g.comp.title':    'Composite photos',
        'prod.order':      'Order on WhatsApp',
        'comp.more':       'Know more',
        'comp.less':       'Show less',

        /* --- EZ-Shine Composite Polishing Paste (featured in the gallery) --- */
        'sh.title':        'EZ-Shine Composite Polishing Paste',
        'sh.info':         'High gloss polishing for all composite surfaces',
        'sh.p1':           'EZ-Shine Composite Polishing Paste is specially formulated for high gloss polishing of all composite surfaces. (Oil Free - Oil Free - No Metal Contents)',
        'comp.shine.img':  'EZ-Shine Composite Polishing Paste',

        /* --- Herculite Classic (Kerr) — featured in the gallery --- */
        'hc.title':        'Herculite Classic',
        'hc.tag':          'Universal microhybrid composite',
        'hc.kit':          'Kit TK: 5 syringes enamel 5 gm (1×A1, 2×A2, 1×A3, 1×B1); 2 gel etchant syringes (3 ml)',
        'hc.p1':           'Herculite Classic™ is a microhybrid composite developed using the Vita® color scale. Thanks to its superior application features, you can easily perform anatomical shaping with Herculite Classic. The proven clinical efficacy of Herculite Classic for over 15 years, its long-lasting aesthetic results and excellent wear rates are a testament to the reliability and durability of the composite. Herculite maximizes versatility with its 38 opacities and offers a solution for each of your clinical cases with syringes and disposable forms.',
        'hc.img':          'Herculite Classic composite (Kerr)',

        /* --- Nexcomp LC Nano-Hybrid Composite --- */
        'nc.title':        'Nexcomp',
        'nc.tag':          'LC Nano-Hybrid Composite · syringe 4g · Made in Korea',
        'nc.adv':          'Advantages',
        'nc.a1':           'Low 1.6% shrinkage for superior marginal integrity, various shades',
        'nc.a2':           'Filled with 40 nano-sized filler for excellent polishability',
        'nc.a3':           'Optimal handling – excellent sculptability for restoring natural shape and function',
        'nc.a4':           'Non-slumping, non-sticky',
        'nc.app':          'Applications',
        'nc.p1':           'Class I, II, III, IV, V restorations',
        'nc.p2':           'Diastema closures',
        'nc.p3':           'Direct veneers',
        'nc.p4':           'Composite and porcelain repairs',
        'nc.img':          'Nexcomp LC nano-hybrid composite',

        /* --- Nexcomp Flow Nano-Hybrid Flowable Composite --- */
        'nf.title':        'Nexcomp Flow',
        'nf.tag':          'Nano-Hybrid Flowable Composite Resin',
        'nf.p1':           'Nano-Hybrid Flowable Composite Resin, syringe 2g × 2, made in Korea.',
        'nf.img':          'Nexcomp Flow nano-hybrid flowable composite',

        /* --- Any-Com Nano-Hybrid Zirconium Composite --- */
        'an.title':        'Any-Com',
        'an.tag':          'LC Nano-Hybrid Composite · syringe 4g · Made in Korea',
        'an.app':          'Applications',
        'an.a1':           'Class I ~ V fillings',
        'an.a2':           'Reconstruction of traumatically affected anterior',
        'an.a3':           'Correction of shape and shade for better aesthetic appearance',
        'an.a4':           'Locking, splinting of loose anterior',
        'an.a5':           'Repairing veneer',
        'an.a6':           'Filling deciduous teeth',
        'an.a7':           'Core build-up under crowns',
        'an.a8':           'Composite inlays',
        'an.cure':         'Depth of cure: 2.5 mm (10 seconds)',
        'an.img':          'Any-Com LC nano-hybrid composite syringe',

        /* --- Alpha-Flow Flowable Composite --- */
        'al.title':        'Alpha-Flow',
        'al.tag':          'Flow Composite · Syringe 2g · Made in USA',
        'al.p1':           'Flow composite used as a base liner under composite restoration.',
        'al.img':          'Alpha-Flow flowable composite syringe',

        /* --- Te-Econom Plus hybrid composite --- */
        'te.title':        'Te-Econom Plus',
        'te.tag':          'Light-curing, radiopaque hybrid composite',
        'te.ind':          'Indications',
        'te.i1':           'Restorations of Classes I to V',
        'te.adv':          'Advantages',
        'te.a1':           'Excellent physical properties',
        'te.a2':           'Good polishability',
        'te.a3':           'High radiopacity',
        'te.a4':           'Long working time',
        'te.a5':           'Proven Ivoclar Vivadent technology and quality',
        'te.img':          'Te-Econom Plus hybrid composite',

        /* --- Alpha-Dent Light Cure Composite --- */
        'ad.title':        'Alpha-Dent',
        'ad.tag':          'LC Micro-Hybrid Composite · Syringe 4.5g · Made in USA',
        'ad.p1':           'Light-cure micro-hybrid composite syringe.',
        'ad.img':          'Alpha-Dent light-cure micro-hybrid composite syringe',

        /* --- NOVA COMPO-HF flowable composite --- */
        'nov.title':       'NOVA COMPO-HF',
        'nov.tag':         'Flowable Composite · Syringe 2g × 2 · Made in Turkey',
        'nov.p1':          'NOVA COMPO-HF is a light-curing, radiopaque flowable composite. Suitable for use as a cavity liner and for any kind of small cavities.',
        'nov.adv':         'Advantages',
        'nov.a1':          'High radiopacity',
        'nov.a2':          'Excellent wetting behaviour and consistency for all composite indications',
        'nov.a3':          'Use as a liner in Class I and II cavities and as a restorative material for filling small cavities and even Class V cavities',
        'nov.a4':          'Less shrinkage and minimized stress',
        'nov.ind':         'Indications',
        'nov.i1':          'As initial layer under Class I to V restorations',
        'nov.i2':          'Anterior restorations (Classes III, IV)',
        'nov.i3':          'Class V restorations (cervical caries, root erosion, wedge-shaped defects)',
        'nov.i4':          'Small restorations of all types',
        'nov.i5':          'Extended fissure sealing',
        'nov.i6':          'Splinting of mobile teeth',
        'nov.i7':          'Blocking out of undercuts',
        'nov.i8':          'Adhesive cementation of indirect light and ceramic restorations',
        'nov.i9':          'Repair of composite / ceramic veneers',
        'nov.img':         'NOVA COMPO-HF flowable composite syringe',

        /* --- Composan LCM micro-hybrid composite --- */
        'cl.title':        'Composan LCM',
        'cl.tag':          'LC Micro-Hybrid Composite · Syringe 4g · Made in Germany',
        'cl.p1':           'Composan LCM is our universal light-curing micro-hybrid composite with a filler content of 76.5%. It is suitable for fillings in the anterior and the posterior area, as well as for the inlay technique.',
        'cl.p2':           'The material offers excellent packability and outstanding physical properties, with high translucency, colour stability and excellent polishing.',
        'cl.ind':          'Indications',
        'cl.i1':           'Fillings of class I, II and V in the posterior area which are not occlusion bearing',
        'cl.i2':           'Reconstruction of traumatically affected anteriors',
        'cl.i3':           'Facing of discoloured anteriors',
        'cl.i4':           'Colour and shape corrections for a better aesthetic appearance',
        'cl.i5':           'Locking of loosened anteriors',
        'cl.i6':           'Extended fissure sealing for molars and premolars',
        'cl.i7':           'Repair of veneers',
        'cl.i8':           'Core build-ups for crowns',
        'cl.i9':           'Especially suitable for composite inlays',
        'cl.adv':          'Advantages',
        'cl.a1':           'Universal range of use due to the new type of fillers',
        'cl.a2':           'Packable consistency',
        'cl.a3':           'Sticks to the cavity, not to the instrument',
        'cl.img':          'Composan LCM micro-hybrid composite syringe',

        /* --- BRILLIANT NG universal composite --- */
        'bn.title':        'BRILLIANT NG',
        'bn.tag':          'Universal Composite · Syringe 4g · Made in Switzerland',
        'bn.p1':           'BRILLIANT NG is a universal composite aimed at simplifying the technique of application while achieving excellent aesthetic results.',
        'bn.p2':           'The pre-polymerised particle filling plus a high nanometric particle content give optimum consistency for manipulation and modelling, a noticeable decrease in shrinkage and easily achievable high-gloss surfaces.',
        'bn.p3':           'Its Duo Shade system yields two shades from the same syringe, simplifying colour selection and syringe inventory.',
        'bn.hi':           'Highlights',
        'bn.h1':           'Universal composite with a simplified application technique',
        'bn.h2':           'Excellent aesthetic results and a natural blend (Chameleon Effect)',
        'bn.h3':           'Optimum consistency for manipulation, packing and modelling',
        'bn.h4':           'Reduced shrinkage and an easily achievable high-gloss finish',
        'bn.h5':           'Duo Shade system — two shades from a single syringe',
        'bn.rg':           'Range',
        'bn.r1':           'Complemented by BRILLIANT Flow',
        'bn.r2':           'Nanofilled radiopaque flowable composite',
        'bn.r3':           'Stable, thixotropic material that flows under pressure for precise application',
        'bn.r4':           'Duo Shade concept for easy colour selection and natural aesthetics',
        'bn.img':          'BRILLIANT NG universal composite syringe',

        /* --- TMR Z FILL 10 fluoride-releasing nanocomposite --- */
        'zf.title':        'TMR Z FILL 10',
        'zf.tag':          'Universal Nanocomposite with Fluoride',
        'zf.p1':           'TMR Z FILL 10 achieves both a sustained fluoride-release property and strength.',
        'zf.p2':           'Outstanding usability: Universal is easily releasable from a spatula while its viscosity allows it to stretch smoothly. Flow and Low Flow have appropriate flowability, making them easy to fill or place as desired.',
        'zf.hi':           'Highlights',
        'zf.h1':           'Sustained fluoride release combined with strength',
        'zf.h2':           'Nanocomposite with fluoride',
        'zf.h3':           'Easily releasable from a spatula, with a smooth stretch',
        'zf.h4':           'Available as Universal, Flow and Low Flow',
        'zf.img':          'TMR Z FILL 10 fluoride-releasing nanocomposite',

        'omni.img':        'OMNICHROMA universal composite',

        /* --- OMNICHROMA (inside the Restorative card) --- */
        'omni.title':      'Every Shade, One Choice',
        'omni.p1':         "OMNICHROMA is the world's first universal composite that esthetically matches every patient, from A1 to D4, with a single shade. Its uniformly sized supra-nano spherical fillers (260nm spherical SiO2-ZrO2) allow OMNICHROMA to match every one of the 16 VITA classical shades, a science that we call Smart Chromatic Technology.",
        'omni.p2':         'Its wide color-matching ability eliminates the shade-taking procedure, reducing composite inventory and saving doctors time and money.',
        'omni.use':        'Universal Use',
        'omni.c1':         'Every shade',
        'omni.c2':         'Every class',
        'omni.c3':         'Stunning Esthetics',
        'omni.match':      'Unprecedented color matching',
        'omni.m1':         'Shade matches both before and after bleaching',
        'omni.m2':         'High polishability',
        'omni.ph':         'Excellent Physical-Mechanical Properties',
        'omni.f1':         'Highest wear resistance',
        'omni.f2':         'High compressive strength',
        'omni.f3':         'Exceptional handling',
        'omni.fill':       'OMNICHROMA Fillers & Structural Color',
        'omni.p3':         "OMNICHROMA exhibits the ultimate wide-range color-matching ability, covering all VITA classical shades with just one shade of composite, thanks to Tokuyama's Smart Chromatic Technology.",

        /* --- Tetric N-Ceram Bulk Fill (inside the Restorative card) --- */
        'tet.title':       'Tetric N-Ceram Bulk Fill',
        'tet.info':        'One layer. Up to four millimetres.',
        'tet.p1':          'Tetric N-Ceram Bulk Fill is the efficient four-millimetres posterior composite of the nano-optimized Tetric N-Collection.',
        'tet.p2':          'Tetric N-Ceram Bulk Fill enables posterior teeth to be restored with only one layer measuring up to four-millimetres in thickness, which considerably heightens efficiency.',
        'tet.p3':          "The patented light activator Ivocerin is responsible for ensuring the complete cure of the filling. Compared with conventional light initiators, the Ivocerin polymerisation booster is much more reactive. Therefore, polymerisation is initiated even in very deep cavities and the material is fully cured.",
        'tet.p4':          'A specially conditioned shrinkage stress reliever keeps shrinkage and shrinkage stress during polymerisation to a minimum.',
        'tet.p5':          'Tetric N-Ceram Bulk Fill is available in three universal shades: IVA, IVB and IVW (universal A shade, universal B shade and for deciduous teeth or light-coloured permanent dentition).',
        'tet.adv':         'Advantages',
        'tet.a1':          'Bulk Fill is possible due to Ivocerin, the patented light initiator',
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
        'nav.theme.light': 'التبديل إلى الثيم الفاتح',
        'nav.theme.dark':  'التبديل إلى الثيم الداكن',

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
        'g.composite':     'الكمبوزيت',
        'g.hint':          'صورة واسم لكل منتج — اضغط "معرفة المزيد" للتفاصيل الكاملة.',
        'g.comp.title':    'صور الكمبوزيت',
        'prod.order':      'اطلب عبر واتساب',
        'comp.more':       'معرفة المزيد',
        'comp.less':       'إظهار أقل',

        /* --- EZ-Shine (معجون تلميع الكمبوزيت — بارز في الجاليري) --- */
        'sh.title':        'معجون تلميع EZ-Shine',
        'sh.info':         'تلميع عالي اللمعان لجميع أسطح الكمبوزيت',
        'sh.p1':           'معجون تلميع EZ-Shine مصمم خصيصًا للتلميع عالي اللمعان لجميع أسطح الكمبوزيت. (خالٍ من الزيوت – لا يحتوي على معادن)',
        'comp.shine.img':  'معجون تلميع EZ-Shine',

        /* --- Herculite Classic (Kerr) — بارز في الجاليري --- */
        'hc.title':        'Herculite Classic',
        'hc.tag':          'كمبوزيت ميكروهايبرد متعدد الاستخدامات',
        'hc.kit':          'محتوى الكيت: 5 سرنجات مينا بوزن 5 جم (1×A1، 2×A2، 1×A3، 1×B1)؛ سرنجتان من جل الحفر (3 مل)',
        'hc.p1':           'Herculite Classic هو كمبوزيت ميكروهايبرد تم تطويره باستخدام مقياس ألوان Vita®. بفضل خصائصه التطبيقية الفائقة، يمكنك بسهولة إجراء التشكيل التشريحي باستخدام Herculite Classic. إن الفعالية السريرية المثبتة لهذا الكمبوزيت لأكثر من 15 عامًا، ونتائجه الجمالية طويلة الأمد ومعدلات تآكله الممتازة، هي دليل على موثوقيته ومتانته. يزيد Herculite من مرونته بـ 38 درجة لون، ويقدم حلًا لكل حالة سريرية في صورة سرنجات وعبوات جاهزة.',
        'hc.img':          'كمبوزيت Herculite Classic (Kerr)',

        /* --- Nexcomp LC نانو-هايبرد --- */
        'nc.title':        'Nexcomp',
        'nc.tag':          'كمبوزيت LC نانو-هايبرد · سرنجة 4 جم · صناعة كورية',
        'nc.adv':          'المميزات',
        'nc.a1':           'انكماش منخفض بنسبة 1.6% لسلامة حواف فائقة ودرجات لون متعددة',
        'nc.a2':           'معبأ بـ 40 من الحشوات النانوية لقابلية صقل ممتازة',
        'nc.a3':           'تعامل مثالي – قابلية تشكيل ممتازة لاستعادة الشكل والوظيفة الطبيعية',
        'nc.a4':           'لا يترهل ولا يلتصق',
        'nc.app':          'الاستخدامات',
        'nc.p1':           'حشوات الفئات I وII وIII وIV وV',
        'nc.p2':           'إغلاق الفراغات بين الأسنان',
        'nc.p3':           'قشور مباشرة (فينير)',
        'nc.p4':           'إصلاحات الكمبوزيت والبورسلين',
        'nc.img':          'كمبوزيت Nexcomp LC نانو-هايبرد',

        /* --- Nexcomp Flow راتنج نانو-هايبرد سائل --- */
        'nf.title':        'Nexcomp Flow',
        'nf.tag':          'راتنج كمبوزيت نانو-هايبرد سائل',
        'nf.p1':           'راتنج كمبوزيت نانو-هايبرد سائل، سرنجة 2 جم × 2، صناعة كورية.',
        'nf.img':          'كمبوزيت Nexcomp Flow نانو-هايبرد السائل',

        /* --- Any-Com كمبوزيت نانو-هايبرد زركونيوم --- */
        'an.title':        'Any-Com',
        'an.tag':          'كمبوزيت نانو-هايبرد · سرنجة 4 جم · صناعة كورية',
        'an.app':          'الاستخدامات',
        'an.a1':           'حشوات الفئة I ~ V',
        'an.a2':           'إعادة بناء الأسنان الأمامية المتأثرة بالصدمات',
        'an.a3':           'تصحيح الشكل واللون للحصول على مظهر جمالي أفضل',
        'an.a4':           'تثبيت وتجبير الأسنان الأمامية المتحركة',
        'an.a5':           'إصلاح القشور (الفينير)',
        'an.a6':           'حشو الأسنان اللبنية',
        'an.a7':           'بناء الدعامة (Core) أسفل التيجان',
        'an.a8':           'حشوات الكمبوزيت (Inlays)',
        'an.cure':         'عمق المعالجة: 2.5 مم (10 ثوانٍ)',
        'an.img':          'كمبوزيت Any-Com نانو-هايبرد',

        /* --- Alpha-Flow كمبوزيت سائل --- */
        'al.title':        'Alpha-Flow',
        'al.tag':          'كمبوزيت سائل · سرنجة 2 جم · صناعة أمريكية',
        'al.p1':           'كمبوزيت سائل يُستخدم كطبقة أساس (Liner) أسفل الحشوات الكمبوزيتية.',
        'al.img':          'كمبوزيت Alpha-Flow السائل',

        /* --- Te-Econom Plus كمبوزيت هجين --- */
        'te.title':        'Te-Econom Plus',
        'te.tag':          'كمبوزيت هجين معالج بالضوء، عالي العتامة للأشعة',
        'te.ind':          'دواعي الاستخدام',
        'te.i1':           'ترميمات الفئات I إلى V',
        'te.adv':          'المزايا',
        'te.a1':           'خصائص فيزيائية ممتازة',
        'te.a2':           'قابلية تلميع جيدة',
        'te.a3':           'عتامة عالية للأشعة',
        'te.a4':           'وقت عمل طويل',
        'te.a5':           'تقنية وجودة Ivoclar Vivadent المُثبتة',
        'te.img':          'كمبوزيت Te-Econom Plus الهجين',

        /* --- Alpha-Dent كمبوزيت مايكرو-هايبرد --- */
        'ad.title':        'Alpha-Dent',
        'ad.tag':          'كمبوزيت مايكرو-هايبرد معالج بالضوء · سرنجة 4.5 جم · صناعة أمريكية',
        'ad.p1':           'كمبوزيت مايكرو-هايبرد معالج بالضوء في سرنجة.',
        'ad.img':          'كمبوزيت Alpha-Dent مايكرو-هايبرد',

        /* --- NOVA COMPO-HF كمبوزيت سائل --- */
        'nov.title':       'NOVA COMPO-HF',
        'nov.tag':         'كمبوزيت سائل · سرنجة 2 جم × 2 · صناعة تركية',
        'nov.p1':          'NOVA COMPO-HF كمبوزيت سائل معالج بالضوء وعالي العتامة للأشعة. مناسب للاستخدام كطبقة أساس ولجميع الحشوات الصغيرة.',
        'nov.adv':         'المزايا',
        'nov.a1':          'عتامة عالية للأشعة',
        'nov.a2':          'سلوك ترطيب واتساق ممتاز لجميع استخدامات الكمبوزيت',
        'nov.a3':          'يُستخدم كطبقة أساس في تجاويف الفئة I و II وكمادة ترميم لملء التجاويف الصغيرة وحتى تجاويف الفئة V',
        'nov.a4':          'انكماش أقل وإجهاد مُقلَّل',
        'nov.ind':         'الاستخدامات',
        'nov.i1':          'طبقة أولية أسفل ترميمات الفئات I إلى V',
        'nov.i2':          'ترميمات الأسنان الأمامية (الفئات III و IV)',
        'nov.i3':          'ترميمات الفئة V (تسوس عنقي، تآكل الجذر، عيوب على شكل إسفين)',
        'nov.i4':          'ترميمات صغيرة من جميع الأنواع',
        'nov.i5':          'سد الشقوق الممتد',
        'nov.i6':          'تجبير الأسنان المتحركة',
        'nov.i7':          'إغلاق التجاويف المنحدرة (Blocking out of undercuts)',
        'nov.i8':          'الإلصاق اللاصق للترميمات غير المباشرة الضوئية والسيراميكية',
        'nov.i9':          'إصلاح قشور الكمبوزيت / السيراميك',
        'nov.img':         'كمبوزيت NOVA COMPO-HF السائل',

        /* --- Composan LCM كمبوزيت مايكرو-هايبرد --- */
        'cl.title':        'Composan LCM',
        'cl.tag':          'كمبوزيت مايكرو-هايبرد معالج بالضوء · سرنجة 4 جم · صناعة ألمانية',
        'cl.p1':           'Composan LCM كمبوزيت مايكرو-هايبرد عالمي معالج بالضوء بنسبة حشو 76.5%. مناسب لحشوات المنطقة الأمامية والخلفية ولتقنية الحشوات غير المباشرة (Inlay).',
        'cl.p2':           'يوفر المادة قابلية رص ممتازة وخصائص فيزيائية فائقة، مع شفافية عالية وثبات لوني وتلميع ممتاز.',
        'cl.ind':          'الاستخدامات',
        'cl.i1':           'حشوات الفئة I و II و V في المنطقة الخلفية غير الحاملة للإطباق',
        'cl.i2':           'إعادة بناء الأسنان الأمامية المتأثرة بالصدمات',
        'cl.i3':           'تغطية الأسنان الأمامية المتغيرة اللون',
        'cl.i4':           'تصحيح اللون والشكل لمظهر جمالي أفضل',
        'cl.i5':           'تثبيت الأسنان الأمامية المتراخية',
        'cl.i6':           'سد الشقوق الممتد للطواحن والضواحك',
        'cl.i7':           'إصلاح القشور (الفينير)',
        'cl.i8':           'بناء الدعامة (Core) للتيجان',
        'cl.i9':           'مناسب بشكل خاص لحشوات الكمبوزيت غير المباشرة (Inlays)',
        'cl.adv':          'المزايا',
        'cl.a1':           'مدى استخدام عالمي بفضل النوع الجديد من الحشوات',
        'cl.a2':           'قوام قابل للرص (Packable)',
        'cl.a3':           'يلتصق بالتجويف وليس بالأداة',
        'cl.img':          'كمبوزيت Composan LCM مايكرو-هايبرد',

        /* --- BRILLIANT NG كمبوزيت عالمي --- */
        'bn.title':        'BRILLIANT NG',
        'bn.tag':          'كمبوزيت عالمي · سرنجة 4 جم · صناعة سويسرية',
        'bn.p1':           'BRILLIANT NG كمبوزيت عالمي يهدف إلى تبسيط تقنية التطبيق مع تحقيق نتائج جمالية ممتازة.',
        'bn.p2':           'حشو الجزيئات المُسبق البلمرة مع المحتوى العالي من الجزيئات النانومترية يمنح قوامًا مثاليًا للتشغيل والتشكيل، مع انخفاض ملحوظ في الانكماش وسهولة الحصول على أسطح عالية اللمعان.',
        'bn.p3':           'نظام Duo Shade يتيح الحصول على درجتين لونيتين من نفس السرنجة، مما يبسّط اختيار اللون ومخزون السرنجات.',
        'bn.hi':           'أبرز المزايا',
        'bn.h1':           'كمبوزيت عالمي بتقنية تطبيق مبسّطة',
        'bn.h2':           'نتائج جمالية ممتازة ومظهر طبيعي (تأثير الحرباء / Chameleon)',
        'bn.h3':           'قوام مثالي للتشغيل والرص والتشكيل',
        'bn.h4':           'انكماش أقل ولمعان نهائي عالٍ',
        'bn.h5':           'نظام Duo Shade — درجتان من نفس السرنجة',
        'bn.rg':           'المجموعة',
        'bn.r1':           'مكمّل بـ BRILLIANT Flow',
        'bn.r2':           'كمبوزيت سائل نانوي عالي العتامة للأشعة',
        'bn.r3':           'مادة ثابتة وثيروتروبية تتدفق بالضغط لتطبيق دقيق',
        'bn.r4':           'مفهوم Duo Shade لاختيار لون سهل ومظهر طبيعي',
        'bn.img':          'كمبوزيت BRILLIANT NG السويسري',

        /* --- TMR Z FILL 10 نانو-كمبوزيت مع الفلورايد --- */
        'zf.title':        'TMR Z FILL 10',
        'zf.tag':          'نانو-كمبوزيت عالمي يحتوي على الفلورايد',
        'zf.p1':           'TMR Z FILL 10 يحقق خاصية الإطلاق المستمر للفلورايد مع القوة.',
        'zf.p2':           'سهولة استخدام فائقة: النوع العالمي يُفصل بسهولة عن السباتولا، ولزوجته تجعله يتمدد بسلاسة. كما أن Flow و Low Flow لهما سيولة مناسبة، مما يسهّل الحشو أو التطبيق حسب الرغبة.',
        'zf.hi':           'أبرز المزايا',
        'zf.h1':           'إطلاق مستمر للفلورايد مع القوة',
        'zf.h2':           'نانو-كمبوزيت يحتوي على الفلورايد',
        'zf.h3':           'يُفصل بسهولة عن السباتولا ويتمدد بسلاسة',
        'zf.h4':           'متوفر بأنواع Universal و Flow و Low Flow',
        'zf.img':          'نانو-كمبوزيت TMR Z FILL 10 مع الفلورايد',

        'omni.img':        'كومبوزيت OMNICHROMA الشامل',

        /* --- OMNICHROMA (داخل كرت الترميم) --- */
        'omni.title':      'كل درجة لون، اختيار واحد',
        'omni.p1':         'OMNICHROMA هو أول كومبوزيت عام في العالم يطابق تجميليًا كل مريض من A1 إلى D4 بدرجة لون واحدة فقط. حبيباته الكروية فائقة الدقة متساوية الحجم (SiO2-ZrO2 كروي بحجم 260 نانومتر) تتيح له مطابقة جميع درجات VITA الكلاسيكية الـ 16، وهي التقنية التي نسميها "تقنية اللون الذكية".',
        'omni.p2':         'قدرته الواسعة على مطابقة الألوان تلغي ضرورة تحديد درجة اللون، مما يقلل مخزون الدرجات ويوفر على الطبيب وقتًا ومالًا.',
        'omni.use':        'استخدام شامل',
        'omni.c1':         'كل درجة',
        'omni.c2':         'كل حالة',
        'omni.c3':         'جماليات رائعة',
        'omni.match':      'مطابقة لون غير مسبوقة',
        'omni.m1':         'مطابقة اللون قبل وبعد التبييض',
        'omni.m2':         'قابلية صقل عالية',
        'omni.ph':         'خواص فيزيائية وميكانيكية ممتازة',
        'omni.f1':         'أعلى مقاومة للتآكل',
        'omni.f2':         'مقاومة ضغط عالية',
        'omni.f3':         'تعامل استثنائي',
        'omni.fill':       'حبيبات OMNICHROMA واللون الهيكلي',
        'omni.p3':         'يتميز OMNICHROMA بأقصى قدرة على مطابقة الألوان على نطاق واسع، حيث يغطي جميع درجات VITA الكلاسيكية بدرجة لون واحدة فقط من الكومبوزيت، بفضل تقنية اللون الذكية من Tokuyama.',

        /* --- Tetric N-Ceram Bulk Fill (داخل كرت الترميم) --- */
        'tet.title':       'Tetric N-Ceram Bulk Fill',
        'tet.info':        'طبقة واحدة. حتى أربعة مليمترات.',
        'tet.p1':          'تعد Tetric N-Ceram Bulk Fill الكومبوزيت الخلفي الفعّال بسماكة أربعة مليمترات من مجموعة Tetric N-Collection النانوية المحسّنة.',
        'tet.p2':          'تتيح Tetric N-Ceram Bulk Fill ترميم الأسنان الخلفية بطبقة واحدة فقط بسماكة تصل إلى أربعة مليمترات، مما يرفع كفاءة العمل بشكل ملحوظ.',
        'tet.p3':          'المحفّز الضوئي الحاصل على براءة اختراع Ivocerin مسؤول عن ضمان بلمرة كاملة للحشوة. وبالمقارنة مع المحفّزات الضوئية التقليدية، فإن معزّز البلمرة Ivocerin أكثر تفاعلية بكثير، لذلك تبدأ البلمرة حتى في التجاويف العميقة جدًا ويتم معالجة المادة بالكامل.',
        'tet.p4':          'يعمل مخفّف إجهاد الانكماش المُعالَج خصيصًا على إبقاء الانكماش وإجهاد الانكماش أثناء البلمرة عند أدنى حد.',
        'tet.p5':          'تتوفر Tetric N-Ceram Bulk Fill في ثلاثة درجات عالمية: IVA و IVB و IVW (درجة A العالمية، ودرجة B العالمية، وللأسنان اللبنية أو الأسنان الدائمة فاتحة اللون).',
        'tet.adv':         'المزايا',
        'tet.a1':          'الحشو بطبقات سميكة ممكن بفضل Ivocerin، المحفّز الضوئي الحاصل على براءة اختراع',
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
