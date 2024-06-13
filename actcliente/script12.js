
function validaDNI() {
    var valor = document.getElementById("dni").value;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    if (!(/^\d{8}[A-Z]$/.test(valor))) {
        return false;
    }

    if (valor.charAt(8) !== letras[(valor.substring(0, 8)) % 23]) {
        return false;
    }

    return true;
}

function validaFormulario(e) {
    var dniInput = document.getElementById("dni");
    if (!validaDNI(dniInput.value)) {
        dniInput.setCustomValidity("El DNI no es válido.");
        e.preventDefault();
        return false;
    } else {
        dniInput.setCustomValidity("");
    }

    if (!confirm("Pulsa aceptar para enviar")) {
        e.preventDefault();
        return false;
    }
    return true;
}
//const inputs = document.querySelectorAll('input');
 //   inputs.forEach(input => {
   //     input.addEventListener('blur', function() {
//            if (!this.checkValidity()) {
  //              this.value = '';
    //        }
//        });
  //  });
dfghsdfgsdf
