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
        'prod.order':      'Order on WhatsApp',
        'comp.more':       'Details',
        'comp.less':       'Hide',
        'comp.order':      'Order',
        'amalgam.title':   'Amalgam',
        'amalgam.alt':     'Amalgam capsules product',
        /* --- omni : how to use / additional information --- */
        'omni.how':           'How to use',
        'omni.u1':            'Isolate the tooth and prepare the cavity using your normal adhesive protocol.',
        'omni.u2':            'Place OMNICHROMA — one single shade for every patient, A1 to D4.',
        'omni.u3':            'Light-cure each layer as recommended by Tokuyama (typically 10–20 s).',
        'omni.u4':            'Contour, finish and polish; the shade blends with the surrounding tooth.',
        'omni.extra':         'Additional information',
        'omni.e1':            'Single-shade universal composite — no shade-taking needed.',
        'omni.e2':            'Supra-nano 260 nm spherical SiO₂–ZrO₂ fillers (Smart Chromatic Technology).',
        'omni.e3':            'Supplied as 4 g syringes and unit-dose capsules.',
        /* --- tetric : how to use / additional information --- */
        'tetric.how':           'How to use',
        'tetric.u1':            'Prepare the cavity and apply a suitable adhesive system.',
        'tetric.u2':            'Place a single increment up to 4 mm thick.',
        'tetric.u3':            'Light-cure per Ivoclar guidelines (about 10 s with a high-power lamp).',
        'tetric.u4':            'Finish and polish, then check the occlusion.',
        'tetric.extra':         'Additional information',
        'tetric.e1':            'Bulk-fill nano-hybrid composite for posterior restorations.',
        'tetric.e2':            'Up to 4 mm depth of cure in a single increment.',
        'tetric.e3':            'Sculptable with a controlled working time.',
        /* --- shine : how to use / additional information --- */
        'shine.how':           'How to use',
        'shine.u1':            'Clean and dry the restored surface thoroughly.',
        'shine.u2':            'Apply a small amount of paste to a rubber cup or polishing disc.',
        'shine.u3':            'Polish at low speed with light pressure.',
        'shine.u4':            'Rinse and inspect for a high gloss.',
        'shine.extra':         'Additional information',
        'shine.e1':            'Final-step polishing paste for all composite surfaces.',
        'shine.e2':            'Oil-free and metal-free formula.',
        'shine.e3':            'Removes surface stains and leaves a smooth, glossy finish.',
        /* --- herc : how to use / additional information --- */
        'herc.how':           'How to use',
        'herc.u1':            'Etch, rinse and dry, then apply a bonding agent and light-cure.',
        'herc.u2':            'Place Herculite Classic in increments of about 2 mm.',
        'herc.u3':            'Light-cure each increment per Kerr guidelines.',
        'herc.u4':            'Contour, finish and polish.',
        'herc.extra':         'Additional information',
        'herc.e1':            'Micro-hybrid composite with over 15 years of proven clinical use.',
        'herc.e2':            '38 opacities for both anterior and posterior restorations.',
        'herc.e3':            'Excellent anatomical shaping and wear resistance.',
        /* --- nexcomp : how to use / additional information --- */
        'nexcomp.how':           'How to use',
        'nexcomp.u1':            'Prepare the cavity and apply the adhesive system.',
        'nexcomp.u2':            'Place Nexcomp in increments and sculpt the anatomy.',
        'nexcomp.u3':            'Light-cure per the manufacturer guidelines (about 20 s).',
        'nexcomp.u4':            'Finish and polish.',
        'nexcomp.extra':         'Additional information',
        'nexcomp.e1':            'Nano-hybrid composite by Meta Biomed, Korea.',
        'nexcomp.e2':            'For anterior and posterior restorations.',
        'nexcomp.e3':            'Good polishability thanks to nano-sized fillers.',
        /* --- nexflow : how to use / additional information --- */
        'nexflow.how':           'How to use',
        'nexflow.u1':            'Prepare the cavity and apply an appropriate bond.',
        'nexflow.u2':            'Apply Nexcomp Flow to the cavity floor or as a thin liner.',
        'nexflow.u3':            'Light-cure per the manufacturer instructions.',
        'nexflow.u4':            'Cover or restore as needed, then finish and polish.',
        'nexflow.extra':         'Additional information',
        'nexflow.e1':            'Low-viscosity flowable for liners and small restorations.',
        'nexflow.e2':            'Made by Meta Biomed, Korea.',
        'nexflow.e3':            'Controlled flow with easy handling.',
        /* --- anycom : how to use / additional information --- */
        'anycom.how':           'How to use',
        'anycom.u1':            'Isolate, etch and bond as appropriate.',
        'anycom.u2':            'Place Any-Com in thin incremental layers.',
        'anycom.u3':            'Light-cure 10 seconds (2.5 mm depth of cure).',
        'anycom.u4':            'Shape, finish and polish.',
        'anycom.extra':         'Additional information',
        'anycom.e1':            'Universal nano-hybrid composite.',
        'anycom.e2':            'Radiopaque with smooth handling.',
        'anycom.e3':            'For anterior and posterior restorations.',
        /* --- alpha : how to use / additional information --- */
        'alpha.how':           'How to use',
        'alpha.u1':            'Prepare the cavity and apply a bond.',
        'alpha.u2':            'Dispense Alpha-Flow and place it as a thin base layer.',
        'alpha.u3':            'Light-cure per the manufacturer guidelines.',
        'alpha.u4':            'Build up the restoration, then finish and polish.',
        'alpha.extra':         'Additional information',
        'alpha.e1':            'Radiopaque, fluoride-containing micro-hybrid flowable.',
        'alpha.e2':            'Made in the USA by Dental Technologies.',
        'alpha.e3':            'Available in syringe form for precise placement.',
        /* --- teeconom : how to use / additional information --- */
        'teeconom.how':           'How to use',
        'teeconom.u1':            'Etch, rinse and dry, then apply a bond and light-cure.',
        'teeconom.u2':            'Place Te-Econom Plus in increments of up to 2 mm.',
        'teeconom.u3':            'Light-cure from 10 seconds (follow the Ivoclar curing guide).',
        'teeconom.u4':            'Shape, finish and polish.',
        'teeconom.extra':         'Additional information',
        'teeconom.e1':            'Economical universal composite; over 140 million restorations worldwide.',
        'teeconom.e2':            'Shades A1, A2, A3, A3.5, B2, C3; 4 g syringes.',
        'teeconom.e3':            'High radiopacity with a long working time.',
        /* --- alphadent : how to use / additional information --- */
        'alphadent.how':           'How to use',
        'alphadent.u1':            'Isolate and prepare the cavity; etch, rinse and dry.',
        'alphadent.u2':            'Apply a bonding agent and light-cure.',
        'alphadent.u3':            'Place Alpha-Dent and sculpt the anatomy.',
        'alphadent.u4':            'Light-cure, then finish and polish; adjust the occlusion.',
        'alphadent.extra':         'Additional information',
        'alphadent.e1':            'Radiopaque light-cure hybrid composite.',
        'alphadent.e2':            'Exact Match System colour-matches the VITA shade guide.',
        'alphadent.e3':            'High compressive strength and polishability; made in the USA.',
        /* --- novacompo : how to use / additional information --- */
        'novacompo.how':           'How to use',
        'novacompo.u1':            'Etch, rinse and dry, then apply a bond and light-cure.',
        'novacompo.u2':            'Apply NOVA COMPO-HF as a liner or to fill small cavities.',
        'novacompo.u3':            'Light-cure per the lamp instructions (about 20 s).',
        'novacompo.u4':            'Finish and polish.',
        'novacompo.extra':         'Additional information',
        'novacompo.e1':            'Light-curing, radiopaque flowable composite (Imicryl, Turkey).',
        'novacompo.e2':            'Working time about 90 s; shrinkage about 2.2%.',
        'novacompo.e3':            '3 ml syringes; shades include A1.',
        /* --- composan : how to use / additional information --- */
        'composan.how':           'How to use',
        'composan.u1':            'Etch, rinse and dry; apply bond and light-cure.',
        'composan.u2':            'Place Composan LCM in layers and sculpt the anatomy.',
        'composan.u3':            'Light-cure each layer per the instructions.',
        'composan.u4':            'Finish and polish for a high gloss.',
        'composan.extra':         'Additional information',
        'composan.e1':            'Universal light-curing micro-hybrid composite, 76.5% filler.',
        'composan.e2':            'Shades A1, A2, A3, A3.5, B2, B3, I; 4 g syringes.',
        'composan.e3':            'Promedica, Germany; also for the inlay technique.',
        /* --- brilliantng : how to use / additional information --- */
        'brilliantng.how':           'How to use',
        'brilliantng.u1':            'Etch, rinse and dry, then apply a bond and light-cure.',
        'brilliantng.u2':            'Select the Duo Shade syringe and apply the composite in increments.',
        'brilliantng.u3':            'Light-cure per the instructions.',
        'brilliantng.u4':            'Shape, then polish for a high gloss.',
        'brilliantng.extra':         'Additional information',
        'brilliantng.e1':            'Universal nano-hybrid composite by Coltene, Switzerland.',
        'brilliantng.e2':            'Duo Shade system gives two shades from one syringe.',
        'brilliantng.e3':            'Dentin and enamel shades in 4 g syringes.',
        /* --- tmrzfill : how to use / additional information --- */
        'tmrzfill.how':           'How to use',
        'tmrzfill.u1':            'Etch, rinse and dry, then apply a bond and light-cure.',
        'tmrzfill.u2':            'Place TMR Z FILL 10 in increments and sculpt to the anatomy.',
        'tmrzfill.u3':            'Light-cure per the instructions.',
        'tmrzfill.u4':            'Finish and polish to a smooth surface.',
        'tmrzfill.extra':         'Additional information',
        'tmrzfill.e1':            'Universal nanocomposite by Yamakin, Japan.',
        'tmrzfill.e2':            'Sustained fluoride release with Ceramics Cluster Filler.',
        'tmrzfill.e3':            'Universal, Flow and Low Flow consistencies; 2.6 g syringes.',
        /* --- anycomflow : how to use / additional information --- */
        'anycomflow.how':           'How to use',
        'anycomflow.u1':            'Etch, rinse and dry, then apply a bond and light-cure.',
        'anycomflow.u2':            'Apply Any-Com Flow to liners, small cavities or margins.',
        'anycomflow.u3':            'Light-cure per the instructions.',
        'anycomflow.u4':            'Finish and polish.',
        'anycomflow.extra':         'Additional information',
        'anycomflow.e1':            'Radiopaque nano-hybrid flowable by Mediclus, Korea.',
        'anycomflow.e2':            'Shades A1, A2, A3, A3.5, A4, B1, B2, C2, OA2, OA3, OWTTL.',
        'anycomflow.e3':            '2 g syringes; kit includes Any-Etch and Hi-Bond.',
        /* --- neospectra : how to use / additional information --- */
        'neospectra.how':           'How to use',
        'neospectra.u1':            'Etch, rinse and dry, then apply a universal adhesive and light-cure.',
        'neospectra.u2':            'Place Neo Spectra ST and sculpt (LV creamy or HV packable).',
        'neospectra.u3':            'Light-cure per the instructions.',
        'neospectra.u4':            'Finish and polish for a high gloss.',
        'neospectra.extra':         'Additional information',
        'neospectra.e1':            'Universal nano-ceramic composite by Dentsply Sirona, USA.',
        'neospectra.e2':            'SphereTEC filler; 5 CLOUD shades cover the 16-shade VITA range.',
        'neospectra.e3':            'Offered in LV (creamy) and HV (packable) viscosities.',
        /* --- xsflow : how to use / additional information --- */
        'xsflow.how':           'How to use',
        'xsflow.u1':            'Etch, rinse and dry, then apply a bond and light-cure.',
        'xsflow.u2':            'Apply XS Flow as a liner or for small restorations.',
        'xsflow.u3':            'Light-cure about 20 s per increment.',
        'xsflow.u4':            'Finish and polish.',
        'xsflow.extra':         'Additional information',
        'xsflow.e1':            'Nano-hybrid filler for a durable, polishable surface.',
        'xsflow.e2':            'Made in Korea.',
        'xsflow.e3':            'Easy handling and controlled flow.',
        /* --- charmfil : how to use / additional information --- */
        'charmfil.how':           'How to use',
        'charmfil.u1':            'Etch, rinse and dry, then apply a bond and light-cure.',
        'charmfil.u2':            'Place CharmFil Flow in increments as a liner or small restoration.',
        'charmfil.u3':            'Light-cure about 20 s per increment.',
        'charmfil.u4':            'Finish and polish.',
        'charmfil.extra':         'Additional information',
        'charmfil.e1':            'Flowable composite by Dentkist, Korea.',
        'charmfil.e2':            'Filler size about 0.7 µm; shrinkage about 2.3%.',
        'charmfil.e3':            'Supplied as 2 × 2 g syringes.',
        /* --- xscomposite : how to use / additional information --- */
        'xscomposite.how':           'How to use',
        'xscomposite.u1':            'Etch, rinse and dry, then apply a bond and light-cure.',
        'xscomposite.u2':            'Place XS Composite in increments and sculpt the anatomy.',
        'xscomposite.u3':            'Light-cure about 20 s per increment.',
        'xscomposite.u4':            'Finish and polish.',
        'xscomposite.extra':         'Additional information',
        'xscomposite.e1':            'Universal nano-hybrid composite for anterior and posterior use.',
        'xscomposite.e2':            'Nano-hybrid filler for good strength and polishability.',
        'xscomposite.e3':            'Part of the XS family (with XS Flow); made in Korea.',
        /* --- beautifil : how to use / additional information --- */
        'beautifil.how':           'How to use',
        'beautifil.u1':            'Etch, rinse and dry, then apply a bonding agent and light-cure.',
        'beautifil.u2':            'Place Beautifil II LS in increments; it is stackable and non-sticky.',
        'beautifil.u3':            'Light-cure per Shofu guidelines.',
        'beautifil.u4':            'Finish and polish; the Giomer releases fluoride over time.',
        'beautifil.extra':         'Additional information',
        'beautifil.e1':            'Giomer universal composite by Shofu, Japan.',
        'beautifil.e2':            'Sustained fluoride release/recharge with bioactive Giomer technology.',
        'beautifil.e3':            'Low volumetric shrinkage (0.85%) and shrinkage stress (2.72 MPa).',
        /* --- omniblocker : how to use / additional information --- */
        'omniblocker.how':           'How to use',
        'omniblocker.u1':            'Isolate and prepare the cavity; apply the adhesive and light-cure.',
        'omniblocker.u2':            'Apply a thin layer of OMNICHROMA BLOCKER where masking is needed.',
        'omniblocker.u3':            'Light-cure the blocker layer.',
        'omniblocker.u4':            'Place OMNICHROMA or the restorative over it, then finish and polish.',
        'omniblocker.extra':         'Additional information',
        'omniblocker.e1':            'Opaque blocker designed for OMNICHROMA (Tokuyama, Japan).',
        'omniblocker.e2':            'Use a thin layer at the lingual wall in large Class III/IV cases.',
        /* --- collflow : how to use / additional information --- */
        'collflow.how':           'How to use',
        'collflow.u1':            'Etch, rinse and dry, then apply a bond and light-cure.',
        'collflow.u2':            'Place Colltin-Flow in increments as a liner or small restoration.',
        'collflow.u3':            'Light-cure about 20 s per increment.',
        'collflow.u4':            'Finish and polish.',
        'collflow.extra':         'Additional information',
        'collflow.e1':            'Smooth, easy flow for liner and small-cavity use.',
        'collflow.e2':            'Radiopaque, so it is easy to follow on X-ray.',
        'collflow.e3':            'Made in Switzerland; distributed regionally by Vitadent.',
        /* --- estelite : how to use / additional information --- */
        'estelite.how':           'How to use',
        'estelite.u1':            'Isolate and prepare the cavity; etch, rinse and dry.',
        'estelite.u2':            'Apply a bonding agent and light-cure.',
        'estelite.u3':            'Place ESTELITE Alpha in increments and sculpt the anatomy.',
        'estelite.u4':            'Light-cure, then finish and polish for a high gloss.',
        'estelite.extra':         'Additional information',
        'estelite.e1':            'Supra-nano spherical filler composite by Tokuyama, Japan.',
        'estelite.e2':            '4 basic + 2 opalescent shades cover most cases.',
        'estelite.e3':            'Radiopaque with outstanding polishability.',
        /* --- iflow : how to use / additional information --- */
        'iflow.how':           'How to use',
        'iflow.u1':            'Etch, rinse and dry, then apply a bond and light-cure.',
        'iflow.u2':            'Place i-FLOW Bulk Fill in a single increment up to 4 mm.',
        'iflow.u3':            'Light-cure about 20 s per increment.',
        'iflow.u4':            'Add a capping layer of universal composite, then finish and polish.',
        'iflow.extra':         'Additional information',
        'iflow.e1':            'Light-curing bulk fill nano flowable composite.',
        'iflow.e2':            'Enables a 4 mm depth of cure with low shrinkage.',
        'iflow.e3':            'Brand: i-dental; made in Lithuania.',

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

        /* --- Any-Com Flow flowable composite --- */
        'af.title':        'Any-Com Flow',
        'af.tag':          'Flowable Composite · Syringe 2g · Made in Korea',
        'af.p1':           'Light-cured, radiopaque hybrid composite material for the restorative treatment of anterior and posterior teeth.',
        'af.ft':           'Features',
        'af.f1':           'Non-slumping and not sticky',
        'af.f2':           'Excellent physical properties',
        'af.f3':           'Colour match to the VITA shade guide',
        'af.f4':           'Less shrinkage (low 1.5%)',
        'af.f5':           'Optimum handling',
        'af.f6':           'Excellent sculptability for restoring natural shade and function',
        'af.img':          'Any-Com Flow flowable composite syringe',

        /* --- Neo Spectra ST nano-ceramic composite --- */
        'ns.title':        'Neo Spectra ST',
        'ns.tag':          'Nano-Ceramic Universal Composite · SphereTEC Filler',
        'ns.p1':           'Neo Spectra ST is a nano-ceramic, light-cured, radiopaque, universal composite with novel SphereTEC filler technology, indicated for both direct and indirect restorations.',
        'ns.p2':           'SphereTEC filler technology uses granulated spherical fillers combined with an optimised resin matrix system to elevate performance in handling, esthetics and longevity.',
        'ns.hi':           'Highlights',
        'ns.h1':           'Five universal CLOUD shades covering the full VITA 1 range',
        'ns.h2':           'Preferred handling: LV (low-viscosity) or HV (high-viscosity), each non-sticky with excellent adaptation, sculptability and slump resistance',
        'ns.h3':           'Simplified shading system — 5 universal CLOUD shades',
        'ns.h4':           'Lasting aesthetics: fast and easy polishing with high stain resistance and proven durability',
        'ns.ind':          'Indications',
        'ns.i1':           'Direct restorations of all cavity classes in anterior and posterior teeth',
        'ns.i2':           'Indirect fabrication of inlays, onlays',
        'ns.img':          'Neo Spectra ST nano-ceramic universal composite',

        /* --- XS Flow nano-hybrid flowable composite --- */
        'ef.title':        'XS Flow',
        'ef.tag':          'Flowable Composite · Syringe 2g × 2 · Made in Korea',
        'ef.p1':           'XS Flow is a light-cured, radiopaque nano-hybrid flowable composite, supplied as 2 × 2 g syringes.',
        'ef.hi':           'Highlights',
        'ef.h1':           'Nano-hybrid flowable composite',
        'ef.h2':           'Light-cured and radiopaque',
        'ef.h3':           '2 × 2 g syringes',
        'ef.h4':           'Available in VITA shades A1, A2, A3, A3.5 and B2',
        'ef.img':          'XS Flow nano-hybrid flowable composite syringe',

        /* --- CharmFil Flow flowable composite --- */
        'cf.title':        'CharmFil Flow',
        'cf.tag':          'Flow Composite · Syringe 2g × 2 · Made in Korea',
        'cf.p1':           'CharmFil Flow is a light-cured flowable composite resin that enhances physical properties such as flowability and elasticity, making it easy to handle.',
        'cf.hi':           'Highlights',
        'cf.h1':           'Light-cured flowable composite resin',
        'cf.h2':           'Enhanced flowability and elasticity',
        'cf.h3':           'Ideal for small cavity fills and cervical restorations',
        'cf.h4':           '2 × 2 g syringes',
        'cf.img':          'CharmFil Flow light-cured flowable composite syringe',

        /* --- XS Composite LC nano-hybrid composite --- */
        'xc.title':        'XS Composite',
        'xc.tag':          'LC Nano-Hybrid Composite · Syringe 4g · Made in Korea',
        'xc.p1':           'Light-cured nano-hybrid composite, supplied in a 4 g syringe.',
        'xc.hi':           'Highlights',
        'xc.h1':           'LC nano-hybrid composite',
        'xc.h2':           '4 g syringe',
        'xc.h3':           'Made in Korea',
        'xc.img':          'XS Composite LC nano-hybrid composite syringe',

        /* --- Beautifil II LS universal composite with Giomer --- */
        'bi.title':        'Beautifil II LS',
        'bi.tag':          'Universal Composite · Giomer Technology',
        'bi.p1':           'Indicated for all classes of restorations (I–V), Beautifil II LS is a firm but easy-handling, stackable, non-sticky universal composite formulated to minimize polymerization shrinkage and resultant shrinkage stress.',
        'bi.p2':           'With superior durability and aesthetics, it is ideal for both anterior and posterior restorations, delivering predictable clinical efficacy and maximum performance.',
        'bi.ft':           'Features',
        'bi.f1':           'Award-winning handling — stackable and non-sticky',
        'bi.f2':           'Polishes in an instant',
        'bi.f3':           'Sustained fluoride release/recharge with bioactive Giomer technology',
        'bi.f4':           'Great strength and high wear resistance',
        'bi.f5':           'Tooth-like aesthetics with natural fluorescence and chameleon effect',
        'bi.f6':           'Low volumetric shrinkage (0.85%) and shrinkage stress (2.72 MPa)',
        'bi.img':          'Beautifil II LS universal composite with Giomer technology',

        /* --- OMNICHROMA BLOCKER opaque blocker for OMNICHROMA --- */
        'ob.title':        'OMNICHROMA BLOCKER',
        'ob.tag':          'Opaque Blocker for OMNICHROMA · Syringe 4g · Made in Japan',
        'ob.p1':           'OMNICHROMA BLOCKER is an opaque blocker for OMNICHROMA — one color, every shade, every class! It eliminates time-consuming shade matching.',
        'ob.ind':          'Indications',
        'ob.i1':           'Preventing shade-matching interference in large Class III and Class IV restorations',
        'ob.i2':           'Masking amalgam staining',
        'ob.i3':           'Masking dark dentition and dentin',
        'ob.i4':           'Reconstructing a highly opaque tooth',
        'ob.about':        'About OMNICHROMA',
        'ob.a1':           "World's first universal composite to shade-match any tooth color, from A1 to D4",
        'ob.a2':           'Smart Chromatic Technology uses uniformly sized supra-nano spherical fillers to match all 16 VITA classical shades',
        'ob.a3':           'Eliminates the shade-taking procedure and reduces composite inventories',
        'ob.a4':           'Shades match even before and after bleaching',
        'ob.a5':           'Low polymerization shrinkage with exceptional strength, wear resistance, handling and polishability',
        'ob.a6':           'Indicated for all classes of direct restorations, diastema closure, and porcelain / composite repair',
        'ob.img':          'OMNICHROMA BLOCKER opaque blocker',

        /* --- Colltin-Flow flowable composite --- */
        'ct.title':        'Colltin-Flow',
        'ct.tag':          'Flowable Composite · Syringe 2.3g · Made in Switzerland',
        'ct.p1':           'Colltin-Flow is a light-cured, radiopaque flowable composite supplied in a 2.3 g syringe, made in Switzerland.',
        'ct.hi':           'Highlights',
        'ct.h1':           'Flowable composite',
        'ct.h2':           'Syringe 2.3 g',
        'ct.h3':           'Made in Switzerland',
        'ct.img':          'Colltin-Flow flowable composite syringe',

        /* --- ESTELITE Alpha universal composite (Tokuyama) --- */
        'ea.title':        'ESTELITE Alpha',
        'ea.tag':          'Supra-Nano Spherical Filler · Universal Composite',
        'ea.p1':           'ESTELITE Alpha recreates teeth very naturally, blending with surrounding teeth using only 4 basic shades and 2 opalescent shades in most cases, and delivers a very smooth surface with superior gloss after easy polishing.',
        'ea.p2':           'These features are made possible by its Supra-Nano Spherical Filler with a controlled refractive index.',
        'ea.ben':          'Benefits',
        'ea.b1':           'Outstanding polishability',
        'ea.b2':           'High gloss retention over time',
        'ea.b3':           'Wide shade matching range (Chameleon effect)',
        'ea.b4':           'High wear resistance',
        'ea.b5':           'Low wear to opposing teeth',
        'ea.ind':          'Indications',
        'ea.i1':           'Anterior and posterior restorations',
        'ea.i2':           'Composite veneer',
        'ea.i3':           'Diastema closure',
        'ea.i4':           'Composite / porcelain repair',
        'ea.pkg':          'Product package',
        'ea.pg1':          '2 syringes (3.8 g) of A2',
        'ea.pg2':          '1 syringe (3.8 g) of A3',
        'ea.pg3':          '1 syringe OA2 (opacious)',
        'ea.img':          'ESTELITE Alpha universal composite',

        /* --- i-FLOW Bulk Fill nano flowable composite --- */
        'if.title':        'i-FLOW Bulk Fill',
        'if.tag':          'Light Curing Bulk Fill Nano Flowable Composite',
        'if.p1':           'i-FLOW Bulk Fill is a light-curing bulk fill nano flowable composite that enables a 4 mm depth of cure.',
        'if.ind':          'Indications',
        'if.i1':           'For initial placement in class I and II direct restorations',
        'if.i2':           'Restoration of minimally invasive cavity preparations',
        'if.i3':           'Restoration of class III and V cavities',
        'if.i4':           'Repair of small enamel defects and defects in esthetic indirect restorations',
        'if.i5':           'For sealing pits and fissures',
        'if.adv':          'Advantages',
        'if.a1':           'Enabling a 4 mm depth',
        'if.a2':           'Excellent flow characteristics',
        'if.a3':           'High aesthetics',
        'if.a4':           'Highly resistant',
        'if.a5':           'Highly polishable',
        'if.a6':           'Low shrinkage',
        'if.a7':           'Nano filler',
        'if.a8':           'Radiopaque',
        'if.cp':           'Conventional procedure',
        'if.cp1':          'Bonding',
        'if.cp2':          'Flowable liner',
        'if.cp3':          'Universal composite — increment 1',
        'if.cp4':          'Universal composite — increment 2',
        'if.cp5':          'Universal composite — increment 3',
        'if.ip':           'i-FLOW Bulk Fill procedure',
        'if.ip1':          'Bonding',
        'if.ip2':          'i-FLOW Bulk Fill',
        'if.ip3':          'Universal composite (capping layer)',
        'if.img':          'i-FLOW Bulk Fill nano flowable composite',

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
        'prod.order':      'اطلب عبر واتساب',
        'comp.more':       'التفاصيل',
        'comp.less':       'إخفاء',
        'comp.order':      'اطلب',
        'amalgam.title':   'الأملجم',
        'amalgam.alt':     'منتج أملجم',
        /* --- omni : how to use / additional information --- */
        'omni.how':           'طريقة الاستخدام',
        'omni.u1':            'اعزل السن وحضّر التجويف ببروتوكول اللصق المعتاد.',
        'omni.u2':            'ضع OMNICHROMA — لون واحد لكل مريض من A1 إلى D4.',
        'omni.u3':            'صلّب بالضوء كل طبقة حسب توصيات Tokuyama (عادة 10–20 ثانية).',
        'omni.u4':            'شكّل وأتمّ ولمّع؛ اللون يندمج مع السن المجاور.',
        'omni.extra':         'معلومات إضافية',
        'omni.e1':            'كمبوزيت عالمي بلون واحد — بدون أخذ درجة اللون.',
        'omni.e2':            'حشوات نانوية كروية 260 نانومتر SiO₂–ZrO₂ (تقنية Smart Chromatic).',
        'omni.e3':            'متوفر في سرنجات 4 جم وكبسولات جرعة واحدة.',
        /* --- tetric : how to use / additional information --- */
        'tetric.how':           'طريقة الاستخدام',
        'tetric.u1':            'حضّر التجويف وضع نظام لصق مناسب.',
        'tetric.u2':            'ضع طبقة واحدة بسماكة تصل إلى 4 مم.',
        'tetric.u3':            'صلّب بالضوء حسب تعليمات Ivoclar (حوالي 10 ثوانٍ بمصباح عالي القدرة).',
        'tetric.u4':            'أتمّ ولمّع ثم تحقّق من الإطباق.',
        'tetric.extra':         'معلومات إضافية',
        'tetric.e1':            'كمبوزيت نانو-هجين Bulk Fill للترميمات الخلفية.',
        'tetric.e2':            'عمق بلمرة يصل إلى 4 مم في طبقة واحدة.',
        'tetric.e3':            'قابل للتشكيل بزمن عمل مضبوط.',
        /* --- shine : how to use / additional information --- */
        'shine.how':           'طريقة الاستخدام',
        'shine.u1':            'نظّف وجفّف السطح المرمّم تمامًا.',
        'shine.u2':            'ضع كمية صغيرة من المعجون على قمع مطاطي أو قرص تلميع.',
        'shine.u3':            'لمّع بسرعة منخفضة وضغط خفيف.',
        'shine.u4':            'اشطف وتفقّد اللمعان العالي.',
        'shine.extra':         'معلومات إضافية',
        'shine.e1':            'معجون تلميع للمرحلة النهائية لجميع أسطح الكمبوزيت.',
        'shine.e2':            'تركيبة خالية من الزيوت والمعادن.',
        'shine.e3':            'يزيل التصبّغات السطحية ويترك سطحًا ناعمًا لامعًا.',
        /* --- herc : how to use / additional information --- */
        'herc.how':           'طريقة الاستخدام',
        'herc.u1':            'خرّش المينا والعاج، اشطف وجفّف، ثم ضع البوند وصلّب بالضوء.',
        'herc.u2':            'ضع Herculite Classic في طبقات بسماكة 2 مم تقريبًا.',
        'herc.u3':            'صلّب كل طبقة حسب تعليمات Kerr.',
        'herc.u4':            'شكّل وأتمّ ولمّع.',
        'herc.extra':         'معلومات إضافية',
        'herc.e1':            'كمبوزيت مايكرو-هجين بسجل سريري يتجاوز 15 عامًا.',
        'herc.e2':            '38 درجة عتامة للترميمات الأمامية والخلفية.',
        'herc.e3':            'تشكيل تشريحي ممتاز ومقاومة تآكل عالية.',
        /* --- nexcomp : how to use / additional information --- */
        'nexcomp.how':           'طريقة الاستخدام',
        'nexcomp.u1':            'حضّر التجويف وضع نظام اللصق.',
        'nexcomp.u2':            'ضع Nexcomp في طبقات وشكّل التشريح.',
        'nexcomp.u3':            'صلّب بالضوء حسب إرشادات المصنّع (حوالي 20 ثانية).',
        'nexcomp.u4':            'أتمّ ولمّع.',
        'nexcomp.extra':         'معلومات إضافية',
        'nexcomp.e1':            'كمبوزيت نانو-هجين من Meta Biomed، كوريا.',
        'nexcomp.e2':            'لترميمات الأسنان الأمامية والخلفية.',
        'nexcomp.e3':            'تلميع جيد بفضل الحشوات النانوية.',
        /* --- nexflow : how to use / additional information --- */
        'nexflow.how':           'طريقة الاستخدام',
        'nexflow.u1':            'حضّر التجويف وضع بوند مناسب.',
        'nexflow.u2':            'ضع Nexcomp Flow على أرضية التجويف أو كبطانة رقيقة.',
        'nexflow.u3':            'صلّب بالضوء حسب إرشادات المصنّع.',
        'nexflow.u4':            'غطِّ أو أكمل الترميم ثم أتمّ ولمّع.',
        'nexflow.extra':         'معلومات إضافية',
        'nexflow.e1':            'كمبوزيت سائل منخفض اللزوجة للبطانة والترميمات الصغيرة.',
        'nexflow.e2':            'من إنتاج Meta Biomed، كوريا.',
        'nexflow.e3':            'انسياب مضبوط وسهولة في التعامل.',
        /* --- anycom : how to use / additional information --- */
        'anycom.how':           'طريقة الاستخدام',
        'anycom.u1':            'اعزل وخرّش وضع البوند حسب الحالة.',
        'anycom.u2':            'ضع Any-Com في طبقات رقيقة متتالية.',
        'anycom.u3':            'صلّب بالضوء 10 ثوانٍ (عمق بلمرة 2.5 مم).',
        'anycom.u4':            'شكّل وأتمّ ولمّع.',
        'anycom.extra':         'معلومات إضافية',
        'anycom.e1':            'كمبوزيت نانو-هجين عالمي.',
        'anycom.e2':            'معتم للأشعة بتعامل سلس.',
        'anycom.e3':            'للترميمات الأمامية والخلفية.',
        /* --- alpha : how to use / additional information --- */
        'alpha.how':           'طريقة الاستخدام',
        'alpha.u1':            'حضّر التجويف وضع البوند.',
        'alpha.u2':            'أخرج Alpha-Flow وضعه كطبقة قاعدة رقيقة.',
        'alpha.u3':            'صلّب بالضوء حسب إرشادات المصنّع.',
        'alpha.u4':            'أكمل بناء الترميم ثم أتمّ ولمّع.',
        'alpha.extra':         'معلومات إضافية',
        'alpha.e1':            'كمبوزيت سائل مايكرو-هجين معتم للأشعة ويحتوي على فلورايد.',
        'alpha.e2':            'صناعة أمريكية من Dental Technologies.',
        'alpha.e3':            'متوفر بشكل سرنجة لوضع دقيق.',
        /* --- teeconom : how to use / additional information --- */
        'teeconom.how':           'طريقة الاستخدام',
        'teeconom.u1':            'خرّش واشطف وجفّف، ثم ضع البوند وصلّب بالضوء.',
        'teeconom.u2':            'ضع Te-Econom Plus في طبقات بسماكة تصل إلى 2 مم.',
        'teeconom.u3':            'صلّب بالضوء من 10 ثوانٍ (حسب دليل البلمرة من Ivoclar).',
        'teeconom.u4':            'شكّل وأتمّ ولمّع.',
        'teeconom.extra':         'معلومات إضافية',
        'teeconom.e1':            'كمبوزيت عالمي اقتصادي؛ أكثر من 140 مليون ترميم حول العالم.',
        'teeconom.e2':            'الدرجات A1, A2, A3, A3.5, B2, C3؛ سرنجات 4 جم.',
        'teeconom.e3':            'عتامة عالية للأشعة وزمن عمل طويل.',
        /* --- alphadent : how to use / additional information --- */
        'alphadent.how':           'طريقة الاستخدام',
        'alphadent.u1':            'اعزل وحضّر التجويف؛ خرّش واشطف وجفّف.',
        'alphadent.u2':            'ضع البوند وصلّب بالضوء.',
        'alphadent.u3':            'ضع Alpha-Dent وشكّل التشريح.',
        'alphadent.u4':            'صلّب بالضوء ثم أتمّ ولمّع واضبط الإطباق.',
        'alphadent.extra':         'معلومات إضافية',
        'alphadent.e1':            'كمبوزيت هجين معالج بالضوء ومعتم للأشعة.',
        'alphadent.e2':            'نظام Exact Match لمطابقة دليل ألوان VITA.',
        'alphadent.e3':            'قوة ضغط وتلميع عاليان؛ صناعة أمريكية.',
        /* --- novacompo : how to use / additional information --- */
        'novacompo.how':           'طريقة الاستخدام',
        'novacompo.u1':            'خرّش واشطف وجفّف، ثم ضع البوند وصلّب بالضوء.',
        'novacompo.u2':            'ضع NOVA COMPO-HF كبطانة أو لملء التجاويف الصغيرة.',
        'novacompo.u3':            'صلّب بالضوء حسب تعليمات المصباح (حوالي 20 ثانية).',
        'novacompo.u4':            'أتمّ ولمّع.',
        'novacompo.extra':         'معلومات إضافية',
        'novacompo.e1':            'كمبوزيت سائل معالج بالضوء ومعتم للأشعة (Imicryl، تركيا).',
        'novacompo.e2':            'زمن العمل حوالي 90 ثانية؛ الانكماش حوالي 2.2%.',
        'novacompo.e3':            'سرنجات 3 مل؛ الدرجات تشمل A1.',
        /* --- composan : how to use / additional information --- */
        'composan.how':           'طريقة الاستخدام',
        'composan.u1':            'خرّش واشطف وجفّف؛ ضع البوند وصلّب بالضوء.',
        'composan.u2':            'ضع Composan LCM في طبقات وشكّل التشريح.',
        'composan.u3':            'صلّب كل طبقة حسب تعليمات الاستخدام.',
        'composan.u4':            'أتمّ ولمّع للحصول على لمعان عالٍ.',
        'composan.extra':         'معلومات إضافية',
        'composan.e1':            'كمبوزيت مايكرو-هجين عالمي معالج بالضوء بنسبة حشو 76.5%.',
        'composan.e2':            'الدرجات A1, A2, A3, A3.5, B2, B3, I؛ سرنجات 4 جم.',
        'composan.e3':            'Promedica، ألمانيا؛ مناسب أيضًا لتقنية الحشوة (Inlay).',
        /* --- brilliantng : how to use / additional information --- */
        'brilliantng.how':           'طريقة الاستخدام',
        'brilliantng.u1':            'خرّش واشطف وجفّف، ثم ضع البوند وصلّب بالضوء.',
        'brilliantng.u2':            'اختر سرنجة Duo Shade وضع الكمبوزيت في طبقات.',
        'brilliantng.u3':            'صلّب بالضوء حسب تعليمات الاستخدام.',
        'brilliantng.u4':            'شكّل ثم لمّع للحصول على لمعان عالٍ.',
        'brilliantng.extra':         'معلومات إضافية',
        'brilliantng.e1':            'كمبوزيت نانو-هجين عالمي من Coltene، سويسرا.',
        'brilliantng.e2':            'نظام Duo Shade يمنح درجتين من سرنجة واحدة.',
        'brilliantng.e3':            'درجات العاج والمينا في سرنجات 4 جم.',
        /* --- tmrzfill : how to use / additional information --- */
        'tmrzfill.how':           'طريقة الاستخدام',
        'tmrzfill.u1':            'خرّش واشطف وجفّف، ثم ضع البوند وصلّب بالضوء.',
        'tmrzfill.u2':            'ضع TMR Z FILL 10 في طبقات وشكّل التشريح.',
        'tmrzfill.u3':            'صلّب بالضوء حسب تعليمات الاستخدام.',
        'tmrzfill.u4':            'أتمّ ولمّع لسطح أملس.',
        'tmrzfill.extra':         'معلومات إضافية',
        'tmrzfill.e1':            'كمبوزيت نانو عالمي من Yamakin، اليابان.',
        'tmrzfill.e2':            'إطلاق فلورايد مستمر بتقنية Ceramics Cluster Filler.',
        'tmrzfill.e3':            'قوام Universal و Flow و Low Flow؛ سرنجات 2.6 جم.',
        /* --- anycomflow : how to use / additional information --- */
        'anycomflow.how':           'طريقة الاستخدام',
        'anycomflow.u1':            'خرّش واشطف وجفّف، ثم ضع البوند وصلّب بالضوء.',
        'anycomflow.u2':            'ضع Any-Com Flow للبطانة أو التجاويف الصغيرة أو الحواف.',
        'anycomflow.u3':            'صلّب بالضوء حسب تعليمات الاستخدام.',
        'anycomflow.u4':            'أتمّ ولمّع.',
        'anycomflow.extra':         'معلومات إضافية',
        'anycomflow.e1':            'كمبوزيت سائل نانو-هجين معتم للأشعة من Mediclus، كوريا.',
        'anycomflow.e2':            'الدرجات A1, A2, A3, A3.5, A4, B1, B2, C2, OA2, OA3, OWTTL.',
        'anycomflow.e3':            'سرنجات 2 جم؛ الطقم يشمل Any-Etch و Hi-Bond.',
        /* --- neospectra : how to use / additional information --- */
        'neospectra.how':           'طريقة الاستخدام',
        'neospectra.u1':            'خرّش واشطف وجفّف، ثم ضع لاصقًا عالميًا وصلّب بالضوء.',
        'neospectra.u2':            'ضع Neo Spectra ST وشكّل (LV كريمي أو HV قابل للرصّ).',
        'neospectra.u3':            'صلّب بالضوء حسب تعليمات الاستخدام.',
        'neospectra.u4':            'أتمّ ولمّع للحصول على لمعان عالٍ.',
        'neospectra.extra':         'معلومات إضافية',
        'neospectra.e1':            'كمبوزيت نانو-سيراميك عالمي من Dentsply Sirona، أمريكا.',
        'neospectra.e2':            'حشوة SphereTEC؛ 5 درجات CLOUD تغطي نطاق VITA الـ16.',
        'neospectra.e3':            'متوفر بقوام LV (كريمي) و HV (قابل للرصّ).',
        /* --- xsflow : how to use / additional information --- */
        'xsflow.how':           'طريقة الاستخدام',
        'xsflow.u1':            'خرّش واشطف وجفّف، ثم ضع البوند وصلّب بالضوء.',
        'xsflow.u2':            'ضع XS Flow كبطانة أو للترميمات الصغيرة.',
        'xsflow.u3':            'صلّب بالضوء حوالي 20 ثانية لكل طبقة.',
        'xsflow.u4':            'أتمّ ولمّع.',
        'xsflow.extra':         'معلومات إضافية',
        'xsflow.e1':            'حشوة نانو-هجين لسطح متين وقابل للتلميع.',
        'xsflow.e2':            'صناعة كورية.',
        'xsflow.e3':            'سهولة تعامل وانسياب مضبوط.',
        /* --- charmfil : how to use / additional information --- */
        'charmfil.how':           'طريقة الاستخدام',
        'charmfil.u1':            'خرّش واشطف وجفّف، ثم ضع البوند وصلّب بالضوء.',
        'charmfil.u2':            'ضع CharmFil Flow في طبقات كبطانة أو ترميم صغير.',
        'charmfil.u3':            'صلّب بالضوء حوالي 20 ثانية لكل طبقة.',
        'charmfil.u4':            'أتمّ ولمّع.',
        'charmfil.extra':         'معلومات إضافية',
        'charmfil.e1':            'كمبوزيت سائل من Dentkist، كوريا.',
        'charmfil.e2':            'حجم الحشوة حوالي 0.7 ميكرومتر؛ الانكماش حوالي 2.3%.',
        'charmfil.e3':            'متوفر في 2 × سرنجة 2 جم.',
        /* --- xscomposite : how to use / additional information --- */
        'xscomposite.how':           'طريقة الاستخدام',
        'xscomposite.u1':            'خرّش واشطف وجفّف، ثم ضع البوند وصلّب بالضوء.',
        'xscomposite.u2':            'ضع XS Composite في طبقات وشكّل التشريح.',
        'xscomposite.u3':            'صلّب بالضوء حوالي 20 ثانية لكل طبقة.',
        'xscomposite.u4':            'أتمّ ولمّع.',
        'xscomposite.extra':         'معلومات إضافية',
        'xscomposite.e1':            'كمبوزيت نانو-هجين عالمي للاستخدام الأمامي والخلفي.',
        'xscomposite.e2':            'حشوة نانو-هجين لقوة وتلميع جيدين.',
        'xscomposite.e3':            'من عائلة XS (مع XS Flow)؛ صناعة كورية.',
        /* --- beautifil : how to use / additional information --- */
        'beautifil.how':           'طريقة الاستخدام',
        'beautifil.u1':            'خرّش واشطف وجفّف، ثم ضع البوند وصلّب بالضوء.',
        'beautifil.u2':            'ضع Beautifil II LS في طبقات؛ قابل للرصّ وغير لاصق.',
        'beautifil.u3':            'صلّب بالضوء حسب تعليمات Shofu.',
        'beautifil.u4':            'أتمّ ولمّع؛ تقنية Giomer تطلق الفلورايد مع الوقت.',
        'beautifil.extra':         'معلومات إضافية',
        'beautifil.e1':            'كمبوزيت Giomer عالمي من Shofu، اليابان.',
        'beautifil.e2':            'إطلاق وإعادة شحن فلورايد مستمر بتقنية Giomer الحيوية.',
        'beautifil.e3':            'انكماش حجمي منخفض (0.85%) وإجهاد انكماش (2.72 ميجاباسكال).',
        /* --- omniblocker : how to use / additional information --- */
        'omniblocker.how':           'طريقة الاستخدام',
        'omniblocker.u1':            'اعزل وحضّر التجويف؛ ضع اللاصق وصلّب بالضوء.',
        'omniblocker.u2':            'ضع طبقة رقيقة من OMNICHROMA BLOCKER حيث يلزم الإخفاء.',
        'omniblocker.u3':            'صلّب طبقة الحاجب بالضوء.',
        'omniblocker.u4':            'ضع OMNICHROMA أو الترميم فوقه، ثم أتمّ ولمّع.',
        'omniblocker.extra':         'معلومات إضافية',
        'omniblocker.e1':            'حاجب معتم مصمّم لـ OMNICHROMA (Tokuyama، اليابان).',
        'omniblocker.e2':            'يُستخدم كطبقة رقيقة على الجدار اللساني في حالات الفئة III/IV الكبيرة.',
        /* --- collflow : how to use / additional information --- */
        'collflow.how':           'طريقة الاستخدام',
        'collflow.u1':            'خرّش واشطف وجفّف، ثم ضع البوند وصلّب بالضوء.',
        'collflow.u2':            'ضع Colltin-Flow في طبقات كبطانة أو ترميم صغير.',
        'collflow.u3':            'صلّب بالضوء حوالي 20 ثانية لكل طبقة.',
        'collflow.u4':            'أتمّ ولمّع.',
        'collflow.extra':         'معلومات إضافية',
        'collflow.e1':            'انسياب سهل وملس لاستخدام البطانة والتجاويف الصغيرة.',
        'collflow.e2':            'معتم للأشعة، فمن السهل متابعته بالأشعة السينية.',
        'collflow.e3':            'صناعة سويسرية؛ يوزّع إقليميًا عبر Vitadent.',
        /* --- estelite : how to use / additional information --- */
        'estelite.how':           'طريقة الاستخدام',
        'estelite.u1':            'اعزل وحضّر التجويف؛ خرّش واشطف وجفّف.',
        'estelite.u2':            'ضع البوند وصلّب بالضوء.',
        'estelite.u3':            'ضع ESTELITE Alpha في طبقات وشكّل التشريح.',
        'estelite.u4':            'صلّب بالضوء ثم أتمّ ولمّع للحصول على لمعان عالٍ.',
        'estelite.extra':         'معلومات إضافية',
        'estelite.e1':            'كمبوزيت بحشوات كروية فائقة الصغر من Tokuyama، اليابان.',
        'estelite.e2':            '4 درجات أساسية + 2 شفافة (opalescent) تغطي معظم الحالات.',
        'estelite.e3':            'معتم للأشعة بقابلية تلميع استثنائية.',
        /* --- iflow : how to use / additional information --- */
        'iflow.how':           'طريقة الاستخدام',
        'iflow.u1':            'خرّش واشطف وجفّف، ثم ضع البوند وصلّب بالضوء.',
        'iflow.u2':            'ضع i-FLOW Bulk Fill في طبقة واحدة بسماكة تصل إلى 4 مم.',
        'iflow.u3':            'صلّب بالضوء حوالي 20 ثانية لكل طبقة.',
        'iflow.u4':            'أضف طبقة تغطية من كمبوزيت عالمي، ثم أتمّ ولمّع.',
        'iflow.extra':         'معلومات إضافية',
        'iflow.e1':            'كمبوزيت سائل نانو للحشو الجماعي معالج بالضوء.',
        'iflow.e2':            'يتيح عمق بلمرة 4 مم مع انكماش منخفض.',
        'iflow.e3':            'العلامة i-dental؛ صناعة ليتوانية.',

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

        /* --- Any-Com Flow كمبوزيت سائل --- */
        'af.title':        'Any-Com Flow',
        'af.tag':          'كمبوزيت سائل · سرنجة 2 جم · صناعة كورية',
        'af.p1':           'مادة كمبوزيت هجينة معالجة بالضوء وعالية العتامة للأشعة لعلاج ترميمي للأسنان الأمامية والخلفية.',
        'af.ft':           'المزايا',
        'af.f1':           'لا ينزلق وغير لاصق',
        'af.f2':           'خصائص فيزيائية ممتازة',
        'af.f3':           'مطابقة الألوان لدليل ألوان VITA',
        'af.f4':           'انكماش أقل (منخفض 1.5%)',
        'af.f5':           'تعامل مثالي',
        'af.f6':           'قابلية تشكيل ممتازة لاستعادة اللون والوظيفة الطبيعية',
        'af.img':          'كمبوزيت Any-Com Flow السائل',

        /* --- Neo Spectra ST كمبوزيت نانو-سيراميك --- */
        'ns.title':        'Neo Spectra ST',
        'ns.tag':          'كمبوزيت نانو-سيراميك عالمي · تقنية حشو SphereTEC',
        'ns.p1':           'Neo Spectra ST كمبوزيت نانو-سيراميك عالمي معالج بالضوء وعالي العتامة للأشعة بتقنية حشو SphereTEC المبتكرة، مخصص للترميمات المباشرة وغير المباشرة.',
        'ns.p2':           'تقنية SphereTEC تستخدم حشوات كروية مُحبّبة مع نظام راتنجي مُحسّن لرفع الأداء في التعامل والجمالية والثبات.',
        'ns.hi':           'أبرز المزايا',
        'ns.h1':           'خمس درجات CLOUD عالمية تغطي كامل نطاق VITA 1',
        'ns.h2':           'تعامل مفضّل: خيارات اللزوجة المنخفضة (LV) أو العالية (HV)، كلاهما غير لاصق مع تكيّف وتشكيل ممتازين ومقاومة للانزلاق (Slump)',
        'ns.h3':           'نظام ألوان مبسّط — 5 درجات CLOUD عالمية',
        'ns.h4':           'جمالية تدوم: تلميع سريع وسهل مع مقاومة عالية للتصبّغ ومتانة مثبتة',
        'ns.ind':          'الاستخدامات',
        'ns.i1':           'الترميمات المباشرة لجميع فئات التجاويف في الأسنان الأمامية والخلفية',
        'ns.i2':           'التصنيع غير المباشر للحشوات (Inlays) و Onlays',
        'ns.img':          'كمبوزيت Neo Spectra ST نانو-سيراميك',

        /* --- XS Flow كمبوزيت سائل نانو-هجين --- */
        'ef.title':        'XS Flow',
        'ef.tag':          'كمبوزيت سائل · سرنجة 2 جم × 2 · صناعة كورية',
        'ef.p1':           'XS Flow كمبوزيت سائل نانو-هجين معالج بالضوء وعالي العتامة للأشعة، متوفر في سرنجتين 2 جم.',
        'ef.hi':           'أبرز المزايا',
        'ef.h1':           'كمبوزيت سائل نانو-هجين',
        'ef.h2':           'معالج بالضوء وعالي العتامة للأشعة',
        'ef.h3':           'سرنجتان 2 جم',
        'ef.h4':           'متوفر بدرجات VITA: A1، A2، A3، A3.5، B2',
        'ef.img':          'كمبوزيت XS Flow السائل',

        /* --- CharmFil Flow كمبوزيت سائل --- */
        'cf.title':        'CharmFil Flow',
        'cf.tag':          'كمبوزيت سائل · سرنجة 2 جم × 2 · صناعة كورية',
        'cf.p1':           'CharmFil Flow كمبوزيت سائل معالج بالضوء يعزّز خصائص فيزيائية مثل السيولة والمرونة، مما يسهّل التعامل معه.',
        'cf.hi':           'أبرز المزايا',
        'cf.h1':           'كمبوزيت سائل معالج بالضوء',
        'cf.h2':           'سيولة ومرونة مُعزّزتان',
        'cf.h3':           'مثالي للحشوات الصغيرة وترميمات عنق السن',
        'cf.h4':           'سرنجتان 2 جم',
        'cf.img':          'كمبوزيت CharmFil Flow السائل',

        /* --- XS Composite كمبوزيت نانو-هجين --- */
        'xc.title':        'XS Composite',
        'xc.tag':          'كمبوزيت نانو-هجين معالج بالضوء · سرنجة 4 جم · صناعة كورية',
        'xc.p1':           'كمبوزيت نانو-هجين معالج بالضوء، متوفر في سرنجة 4 جم.',
        'xc.hi':           'أبرز المزايا',
        'xc.h1':           'كمبوزيت نانو-هجين معالج بالضوء',
        'xc.h2':           'سرنجة 4 جم',
        'xc.h3':           'صناعة كورية',
        'xc.img':          'كمبوزيت XS Composite نانو-هجين',

        /* --- Beautifil II LS كمبوزيت عالمي بتقنية Giomer --- */
        'bi.title':        'Beautifil II LS',
        'bi.tag':          'كمبوزيت عالمي · تقنية Giomer',
        'bi.p1':           'مخصص لجميع فئات الترميم (I–V)، Beautifil II LS كمبوزيت عالمي متماسك وسهل التعامل وقابل للتراكم وغير لاصق، مُصمّم لتقليل انكماش البلمرة وإجهاد الانكماش الناتج.',
        'bi.p2':           'بمتانة وجمالية فائقتين، مثالي للترميمات الأمامية والخلفية، ويوفّر كفاءة سريرية موثوقة وأقصى أداء.',
        'bi.ft':           'المزايا',
        'bi.f1':           'تعامل حائز على جوائز — قابل للتراكم وغير لاصق',
        'bi.f2':           'يلمع في لحظة',
        'bi.f3':           'إطلاق/إعادة شحن فلورايد مستمر بتقنية Giomer الحيوية النشطة',
        'bi.f4':           'قوة عالية ومقاومة تآكل عالية',
        'bi.f5':           'جمالية شبيهة بالأسنان مع فلورة طبيعية وتأثير الحرباء (Chameleon)',
        'bi.f6':           'انكماش حجمي منخفض (0.85%) وإجهاد انكماش (2.72 ميجاباسكال)',
        'bi.img':          'كمبوزيت Beautifil II LS مع تقنية Giomer',

        /* --- OMNICHROMA BLOCKER حاجب معتم لـ OMNICHROMA --- */
        'ob.title':        'OMNICHROMA BLOCKER',
        'ob.tag':          'حاجب معتم لـ OMNICHROMA · سرنجة 4 جم · صناعة يابانية',
        'ob.p1':           'OMNICHROMA BLOCKER حاجب معتم لـ OMNICHROMA — لون واحد، كل الدرجات، كل الفئات! يلغي عملية اختيار اللون المستهلكة للوقت.',
        'ob.ind':          'الاستخدامات',
        'ob.i1':           'منع تعارض مطابقة اللون في الترميمات الكبيرة من الفئة III و IV',
        'ob.i2':           'إخفاء تصبّغات الملغم',
        'ob.i3':           'إخفاء العاج والأسنان الداكنة',
        'ob.i4':           'إعادة بناء سن عالي العتامة',
        'ob.about':        'عن OMNICHROMA',
        'ob.a1':           'أول كمبوزيت عالمي في العالم يطابق لون أي سن من A1 إلى D4',
        'ob.a2':           'تقنية Smart Chromatic بحشوات نانوية كروية متجانسة تطابق جميع درجات VITA الكلاسيكية الـ16',
        'ob.a3':           'يلغي إجراء أخذ درجة اللون ويقلل مخزون الكمبوزيت',
        'ob.a4':           'يطابق الدرجات حتى قبل وبعد التبييض',
        'ob.a5':           'انكماش بلمرة منخفض مع قوة ومقاومة تآكل وتعامل وتلميع استثنائي',
        'ob.a6':           'مناسب لجميع فئات الترميم المباشر وإغلاق الفراغات وإصلاح البورسلين/الكمبوزيت',
        'ob.img':          'حاجب OMNICHROMA BLOCKER المعتم',

        /* --- Colltin-Flow كمبوزيت سائل --- */
        'ct.title':        'Colltin-Flow',
        'ct.tag':          'كمبوزيت سائل · سرنجة 2.3 جم · صناعة سويسرية',
        'ct.p1':           'Colltin-Flow كمبوزيت سائل معالج بالضوء ومعتم للأشعة، متوفر في سرنجة 2.3 جم، صناعة سويسرية.',
        'ct.hi':           'أبرز المزايا',
        'ct.h1':           'كمبوزيت سائل',
        'ct.h2':           'سرنجة 2.3 جم',
        'ct.h3':           'صناعة سويسرية',
        'ct.img':          'كمبوزيت Colltin-Flow السائل',

        /* --- ESTELITE Alpha كمبوزيت عالمي (Tokuyama) --- */
        'ea.title':        'ESTELITE Alpha',
        'ea.tag':          'Supra-Nano Spherical Filler · كمبوزيت عالمي',
        'ea.p1':           'يعيد ESTELITE Alpha خلق الأسنان بشكل طبيعي جدًا، مندمجًا مع الأسنان المجاورة باستخدام 4 درجات أساسية ودرجتين شفافتين (Opalescent) في معظم الحالات، ويعطي سطحًا ناعمًا جدًا بلمعان فائق بعد تلميع سهل.',
        'ea.p2':           'هذه الخصائص ممكنة بفضل حشواته النانوية الكروية فائقة الصغر (Supra-Nano Spherical Filler) ذات معامل انكسار مضبوط.',
        'ea.ben':          'المزايا',
        'ea.b1':           'قابلية تلميع استثنائية',
        'ea.b2':           'ثبات لمعان عالي مع الوقت',
        'ea.b3':           'نطاق مطابقة واسع لتدرجات الأسنان (تأثير الحرباء)',
        'ea.b4':           'مقاومة تآكل عالية',
        'ea.b5':           'تآكل منخفض للأسنان المقابلة',
        'ea.ind':          'الاستخدامات',
        'ea.i1':           'ترميمات أمامية وخلفية',
        'ea.i2':           'قشرة كمبوزيت',
        'ea.i3':           'إغلاق الفراغات (Diastema)',
        'ea.i4':           'إصلاح كمبوزيت / بورسلين',
        'ea.pkg':          'محتويات العبوة',
        'ea.pg1':          'سرنجتان (3.8 جم) بدرجة A2',
        'ea.pg2':          'سرنجة واحدة (3.8 جم) بدرجة A3',
        'ea.pg3':          'سرنجة واحدة OA2 (معتمة)',
        'ea.img':          'كمبوزيت ESTELITE Alpha العالمي',

        /* --- i-FLOW Bulk Fill كمبوزيت فلوابل نانو للحشو الجماعي --- */
        'if.title':        'i-FLOW Bulk Fill',
        'if.tag':          'كمبوزيت فلوابل نانو للحشو الجماعي معالج بالضوء',
        'if.p1':           'i-FLOW Bulk Fill كمبوزيت فلوابل نانو للحشو الجماعي (Bulk Fill) معالج بالضوء، يتيح عمق بلمرة 4 مم.',
        'if.ind':          'الاستخدامات',
        'if.i1':           'للوضع الأولي في الترميمات المباشرة من الفئة I و II',
        'if.i2':           'ترميم تجاويف التحضير طفيفة التدخل',
        'if.i3':           'ترميم تجاويف الفئة III و V',
        'if.i4':           'إصلاح عيوب المينا الصغيرة وعيوب الترميمات غير المباشرة التجميلية',
        'if.i5':           'لسد الحفر والشقوق (Pits and fissures)',
        'if.adv':          'المزايا',
        'if.a1':           'يتيح عمق 4 مم',
        'if.a2':           'خصائص انسياب ممتازة',
        'if.a3':           'جمالية عالية',
        'if.a4':           'مقاومة عالية',
        'if.a5':           'قابلية تلميع عالية',
        'if.a6':           'انكماش منخفض',
        'if.a7':           'حشوة نانو',
        'if.a8':           'معتم للأشعة',
        'if.cp':           'الطريقة التقليدية',
        'if.cp1':          'اللصق (Bonding)',
        'if.cp2':          'بطانة فلوابل (Flowable liner)',
        'if.cp3':          'كمبوزيت عالمي — اللفة 1',
        'if.cp4':          'كمبوزيت عالمي — اللفة 2',
        'if.cp5':          'كمبوزيت عالمي — اللفة 3',
        'if.ip':           'طريقة i-FLOW Bulk Fill',
        'if.ip1':          'اللصق (Bonding)',
        'if.ip2':          'i-FLOW Bulk Fill',
        'if.ip3':          'كمبوزيت عالمي (طبقة تغطية)',
        'if.img':          'كمبوزيت i-FLOW Bulk Fill نانو فلوابل',

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
