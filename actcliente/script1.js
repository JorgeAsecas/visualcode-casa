function resalta(elEvento) {
    evento = elEvento || window.event;
    if (evento.button == 0) {
        window.alert("Se ha pulsado el boton izquierdo");
    } else if (evento.button == 1) {
        window.alert("Se ha pulsado el boton del medio");
    } else {
        window.alert("Se ha pulsado el boton derecho");
    }
}

window.onload = function() {
    document.getElementById("seccion").onmousedown = resalta;
}
