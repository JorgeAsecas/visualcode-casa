document.getElementById("form").addEventListener('submit', submitt);

function submitt(e) {
    e.preventDefault();
    const form = e.target;
    const datos = new FormData(form);
    const nombre = datos.get('Nombre');
    const mensaje = datos.get('Mensaje');
    const color = datos.get('Color');
    const dias = datos.get('DiasconDisponibilidad');
    const asignatura = datos.get('Asignatura');

    const mailtoLink = "mailto:" + asignatura + "@gmail.com?subject=Formulario&body=" +
        "Nombre: " + nombre + "%0A" +
        "Mensaje: " + mensaje + "%0A" +
        "Color: " + color + "%0A" +
        "Asignatura: " + asignatura + "%0A" +
        "Días con disponibilidad: " + dias;

    const mailElement = document.querySelector('#maill');
    mailElement.setAttribute('href', mailtoLink);
    mailElement.style.display = 'block';  // Ensure it's visible for the click to be registered
    mailElement.click();
    mailElement.style.display = 'none';  // Hide it again
}
