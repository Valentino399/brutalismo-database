const CONFIG = {
    ANIMATION_DURATION: 200,
    SCROLL_OFFSET: 20,
    GLITCH_DURATION: 300,
    SWIPE_THRESHOLD: 50,
    MOBILE_BREAKPOINT: 900
};

const monumentos = [
    {
        artista: "Dušan Džamonja",
        nombre: "Spomenik revoluciji naroda Moslavine",
        anio: "1967",
        desc: "El Monumento a la Revolución del Pueblo de Moslavina es una escultura conmemorativa diseñada por Dušan Džamonja y situada en Podgarić, Croacia. La obra rinde homenaje a la resistencia de la región frente a la ocupación durante la Segunda Guerra Mundial, recordando a los combatientes partisanos y a la población civil que participaron en la lucha por la liberación. Su forma futurista y su escala monumental evocan fuerza colectiva y memoria histórica, convirtiéndolo en uno de los ejemplos más emblemáticos del memorialismo yugoslavo.",
        ubicacion: "Podgarić, Croacia",
        svg: "/assets/svg/animated/1_animated.svg",
        img: "/assets/images/monuments/1.jpg"
    },
    {
        artista: "Bogdan Bogdanović",
        nombre: "Kameni cvijet",
        anio: "1966",
        desc: "La Flor de Piedra es un monumento conmemorativo creado por Bogdan Bogdanović en Jasenovac, Croacia, sobre el sitio del antiguo campo de concentración. Su forma orgánica abierta hacia el cielo simboliza la vida, la esperanza y la resiliencia que emergen tras la tragedia. Inaugurado en 1966, honra a las víctimas del genocidio y propone un espacio de contemplación donde la arquitectura y el paisaje se combinan para transmitir memoria y reflexión.",
        ubicacion: "Jasenovac, Croacia",
        svg: "/assets/svg/animated/2_animated.svg",
        img: "/assets/images/monuments/2.jpg"
    },
    {
        artista: "Vojin Stojić",
        nombre: "Spomenik Kosmaj",
        anio: "1971",
        desc: "El Monumento de Kosmaj, diseñado por Vojin Stojić, se encuentra en la cima del monte Kosmaj, Serbia. La estructura de hormigón, compuesta por formas geométricas y dinámicas, conmemora la resistencia partisana y los combates ocurridos en la zona durante la Segunda Guerra Mundial. Inaugurado en 1971, el conjunto simboliza la lucha, el sacrificio y la unidad de quienes defendieron la región frente a la ocupación.",
        ubicacion: "Kosmaj, Serbia",
        svg: "/assets/svg/animated/3_animated.svg",
        img: "/assets/images/monuments/3.jpg"
    },
    {
        artista: "Miodrag Živković",
        nombre: "Dolina heroja (Tjentište)",
        anio: "1971",
        desc: "El Valle de los Héroes en Tjentište, diseñado por Miodrag Živković, conmemora la Batalla de Sutjeska de 1943, uno de los episodios más importantes de la resistencia yugoslava. Sus dos enormes alas de hormigón emergen del paisaje simbolizando la ruptura del cerco enemigo y la victoria moral de los partisanos. El sitio funciona como espacio ceremonial y de memoria colectiva para honrar a los miles de combatientes caídos.",
        ubicacion: "Tjentište, Bosnia y Herzegovina",
        svg: "/assets/svg/animated/4_animated.svg",
        img: "/assets/images/monuments/4.jpg"
    },
    {
        artista: "Dušan Džamonja",
        nombre: "Spomenik Kozara",
        anio: "1972",
        desc: "El Monumento de Kozara, obra de Dušan Džamonja, se levanta en el Parque Nacional Kozara, Bosnia y Herzegovina. Su estructura cilíndrica formada por placas verticales representa la unidad y la fuerza colectiva frente a la adversidad. Inaugurado en 1972, recuerda a los partisanos y civiles que murieron durante la ofensiva alemana de 1942 y se integra con el entorno natural como un símbolo de resistencia.",
        ubicacion: "Kozara, Bosnia y Herzegovina",
        svg: "/assets/svg/animated/5_animated.svg",
        img: "/assets/images/monuments/5.jpg"
    },
    {
        artista: "Miodrag Živković",
        nombre: "Memorijalni kompleks Kadinjača",
        anio: "1979",
        desc: "El Complejo Memorial de Kadinjača, diseñado por Miodrag Živković, está situado cerca de Užice, Serbia, y honra al Batallón Obrero que murió defendiendo la República de Užice en 1941. El conjunto de volúmenes escultóricos narra simbólicamente la batalla a través de formas abstractas en hormigón. Inaugurado en 1979, representa la valentía, el sacrificio y la memoria colectiva de la resistencia antifascista.",
        ubicacion: "Kadinjača, Serbia",
        svg: "/assets/svg/animated/6_animated.svg",
        img: "/assets/images/monuments/6.jpg"
    },
    {
        artista: "Jordan e Iskra Grabuloski",
        nombre: "Makedonium (Ilinden)",
        anio: "1974",
        desc: "El Monumento de Ilinden, conocido como Makedonium, fue diseñado por Jordan e Iskra Grabuloski y se encuentra en Kruševo, Macedonia del Norte. Su forma esférica futurista y los vitrales interiores conmemoran el levantamiento de Ilinden de 1903 y la lucha antifascista posterior. Inaugurado en 1974, simboliza la continuidad de la identidad nacional y funciona como espacio cultural y memorial.",
        ubicacion: "Kruševo, Macedonia del Norte",
        svg: "/assets/svg/animated/7_animated.svg",
        img: "/assets/images/monuments/7.jpg"
    },
    {
        artista: "Vojin Bakić",
        nombre: "Spomenik Petrova Gora",
        anio: "1981",
        desc: "El Monumento de Petrova Gora, diseñado por Vojin Bakić, es una monumental estructura revestida en acero inoxidable situada en la cima de la montaña del mismo nombre en Croacia. Construido en 1981, conmemora el levantamiento antifascista y la resistencia partisana en la región de Kordun y Banija. Su forma fragmentada y reflectante simboliza victoria, memoria y modernidad.",
        ubicacion: "Petrova Gora, Croacia",
        svg: "/assets/svg/animated/8_animated.svg",
        img: "/assets/images/monuments/8.jpg"
    },
    {
        artista: "Peter Eisenman",
        nombre: "Memorial to the Murdered Jews of Europe",
        anio: "2005",
        desc: "El Memorial a los Judíos Asesinados de Europa, diseñado por Peter Eisenman y ubicado en Berlín, consiste en un campo de 2.711 estelas de hormigón dispuestas en una cuadrícula sobre un terreno ondulado. La experiencia espacial genera desorientación e introspección, invitando a la reflexión sobre las víctimas del Holocausto. Inaugurado en 2005, es uno de los memoriales contemporáneos más significativos de Europa.",
        ubicacion: "Berlín, Alemania",
        svg: "/assets/svg/animated/9_animated.svg",
        img: "/assets/images/monuments/9.jpg"
    },
    {
        artista: "Georgi Stoilov",
        nombre: "Buzludzha Monument",
        anio: "1981",
        desc: "El Monumento Buzludzha, diseñado por Georgi Stoilov en Bulgaria, es una imponente estructura brutalista ubicada en la cima del monte Buzludzha. Concebido como casa memorial del movimiento socialista búlgaro, combina arquitectura monumental y simbolismo político. Inaugurado en 1981, su silueta futurista lo convirtió en un ícono de la arquitectura del siglo XX y en un poderoso recordatorio de la historia del país.",
        ubicacion: "Buzludzha, Bulgaria",
        svg: "/assets/svg/animated/10_animated.svg",
        img: "/assets/images/monuments/10.jpg"
    }
];

let lastY = 0;
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('hidden', y > lastY && y > 200);
    lastY = y;
}, { passive: true });

const hamburger = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

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

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

class MonumentDataService {
    constructor(monumentos) {
        this.monumentos = monumentos;
        this.imageCache = new Map();
    }
    getAll()         { return this.monumentos; }
    getByIndex(i)    { return this.monumentos[i]; }
    getLength()      { return this.monumentos.length; }
    preloadImages() {
        this.monumentos.forEach((m, i) => {
            const img = new Image();
            img.src = m.img;
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
            artistLabel:   document.querySelector('.artist-label'),
            yearTag:       document.querySelector('.year-tag'),
            techSvg:       document.querySelector('.tech-svg'),
            monumentTitle: document.querySelector('.monument-title'),
            monoDesc:      document.querySelector('.mono-desc'),
            monoLoc:       document.querySelector('.mono-loc'),
            monumentImg:   document.getElementById('monument-img'),
            imgCounter:    document.getElementById('img-counter')
        };
    }

    get(name) { return this.elements[name]; }

    getAllNavItems(selector)  { return document.querySelectorAll(selector); }
    getActiveBottomNavItem() { return document.querySelector('.bottom-nav-item.active'); }

    updateTextContent(name, text) {
        const el = this.get(name);
        if (!el) return;
        el.textContent = (name === 'artistLabel') ? `Artista: ${text}` : text;
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
    constructor(domManager, monumentService, monumentController) {
        this.domManager        = domManager;
        this.monumentService   = monumentService;
        this.monumentController = monumentController;
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
        this.monumentService.getAll().forEach((m, i) => {
            const btn = this.createNavButton(i, m.nombre, 'nav-item');
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
        tag.textContent = 'Archivo · 001';

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

        this.monumentService.getAll().forEach((m, i) => {
            const btn = this.createNavButton(i, m.nombre, 'bottom-nav-item');
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
        this.monumentController.loadMonument(index);
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
                `${String(index + 1).padStart(2, '0')} / ${String(this.monumentService.getLength()).padStart(2, '0')}`;
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
            'monumentTitle', 'artistLabel', 'yearTag',
            'monoDesc', 'monoLoc', 'monumentImg', 'imgCounter'
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
        const title = this.domManager.get('monumentTitle');
        if (title) {
            title.style.transition = 'opacity 150ms ease';
            title.style.opacity = '0.8';
            setTimeout(() => { if (title) title.style.opacity = '1'; }, 50);
        }
        const img = this.domManager.get('monumentImg');
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
    constructor(monumentController) {
        this.monumentController = monumentController;
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
            const cur   = this.monumentController.getCurrentIndex();
            const total = this.monumentController.getTotal();
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                this.monumentController.loadMonument((cur + 1) % total, false);
            } else {
                this.monumentController.loadMonument((cur - 1 + total) % total, false);
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
            const cur   = this.monumentController.getCurrentIndex();
            const total = this.monumentController.getTotal();
            if (Math.abs(diff) > CONFIG.SWIPE_THRESHOLD) {
                this.monumentController.loadMonument(
                    diff > 0 ? (cur - 1 + total) % total : (cur + 1) % total,
                    false
                );
            }
        }, { passive: true });
    }
}

class MonumentController {
    constructor(monumentService, domManager, navigationBuilder, animationManager, scrollManager) {
        this.monumentService   = monumentService;
        this.domManager        = domManager;
        this.navigationBuilder = navigationBuilder;
        this.animationManager  = animationManager;
        this.scrollManager     = scrollManager;
        this.currentIndex      = 0;
    }

    initialize() {
        this.monumentService.preloadImages();
        this.navigationBuilder.build();
        this.loadMonument(0, false);
    }

    getCurrentIndex() { return this.currentIndex; }
    getTotal()        { return this.monumentService.getLength(); }

    loadMonument(index, shouldScroll = true) {
        if (index < 0 || index >= this.monumentService.getLength()) return;
        if (index === this.currentIndex && shouldScroll) {
            this.scrollManager.scrollToMainContent();
            return;
        }

        this.currentIndex = index;
        const data = this.monumentService.getByIndex(index);

        this.updateContent(data);
        this.navigationBuilder.updateActiveStates(index, data.nombre);

        setTimeout(() => {
            this.animationManager.applyEntryAnimation();
            this.animationManager.applySubtleFeedback();
        }, 10);

        if (shouldScroll) this.scrollManager.scrollToMainContent();
    }

    updateContent(data) {
        this.domManager.updateTextContent('artistLabel',   data.artista);
        this.domManager.updateTextContent('yearTag',       data.anio);
        this.domManager.updateTextContent('monumentTitle', data.nombre);
        this.domManager.updateTextContent('monoDesc',      data.desc);
        this.domManager.updateTextContent('monoLoc',       `↳ ${data.ubicacion}`);
        this.domManager.updateImageSource('techSvg',       data.svg);
        this.domManager.updateBackgroundImage('monumentImg', data.img);
        this.domManager.updateCounter(this.currentIndex, this.monumentService.getLength());
    }
}

class MonumentApp {
    constructor() {
        this.monumentService   = new MonumentDataService(monumentos);
        this.domManager        = new DOMElementManager();
        this.animationManager  = new AnimationManager(this.domManager);
        this.scrollManager     = new ScrollManager(this.domManager);

        this.monumentController = new MonumentController(
            this.monumentService, this.domManager,
            null, this.animationManager, this.scrollManager
        );

        this.navigationBuilder = new NavigationBuilder(
            this.domManager, this.monumentService, this.monumentController
        );

        this.monumentController.navigationBuilder = this.navigationBuilder;
        this.inputHandler = new InputHandler(this.monumentController);
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }

    start() {
        this.monumentController.initialize();
        window.addEventListener('scroll', () => this.scrollManager.handleScroll(), { passive: true });
        this.scrollManager.handleScroll();
        this.scrollManager.updateNavVisibility(false);
    }
}

const app = new MonumentApp();
app.init();