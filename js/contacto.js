// ==========================================
//  SCRIPT DE CONTACTO — Mobile Booths v2
// ==========================================

// EmailJS inicialización
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init("eBKF1SVmEYm-_z-Bw");
    }
})();

document.addEventListener('DOMContentLoaded', () => {

    // ── AOS ─────────────────────────────────
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true, offset: 50 });
    }

    // ── Formulario de contacto ───────────────
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = document.querySelector('.qc-btn-send');
            const originalText = btn.innerHTML;

            btn.innerHTML = "<span>Enviando...</span> <i class='fas fa-spinner fa-pulse'></i>";
            btn.style.opacity = "0.7";
            btn.disabled = true;

            const templateParams = {
                empresa:        document.getElementById('empresa').value,
                nombre:         document.getElementById('nombre').value,
                telefono:       document.getElementById('telefono').value,
                correo_usuario: document.getElementById('correo').value,
                mensaje:        document.getElementById('mensaje').value
            };

            if (typeof emailjs !== 'undefined') {
                emailjs.send('service_o5unvfg', 'template_w6cg52o', templateParams)
                    .then(() => {
                        btn.innerHTML = "<span>¡Enviado con éxito!</span> <i class='fas fa-check-circle'></i>";
                        btn.style.background = "#25d366";
                        btn.style.opacity = "1";
                        alert('¡Gracias! Tu mensaje ha sido enviado a Mobile Booths. En breve un asesor se comunicará contigo.');
                        form.reset();
                        setTimeout(() => {
                            btn.innerHTML = originalText;
                            btn.style.background = '';
                            btn.disabled = false;
                        }, 3000);
                    }, (error) => {
                        alert('Hubo un error al enviar el mensaje. Por favor contáctanos vía WhatsApp.');
                        console.error('Error:', error);
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                        btn.style.opacity = "1";
                    });
            } else {
                // Fallback — abrir WhatsApp si no está disponible EmailJS
                const msg = `Hola, me interesa más información.\nEmpresa: ${templateParams.empresa}\nNombre: ${templateParams.nombre}\nTeléfono: ${templateParams.telefono}\nMensaje: ${templateParams.mensaje}`;
                window.open(`https://wa.me/528333244188?text=${encodeURIComponent(msg)}`, '_blank');
                btn.innerHTML = originalText;
                btn.disabled = false;
                btn.style.opacity = "1";
            }
        });
    }

    // ── Video mobile ─────────────────────────
    const bgVideo = document.getElementById('bg-video-contact');
    if (bgVideo && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        bgVideo.setAttribute('playsinline', 'true');
        bgVideo.setAttribute('webkit-playsinline', 'true');
        bgVideo.play().catch(() => {});
    }

});