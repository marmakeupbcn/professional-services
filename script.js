// =========================================================
// MENÚ MÓVIL
// =========================================================
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true' ? false : true;
      this.setAttribute('aria-expanded', expanded);
      mobileMenu.classList.toggle('open');
      body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Cerrar menú al hacer clic en un enlace
    const links = mobileMenu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        body.style.overflow = '';
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

// =========================================================
// HEADER SCROLL EFFECT
// =========================================================
const header = document.querySelector('.site-header');
let lastScroll = 0;

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// =========================================================
// ANIMACIONES SUTILES (FADE-IN AL HACER SCROLL)
// =========================================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
  // Aplicar a elementos que quieras animar
  const elements = document.querySelectorAll('.project, .work-item, .hero-text, .hero
