document.addEventListener('DOMContentLoaded', () => {
    const infoBox = document.getElementById('info-box');

    // Datos de los conceptos económicos
    const conceptos = {
        maslow: {
            titulo: "Pirámide de Maslow",
            texto: "Jerarquía de las necesidades humanas. Para llegar a la autorrealización en la cima, primero deben cubrirse las necesidades fisiológicas y de seguridad en la base.",
            color: "rgba(239, 45, 94, 0.9)"
        },
        necesidad: {
            titulo: "Necesidad Económica",
            texto: "Es la sensación de carencia de algo, unida al deseo de satisfacerla. Es el motor principal de cualquier actividad económica.",
            color: "rgba(123, 200, 164, 0.9)"
        },
        satisfactor: {
            titulo: "Satisfactor (Bienes y Servicios)",
            texto: "Todo aquello que tiene la capacidad de extinguir una necesidad humana. Pueden ser bienes materiales o servicios intangibles.",
            color: "rgba(255, 198, 93, 0.9)"
        },
        costo: {
            titulo: "Costo de Oportunidad",
            texto: "El valor de la mejor alternativa a la que renuncias cuando tomas una decisión. Elegir una opción implica sacrificar los beneficios de la otra.",
            color: "rgba(76, 195, 217, 0.9)"
        }
    };

    function mostrarInfo(conceptoClave) {
        const data = conceptos[conceptoClave];
        infoBox.innerHTML = `<strong>${data.titulo}</strong><br>${data.texto}`;
        infoBox.style.background = data.color;
        infoBox.style.color = "#fff";
    }

    // Asignar eventos de clic a los modelos 3D
    document.querySelector('#obj-maslow').addEventListener('click', () => mostrarInfo('maslow'));
    document.querySelector('#obj-necesidad').addEventListener('click', () => mostrarInfo('necesidad'));
    document.querySelector('#obj-satisfactor').addEventListener('click', () => mostrarInfo('satisfactor'));
    document.querySelector('#obj-costo').addEventListener('click', () => mostrarInfo('costo'));
});