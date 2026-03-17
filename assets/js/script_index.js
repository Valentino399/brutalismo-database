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
    mobileMenu.classList.add('open');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMenu);
mobileMenuClose.addEventListener('click', closeMenu);
mobileNavItems.forEach(item => item.addEventListener('click', closeMenu));
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

document.querySelectorAll('.archive-card').forEach(card => {
    const imgs = card.querySelectorAll('.card-img');
    const cardId = card.id.replace('card-', '');
    const dots = document.querySelectorAll(`#dots-${cardId} .card-dot`);
    let interval = null;
    let currentIdx = 0;

    function goTo(idx) {
        imgs[currentIdx].classList.remove('active');
        dots[currentIdx]?.classList.remove('active');
        currentIdx = (idx + imgs.length) % imgs.length;
        imgs[currentIdx].classList.add('active');
        dots[currentIdx]?.classList.add('active');
    }

    card.addEventListener('mouseenter', () => {
        interval = setInterval(() => goTo(currentIdx + 1), 900);
    });
    card.addEventListener('mouseleave', () => {
        clearInterval(interval);
        goTo(0);
    });
});