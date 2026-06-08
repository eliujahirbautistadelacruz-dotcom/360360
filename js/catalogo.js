// ============================================
//  BASE DE DATOS DE PRODUCTOS
// ============================================

const PRODUCTOS = [
    {
        id: 0, tipo: "oficina",
        titulo: "CASETA MÓVIL 12FT",
        sub: "Tipo Oficina · 4 metros",
        desc: "Ideal para emprender. ¡Listo para usar!",
        imagenCard: "images/caseta1.png",
        imagenes: ["images/caseta1.png","images/case4.3.jpeg","images/case4.4.jpeg"],
        badge: "new",
        specs: [
            { icon: "fas fa-layer-group", text: "Material MULTYPANEL con aislante térmico." },
            { icon: "fas fa-snowflake", text: "Aire acondicionado incluido." },
            { icon: "fas fa-bolt", text: "Instalación eléctrica 110V con tierra física." },
            { icon: "fas fa-chair", text: "Escritorios y repisas funcionales." },
            { icon: "fas fa-border-all", text: "Ventanas de alta resistencia." },
            { icon: "fas fa-lightbulb", text: "Iluminación en todo el interior." }
        ],
        badges: [
            { val: "12 FT", sub: "4m × 2.5m", label: "DIMENSIÓN" },
            { val: "4", sub: "Personas", label: "CAPACIDAD" }
        ]
    },
    {
        id: 1, tipo: "oficina",
        titulo: "CASETA MÓVIL 17FT",
        sub: "Tipo Oficina · 5 metros",
        desc: "Funcional para tus proyectos pequeños .",
        imagenCard: "images/case5.1.jpeg",
        imagenes: ["images/case5.2.jpeg","images/case5.1.jpeg","images/case5.3.jpeg","images/case5.5.jpeg","images/case5.6.jpg"],
        badge: "best",
        specs: [
            { icon: "fas fa-layer-group", text: "Material MULTYPANEL con aislante térmico." },
            { icon: "fas fa-wind", text: "Aire acondicionado de alta eficiencia." },
            { icon: "fas fa-bolt", text: "Instalación eléctrica completa 110V." },
            { icon: "fas fa-chair", text: "Escritorios y repisas amplias." },
            { icon: "fas fa-border-all", text: "Ventanas de alta resistencia." },
            { icon: "fas fa-lightbulb", text: "Iluminación en todo el interior." }
        ],
        badges: [
            { val: "17 FT", sub: "5m × 2.5m", label: "DIMENSIÓN" },
            { val: "6", sub: "Personas", label: "CAPACIDAD" }
        ]
    },
    {
        id: 2, tipo: "oficina",
        titulo: "CASETA MÓVIL 24FT",
        sub: "Tipo Oficina · 6 metros",
        desc: "Buen tamaño y precio para empesar!",
        imagenCard: "images/case6.2.jpeg",
        imagenes: ["images/case6.jpeg","images/case6.1.jpeg","images/case6.2.jpeg","images/cas3.1.jpeg"],
        badge: "featured",
        specs: [
            { icon: "fas fa-layer-group", text: "Material MULTYPANEL con aislante térmico." },
            { icon: "fas fa-wind", text: "Aire acondicionado de alta eficiencia." },
            { icon: "fas fa-bolt", text: "Instalación eléctrica completa 110V." },
            { icon: "fas fa-chair", text: "Escritorios y repisas amplias." },
            { icon: "fas fa-border-all", text: "Ventanas de alta resistencia." },
            { icon: "fas fa-lightbulb", text: "Iluminación en todo el interior." }
        ],
        badges: [
            { val: "24 FT", sub: "6m × 2.5m", label: "DIMENSIÓN" },
            { val: "9", sub: "Personas", label: "CAPACIDAD" }
        ]
    },
    {
        id: 3, tipo: "oficina",
        titulo: "CASETA MÓVIL 32FT",
        sub: "Tipo Oficina · 8 metros",
        desc: "Lista para tus grandes trabajos. ¡Mucho espacio!",
        imagenCard: "images/case8.jpeg",
        imagenes: ["images/case8.1.jpeg","images/case8.2.jpeg","images/INT8.1.jpeg","images/INT8.2.jpeg","images/INT8.3.jpeg","images/INT8.4.jpeg","images/INT8.5.jpeg","images/INT8.6.jpeg"],
        badge: null,
        specs: [
            { icon: "fas fa-layer-group", text: "Material MULTYPANEL con aislante térmico." },
            { icon: "fas fa-wind", text: "Aire acondicionado de alta eficiencia." },
            { icon: "fas fa-bolt", text: "Instalación eléctrica completa 110V." },
            { icon: "fas fa-chair", text: "Escritorios y repisas amplias." },
            { icon: "fas fa-border-all", text: "Ventanas de alta resistencia." },
            { icon: "fas fa-lightbulb", text: "Iluminación en todo el interior." }
        ],
        badges: [
            { val: "32 FT", sub: "8m × 2.5m", label: "DIMENSIÓN" },
            { val: "12", sub: "Personas", label: "CAPACIDAD" }
        ]
    },
    {
        id: 4, tipo: "oficina",
        titulo: "CASETA MÓVIL 45FT",
        sub: "Tipo Oficina · 13 metros",
        desc: "Lista para tus grandes proyectos. ¡Como una casa!",
        imagenCard: "images/case13.jpeg",
        imagenes: ["images/case13.jpeg","images/inte13.1.jpg","images/inte13.2.jpg"],
        badge: null,
        specs: [
            { icon: "fas fa-layer-group", text: "Material MULTYPANEL con aislante térmico." },
            { icon: "fas fa-snowflake", text: "Unidad climatizada de alto rendimiento." },
            { icon: "fas fa-bolt", text: "Instalación eléctrica 110V con tierra física." },
            { icon: "fas fa-chair", text: "Escritorios y repisas." },
            { icon: "fas fa-border-all", text: "Ventanas de alta resistencia." },
            { icon: "fas fa-lightbulb", text: "Iluminación en todo el interior." }
        ],
        badges: [
            { val: "45 FT", sub: "13m × 2.5m", label: "DIMENSIÓN" },
            { val: "15", sub: "Personas", label: "CAPACIDAD" }
        ]
    },
    {
        id: 5, tipo: "sanitario",
        titulo: "CASETA MÓVIL 24FT SANITARIO",
        sub: "Tipo Sanitario · 6 metros",
        desc: "Para proyectos de larga duracion. ¡Baños como en casa!",
        imagenCard: "images/sanitario1.jpeg",
        imagenes: ["images/sani1.jpeg","images/sanii1.jpeg","images/sanii2.jpeg","images/sanii3.jpeg","images/sanii4.jpeg"],
        badge: null,
        specs: [
            { icon: "fas fa-restroom", text: "4 Mingitorios integrados." },
            { icon: "fas fa-toilet", text: "3 Sanitarios completos." },
            { icon: "fas fa-sink", text: "2 Lavamanos." },
            { icon: "fas fa-snowflake", text: "Unidad climatizada." },
            { icon: "fas fa-tint", text: "1 Cisterna de almacenamiento." },
            { icon: "fas fa-faucet", text: "Agua potable incluida." }
        ],
        badges: [
            { val: "24 FT", sub: "6m × 2.5m", label: "DIMENSIÓN" },
            { val: "7", sub: "Personas", label: "CAPACIDAD" }
        ]
    },
    {
        id: 6, tipo: "remolque",
        titulo: "REMOLQUE DE CARGA",
        sub: "Chasis Tubular Reforzado · Solo Venta",
        desc: "Ideal para transportar. ¡Fuerte y seguro!",
        imagenCard: "images/remolque.jpeg",
        imagenes: ["images/remolque.jpeg","images/remolque2.jpeg","images/remolque3.jpeg"],
        badge: "new",
        specsCaracteristicas: [
            { icon: "fas fa-vector-square", text: "Chasis de perfil tubular reforzado" },
            { icon: "fas fa-expand-arrows-alt", text: "<strong>Dimensiones:</strong> 1.6m de ancho × 3m de largo" },
            { icon: "fas fa-weight-hanging", text: "<strong>Capacidad de carga:</strong> 7.5 Toneladas" },
            { icon: "fas fa-tag", text: "Disponible solo para Venta" }
        ],
        specsBeneficios: [
            { icon: "fas fa-dolly-flatbed", text: "Traslada casetas sin desmontarlas" },
            { icon: "fas fa-coins", text: "Reduce costos de transporte" },
            { icon: "fas fa-shield-alt", text: "Protege la carga en carretera" },
            { icon: "fas fa-road", text: "Funciona en terrenos difíciles" }
        ],
        badges: [
            { val: "7.5 T", sub: "Toneladas", label: "DIMENSIÓN" },
            { val: "3 M", sub: "1.6m ancho", label: "DIMENSIÓN" }
        ]
    }
];

let sliderImages = [];
let sliderIdx = 0;

// ============================================
//  FUNCIONES AUXILIARES
// ============================================

function getCategoryColor(tipo) {
    switch(tipo) {
        case 'oficina': return '#0055a4';
        case 'sanitario': return '#10b981';
        case 'remolque': return '#ffc107';
        case 'habitacional': return '#8B5CF6';
        case 'vigilancia': return '#EF4444';
        default: return '#0055a4';
    }
}

function getCategoryIcon(tipo) {
    switch(tipo) {
        case 'oficina': return '🏢';
        case 'sanitario': return '🚿';
        case 'remolque': return '🚛';
        case 'habitacional': return '🏠';
        case 'vigilancia': return '👮';
        default: return '🏗️';
    }
}

function getCategoryText(tipo) {
    switch(tipo) {
        case 'oficina': return 'OFICINA';
        case 'sanitario': return 'SANITARIO';
        case 'remolque': return 'REMOLQUE';
        case 'habitacional': return 'HABITACIONAL';
        case 'vigilancia': return 'VIGILANCIA';
        default: return 'PRODUCTO';
    }
}

// ============================================
//  RENDERIZADO DEL CATÁLOGO
// ============================================

function renderCatalog(filtro = 'all') {
    const grid = document.getElementById('catalogGrid');
    const personalizacionSection = document.getElementById('personalizacionSection');
    
    if (!grid) return;
    
    // Si el filtro es "personalizar", mostrar la sección de personalización y ocultar el grid
    if (filtro === 'personalizar') {
        grid.style.display = 'none';
        if (personalizacionSection) {
            personalizacionSection.style.display = 'block';
            // Scroll suave hacia la sección
            setTimeout(() => {
                personalizacionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
        document.getElementById('productCount').textContent = 'Personalización';
        return;
    }
    
    // Si no, mostrar el grid y ocultar personalización
    grid.style.display = 'grid';
    if (personalizacionSection) {
        personalizacionSection.style.display = 'none';
    }
    
    const visible = PRODUCTOS.filter(p => filtro === 'all' || p.tipo === filtro);
    grid.innerHTML = visible.map((p, i) => {
        const badgeHTML = {
            new: '<span class="cbadge cbadge-new"><i class="fas fa-sparkles"></i> NUEVO</span>',
            best: '<span class="cbadge cbadge-best"><i class="fas fa-star"></i> MÁS VENDIDO</span>',
            featured: '<span class="cbadge cbadge-featured"><i class="fas fa-fire"></i> DESTACADO</span>'
        }[p.badge] || '';
        const tipoLabel = getCategoryText(p.tipo);
        const tipoIcon = getCategoryIcon(p.tipo);
        const tipoColor = getCategoryColor(p.tipo);
        return `
        <div class="product-card" data-tipo="${p.tipo}" data-id="${p.id}" style="animation-delay:${i * 0.07}s">
            <div class="card-badges">${badgeHTML}</div>
            <div class="card-image" onclick="openModal(${p.id})">
                <img src="${p.imagenCard}" alt="${p.titulo}" loading="lazy">
                <div class="card-overlay">
                    <span class="overlay-btn"><i class="fas fa-eye"></i> VER DETALLES</span>
                </div>
            </div>
            <div class="card-info">
                <div class="card-category" style="color: ${tipoColor}">
                    ${tipoIcon} ${tipoLabel}
                </div>
                <h3>${p.titulo}</h3>
                <p class="card-desc">${p.desc.substring(0, 100)}...</p>
                <div class="card-footer">
                    <div class="card-avail"><i class="fas fa-check-circle"></i> RENTA Y VENTA</div>
                    <button class="card-btn" onclick="openModal(${p.id})">VER MÁS <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>`;
    }).join('');
    document.getElementById('productCount').textContent = visible.length;
}

// ============================================
//  CONSTRUCCIÓN DE ESPECIFICACIONES
// ============================================

function buildSpecs(p) {
    const c = document.getElementById('specsContainer');
    if (!c) return;
    c.innerHTML = '';
    const makeTable = (specs) => `<table class="specs-table"><tbody>${specs.map(s => `<tr><td class="spec-ico"><i class="${s.icon}"></i></td><td class="spec-txt">${s.text}</td></td>`).join('')}</tbody></table>`;
    if (p.specsCaracteristicas) {
        c.innerHTML = `<div class="specs-block"><div class="specs-head"><div class="specs-head-icon"><i class="fas fa-cogs"></i></div><span class="specs-head-label">CARACTERÍSTICAS TÉCNICAS</span></div>${makeTable(p.specsCaracteristicas)}</div><div class="specs-sep"></div><div class="specs-block"><div class="specs-head"><div class="specs-head-icon"><i class="fas fa-star"></i></div><span class="specs-head-label">BENEFICIOS</span></div>${makeTable(p.specsBeneficios)}</div>`;
    } else {
        c.innerHTML = `<div class="specs-block"><div class="specs-head"><div class="specs-head-icon"><i class="fas fa-cogs"></i></div><span class="specs-head-label">CARACTERÍSTICAS TÉCNICAS</span></div>${makeTable(p.specs)}</div>`;
    }
    if (p.badges) {
        const renderBadge = (b) => {
            if ((p.tipo === 'oficina' || p.tipo === 'sanitario') && b.label === 'CAPACIDAD') {
                const iconClass = p.tipo === 'sanitario' ? 'fas fa-restroom' : 'fas fa-user';
                const n = parseInt(b.val) || 0;
                let gruposHTML = '';
                if (n === 4) {
                    let icons = '';
                    for (let j = 0; j < n; j++) icons += `<i class="${iconClass} cap-person"></i>`;
                    gruposHTML = `<div class="cap-group">${icons}</div>`;
                } else {
                    for (let i = 0; i < n; i += 3) {
                        const count = Math.min(3, n - i);
                        let icons = '';
                        for (let j = 0; j < count; j++) icons += `<i class="${iconClass} cap-person"></i>`;
                        gruposHTML += `<div class="cap-group">${icons}</div>`;
                    }
                }
                return `<div class="dim-badge cap-badge"><div class="cap-num">${n}</div><div class="cap-groups-row">${gruposHTML}</div><div class="dsub">${b.sub}</div><div class="dlabel">${b.label}</div></div>`;
            }
            return `<div class="dim-badge"><div class="dval">${b.val}</div><div class="dsub">${b.sub}</div><div class="dlabel">${b.label}</div></div>`;
        };
        c.innerHTML += `<div class="badges-row">${p.badges.map(renderBadge).join('')}</div>`;
    }
    if (p.tipo === 'oficina') {
        c.innerHTML += `<div class="info-strip"><div class="strip-item"><i class="fas fa-hand-holding-usd"></i><div><div class="strip-title">RENTA Y VENTA</div></div></div><div class="strip-item"><i class="fas fa-wrench"></i><div><div class="strip-title">MANTENIMIENTO GRATUITO</div></div></div></div>`;
    }
}

// ============================================
//  SLIDER DEL MODAL
// ============================================

function buildSlider(p) {
    const track = document.getElementById('sliderTrack');
    const dots = document.getElementById('sliderDots');
    if (!track || !dots) return;
    track.innerHTML = '';
    dots.innerHTML = '';
    sliderImages = p.imagenes || [];
    if (sliderImages.length > 0) {
        sliderImages.forEach((src, i) => {
            const slide = document.createElement('div');
            slide.className = 'slide-item';
            const img = document.createElement('img');
            img.src = src;
            img.alt = p.titulo;
            slide.appendChild(img);
            track.appendChild(slide);
            const dot = document.createElement('div');
            dot.className = i === 0 ? 'sdot on' : 'sdot';
            dot.onclick = () => goToSlide(i);
            dots.appendChild(dot);
        });
    }
    sliderIdx = 0;
    updateSlider();
}

function updateSlider() {
    const track = document.getElementById('sliderTrack');
    if (track) track.style.transform = `translateX(-${sliderIdx * 100}%)`;
    document.querySelectorAll('.sdot').forEach((d, i) => d.classList.toggle('on', i === sliderIdx));
}

function changeSlide(dir) {
    if (sliderImages.length <= 1) return;
    sliderIdx = (sliderIdx + dir + sliderImages.length) % sliderImages.length;
    updateSlider();
}

function goToSlide(i) {
    sliderIdx = i;
    updateSlider();
}

// ============================================
//  MODAL
// ============================================

function openModal(id) {
    const p = PRODUCTOS.find(x => x.id === id);
    if (!p) return;
    
    const navbar = document.getElementById('mainNavbar');
    if (navbar) navbar.classList.add('hide');
    
    document.getElementById('modalTitle').textContent = p.titulo;
    document.getElementById('modalSub').textContent = p.sub || '';
    buildSlider(p);
    buildSpecs(p);
    document.getElementById('infoModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const navbar = document.getElementById('mainNavbar');
    if (navbar) navbar.classList.remove('hide');
    
    document.getElementById('infoModal').classList.remove('open');
    document.body.style.overflow = 'auto';
}

// ============================================
//  SCROLL PARA OCULTAR/MOSTRAR NAVBAR
// ============================================

let lastScrollTop = 0;
const navbar = document.getElementById('mainNavbar');

function handleNavbarScroll() {
    if (!navbar) return;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 50) {
        navbar.classList.add('hide');
    } else if (scrollTop < lastScrollTop) {
        navbar.classList.remove('hide');
    }
    if (scrollTop > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScrollTop = scrollTop;
}

// ============================================
//  PERSONALIZACIÓN EN SECCIÓN DEL CATÁLOGO
// ============================================

let currentCatalogStep = 0;
let selectedCatalogType = null;

// Selección de tipo de caseta
document.querySelectorAll('.option-card-catalog').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.option-card-catalog').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        const radio = card.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
        selectedCatalogType = card.dataset.type;
        
        const nextBtn = document.getElementById('nextStepCatalogBtn');
        if (nextBtn) {
            const typeName = card.querySelector('.option-title-catalog')?.textContent || 'Caseta';
            nextBtn.innerHTML = `Siguiente: ${typeName} <i class="fas fa-arrow-right"></i>`;
        }
    });
});

// Actualizar medidas según el tipo seleccionado
function updateMeasuresByCatalogType() {
    const medidaSelect = document.getElementById('medidaSelectCatalog');
    if (!medidaSelect) return;
    
    if (selectedCatalogType === 'sanitario') {
        medidaSelect.innerHTML = `
            <option value="">Selecciona una medida</option>
            <option value="12FT">12 FT (4m × 2.5m) - 2 Sanitarios</option>
            <option value="17FT">17 FT (5m × 2.5m) - 3 Sanitarios</option>
            <option value="24FT">24 FT (6m × 2.5m) - 4 Sanitarios</option>
        `;
    } else {
        medidaSelect.innerHTML = `
            <option value="">Selecciona una medida</option>
            <option value="12FT">12 FT (4m × 2.5m) - 4 personas</option>
            <option value="17FT">17 FT (5m × 2.5m) - 6 personas</option>
            <option value="24FT">24 FT (6m × 2.5m) - 9 personas</option>
            <option value="32FT">32 FT (8m × 2.5m) - 12 personas</option>
            <option value="45FT">45 FT (13m × 2.5m) - 15+ personas</option>
        `;
    }
}

// Navegación de pasos
function updateCatalogSteps() {
    const sections = document.querySelectorAll('.form-section-catalog');
    sections.forEach((section, index) => {
        if (index === currentCatalogStep) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
    
    const badges = document.querySelectorAll('.step-badge-catalog');
    badges.forEach((badge, index) => {
        if (index <= currentCatalogStep) {
            badge.classList.add('active');
        } else {
            badge.classList.remove('active');
        }
    });
    
    const prevBtn = document.getElementById('prevStepCatalogBtn');
    const nextBtn = document.getElementById('nextStepCatalogBtn');
    const submitBtn = document.getElementById('submitFormCatalogBtn');
    
    if (prevBtn) prevBtn.disabled = currentCatalogStep === 0;
    
    if (nextBtn && submitBtn) {
        if (currentCatalogStep === 2) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'flex';
        } else {
            nextBtn.style.display = 'flex';
            submitBtn.style.display = 'none';
        }
    }
}

function validateCatalogStep() {
    if (currentCatalogStep === 0) {
        if (!selectedCatalogType) {
            mostrarNotificacion('error', 'Por favor, selecciona un tipo de caseta');
            return false;
        }
        return true;
    }
    
    if (currentCatalogStep === 1) {
        const medida = document.querySelector('[name="medidaPersonalizada"]')?.value;
        if (!medida) {
            mostrarNotificacion('error', 'Por favor, selecciona una medida');
            return false;
        }
        return true;
    }
    
    if (currentCatalogStep === 2) {
        const nombre = document.querySelector('[name="nombrePersonalizado"]')?.value;
        const telefono = document.querySelector('[name="telefonoPersonalizado"]')?.value;
        const email = document.querySelector('[name="emailPersonalizado"]')?.value;
        
        if (!nombre || !telefono || !email) {
            mostrarNotificacion('error', 'Por favor, completa todos los campos obligatorios (*)');
            return false;
        }
        
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            mostrarNotificacion('error', 'Por favor, ingresa un correo electrónico válido');
            return false;
        }
        
        return true;
    }
    
    return true;
}

// Mostrar notificación
function mostrarNotificacion(tipo, mensaje) {
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    const icono = tipo === 'error' ? 'fas fa-exclamation-triangle' : 'fas fa-check-circle';
    notification.innerHTML = `<i class="${icono}"></i> ${mensaje}`;
    if (tipo === 'error') {
        notification.style.background = 'linear-gradient(135deg, #dc3545, #b02a37)';
    }
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 4000);
}

// Enviar correo electrónico
async function enviarPorCorreo(datos) {
    // Configuración para EmailJS
    // Debes registrarte en https://www.emailjs.com/ y crear un servicio
    const serviceId = 'service_mobile_booths'; // Cambia por tu Service ID
    const templateId = 'template_personalizacion'; // Cambia por tu Template ID
    const publicKey = 'TU_PUBLIC_KEY'; // Cambia por tu Public Key
    
    const templateParams = {
        to_email: 'ventas@mobilebooths.com', // Correo destino
        from_name: datos.nombre,
        from_email: datos.email,
        telefono: datos.telefono,
        empresa: datos.empresa,
        tipo_caseta: datos.tipo,
        medida: datos.medida,
        capacidad: datos.capacidad,
        mobiliario: datos.mobiliario,
        equipo: datos.equipo,
        acabados: datos.acabados,
        ubicacion: datos.ubicacion,
        fecha: datos.fecha,
        notas: datos.notas,
        fecha_envio: new Date().toLocaleString('es-MX')
    };
    
    try {
        // Usar EmailJS
        // const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
        
        // Simulación de envío (para pruebas)
        console.log('Enviando correo:', templateParams);
        
        // Simular éxito
        return { success: true };
    } catch (error) {
        console.error('Error al enviar correo:', error);
        return { success: false, error };
    }
}

// Botones de navegación
const nextCatalogBtn = document.getElementById('nextStepCatalogBtn');
if (nextCatalogBtn) {
    nextCatalogBtn.addEventListener('click', () => {
        if (validateCatalogStep()) {
            if (currentCatalogStep === 0 && selectedCatalogType) {
                updateMeasuresByCatalogType();
            }
            if (currentCatalogStep < 2) {
                currentCatalogStep++;
                updateCatalogSteps();
            }
        }
    });
}

const prevCatalogBtn = document.getElementById('prevStepCatalogBtn');
if (prevCatalogBtn) {
    prevCatalogBtn.addEventListener('click', () => {
        if (currentCatalogStep > 0) {
            currentCatalogStep--;
            updateCatalogSteps();
        }
    });
}

// Resetear formulario de personalización
function resetCatalogForm() {
    currentCatalogStep = 0;
    selectedCatalogType = null;
    
    document.querySelectorAll('.option-card-catalog').forEach(c => c.classList.remove('selected'));
    document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
    document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
    document.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], input[type="date"]').forEach(i => i.value = '');
    document.querySelectorAll('select').forEach(s => s.value = '');
    document.querySelectorAll('textarea').forEach(t => t.value = '');
    
    updateCatalogSteps();
    
    const nextBtn = document.getElementById('nextStepCatalogBtn');
    if (nextBtn) {
        nextBtn.innerHTML = 'Siguiente <i class="fas fa-arrow-right"></i>';
        nextBtn.style.display = 'flex';
    }
    const submitBtn = document.getElementById('submitFormCatalogBtn');
    if (submitBtn) submitBtn.style.display = 'none';
}

// Enviar formulario por correo electrónico
const catalogForm = document.getElementById('personalizeFormCatalog');
if (catalogForm) {
    catalogForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Mostrar loading
        const submitBtn = document.getElementById('submitFormCatalogBtn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        try {
            const selectedCard = document.querySelector('.option-card-catalog.selected');
            const tipoSeleccionado = selectedCard?.querySelector('.option-title-catalog')?.textContent || 'No especificado';
            
            const datosCorreo = {
                tipo: tipoSeleccionado,
                medida: document.querySelector('[name="medidaPersonalizada"]')?.value || 'No especificada',
                capacidad: document.querySelector('[name="capacidadPersonalizada"]')?.value || 'No especificada',
                mobiliario: Array.from(document.querySelectorAll('[name="mobiliarioPersonalizado"]:checked')).map(cb => cb.value).join(', ') || 'Ninguno',
                equipo: Array.from(document.querySelectorAll('[name="equipoPersonalizado"]:checked')).map(cb => cb.value).join(', ') || 'Ninguno',
                acabados: document.querySelector('[name="acabadosPersonalizado"]')?.value || 'Ninguno',
                nombre: document.querySelector('[name="nombrePersonalizado"]')?.value || '',
                empresa: document.querySelector('[name="empresaPersonalizada"]')?.value || 'No especificada',
                telefono: document.querySelector('[name="telefonoPersonalizado"]')?.value || '',
                email: document.querySelector('[name="emailPersonalizado"]')?.value || '',
                ubicacion: document.querySelector('[name="ubicacionPersonalizada"]')?.value || 'No especificada',
                fecha: document.querySelector('[name="fechaPersonalizada"]')?.value || 'No especificada',
                notas: document.querySelector('[name="notasPersonalizado"]')?.value || 'Ninguna'
            };
            
            const resultado = await enviarPorCorreo(datosCorreo);
            
            if (resultado.success) {
                mostrarNotificacion('success', '¡Solicitud enviada con éxito! Te contactaremos pronto.');
                resetCatalogForm();
                
                // Volver al grid de productos
                document.querySelector('.filter-pill.active')?.classList.remove('active');
                const allFilter = document.querySelector('.filter-pill[data-filter="all"]');
                if (allFilter) {
                    allFilter.classList.add('active');
                    renderCatalog('all');
                }
            } else {
                mostrarNotificacion('error', 'Error al enviar. Por favor, intenta de nuevo o contáctanos por WhatsApp');
            }
        } catch (error) {
            console.error('Error:', error);
            mostrarNotificacion('error', 'Error al enviar. Por favor, intenta de nuevo');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// ============================================
//  EVENTOS E INICIALIZACIÓN
// ============================================

if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true, offset: 50 });
}

window.addEventListener('scroll', handleNavbarScroll);

// Filtros
document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCatalog(btn.dataset.filter);
    });
});

// Modal click fuera
const modalEl = document.getElementById('infoModal');
if (modalEl) {
    modalEl.addEventListener('click', e => { 
        if (e.target === e.currentTarget) closeModal(); 
    });
}

// Teclas para modal
document.addEventListener('keydown', e => {
    const m = document.getElementById('infoModal');
    if (!m || !m.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'ArrowRight') changeSlide(1);
});

// Menú móvil


// Renderizar catálogo
renderCatalog();