// ============================================================
// MAPA INTERACTIVO DE MÉXICO - JavaScript (Solo 3 sedes principales)
// Tres Sesenta Consultoría
// viewBox: -2 175.16 964 609.68
// ============================================================

(function() {
    'use strict';
   
    
    // Información de cada estado para tooltips
    const infoEstados = {
        'Nuevo León': { descripcion: 'Sede principal - 45+ proyectos', poblacion: '5.7M' },
        'Tamaulipas': { descripcion: 'Segunda sede - Fuerte presencia', poblacion: '3.5M' },
        'Veracruz': { descripcion: 'Expansión constante en el Golfo', poblacion: '8.1M' },
        'Coahuila': { descripcion: 'Proyectos de consultoría empresarial', poblacion: '3.1M' },
        'San Luis Potosí': { descripcion: 'Proyectos gubernamentales', poblacion: '2.8M' },
        'Puebla': { descripcion: 'Consultoría estratégica', poblacion: '6.5M' },
        'Querétaro': { descripcion: 'Innovación digital', poblacion: '2.3M' },
        'Ciudad de México': { descripcion: 'Oficina central estratégica', poblacion: '9.2M' },
        'Jalisco': { descripcion: 'Alianzas sector privado', poblacion: '8.3M' },
        'Guanajuato': { descripcion: 'Campañas digitales', poblacion: '6.1M' },
        'Tabasco': { descripcion: 'Gestión institucional', poblacion: '2.4M' },
        'Yucatán': { descripcion: 'Turismo y cultura', poblacion: '2.3M' },
        'Chihuahua': { descripcion: 'Medios masivos', poblacion: '3.7M' },
        'Sonora': { descripcion: 'Expansión norte', poblacion: '2.9M' }
    };
    
    // Configuración del viewBox
    const VIEW_BOX = { x: -2, y: 175.16, width: 964, height: 609.68 };
    
    document.addEventListener('DOMContentLoaded', function() {
        const pinsContainer = document.getElementById('pinsContainer');
        const tooltip = document.getElementById('mapTooltip');
        const infoPanel = document.getElementById('infoPanel');
        
        if (!pinsContainer) return;
        
        // Función para crear los pins (solo 3)
        function crearPins() {
            pinsContainer.innerHTML = '';
            
            estadosConPresencia.forEach(estado => {
                const pin = document.createElement('div');
                pin.className = 'map-pin';
                
                // Calcular posición porcentual basada en el viewBox
                const leftPercent = ((estado.x - VIEW_BOX.x) / VIEW_BOX.width) * 100;
                const topPercent = ((estado.y - VIEW_BOX.y) / VIEW_BOX.height) * 100;
                
                pin.style.left = `${leftPercent}%`;
                pin.style.top = `${topPercent}%`;
                
                pin.innerHTML = `
                    <i class="fas fa-map-pin"></i>
                    <div class="pin-label">
                        <strong>${estado.nombre}</strong><br>
                        ${estado.proyectos} proyectos | desde ${estado.anio}
                    </div>
                `;
                
                // Eventos del pin
                pin.addEventListener('mouseenter', function(e) {
                    tooltip.style.opacity = '1';
                    tooltip.innerHTML = `<i class="fas fa-star"></i> ${estado.nombre} - ${estado.descripcion} (${estado.proyectos} proyectos)`;
                    tooltip.style.left = (e.pageX + 15) + 'px';
                    tooltip.style.top = (e.pageY - 40) + 'px';
                    
                    if (infoPanel) {
                        infoPanel.innerHTML = `<i class="fas fa-building"></i> <strong>📍 ${estado.nombre}</strong><br>
                                               <span>${estado.descripcion} | ${estado.proyectos} proyectos ejecutados desde ${estado.anio}</span>`;
                        infoPanel.classList.add('active');
                    }
                });
                
                pin.addEventListener('mousemove', function(e) {
                    if (tooltip.style.opacity === '1') {
                        tooltip.style.left = (e.pageX + 15) + 'px';
                        tooltip.style.top = (e.pageY - 40) + 'px';
                    }
                });
                
                pin.addEventListener('mouseleave', function() {
                    tooltip.style.opacity = '0';
                });
                
                pin.addEventListener('click', function(e) {
                    e.stopPropagation();
                    if (infoPanel) {
                        infoPanel.innerHTML = `<i class="fas fa-chart-line"></i> <strong>📊 ${estado.nombre}</strong><br>
                                               <span>✅ ${estado.proyectos} proyectos completados<br>
                                               📅 Desde: ${estado.anio}<br>
                                               📝 ${estado.descripcion}</span>
                                               <div style="margin-top:10px;"><a href="contacto.html" style="color:#dd01c0;">Ver más proyectos →</a></div>`;
                        infoPanel.classList.add('active');
                    }
                    
                    pin.style.transform = 'translate(-50%, -50%) scale(1.3)';
                    setTimeout(() => {
                        pin.style.transform = 'translate(-50%, -50%) scale(1)';
                    }, 200);
                });
                
                pinsContainer.appendChild(pin);
                console.log(`Pin creado: ${estado.nombre} en ${leftPercent.toFixed(1)}%, ${topPercent.toFixed(1)}%`);
            });
        }
        
        // Función para agregar interactividad a los estados del SVG
        function agregarInteractividadEstados() {
            const estados = document.querySelectorAll('.estado');
            
            estados.forEach(estado => {
                const nombreEstado = estado.getAttribute('data-nombre') || '';
                const info = infoEstados[nombreEstado] || { descripcion: 'Proyectos en desarrollo', poblacion: '—' };
                
                estado.addEventListener('mouseenter', function(e) {
                    tooltip.style.opacity = '1';
                    tooltip.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${nombreEstado} — ${info.descripcion}`;
                    tooltip.style.left = (e.pageX + 15) + 'px';
                    tooltip.style.top = (e.pageY - 40) + 'px';
                    
                    estado.setAttribute('stroke', '#dd01c0');
                    estado.setAttribute('stroke-width', '2.5');
                });
                
                estado.addEventListener('mousemove', function(e) {
                    if (tooltip.style.opacity === '1') {
                        tooltip.style.left = (e.pageX + 15) + 'px';
                        tooltip.style.top = (e.pageY - 40) + 'px';
                    }
                });
                
                estado.addEventListener('mouseleave', function() {
                    tooltip.style.opacity = '0';
                    estado.setAttribute('stroke', '#fff');
                    estado.setAttribute('stroke-width', '1.2');
                });
                
                estado.addEventListener('click', function() {
                    if (infoPanel) {
                        infoPanel.innerHTML = `<i class="fas fa-chart-simple"></i> <strong>${nombreEstado}</strong><br>
                                               <span>${info.descripcion}<br>👥 Población: ${info.poblacion}</span>
                                               <div style="margin-top:8px;"><a href="contacto.html" style="color:#dd01c0;">Solicitar información →</a></div>`;
                        infoPanel.classList.add('active');
                    }
                });
            });
        }
        
        // Inicializar
        function inicializar() {
            crearPins();
            agregarInteractividadEstados();
        }
        
        // Recalcular al redimensionar
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                crearPins();
            }, 250);
        });
        
        inicializar();
        
        // Leyenda interactiva
        const leyendaItems = document.querySelectorAll('.leyenda-item');
        leyendaItems.forEach(item => {
            item.addEventListener('click', function() {
                const regionName = this.querySelector('span')?.innerText || 'Región';
                if (infoPanel) {
                    infoPanel.innerHTML = `<i class="fas fa-globe-americas"></i> <strong>${regionName}</strong><br>
                                           <span>Área con proyectos estratégicos activos. Contáctanos para conocer más sobre nuestra presencia.</span>`;
                    infoPanel.classList.add('active');
                    setTimeout(() => {
                        if (infoPanel && !infoPanel.matches(':hover')) {
                            infoPanel.classList.remove('active');
                            infoPanel.innerHTML = `<i class="fas fa-info-circle"></i> <span>Pasa el cursor sobre cualquier estado para ver información</span>`;
                        }
                    }, 3000);
                }
            });
        });
        
        console.log('Mapa interactivo cargado correctamente | Tres Sesenta Consultoría - 3 sedes principales');
    });
})();