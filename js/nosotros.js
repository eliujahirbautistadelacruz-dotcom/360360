/* ============================================================
   INTERACTIVIDAD DE LA LÍNEA DE TIEMPO (EVENTOS CLICK / TOUCH)
   ============================================================ */

function toggleTooltip(element) {
    // 1. Buscamos si hay otra burbuja de año abierta en pantalla para cerrarla primero
    const items = document.querySelectorAll('.timeline-item');
    
    items.forEach(item => {
        if (item !== element) {
            item.classList.remove('active-click');
        }
    });

    // 2. Alternamos el estado en el año seleccionado (abre o cierra)
    element.classList.toggle('active-click');
}

// 3. Cierra de forma automática cualquier burbuja abierta si el usuario hace clic fuera de la línea de tiempo
document.addEventListener('click', function(event) {
    if (!event.target.closest('.timeline-item')) {
        const items = document.querySelectorAll('.timeline-item');
        items.forEach(item => {
            item.classList.remove('active-click');
        });
    }
});