document.addEventListener("DOMContentLoaded", () => {
    const tooltip = document.getElementById("tooltip");

    // Estados en rosa (los que trabajas)
    const estadosRosa = ["MXTAM", "MXNLE", "MXROO", "MXHID"];
    estadosRosa.forEach(id => {
        const path = document.getElementById(id);
        if (path) path.classList.add("estado-rosa");
    });

    // Información para TODOS los estados
    const estadosInfo = {
        MXSON: "Sonora",
        MXBCN: "Baja California",
        MXBCS: "Baja California Sur",
        MXCHH: "Chihuahua",
        MXCOA: "Coahuila",
        MXTAM: "Tamaulipas\nOperaciones clave\nAldama y Tampico",
        MXNLE: "Nuevo León\nCentro industrial\nMonterrey y zona metropolitana",
        MXZAC: "Zacatecas",
        MXDUR: "Durango",
        MXSLP: "San Luis Potosí",
        MXGUA: "Guanajuato",
        MXQUE: "Querétaro",
        MXHID: "Hidalgo\nDesarrollo y logística",
        MXMEX: "Estado de México",
        MXCMX: "Ciudad de México\nCapital del país",
        MXTLA: "Tlaxcala",
        MXPUE: "Puebla",
        MXMOR: "Morelos",
        MXJAL: "Jalisco\nTierra del tequila y mariachi",
        MXMIC: "Michoacán",
        MXGRO: "Guerrero",
        MXOAX: "Oaxaca",
        MXCHP: "Chiapas",
        MXTAB: "Tabasco",
        MXCAM: "Campeche",
        MXYUC: "Yucatán",
        MXROO: "Quintana Roo\nTurismo y proyectos del Caribe",
        MXVER: "Veracruz\nPuerto importante",
        MXNAY: "Nayarit",
        MXCOL: "Colima",
        MXSIN: "Sinaloa"
    };

    document.querySelectorAll("#mexicoMap path").forEach(path => {
        path.addEventListener("mousemove", e => {
            let info = estadosInfo[path.id];
            
            if (info) {
                // Si tiene salto de línea, lo mostramos bonito
                tooltip.innerHTML = info.replace(/\n/g, '<br>');
            } else {
                tooltip.textContent = path.getAttribute("name") || "Estado de México";
            }
            
            tooltip.style.display = "block";
            tooltip.style.left = e.pageX + 15 + "px";
            tooltip.style.top = e.pageY + 10 + "px";
        });

        path.addEventListener("mouseout", () => {
            tooltip.style.display = "none";
        });
    });
});