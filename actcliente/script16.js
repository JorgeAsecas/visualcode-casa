function carga() {
    // obtiene el total de votos entre todas las opciones
    var totalVotos = parseInt(getCookie("IOS") || 0) + parseInt(getCookie("Android") || 0) +
                     parseInt(getCookie("Windows Phone") || 0) + parseInt(getCookie("Otro") || 0);

    // actualiza el porcentaje compartido en cada barra de progreso
    document.querySelector('#sistema1').setAttribute("data-content", Math.round((parseInt(getCookie("IOS") || 0) / totalVotos) * 100) + "%");
    document.querySelector('#porcentaje1').innerText = Math.round((parseInt(getCookie("IOS") || 0) / totalVotos) * 100) + "%";

    document.querySelector('#sistema2').setAttribute("data-content", Math.round((parseInt(getCookie("Android") || 0) / totalVotos) * 100) + "%");
    document.querySelector('#porcentaje2').innerText = Math.round((parseInt(getCookie("Android") || 0) / totalVotos) * 100) + "%";

    document.querySelector('#sistema3').setAttribute("data-content", Math.round((parseInt(getCookie("Windows Phone") || 0) / totalVotos) * 100) + "%");
    document.querySelector('#porcentaje3').innerText = Math.round((parseInt(getCookie("Windows Phone") || 0) / totalVotos) * 100) + "%";

    document.querySelector('#sistema4').setAttribute("data-content", Math.round((parseInt(getCookie("Otro") || 0) / totalVotos) * 100) + "%");
    document.querySelector('#porcentaje4').innerText = Math.round((parseInt(getCookie("Otro") || 0) / totalVotos) * 100) + "%";

    // actualiza el valor de cada barra de progreso
    document.querySelector('#sistema1').setAttribute("value" , parseInt(getCookie("IOS") || 0));
    document.querySelector('#sistema2').setAttribute("value" , parseInt(getCookie("Android") || 0));
    document.querySelector('#sistema3').setAttribute("value" , parseInt(getCookie("Windows Phone") || 0));
    document.querySelector('#sistema4').setAttribute("value" , parseInt(getCookie("Otro") || 0));
}

document.getElementById("form").addEventListener('submit', submitt );

function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value);
}

function getCookie(cname) {
    name = cname + "=";
    decodedc = decodeURIComponent(document.cookie);
    ca = decodedc.split(";");
    for (i = 0; i < ca.length; i++) {
        c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function submitt(eve) {
    eve.preventDefault();

    datos = new FormData(this);
    objetodatos = Object.fromEntries(datos.entries());
    sis = Object.values(objetodatos);

    // incrementa el conteo de votos para el sistema operativo seleccionado
    if (sis == "IOS" || sis == "Android" || sis == "Windows Phone" || sis == "Otro") {
        var votoActual = parseInt(getCookie(sis) || 0);
        setCookie(sis, votoActual + 1);
        carga(); // actualiza los datos de carga despues de cada voto
    }
}
