visitas = 0




function setCookie(name, value)
{
document.cookie = name + "=" + encodeURIComponent(value)
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedc = decodeURIComponent(document.cookie);
    var ca = decodedc.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



function carga() {
    setCookie("visitas", ((getCookie("visitas") == "") ? 1 : parseInt(getCookie("visitas")) + 1))
    window.alert("Has visitado la pagina: " + getCookie("visitas"))

}
