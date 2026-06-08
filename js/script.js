// ==========================================
// MOBILE BOOTHS — SCRIPT UNIFICADO v2
// ==========================================

(function () {
    'use strict';

    const isMobile = () => window.innerWidth <= 850;

    // ── AOS Init ──────────────────────────────
    function initAOS() {
        if (typeof AOS === 'undefined') return;
        AOS.init({
            duration: 900,
            once: true,
            mirror: false,
            offset: isMobile() ? 0 : 100,
            disable: false
        });
    }

    // ── Force visibility on mobile ──────────
    function forceMobileVisibility() {
        if (!isMobile()) return;
        document.querySelectorAll('[data-aos]').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }

    // ── Mobile Menu — FIXED ──────────────────
    function initMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        const navList    = document.getElementById('nav-list');
        if (!mobileMenu || !navList) return;

        function openMenu() {
            mobileMenu.classList.add('active');
            navList.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            mobileMenu.classList.remove('active');
            navList.classList.remove('active');
            document.body.style.overflow = '';
        }

        mobileMenu.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (navList.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Cerrar al hacer clic en un enlace
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        // Cerrar al hacer clic fuera del menú
        document.addEventListener('click', function(e) {
            if (!navList.contains(e.target) && !mobileMenu.contains(e.target)) {
                closeMenu();
            }
        });

        // Cerrar con tecla Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeMenu();
        });

        // Cerrar al redimensionar hacia desktop
        window.addEventListener('resize', function() {
            if (!isMobile()) closeMenu();
        });
    }

    // ── Navbar scroll hide/show ──────────────
    function initNavbarScroll() {
        const navbar = document.getElementById('mainNavbar');
        if (!navbar) return;
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const curr = window.pageYOffset;
            const navList = document.getElementById('nav-list');
            // No ocultar si el menú móvil está abierto
            if (navList && navList.classList.contains('active')) {
                lastScroll = curr;
                return;
            }
            if (curr > lastScroll && curr > 60) {
                navbar.classList.add('hide');
            } else if (curr < lastScroll) {
                navbar.classList.remove('hide');
            }
            navbar.classList.toggle('scrolled', curr > 10);
            lastScroll = curr;
        }, { passive: true });
    }

    // ── Smooth scroll ────────────────────────
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (!targetId || targetId === '#') return;
                const target = document.querySelector(targetId);
                if (!target) return;
                e.preventDefault();
                const navH = document.querySelector('.navbar')?.offsetHeight || 70;
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - navH,
                    behavior: 'smooth'
                });
            });
        });
    }

    // ── Background video ─────────────────────
    function initVideo() {
        const bgVideo = document.getElementById('bg-video');
        if (bgVideo && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            bgVideo.setAttribute('playsinline', 'true');
            bgVideo.play().catch(() => {});
        }
    }

    // ── Animated counters ────────────────────
    function initCounters() {
        const counters = document.querySelectorAll('.stat-number');
        if (!counters.length) return;
        let animated = false;
        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;
        const animate = () => {
            if (animated) return;
            counters.forEach(counter => {
                const text   = counter.innerText;
                const num    = parseInt(text.replace(/[^0-9]/g, ''));
                const hasPlus = text.includes('+');
                const hasPct  = text.includes('%');
                if (isNaN(num)) return;
                let curr = 0;
                const step = num / 50;
                const tick = () => {
                    curr += step;
                    if (curr < num) {
                        counter.innerText = Math.ceil(curr) + (hasPlus ? '+' : hasPct ? '%' : '');
                        requestAnimationFrame(tick);
                    } else {
                        counter.innerText = num + (hasPlus ? '+' : hasPct ? '%' : '');
                    }
                };
                tick();
            });
            animated = true;
        };
        new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) animate(); });
        }, { threshold: 0.3 }).observe(statsSection);
    }

    // ── MODO OSCURO / CLARO ──────────────────
    function initDarkMode() {
        const btn = document.getElementById('darkModeBtn');
        if (!btn) return;
        const saved = localStorage.getItem('mb-theme') || 'light';
        applyTheme(saved);
        btn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            localStorage.setItem('mb-theme', next);
        });
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const btn = document.getElementById('darkModeBtn');
        if (!btn) return;
        if (theme === 'dark') {
            btn.innerHTML = '<i class="fas fa-sun"></i> <span data-es="Modo Claro" data-en="Light Mode">Modo Claro</span>';
        } else {
            btn.innerHTML = '<i class="fas fa-moon"></i> <span data-es="Modo Oscuro" data-en="Dark Mode">Modo Oscuro</span>';
        }
    }

    // ── TRADUCCIONES ES / EN ─────────────────
    const TRADUCCIONES = {
        'Inicio':    'Home',
        'Catálogo':  'Catalog',
        'Contacto':  'Contact',
        'SOMOS FABRICANTES': 'WE ARE MANUFACTURERS',
        'ENTREGAS EN TODA LA REPÚBLICA': 'DELIVERIES NATIONWIDE',
        'VENTA Y RENTA DE CASETAS MÓVILES': 'SALE & RENTAL OF MOBILE BOOTHS',
        '+10 AÑOS DE EXPERIENCIA': '+10 YEARS OF EXPERIENCE',
        '+500 PROYECTOS COMPLETADOS': '+500 COMPLETED PROJECTS',
        'Soluciones en': 'Solutions in',
        'Unidades Móviles': 'Mobile Units',
        'VENTA': 'SALE',
        'RENTA': 'RENTAL',
        'PERSONALIZACIÓN': 'CUSTOMIZATION',
        'Casetas modernas al mejor precio.': 'Modern booths at the best price.',
        'Casetas para proyectos temporales.': 'Booths for temporary projects.',
        'Diseños adaptados a tus necesidades.': 'Designs tailored to your needs.',
        'Ver más': 'Read more',
        'Conócenos': 'About Us',
        'Ver Catálogo': 'View Catalog',
        'Proyectos Completados': 'Completed Projects',
        'Clientes Satisfechos': 'Satisfied Clients',
        'Entregas Realizadas': 'Deliveries Made',
        'Calidad Certificada': 'Certified Quality',
    };

    let currentLang = localStorage.getItem('mb-lang') || 'es';

    function initLanguage() {
        const btn = document.getElementById('langBtn');
        if (!btn) return;
        applyLanguage(currentLang);
        btn.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            localStorage.setItem('mb-lang', currentLang);
            applyLanguage(currentLang);
        });
    }

    function applyLanguage(lang) {
        const btn = document.getElementById('langBtn');
        if (btn) {
            btn.innerHTML = lang === 'es'
                ? '<i class="fas fa-globe"></i> <span>EN</span>'
                : '<i class="fas fa-globe"></i> <span>ES</span>';
        }

        document.querySelectorAll('[data-es]').forEach(el => {
            el.textContent = lang === 'en' ? (el.getAttribute('data-en') || el.textContent) : el.getAttribute('data-es');
        });

        if (lang === 'en') {
            translateDOM(document.body, 'en');
        } else {
            location.reload();
        }
    }

    function translateDOM(node, lang) {
        if (node.nodeType === Node.TEXT_NODE) {
            const trimmed = node.textContent.trim();
            if (trimmed && TRADUCCIONES[trimmed]) {
                node.textContent = node.textContent.replace(trimmed, TRADUCCIONES[trimmed]);
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const skip = ['SCRIPT','STYLE','IFRAME','INPUT','TEXTAREA'];
            if (!skip.includes(node.tagName)) {
                node.childNodes.forEach(child => translateDOM(child, lang));
            }
        }
    }

    // ── FUNCIÓN PARA REDIRIGIR A PERSONALIZACIÓN EN CATÁLOGO ──
    function redirectToPersonalization() {
        window.location.href = 'catalogo.html?section=personalizar&openPersonalization=true';
    }

    // ── INICIALIZAR TARJETAS FUNCIONALES ──
    function initServiceCards() {
        // La tarjeta de personalización ya tiene el onclick en el HTML con la URL correcta
        // Solo verificamos que todo esté bien
        const personalizarCard = document.querySelector('.service-card[data-service="personalizacion"]');
        if (personalizarCard) {
            const btn = personalizarCard.querySelector('.service-btn');
            if (btn && !btn.hasAttribute('data-initialized')) {
                btn.setAttribute('data-initialized', 'true');
                // El onclick ya está definido en el HTML
            }
        }
    }

    // ── VERIFICAR URL PARA ABRIR PERSONALIZACIÓN EN EL CATÁLOGO (si estamos en catálogo) ──
    function checkForPersonalizationSection() {
        // Esta función se ejecutará en catalogo.html, no en index.html
        if (window.location.pathname.includes('catalogo.html')) {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('section') === 'personalizar' || urlParams.get('openPersonalization') === 'true') {
                // Esperar a que el catálogo cargue completamente
                setTimeout(() => {
                    const personalizeFilter = document.querySelector('.filter-pill[data-filter="personalizar"]');
                    if (personalizeFilter) {
                        personalizeFilter.click();
                    }
                }, 500);
            }
        }
    }

    // ── Init on DOM ready ────────────────────
    document.addEventListener('DOMContentLoaded', () => {
        initAOS();
        forceMobileVisibility();
        initMobileMenu();
        initNavbarScroll();
        initSmoothScroll();
        initVideo();
        initDarkMode();
        initLanguage();
        initServiceCards();
        checkForPersonalizationSection();
        setTimeout(initCounters, 600);

        window.addEventListener('resize', () => {
            forceMobileVisibility();
            if (typeof AOS !== 'undefined') AOS.refresh();
        });
        window.addEventListener('orientationchange', forceMobileVisibility);
    });

})();

// Función global para ser usada desde el HTML si es necesario
function redirectToPersonalizationGlobal() {
    window.location.href = 'catalogo.html?section=personalizar&openPersonalization=true';
}