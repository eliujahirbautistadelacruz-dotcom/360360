/* ============================================================
   LOGICA INTERACTIVA - INDEX TRES SESENTA
   ============================================================ */
(function () {
    'use strict';

    /* Barra de progreso del Scroll superior */
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.prepend(progressBar);

    /* Control del Menú Hamburguesa Móvil */
    const toggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    const navbar = document.querySelector('.navbar');

    if (toggle && navList) {
        toggle.addEventListener('click', () => {
            const isOpen = navList.classList.toggle('active');
            toggle.classList.toggle('open', isOpen);
            toggle.setAttribute('aria-expanded', isOpen);
        });

        // Cierra el menú móvil al hacer clic en cualquier opción
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                toggle.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Cierra el menú si se hace clic fuera de la barra de navegación
        document.addEventListener('click', (e) => {
            if (navbar && !navbar.contains(e.target)) {
                navList.classList.remove('active');
                toggle.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* Efectos visuales al hacer Scroll */
    function onScroll() {
        const scrolled = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
        
        if (progressBar) progressBar.style.width = progress + '%';
        if (navbar) navbar.classList.toggle('scrolled', scrolled > 60);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();