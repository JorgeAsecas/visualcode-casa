function carga() {
    document.querySelector('#cafe1').setAttribute("value" , ((getCookie("Cafe Solo") == "") ? 0 : getCookie("Cafe Solo")))
    document.querySelector('#cafe2').setAttribute("value" , ((getCookie("Cafe Con Leche") == "") ? 0 : getCookie("Cafe Con Leche")))
    document.querySelector('#cafe3').setAttribute("value" , ((getCookie("Cafe Descafeinado") == "") ? 0 : getCookie("Cafe Descafeinado")))
    document.querySelector('#cafe4').setAttribute("value" , ((getCookie("Cafe Con Hielo") == "") ? 0 : getCookie("Cafe Con Hielo")))
}


document.getElementById("form").addEventListener('submit', submitt )

function setCookie(name, value)
{
document.cookie = name + "=" + encodeURIComponent(value)
}

function getCookie(cname) {
    name = cname + "="
    decodedc = decodeURIComponent(document.cookie)
    ca = decodedc.split(";")
    for (i = 0; i < ca.length; i++) {
        c = ca[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)

        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)

        }
    }
    return ""
}



function submitt(eve) {
eve.preventDefault()

datos = new FormData(this)
objetodatos = Object.fromEntries(datos.entries())
cafe = Object.values(objetodatos)



if (cafe == "Cafe Solo") {
(getCookie(cafe) == "") ? setCookie(cafe, 0) : getCookie(cafe)
console.log(getCookie(cafe))
setCookie(cafe, parseInt(getCookie(cafe)) + 1)
document.querySelector('#cafe1').setAttribute("value" , getCookie(cafe))
document.getElementById('votos1').innerHTML = getCookie(cafe)
console.log(getCookie(cafe))

} else if (cafe == "Cafe Con Leche") {
(getCookie(cafe) == "") ? setCookie(cafe, 0) : getCookie(cafe)
setCookie(cafe, parseInt(getCookie(cafe)) + 1)
document.querySelector('#cafe2').setAttribute("value" , getCookie(cafe))
console.log(getCookie(cafe))
console.log(cafe)
}
else if (cafe == "Cafe Descafeinado") {
(getCookie(cafe) == "") ? setCookie(cafe, 0) : getCookie(cafe)
setCookie(cafe, parseInt(getCookie(cafe)) + 1)
document.querySelector('#cafe3').setAttribute("value" , getCookie(cafe))
console.log(getCookie(cafe))
console.log(cafe)
} else {
(getCookie(cafe) == "") ? setCookie(cafe, 0) : getCookie(cafe)
setCookie(cafe, parseInt(getCookie(cafe)) + 1)
document.querySelector('#cafe4').setAttribute("value" , getCookie(cafe))
console.log(getCookie(cafe))
console.log(cafe)
}




}
