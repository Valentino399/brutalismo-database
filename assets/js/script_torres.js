const CONFIG = {
    ANIMATION_DURATION: 200,
    SCROLL_OFFSET: 20,
    GLITCH_DURATION: 300,
    SWIPE_THRESHOLD: 50,
    MOBILE_BREAKPOINT: 900
};

const torres = [
    {
        arquitecto: "Ernő Goldfinger",
        nombre: "Trellick Tower",
        anio: "1972",
        desc: "La Torre Trellick, diseñada por Ernő Goldfinger, está situada en Londres, Reino Unido, y fue concebida como un modelo de vivienda social vertical durante la posguerra. Su característica torre de servicios separada y su estructura de hormigón expuesto expresan claramente la lógica funcional del edificio. Inaugurada en 1972, se convirtió con el tiempo en un ícono del brutalismo británico, simbolizando la ambición de crear comunidades modernas en altura.",
        ubicacion: "Londres, Reino Unido",
        svg: "/assets/svg/animated/1_animated.svg",
        img: "/assets/images/torres/1.jpg"
    },
    {
        arquitecto: "Ernő Goldfinger",
        nombre: "Balfron Tower",
        anio: "1967",
        desc: "La Torre Balfron, diseñada por Ernő Goldfinger, se encuentra en Londres, Reino Unido, y fue concebida como un experimento social dentro del desarrollo de vivienda pública moderna. Su composición de hormigón y su torre de circulación independiente reflejan la búsqueda de claridad estructural y eficiencia funcional. Finalizada en 1967, representa un precedente clave del brutalismo residencial y de las utopías urbanas de la época.",
        ubicacion: "Londres, Reino Unido",
        svg: "/assets/svg/animated/2_animated.svg",
        img: "/assets/images/torres/2.jpg"
    },
    {
        arquitecto: "Mihajlo Mitrović",
        nombre: "Genex Tower",
        anio: "1980",
        desc: "La Torre Genex, diseñada por Mihajlo Mitrović, se alza en Belgrado, Serbia, como una de las estructuras más emblemáticas del brutalismo yugoslavo. Compuesta por dos torres conectadas por un puente elevado con restaurante giratorio, simboliza la modernización urbana de la ciudad durante el periodo socialista. Terminada en 1980, su escala monumental y su silueta futurista la convirtieron en un ícono del paisaje urbano de Belgrado.",
        ubicacion: "Belgrado, Serbia",
        svg: "/assets/svg/animated/3_animated.svg",
        img: "/assets/images/torres/3.jpg"
    },
    {
        arquitecto: "BBPR",
        nombre: "Torre Velasca",
        anio: "1958",
        desc: "La Torre Velasca, diseñada por el estudio BBPR, está situada en Milán, Italia, y representa una interpretación singular del brutalismo con referencias históricas locales. Su volumen superior sobresaliente recuerda las torres medievales lombardas mientras mantiene una estructura moderna de hormigón. Finalizada en 1958, se convirtió en un símbolo del renacimiento arquitectónico de la ciudad tras la Segunda Guerra Mundial.",
        ubicacion: "Milán, Italia",
        svg: "/assets/svg/animated/4_animated.svg",
        img: "/assets/images/torres/4.jpg"
    },
    {
        arquitecto: "Yuri Platonov",
        nombre: "Presidium of the Russian Academy of Sciences",
        anio: "1990",
        desc: "El Presidium de la Academia de Ciencias de Rusia, diseñado por Yuri Platonov y un equipo de arquitectos soviéticos, se encuentra a orillas del río Moscova en Moscú y funciona como sede administrativa de la institución científica más importante del país. El complejo de torres de hormigón fue concebido como un símbolo del progreso científico soviético, destacándose por su estructura monumental y por la característica corona metálica superior conocida popularmente como los 'Cerebros Dorados'. Finalizado tras un largo proceso de construcción iniciado en la década de 1970 y completado hacia 1990, el edificio representa la ambición tecnológica y la estética futurista del modernismo tardío soviético.",
        ubicacion: "Moscú, Rusia",
        svg: "/assets/svg/animated/5_animated.svg",
        img: "/assets/images/torres/5.jpg"
    },
    {
        arquitecto: "Paul Rudolph",
        nombre: "Yale Art and Architecture Building",
        anio: "1963",
        desc: "El Edificio de Arte y Arquitectura de Yale, diseñado por Paul Rudolph, se encuentra en New Haven, Estados Unidos, y fue concebido como sede de la escuela de arquitectura de la Universidad de Yale. Su compleja composición de niveles interconectados y superficies de hormigón profundamente texturizadas crea un entorno espacial dinámico destinado a estimular la creatividad y la experimentación académica. Inaugurado en 1963, el edificio se convirtió en una de las obras más influyentes del brutalismo estadounidense.",
        ubicacion: "New Haven, Estados Unidos",
        svg: "/assets/svg/animated/6_animated.svg",
        img: "/assets/images/torres/6.jpg"
    },
    {
        arquitecto: "Chamberlin, Powell and Bon",
        nombre: "Barbican Centre",
        anio: "1982",
        desc: "El Centro Barbican, diseñado por el estudio Chamberlin, Powell and Bon, se encuentra en Londres, Reino Unido, y forma parte de uno de los complejos brutalistas más grandes de Europa. Concebido como un centro cultural multidisciplinario, el conjunto integra teatros, salas de concierto, galerías y espacios públicos dentro de una extensa composición de terrazas y volúmenes de hormigón. Inaugurado en 1982, el edificio simboliza la reconstrucción cultural de la ciudad tras la Segunda Guerra Mundial.",
        ubicacion: "Londres, Reino Unido",
        svg: "/assets/svg/animated/7_animated.svg",
        img: "/assets/images/torres/7.jpg"
    },
    {
        arquitecto: "Clorindo Testa",
        nombre: "Biblioteca Nacional Mariano Moreno",
        anio: "1992",
        desc: "La Biblioteca Nacional Mariano Moreno, diseñada por Clorindo Testa junto a Francisco Bullrich y Alicia Cazzaniga, se encuentra en Buenos Aires, Argentina, y fue concebida como una institución cultural monumental dedicada a la preservación del conocimiento. Su estructura elevada de hormigón expuesto se apoya sobre grandes soportes que liberan el terreno y generan un espacio público abierto debajo del edificio. Finalizada en 1992 tras un prolongado proceso de construcción iniciado en la década de 1960, la obra se consolidó como uno de los ejemplos más importantes del brutalismo latinoamericano.",
        ubicacion: "Buenos Aires, Argentina",
        svg: "/assets/svg/animated/8_animated.svg",
        img: "/assets/images/torres/8.jpg"
    },
    {
        arquitecto: "Fritz Wotruba y Fritz Gerhard Mayr",
        nombre: "Kirche zur Heiligsten Dreifaltigkeit",
        anio: "1976",
        desc: "La Iglesia de la Santísima Trinidad, diseñada por el escultor Fritz Wotruba junto al arquitecto Fritz Gerhard Mayr, se encuentra en Viena, Austria, y fue concebida como un espacio religioso profundamente influenciado por la escultura moderna. Su composición de grandes bloques irregulares de hormigón crea una forma monumental que recuerda a una escultura abstracta habitable. Inaugurada en 1976, el edificio representa una de las interpretaciones más radicales del brutalismo religioso en Europa.",
        ubicacion: "Viena, Austria",
        svg: "/assets/svg/animated/9_animated.svg",
        img: "/assets/images/torres/9.jpg"
    },
    {
        arquitecto: "William Pereira",
        nombre: "Geisel Library",
        anio: "1970",
        desc: "La Biblioteca Geisel, diseñada por William Pereira, se encuentra en el campus de la Universidad de California en San Diego, Estados Unidos, y fue concebida como el principal centro de conocimiento de la institución. Su estructura futurista de hormigón armado se eleva sobre una base estrecha que sostiene los niveles superiores en forma de pirámide invertida. Inaugurada en 1970, el edificio se convirtió en uno de los ejemplos más reconocibles del brutalismo académico.",
        ubicacion: "La Jolla, California, Estados Unidos",
        svg: "/assets/svg/animated/10_animated.svg",
        img: "/assets/images/torres/10.jpg"
    },
];

let lastY = 0;
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('hidden', y > lastY && y > 200);
    lastY = y;
}, { passive: true });

const hamburger     = document.getElementById('nav-hamburger');
const mobileMenu    = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileNavItems  = document.querySelectorAll('.mobile-nav-item');

function openMenu() {
    if (!mobileMenu || !hamburger) return;
    mobileMenu.classList.add('open');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeMenu() {
    if (!mobileMenu || !hamburger) return;
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMenu);
mobileMenuClose.addEventListener('click', closeMenu);
mobileNavItems.forEach(item => item.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

class TorreDataService {
    constructor(torres) {
        this.torres = torres;
        this.imageCache = new Map();
    }
    getAll()       { return this.torres; }
    getByIndex(i)  { return this.torres[i]; }
    getLength()    { return this.torres.length; }
    preloadImages() {
        this.torres.forEach((t, i) => {
            const img = new Image();
            img.src = t.img;
            this.imageCache.set(i, img);
        });
    }
}

class DOMElementManager {
    constructor() {
        this.elements = {
            sideNav:       document.getElementById('side-nav'),
            bottomNav:     document.getElementById('bottom-nav'),
            navbar:        document.getElementById('navbar'),
            hero:          document.getElementById('hero'),
            mainSection:   document.getElementById('main-section'),
            arquitectLabel: document.querySelector('.arquitect-label'),
            yearTag:       document.querySelector('.year-tag'),
            techSvg:       document.querySelector('.tech-svg'),
            torreTitle:    document.querySelector('.torre-title'),
            monoDesc:      document.querySelector('.mono-desc'),
            monoLoc:       document.querySelector('.mono-loc'),
            torreImg:      document.getElementById('torre-img'),
            imgCounter:    document.getElementById('img-counter')
        };
    }

    get(name) { return this.elements[name]; }

    getAllNavItems(selector)  { return document.querySelectorAll(selector); }
    getActiveBottomNavItem() { return document.querySelector('.bottom-nav-item.active'); }

    updateTextContent(name, text) {
        const el = this.get(name);
        if (!el) return;
        el.textContent = (name === 'arquitectLabel') ? `Arquitecto: ${text}` : text;
    }

    updateImageSource(name, src) {
        const el = this.get(name);
        if (!el) return;
        el.src = src;
        if (name === 'techSvg') {
            const anims = ['anim-fade-up', 'anim-zoom-in', 'anim-rotate-in', 'anim-slide-right', 'anim-flip-x'];
            const rnd = anims[Math.floor(Math.random() * anims.length)];
            el.classList.remove(...anims);
            el.classList.add(rnd);
            setTimeout(() => el.classList.remove(rnd), 600);
        }
    }

    updateBackgroundImage(name, url) {
        const el = this.get(name);
        if (el) el.style.backgroundImage = `url('${url}')`;
    }

    updateCounter(index, total) {
        const el = this.get('imgCounter');
        if (el) el.textContent = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    }
}

class NavigationBuilder {
    constructor(domManager, torreService, torreController) {
        this.domManager        = domManager;
        this.torreService      = torreService;
        this.torreController   = torreController;
        this.bottomNavCurrentName = null;
        this.bottomNavCounterTag  = null;
    }

    build() {
        this.buildSideNav();
        this.buildBottomNav();
    }

    buildSideNav() {
        const sideNav = this.domManager.get('sideNav');
        if (!sideNav) return;
        this.torreService.getAll().forEach((t, i) => {
            const btn = this.createNavButton(i, t.nombre, 'nav-item');
            btn.addEventListener('click', () => this.handleNavClick(i));
            sideNav.appendChild(btn);
        });
    }

    buildBottomNav() {
        const bottomNav = this.domManager.get('bottomNav');
        if (!bottomNav) return;

        const header = document.createElement('div');
        header.className = 'bottom-nav-header';

        const tag = document.createElement('span');
        tag.className = 'bottom-nav-tag';
        tag.textContent = 'Archivo · 002';

        const currentName = document.createElement('span');
        currentName.className = 'bottom-nav-current-name';
        currentName.textContent = '—';
        this.bottomNavCurrentName = currentName;

        const counterTag = document.createElement('span');
        counterTag.className = 'bottom-nav-counter-tag';
        counterTag.textContent = '01 / 10';
        this.bottomNavCounterTag = counterTag;

        header.appendChild(tag);
        header.appendChild(currentName);
        header.appendChild(counterTag);
        bottomNav.appendChild(header);

        const inner = document.createElement('div');
        inner.className = 'bottom-nav-inner';

        this.torreService.getAll().forEach((t, i) => {
            const btn = this.createNavButton(i, t.nombre, 'bottom-nav-item');
            btn.addEventListener('click', () => this.handleNavClick(i));
            inner.appendChild(btn);
        });

        bottomNav.appendChild(inner);
    }

    createNavButton(index, label, className) {
        const btn = document.createElement('button');
        btn.className = className;
        btn.textContent = String(index + 1).padStart(2, '0');
        btn.setAttribute('aria-label', label);
        return btn;
    }

    handleNavClick(index) {
        this.torreController.loadTorre(index);
    }

    updateActiveStates(index, nombre) {
        this.domManager.getAllNavItems('.nav-item').forEach((el, i) => {
            el.classList.toggle('active', i === index);
        });

        this.domManager.getAllNavItems('.bottom-nav-item').forEach((el, i) => {
            el.classList.toggle('active', i === index);
        });

        if (this.bottomNavCurrentName && nombre) {
            this.bottomNavCurrentName.style.opacity = '0';
            setTimeout(() => {
                this.bottomNavCurrentName.textContent = nombre;
                this.bottomNavCurrentName.style.opacity = '1';
            }, 140);
        }
        if (this.bottomNavCounterTag) {
            this.bottomNavCounterTag.textContent =
                `${String(index + 1).padStart(2, '0')} / ${String(this.torreService.getLength()).padStart(2, '0')}`;
        }

        this.scrollActiveIntoView();
    }

    scrollActiveIntoView() {
        const activeBottom = this.domManager.getActiveBottomNavItem();
        if (activeBottom && window.innerWidth <= CONFIG.MOBILE_BREAKPOINT) {
            activeBottom.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }
}

class AnimationManager {
    constructor(domManager) {
        this.domManager = domManager;
        this.animatableElements = [
            'torreTitle', 'arquitectLabel', 'yearTag',
            'monoDesc', 'monoLoc', 'torreImg', 'imgCounter'
        ];
    }

    applyEntryAnimation() {
        this.animatableElements.forEach((name, i) => {
            const el = this.domManager.get(name);
            if (!el) return;
            el.style.transition = 'none';
            el.style.opacity    = '0';
            el.style.transform  = 'translateY(10px)';
            void el.offsetHeight;
            setTimeout(() => {
                el.style.transition = `opacity ${CONFIG.ANIMATION_DURATION}ms ease, transform ${CONFIG.ANIMATION_DURATION}ms ease`;
                el.style.opacity    = '1';
                el.style.transform  = 'translateY(0)';
            }, i * 30);
        });
    }

    applySubtleFeedback() {
        const title = this.domManager.get('torreTitle');
        if (title) {
            title.style.transition = 'opacity 150ms ease';
            title.style.opacity = '0.8';
            setTimeout(() => { if (title) title.style.opacity = '1'; }, 50);
        }
        const img = this.domManager.get('torreImg');
        if (img) {
            img.style.transition = 'transform 200ms ease';
            img.style.transform = 'scale(1.02)';
            setTimeout(() => { if (img) img.style.transform = 'scale(1)'; }, 150);
        }
    }
}

class ScrollManager {
    constructor(domManager) {
        this.domManager = domManager;
        this.isProgrammaticScroll = false;
        this.scrollTimer = null;
    }

    scrollToMainContent() {
        const mainSection = this.domManager.get('mainSection');
        const navbar      = this.domManager.get('navbar');
        if (!mainSection || !navbar) return;

        this.isProgrammaticScroll = true;
        clearTimeout(this.scrollTimer);

        const navH    = navbar.offsetHeight;
        const targetY = mainSection.getBoundingClientRect().top + window.scrollY - navH - CONFIG.SCROLL_OFFSET;
        window.scrollTo({ top: targetY, behavior: 'smooth' });

        this.scrollTimer = setTimeout(() => { this.isProgrammaticScroll = false; }, CONFIG.ANIMATION_DURATION * 2);
    }

    handleScroll() {
        if (this.isProgrammaticScroll) return;
        const hero = this.domManager.get('hero');
        if (!hero) return;
        this.updateNavVisibility(hero.getBoundingClientRect().bottom < 0);
    }

    updateNavVisibility(visible) {
        const sideNav   = this.domManager.get('sideNav');
        const bottomNav = this.domManager.get('bottomNav');
        if (sideNav)   sideNav.classList.toggle('visible', visible);
        if (bottomNav) bottomNav.classList.toggle('visible', visible);
    }
}

class InputHandler {
    constructor(torreController) {
        this.torreController = torreController;
        this.touchStartX = 0;
        this.touchEndX   = 0;
        this.initKeyboardListener();
        this.initTouchListeners();
    }

    initKeyboardListener() {
        document.addEventListener('keydown', (e) => {
            const keys = ['ArrowDown','ArrowRight','ArrowUp','ArrowLeft'];
            if (!keys.includes(e.key)) return;
            e.preventDefault();
            const cur   = this.torreController.getCurrentIndex();
            const total = this.torreController.getTotal();
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                this.torreController.loadTorre((cur + 1) % total, false);
            } else {
                this.torreController.loadTorre((cur - 1 + total) % total, false);
            }
        });
    }

    initTouchListeners() {
        document.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        document.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            const diff  = this.touchEndX - this.touchStartX;
            const cur   = this.torreController.getCurrentIndex();
            const total = this.torreController.getTotal();
            if (Math.abs(diff) > CONFIG.SWIPE_THRESHOLD) {
                this.torreController.loadTorre(
                    diff > 0 ? (cur - 1 + total) % total : (cur + 1) % total,
                    false
                );
            }
        }, { passive: true });
    }
}

class TorreController {
    constructor(torreService, domManager, navigationBuilder, animationManager, scrollManager) {
        this.torreService      = torreService;
        this.domManager        = domManager;
        this.navigationBuilder = navigationBuilder;
        this.animationManager  = animationManager;
        this.scrollManager     = scrollManager;
        this.currentIndex      = 0;
    }

    initialize() {
        this.torreService.preloadImages();
        this.navigationBuilder.build();
        this.loadTorre(0, false);
    }

    getCurrentIndex() { return this.currentIndex; }
    getTotal()        { return this.torreService.getLength(); }

    loadTorre(index, shouldScroll = true) {
        if (index < 0 || index >= this.torreService.getLength()) return;
        if (index === this.currentIndex && shouldScroll) {
            this.scrollManager.scrollToMainContent();
            return;
        }

        this.currentIndex = index;
        const data = this.torreService.getByIndex(index);

        this.updateContent(data);
        this.navigationBuilder.updateActiveStates(index, data.nombre);

        setTimeout(() => {
            this.animationManager.applyEntryAnimation();
            this.animationManager.applySubtleFeedback();
        }, 10);

        if (shouldScroll) this.scrollManager.scrollToMainContent();
    }

    updateContent(data) {
        this.domManager.updateTextContent('arquitectLabel', data.arquitecto);
        this.domManager.updateTextContent('yearTag',        data.anio);
        this.domManager.updateTextContent('torreTitle',     data.nombre);
        this.domManager.updateTextContent('monoDesc',       data.desc);
        this.domManager.updateTextContent('monoLoc',        `↳ ${data.ubicacion}`);
        this.domManager.updateImageSource('techSvg',        data.svg);
        this.domManager.updateBackgroundImage('torreImg',   data.img);
        this.domManager.updateCounter(this.currentIndex, this.torreService.getLength());
    }
}

class TorreApp {
    constructor() {
        this.torreService  = new TorreDataService(torres);
        this.domManager    = new DOMElementManager();
        this.animationManager = new AnimationManager(this.domManager);
        this.scrollManager    = new ScrollManager(this.domManager);

        this.torreController = new TorreController(
            this.torreService, this.domManager,
            null, this.animationManager, this.scrollManager
        );

        this.navigationBuilder = new NavigationBuilder(
            this.domManager, this.torreService, this.torreController
        );

        this.torreController.navigationBuilder = this.navigationBuilder;
        this.inputHandler = new InputHandler(this.torreController);
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }

    start() {
        this.torreController.initialize();
        window.addEventListener('scroll', () => this.scrollManager.handleScroll(), { passive: true });
        this.scrollManager.handleScroll();
        this.scrollManager.updateNavVisibility(false);
    }
}

const app = new TorreApp();
app.init();