/*Variables*/
const numeroTarjetaInput = document.querySelector(".numero-tarjeta-input");
const tarjetaEnfrenteNumero = document.querySelector(
    ".tarjeta-enfrente-numero"
);

const nombreTarjetaInput = document.querySelector(".nombre-tarjeta-input");
const tarjetaEnfrenteNombre = document.querySelector(
    ".tarjeta-enfrente-nombre"
);

const fechaMmInput = document.querySelector(".fecha-mm-input");
const fechaYyInput = document.querySelector(".fecha-yy-input");
const tarjetaEnfrenteFecha = document.querySelector(".tarjeta-enfrente-fecha");

const cvcInput = document.querySelector(".cvc-input");
const tarjetaTraseraCvc = document.querySelector(".tarjeta-trasera-cvc");

nombreTarjetaInput.addEventListener("keyup", enviarNombreTarjeta);
numeroTarjetaInput.addEventListener("keyup", enviarNumeroTarjeta);
fechaMmInput.addEventListener("keyup", enviarFechaMM);
fechaYyInput.addEventListener("keyup", enviarFechaMM);
cvcInput.addEventListener("keyup", enviarCvc);

function enviarNombreTarjeta() {
    tarjetaEnfrenteNombre.innerHTML = nombreTarjetaInput.value;

    if (nombreTarjetaInput.value == "") {
        tarjetaEnfrenteNombre.innerHTML = "Kevin Armando Pineda";
    }
}
function enviarNumeroTarjeta() {
    tarjetaEnfrenteNumero.innerHTML = numeroTarjetaInput.value;

    if (numeroTarjetaInput.value == "") {
        tarjetaEnfrenteNumero.innerHTML = "0000 0000 0000 0000";
    }
}
function enviarFechaMM() {
    tarjetaEnfrenteFecha.innerHTML =
        fechaMmInput.value + " / " + fechaYyInput.value;

        if (fechaMmInput.value == "" && !fechaYyInput.value == "") {
            tarjetaEnfrenteFecha.innerHTML = "00" + " / " + fechaYyInput.value;
        }else if (fechaYyInput.value == "" && !fechaMmInput.value == "") {
            tarjetaEnfrenteFecha.innerHTML = fechaMmInput.value + " / " + "00";
        }else if (fechaMmInput.value == "" && fechaYyInput.value == "") {
            tarjetaEnfrenteFecha.innerHTML = "00" + " / " + "00";
        }
}

function enviarCvc() {
    tarjetaTraseraCvc.innerHTML = cvcInput.value;

    if (cvcInput.value == "") {
        tarjetaTraseraCvc.innerHTML = "000";
    }
}
