document.querySelector("input").addEventListener("keydown", azul);

function azul(e) {
    document.getElementById("aa").style.backgroundColor = '#CCE6FF'
}

document.querySelector("input").addEventListener("click", amarillo);

function amarillo(e) {
    document.getElementById("aa").style.backgroundColor = '#FFFF00'
}

document.querySelector("input").addEventListener("mouseover", blanco);

function blanco(e) {
    document.getElementById("aa").style.backgroundColor = 'white'
}
