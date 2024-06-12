document.getElementById("imagen").addEventListener("mousedown", imagen);

function imagen(e) {

    container = document.getElementById('imagen')
    container.innerHTML = '<img src="3778789.png">';
}

document.getElementById("imagen").addEventListener("mouseup", imagen2);

function imagen2(e) {

    container = document.getElementById('imagen')
    container.innerHTML = '<img src="bomba.jpg">';
}
