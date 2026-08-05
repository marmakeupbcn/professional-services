// =========================================================
// MENÚ MÓVIL — TOGGLE
// =========================================================
document.addEventListener('DOMContentLoaded', function() {
  // Crear botón de menú móvil si no existe
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  
  if (header && nav) {
    // Verificar si ya existe un botón de menú
    let menuToggle = document.querySelector('.menu-toggle');
    
    if (!menuToggle) {
      menuToggle = document.createElement('button');
      menuToggle.className = 'menu-toggle';
      menuToggle.setAttribute('aria-label', 'Toggle menu');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.innerHTML = '<span></span><span></span><span></span>';
      
      // Insertar después del logo o al final del header
      const logo = header.querySelector('.logo');
      if (logo) {
        header.insertBefore(menuToggle, nav);
      } else {
        header.appendChild(menuToggle);
      }
    }
    
    // Crear menú móvil si no existe
    let mobileMenu = document.querySelector('.mobile-menu');
    
    if (!mobileMenu) {
      mobileMenu = document.createElement('div');
      mobileMenu.className = 'mobile-menu';
      mobileMenu.setAttribute('aria-hidden', 'true');
      
      // Copiar los enlaces del nav
      const navLinks = nav.querySelectorAll('a');
      const ul = document.createElement('ul');
      
      navLinks.forEach(function(link) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.textContent;
        li.appendChild(a);
        ul.appendChild(li);
      });
      
      mobileMenu.appendChild(ul);
      
      // Insertar después del header o al final del body
      document.body.insertBefore(mobileMenu, document.body.firstChild);
    }
    
    // Evento toggle del menú
    menuToggle.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true' ? false : true;
      this.setAttribute('aria-expanded', expanded);
      mobileMenu.classList.toggle('open');
      mobileMenu.setAttribute('aria-hidden', expanded ? 'false' : 'true');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    
    // Cerrar menú al hacer clic en un enlace
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
});

// =========================================================
// HEADER SCROLL EFFECT
// =========================================================
const header = document.querySelector('header');

if (header) {
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > 100) {
      header.style.background = 'rgba(0, 0, 0, 0.9)';
      header.style.mixBlendMode = 'normal';
    } else {
      header.style.background = 'transparent';
      header.style.mixBlendMode = 'difference';
    }
  });
}

// =========================================================
// ANIMACIONES AL HACER SCROLL (INTERSECTION OBSERVER)
// =========================================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
  // Elementos a animar
  const elements = document.querySelectorAll(
    '.rama-item, .project, .about-home-layout, ' +
    '.contact-home-content, .about-layout, .contact-content'
  );
  
  elements.forEach(function(el) {
    // Si no tiene estilos de animación inline, los añadimos
    if (!el.style.opacity) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    }
    observer.observe(el);
  });
});

// =========================================================
// IMÁGENES CON FALLBACK (placeholder)
// =========================================================
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  
  images.forEach(function(img) {
    img.addEventListener('error', function() {
      // Si la imagen no carga, la reemplazamos con un placeholder
      this.style.background = '#e0e0e0';
      this.alt = this.alt || 'Imagen no disponible';
      this.src = '';
    });
  });
});

// =========================================================
// NAVEGACIÓN ACTIVA (marcar página actual)
// =========================================================
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split('/').pop() || 'index.html';
  
  const navLinks = document.querySelectorAll('nav a, .mobile-menu a');
  
  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.style.opacity = '0.5';
      link.style.textDecoration = 'underline';
    }
  });
});

console.log('🚀 Mar Vila Gracia — Professional Makeup Artist');
console.log('📸 Portfolio web cargada correctamente');
