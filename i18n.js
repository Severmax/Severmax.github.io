(function () {
  var STORAGE_KEY = "severmax-lang";

  var dict = {
    uk: {
      "meta.title.home": "Максим Северенко — Severmax",
      "meta.title.products": "Власні продукти — Максим Северенко",
      "meta.title.boss": "Boss Tapper — Максим Северенко",
      "meta.title.tiktok": "TikTok Live Tower Defense — Максим Северенко",
      "meta.title.cat": "Cat Jump — Максим Северенко",
      "meta.title.cat_privacy": "Privacy Policy — Cat Jump",

      "nav.cases": "Кейси",
      "nav.products": "Власні продукти",
      "nav.home": "На головну",
      "nav.lang": "EN",

      "home.eyebrow": "Flutter · Android / iOS · ФОП Україна",
      "home.lead": "Мобільні продукти з відчуттям якості — від ідеї до публікації.",
      "home.bio1": "Розробляю кросплатформні застосунки на Flutter для Android та iOS. Закриваю повний цикл: архітектура, UI за макетами, Firebase / бекенд-інтеграції, авторизацію, підписки, аналітику та публікацію в App Store і Google Play.",
      "home.bio2_before": "Працюю з продуктами різного масштабу — від MVP до застосунків із тисячами користувачів. Окремо розвиваю ",
      "home.bio2_link": "власні продукти",
      "home.bio2_after": ".",
      "home.focus1": "Монетизація: RevenueCat, In-App Purchases, динамічні paywall",
      "home.focus2": "Дані й інфра: Firebase, Supabase, Cloud Functions, Remote Config",
      "home.focus3": "Якість: Clean Architecture, Bloc/Cubit, тести, стабільні релізи",
      "home.write": "Написати",
      "home.see_cases": "Дивитись кейси",
      "home.own_products": "Власні продукти",
      "home.stat_users": "користувачів",
      "home.stat_platforms": "& Android",
      "home.stat_focus": "фокус",

      "cases.title": "Кейси",
      "cases.lead": "Продукти, де важливі стабільність, монетизація і акуратний UX.",

      "case.tysha.meta": "Стартап · iOS / Android · 60 000+",
      "case.tysha.title": "Тиша — медитації українською",
      "case.tysha.p1": "Мобільний застосунок з медитаціями: практики для спокою, роботи з тривогою та щоденної турботи про психічне здоров’я.",
      "case.tysha.p2": "Розробка, техпідтримка й масштабування. Єдине логування подій у Mixpanel і Firebase, підписки та динамічні paywall через RevenueCat, Cloud Functions, Remote Config, pixel-perfect UI з Figma та внутрішні автотести.",

      "case.mynames.meta": "Lead · повний цикл · App Store + Google Play",
      "case.mynames.title": "MyNames — твоя візитка",
      "case.mynames.p1": "Цифрові візитки з QR і живим профілем. Повна розробка з нуля — від архітектури до публікації в сторах.",
      "case.mynames.p2": "Firebase, drag-and-drop редактор, RevenueCat + webhooks, Sign in with Apple/Google і промо-лендинг продукту.",

      "case.mynames_web.meta": "Flutter Web · кабінет · my-names.com.ua",
      "case.mynames_web.title": "MyNames Web",
      "case.mynames_web.p1": "Веб-кабінет для керування цифровими візитками, QR-кодами та статистикою. Split-screen логін з Google / Apple, спільні дані з мобільним застосунком через Firestore.",
      "case.mynames_web.p2": "Desktop-first UX: візитки, архів, налаштування, редактор із live preview, аналітика (перегляди, шери, QR, кліки), тарифи та оплата через RevenueCat Web Billing.",

      "case.tt.meta": "Ініціатор · MVP · Clean Architecture",
      "case.tt.title": "Together Tales — застосунок для пар",
      "case.tt.p1": "Гейміфікований застосунок для пар: спільні завдання, поради та «привітатися» одним дотиком. Самостійно від ідеї до MVP.",
      "case.tt.p2": "Cubit/Bloc, Clean Architecture, Firebase Auth, зв’язування пари за кодом, Supabase для даних і синхронізації.",

      "review.title": "Відгук",
      "review.lead": "З Freelancehunt",
      "review.quote": "Якісна та швидка робота. Рекомендую виконавця!",
      "review.meta": "Сергій Бабак · «Додаток-скан» · 5.0",

      "languages.title": "Мови",
      "languages.lead": "Спілкування з командою й клієнтами",
      "lang.uk": "Українська",
      "lang.uk_level": "носій",
      "lang.ru": "Русский",
      "lang.ru_level": "продвинутий",
      "lang.en": "English",
      "lang.en_level": "середній",
      "lang.sk": "Slovenčina",
      "lang.sk_level": "початковий",

      "modal.title": "Написати",
      "modal.lead": "Оберіть зручний спосіб зв’язку.",
      "modal.close": "Закрити",

      "products.eyebrow": "Product studio",
      "products.title": "Власні продукти",
      "products.lead": "Ігри та застосунки, які розвиваю самостійно — від ідеї до публікації.",
      "products.intro": "Короткий огляд продуктів. Відкрийте сторінку проєкту, щоб побачити деталі, стек і статус.",
      "products.more": "Детальніше",
      "products.gameplay": "Геймплей у TikTok",
      "products.write": "Написати",

      "boss.meta": "Гра · Android · Google Play",
      "boss.title_short": "Boss Tapper — «Мисливець Дотику»",
      "boss.card_p": "Швидка тап-гра: боси, комбо, покращення удару та лідерборди міста й світу.",
      "boss.lead": "«Мисливець Дотику» — тапай босів, тримай комбо й змагайся в рейтингу.",
      "boss.about": "Про продукт",
      "boss.about_p1": "Casual тап-гра для Android: гравець б’є босів дотиками, збирає очки, відкриває сильніших ворогів і тримає особисті рекорди.",
      "boss.about_p2": "Фокус на швидкій сесії одним пальцем — зручно зайти на кілька хвилин і одразу позмагатися з іншими.",
      "boss.gameplay": "Геймплей",
      "boss.g1": "Тап по босах і система комбо",
      "boss.g2": "Прогрес сили удару / хвилі",
      "boss.g3": "Таблиці лідерів: місто, країна, світ",
      "boss.g4": "Нікнейм гравця без складного акаунта",
      "boss.tech": "Технології",
      "boss.t1": "Godot 4 — ігровий клієнт",
      "boss.t2": "Firebase — анонімна автентифікація, збереження рекордів",
      "boss.t3": "Геолокація / IP-гео — місто й країна для рейтингів",
      "boss.t4": "Google AdMob — interstitial після програшу",
      "boss.t5": "Android AAB / Play Console — релізний пайплайн",
      "boss.monetization": "Монетизація й стор",
      "boss.mon_p": "Реклама через AdMob (виробничі блоки), privacy policy на окремому сайті, Data Safety та store assets підготовлені під Google Play.",
      "boss.back": "← Усі продукти",

      "tiktok.meta": "Гра · TikTok LIVE · Flutter / Flame",
      "tiktok.card_p": "Інтерактивна tower defense для стрімів: глядачі спавнять монстрів, герой захищає місто.",
      "tiktok.sale_strong": "Статус:",
      "tiktok.sale_rest": " проєкт на паузі — можна купити права або домовитись про %.",
      "tiktok.lead": "Інтерактивна tower defense для ефіру: глядачі впливають на бій у реальному часі.",
      "tiktok.about": "Про продукт",
      "tiktok.about_p": "Гра для стрімерів TikTok LIVE у форматі 9:16 під OBS. Глядачі спавнять монстрів через ефір (коментарі, лайки→meter, гіфти), а автономний герой сам цілиться й захищає місто. Стрімер у бій не втручається — тримає ефір і керує сесією з окремої адмін-панелі.",
      "tiktok.gameplay": "Геймплей",
      "tiktok.g1": "Одне місто з HP внизу екрана; монстри йдуть вертикальною доріжкою зверху вниз",
      "tiktok.g2": "Типи монстрів: weak / strong / boss; нік глядача над юнітом",
      "tiktok.g3": "Герой стоїть збоку перед містом і стріляє автоматично",
      "tiktok.g4": "Heal-гіфт може підлатати місто; HP = 0 → кінець раунду",
      "tiktok.g5": "Рестарт і спавн — з Admin-вікна (не в стрімі)",
      "tiktok.streamer": "Для стрімера",
      "tiktok.s1": "Game-вікно 9:16 для Window Capture в OBS",
      "tiktok.s2": "Окрема Admin-панель: спавн, рестарт, статус LIVE",
      "tiktok.s3": "Підключення LIVE webhook / like meter",
      "tiktok.s4": "Мапінг TikTok-подій на типи монстрів (gift map)",
      "tiktok.tech": "Технології",
      "tiktok.t1": "Flutter Desktop (macOS) — app shell і два вікна",
      "tiktok.t2": "Flame — ігровий цикл, спрайти, колізії",
      "tiktok.t3": "LiveEventSource — mock і TikTok connector через event stream",
      "tiktok.t4": "Spawn queue — тротлінг спавну без блокування game loop",
      "tiktok.status": "Статус і продаж",
      "tiktok.status_p": "Зараз проєкт не розвивається. Готове ядро гри + Admin + LIVE-інтеграція (phase 0–6 майже закриті). Можу продати права власності за фіксовану суму або за відсоток від майбутнього доходу (revenue share) — якщо цікаво запустити продукт далі або інтегрувати у свій стрім-бренд.",
      "tiktok.open": "Відкрити в TikTok",
      "tiktok.write_tg": "Написати в Telegram",
      "tiktok.back": "← Усі продукти",

      "cat.meta": "Гра · Android · Google Play",
      "cat.title_short": "Cat Jump",
      "cat.card_p": "Вертикальна аркада: стрибай з котом вище, керуй нахилом або тапом, змагайся в тижневому топі.",
      "cat.lead": "Стрибай вище з котом: платформи, джетпак і тижневий топ.",
      "cat.about": "Про продукт",
      "cat.about_p1": "Вертикальна аркада у дусі doodle-jump для Android: кіт стрибає платформами вгору, уникає птахів і збирає джетпак, щоб підлетіти ще вище.",
      "cat.about_p2": "Керування нахилом телефону або тапом по екрану, локальний рекорд і тижневий онлайн-лідерборд. Короткі сесії — ідеально «на пару хвилин».",
      "cat.gameplay": "Геймплей",
      "cat.g1": "Стрибки платформами вгору з обгорткою по краях екрана",
      "cat.g2": "Нахил (акселерометр) або тап ліворуч / праворуч",
      "cat.g3": "Джетпак, птахи з високого рахунку, зміна теми «космос»",
      "cat.g4": "Одне відродження за rewarded-рекламу; interstitial на фінальному Game Over",
      "cat.g5": "Тижневий топ-25 і «Моє місце» через Firestore",
      "cat.tech": "Технології",
      "cat.t1": "Godot 4.7 — ігровий клієнт (GDScript)",
      "cat.t2": "Firebase Firestore — тижневі результати без логіну",
      "cat.t3": "Google AdMob (Poing) — rewarded + interstitial",
      "cat.t4": "Локалізація: UK, EN, DE, PL, CS, SK, PT, IT, ES, FR",
      "cat.t5": "Android AAB / Play Console — релізний пайплайн",
      "cat.monetization": "Монетизація й стор",
      "cat.mon_p": "Реклама через AdMob (rewarded для revive, interstitial на кінці забігу). Privacy policy і Data Safety підготовлені під Google Play.",
      "cat.back": "← Усі продукти",

      "privacy.title": "Політика конфіденційності",
      "privacy.updated": "Оновлено: 17 вересня 2026",
      "privacy.back": "← Cat Jump",
      "privacy.intro": "Ця політика описує, які дані збирає та обробляє застосунок Cat Jump («Ми», «Розробник» — Максим Северенко / Severmax).",
      "privacy.s1": "1. Які дані ми обробляємо",
      "privacy.s1_a": "Нікнейм — ім’я, яке ви вводите для тижневого лідерборду.",
      "privacy.s1_b": "Ідентифікатор гравця — технічний ID на основі даних пристрою (не логін Google/акаунт).",
      "privacy.s1_c": "Ігрові результати — рахунок, тижневий рекорд, місце в топі.",
      "privacy.s1_d": "Локальні налаштування — керування, звук, мова, локальний рекорд (зберігаються на пристрої).",
      "privacy.s1_e": "Датчики руху — акселерометр / gravity лише для керування нахилом у грі; ці дані не надсилаються на наші сервери.",
      "privacy.s2": "2. Реклама (Google AdMob)",
      "privacy.s2_p": "У грі показується реклама Google AdMob (rewarded для відродження та interstitial після завершення забігу). Google може збирати ідентифікатори реклами, дані про пристрій та взаємодію з оголошеннями згідно зі своєю політикою. Докладніше: <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Google Privacy Policy</a> та <a href=\"https://support.google.com/admob/answer/6128543\" target=\"_blank\" rel=\"noopener noreferrer\">AdMob &amp; privacy</a>.",
      "privacy.s3": "3. Для чого потрібні дані",
      "privacy.s3_a": "Показати ваш нік і місце в тижневому лідерборді",
      "privacy.s3_b": "Оновити кращий рахунок за тиждень без дублікатів",
      "privacy.s3_c": "Зберегти налаштування гри на пристрої",
      "privacy.s3_d": "Показувати релевантну рекламу через AdMob",
      "privacy.s4": "4. Зберігання та сторонні сервіси",
      "privacy.s4_p": "Онлайн-результати зберігаються в Google Firebase (Firestore). Локальні налаштування — лише на вашому пристрої. Ми не продаємо персональні дані третім сторонам.",
      "privacy.s5": "5. Діти",
      "privacy.s5_p": "Cat Jump не призначений спеціально для дітей віком до 13 років. Ми свідомо не збираємо дані дітей. Якщо ви батько/опікун і вважаєте, що дитина надіслала дані — напишіть нам, і ми допоможемо їх видалити.",
      "privacy.s6": "6. Ваші права",
      "privacy.s6_p": "Ви можете скинути локальний рекорд у налаштуваннях гри. Щоб попросити видалення запису з онлайн-лідерборду або поставити питання щодо даних — напишіть на електронну пошту нижче.",
      "privacy.s7": "7. Контакти",
      "privacy.s7_p": "Розробник:",
      "privacy.to_product": "До сторінки продукту"
    },

    en: {
      "meta.title.home": "Maksym Severenko — Severmax",
      "meta.title.products": "Own products — Maksym Severenko",
      "meta.title.boss": "Boss Tapper — Maksym Severenko",
      "meta.title.tiktok": "TikTok Live Tower Defense — Maksym Severenko",
      "meta.title.cat": "Cat Jump — Maksym Severenko",
      "meta.title.cat_privacy": "Privacy Policy — Cat Jump",

      "nav.cases": "Cases",
      "nav.products": "Own products",
      "nav.home": "Home",
      "nav.lang": "UA",

      "home.eyebrow": "Flutter · Android / iOS · Sole proprietor, Ukraine",
      "home.lead": "Mobile products with a sense of quality — from idea to release.",
      "home.bio1": "I build cross-platform Flutter apps for Android and iOS. Full cycle: architecture, UI from designs, Firebase / backend integrations, auth, subscriptions, analytics, and App Store / Google Play publishing.",
      "home.bio2_before": "I work on products of different scale — from MVPs to apps with thousands of users. Separately I develop ",
      "home.bio2_link": "my own products",
      "home.bio2_after": ".",
      "home.focus1": "Monetization: RevenueCat, In-App Purchases, dynamic paywalls",
      "home.focus2": "Data & infra: Firebase, Supabase, Cloud Functions, Remote Config",
      "home.focus3": "Quality: Clean Architecture, Bloc/Cubit, tests, stable releases",
      "home.write": "Contact",
      "home.see_cases": "See cases",
      "home.own_products": "Own products",
      "home.stat_users": "users",
      "home.stat_platforms": "& Android",
      "home.stat_focus": "focus",

      "cases.title": "Cases",
      "cases.lead": "Products where stability, monetization, and careful UX matter.",

      "case.tysha.meta": "Startup · iOS / Android · 60,000+",
      "case.tysha.title": "Tysha — meditations in Ukrainian",
      "case.tysha.p1": "A mobile meditation app: practices for calm, anxiety support, and daily mental health care.",
      "case.tysha.p2": "Development, maintenance, and scaling. Unified event logging to Mixpanel and Firebase, subscriptions and dynamic paywalls via RevenueCat, Cloud Functions, Remote Config, pixel-perfect Figma UI, and internal autotests.",

      "case.mynames.meta": "Lead · full cycle · App Store + Google Play",
      "case.mynames.title": "MyNames — your digital card",
      "case.mynames.p1": "Digital business cards with QR and a live profile. Built from scratch — from architecture to store release.",
      "case.mynames.p2": "Firebase, drag-and-drop editor, RevenueCat + webhooks, Sign in with Apple/Google, and a product landing page.",

      "case.mynames_web.meta": "Flutter Web · cabinet · my-names.com.ua",
      "case.mynames_web.title": "MyNames Web",
      "case.mynames_web.p1": "A web cabinet to manage digital cards, QR codes, and analytics. Split-screen Google / Apple login, shared Firestore data with the mobile app.",
      "case.mynames_web.p2": "Desktop-first UX: cards, archive, settings, editor with live preview, analytics (views, shares, QR, clicks), plans and payments via RevenueCat Web Billing.",

      "case.tt.meta": "Initiator · MVP · Clean Architecture",
      "case.tt.title": "Together Tales — couples app",
      "case.tt.p1": "A gamified couples app: shared tasks, tips, and say-hello in one tap. From idea to MVP on my own.",
      "case.tt.p2": "Cubit/Bloc, Clean Architecture, Firebase Auth, partner pairing by code, Supabase for data and sync.",

      "review.title": "Review",
      "review.lead": "From Freelancehunt",
      "review.quote": "High-quality and fast work. I recommend this freelancer!",
      "review.meta": "Serhii Babak · “Scan app” · 5.0",

      "languages.title": "Languages",
      "languages.lead": "Communication with teams and clients",
      "lang.uk": "Ukrainian",
      "lang.uk_level": "native",
      "lang.ru": "Russian",
      "lang.ru_level": "advanced",
      "lang.en": "English",
      "lang.en_level": "intermediate",
      "lang.sk": "Slovak",
      "lang.sk_level": "beginner",

      "modal.title": "Contact",
      "modal.lead": "Choose a convenient way to reach me.",
      "modal.close": "Close",

      "products.eyebrow": "Product studio",
      "products.title": "Own products",
      "products.lead": "Games and apps I build myself — from idea to release.",
      "products.intro": "A short overview. Open a product page for details, stack, and status.",
      "products.more": "Details",
      "products.gameplay": "Gameplay on TikTok",
      "products.write": "Contact",

      "boss.meta": "Game · Android · Google Play",
      "boss.title_short": "Boss Tapper — “Touch Hunter”",
      "boss.card_p": "A fast tap game: bosses, combos, hit upgrades, and city/world leaderboards.",
      "boss.lead": "“Touch Hunter” — tap bosses, keep your combo, climb the ranks.",
      "boss.about": "About",
      "boss.about_p1": "A casual Android tap game: hit bosses, earn score, unlock stronger enemies, and keep personal records.",
      "boss.about_p2": "Built for short one-finger sessions — jump in for a few minutes and compete right away.",
      "boss.gameplay": "Gameplay",
      "boss.g1": "Boss tapping and combo system",
      "boss.g2": "Hit power / wave progression",
      "boss.g3": "Leaderboards: city, country, world",
      "boss.g4": "Player nickname without a heavy account flow",
      "boss.tech": "Tech",
      "boss.t1": "Godot 4 — game client",
      "boss.t2": "Firebase — anonymous auth, score storage",
      "boss.t3": "Geo / IP geo — city and country for rankings",
      "boss.t4": "Google AdMob — interstitial after defeat",
      "boss.t5": "Android AAB / Play Console — release pipeline",
      "boss.monetization": "Monetization & store",
      "boss.mon_p": "AdMob ads (production units), privacy policy on a separate site, Data Safety and store assets prepared for Google Play.",
      "boss.back": "← All products",

      "tiktok.meta": "Game · TikTok LIVE · Flutter / Flame",
      "tiktok.card_p": "Interactive tower defense for streams: viewers spawn monsters, the hero defends the city.",
      "tiktok.sale_strong": "Status:",
      "tiktok.sale_rest": " project on pause — ownership rights for sale or revenue share.",
      "tiktok.lead": "Interactive tower defense for live streams: viewers shape the fight in real time.",
      "tiktok.about": "About",
      "tiktok.about_p": "A TikTok LIVE game in 9:16 for OBS. Viewers spawn monsters via stream events (comments, likes→meter, gifts), while an autonomous hero aims and defends the city. The streamer doesn’t fight — they host the stream and control the session from a separate admin panel.",
      "tiktok.gameplay": "Gameplay",
      "tiktok.g1": "One city with HP at the bottom; monsters walk a vertical path top → bottom",
      "tiktok.g2": "Monster types: weak / strong / boss; viewer nickname above the unit",
      "tiktok.g3": "Hero stands beside the city and shoots automatically",
      "tiktok.g4": "A heal gift can repair the city; HP = 0 → round over",
      "tiktok.g5": "Restart and spawn from the Admin window (off-stream)",
      "tiktok.streamer": "For streamers",
      "tiktok.s1": "9:16 game window for OBS Window Capture",
      "tiktok.s2": "Separate Admin panel: spawn, restart, LIVE status",
      "tiktok.s3": "LIVE webhook / like meter connection",
      "tiktok.s4": "TikTok event → monster type mapping (gift map)",
      "tiktok.tech": "Tech",
      "tiktok.t1": "Flutter Desktop (macOS) — app shell and two windows",
      "tiktok.t2": "Flame — game loop, sprites, collisions",
      "tiktok.t3": "LiveEventSource — mock and TikTok connector via event stream",
      "tiktok.t4": "Spawn queue — throttled spawning without blocking the loop",
      "tiktok.status": "Status & sale",
      "tiktok.status_p": "The project is not actively developed right now. Game core + Admin + LIVE integration are largely done (phases 0–6 nearly complete). I can sell ownership for a fixed price or a share of future revenue — if you want to continue the product or fold it into your streaming brand.",
      "tiktok.open": "Open on TikTok",
      "tiktok.write_tg": "Message on Telegram",
      "tiktok.back": "← All products",

      "cat.meta": "Game · Android · Google Play",
      "cat.title_short": "Cat Jump",
      "cat.card_p": "A vertical arcade: jump higher with the cat, steer by tilt or tap, climb the weekly top.",
      "cat.lead": "Jump higher with the cat: platforms, jetpack, and a weekly leaderboard.",
      "cat.about": "About",
      "cat.about_p1": "A doodle-jump style vertical arcade for Android: the cat climbs platforms, dodges birds, and grabs a jetpack to fly higher.",
      "cat.about_p2": "Tilt or tap controls, a local high score, and a weekly online leaderboard. Short sessions — perfect for a few minutes.",
      "cat.gameplay": "Gameplay",
      "cat.g1": "Climb platforms with screen-edge wrapping",
      "cat.g2": "Tilt (accelerometer) or tap left / right",
      "cat.g3": "Jetpack, birds at high scores, space theme shift",
      "cat.g4": "One revive via rewarded ad; interstitial on final Game Over",
      "cat.g5": "Weekly top 25 and “My rank” via Firestore",
      "cat.tech": "Tech",
      "cat.t1": "Godot 4.7 — game client (GDScript)",
      "cat.t2": "Firebase Firestore — weekly scores without login",
      "cat.t3": "Google AdMob (Poing) — rewarded + interstitial",
      "cat.t4": "Localization: UK, EN, DE, PL, CS, SK, PT, IT, ES, FR",
      "cat.t5": "Android AAB / Play Console — release pipeline",
      "cat.monetization": "Monetization & store",
      "cat.mon_p": "AdMob ads (rewarded for revive, interstitial at run end). Privacy policy and Data Safety prepared for Google Play.",
      "cat.back": "← All products",

      "privacy.title": "Privacy Policy",
      "privacy.updated": "Updated: September 17, 2026",
      "privacy.back": "← Cat Jump",
      "privacy.intro": "This policy explains what data the Cat Jump app collects and processes (“We”, “Developer” — Maksym Severenko / Severmax).",
      "privacy.s1": "1. Data we process",
      "privacy.s1_a": "Nickname — the name you enter for the weekly leaderboard.",
      "privacy.s1_b": "Player ID — a technical ID derived from the device (not a Google login / account).",
      "privacy.s1_c": "Gameplay results — score, weekly best, leaderboard rank.",
      "privacy.s1_d": "Local settings — controls, sound, language, local high score (stored on device).",
      "privacy.s1_e": "Motion sensors — accelerometer / gravity only for in-game tilt controls; not sent to our servers.",
      "privacy.s2": "2. Advertising (Google AdMob)",
      "privacy.s2_p": "The game shows Google AdMob ads (rewarded for revive and interstitial after a run ends). Google may collect advertising IDs, device data, and ad interaction data under its own policies. See <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Google Privacy Policy</a> and <a href=\"https://support.google.com/admob/answer/6128543\" target=\"_blank\" rel=\"noopener noreferrer\">AdMob &amp; privacy</a>.",
      "privacy.s3": "3. Why we use data",
      "privacy.s3_a": "Show your nickname and rank on the weekly leaderboard",
      "privacy.s3_b": "Update your best weekly score without duplicates",
      "privacy.s3_c": "Keep game settings on your device",
      "privacy.s3_d": "Serve ads through AdMob",
      "privacy.s4": "4. Storage and third parties",
      "privacy.s4_p": "Online scores are stored in Google Firebase (Firestore). Local settings stay on your device. We do not sell personal data to third parties.",
      "privacy.s5": "5. Children",
      "privacy.s5_p": "Cat Jump is not directed at children under 13. We do not knowingly collect children’s data. If you are a parent/guardian and believe a child submitted data, contact us and we will help remove it.",
      "privacy.s6": "6. Your rights",
      "privacy.s6_p": "You can reset the local high score in game settings. To request deletion of an online leaderboard entry or ask about your data, email us below.",
      "privacy.s7": "7. Contact",
      "privacy.s7_p": "Developer:",
      "privacy.to_product": "Back to product page"
    }
  };

  function currentLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "uk" || saved === "en") return saved;
    return "uk";
  }

  function apply(lang) {
    var pack = dict[lang] || dict.uk;
    document.documentElement.lang = lang === "en" ? "en" : "uk";
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key || pack[key] == null) return;
      if (el.tagName === "TITLE") {
        document.title = pack[key];
      } else {
        el.textContent = pack[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (!key || pack[key] == null) return;
      el.innerHTML = pack[key];
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr");
      if (!spec) return;
      spec.split(";").forEach(function (part) {
        var bits = part.split(":");
        if (bits.length < 2) return;
        var attr = bits[0].trim();
        var key = bits[1].trim();
        if (pack[key] != null) el.setAttribute(attr, pack[key]);
      });
    });

    document.querySelectorAll("[data-lang-switch]").forEach(function (btn) {
      btn.textContent = pack["nav.lang"] || (lang === "uk" ? "EN" : "UA");
      btn.setAttribute("aria-label", lang === "uk" ? "Switch to English" : "Перемкнути на українську");
    });
  }

  function toggle() {
    apply(currentLang() === "uk" ? "en" : "uk");
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(currentLang());
    document.querySelectorAll("[data-lang-switch]").forEach(function (btn) {
      btn.addEventListener("click", toggle);
    });
  });

  window.SevermaxI18n = { apply: apply, toggle: toggle, currentLang: currentLang };
})();
