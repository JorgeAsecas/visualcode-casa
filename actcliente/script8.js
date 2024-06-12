document.getElementById("color1").addEventListener('click', rojo )

function rojo(rojo) {
    document.getElementById("cuerpo").style.backgroundColor = "red";


}
document.getElementById("color2").addEventListener('click', verde )

function verde(verde) {
    document.getElementById("cuerpo").style.backgroundColor = "green";


}
document.getElementById("color3").addEventListener('click', azul )

function azul(azul) {
    document.getElementById("cuerpo").style.backgroundColor = "blue";


}

document.getElementById("form").addEventListener('submit', submitt);

    function submitt(e) {
        e.preventDefault();
        const form = e.target;
        const datos = new FormData(form);
        const objetodatos = Object.fromEntries(datos.entries());
        const nombre = datos.get('Nombre');
        const mensaje = datos.get('Mensaje');
        const color = datos.get('Color');
        const asignatura = datos.get('Asignatura');
        let diasDisponibilidad = Array.from(form.querySelectorAll('input[name="DiasconDisponibilidad"]:checked'));
        let diaPreferente = "";

        // Obtiene el último día marcado como disponible
        if (diasDisponibilidad.length > 0) {
            diaPreferente = diasDisponibilidad[diasDisponibilidad.length - 1].value;
        }

        const cuerpoCorreo =
            "Nombre: " + nombre + "%0A" +
            "Mensaje: " + mensaje + "%0A" +
            "Color: " + color + "%0A" +
            "Asignatura: " + asignatura + "%0A" +
            "Días con disponibilidad: " + diasDisponibilidad.map(dia => dia.value).join(", ") + "%0A" +
            "Día Preferente: " + diaPreferente;

        window.location.href = "mailto:" + asignatura + "@iesdonana.org?subject=Formulario&body=" + cuerpoCorreo;
    }
