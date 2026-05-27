/* ─────────────────────────────────────────────
   NOTIFICACIÓN FLOTANTE PERSONALIZADA
   ───────────────────────────────────────────── */
function showCustomNotification(message, isSuccess) {
    // Eliminar notificación existente si la hay
    const existingNotif = document.querySelector('.custom-floating-notification');
    if (existingNotif) existingNotif.remove();

    // Crear notificación
    const notification = document.createElement('div');
    notification.className = `custom-floating-notification ${isSuccess ? 'success' : 'error'}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close-btn">&times;</button>
        </div>
    `;

    document.body.appendChild(notification);

    // Cerrar con el botón
    const closeBtn = notification.querySelector('.notification-close-btn');
    closeBtn.onclick = () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    };

    // Auto-cerrar después de 4 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 4000);
}

/* ─────────────────────────────────────────────
   ENVÍO DEL FORMULARIO (sin recargar)
   ───────────────────────────────────────────── */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita recargar o redirigir

        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        
        // Deshabilitar botón y mostrar estado
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Enviando... <i class="fas fa-spinner fa-pulse"></i>';
        
        // Mostrar notificación de "enviando"
        showCustomNotification('Enviando mensaje...', true);

        fetch(contactForm.action, {
            method: contactForm.method,
            body: new FormData(contactForm),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showCustomNotification('✅ ¡Mensaje enviado con éxito! La página se recargará...', true);
                contactForm.reset(); // Limpiar formulario
                
                // Recargar la página después de 2 segundos
                setTimeout(() => {
                    location.reload();
                }, 2000);
            } else {
                throw new Error('Error en el envío');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showCustomNotification('❌ Error al enviar. Inténtalo de nuevo.', false);
            // Reactivar botón
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        });
    });
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
} else {
    initContactForm();
}