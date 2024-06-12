document.getElementById("imagen").addEventListener("abort", abortar);

function abortar(e) {

    window.alert("La carga se ha abortado")
}

document.getElementById("imagen").addEventListener("error", error);

function error(e) {

    window.alert("Ha ocurrido un error al cargar la imagen")
}
