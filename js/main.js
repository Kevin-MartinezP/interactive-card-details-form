/*Variable*/
const contenedorFormulario = document.querySelector(".contenedor-formulario");
const inputs = document.querySelectorAll(".contenedor-formulario input");

/*Eventos */
contenedorFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
});

/*Objetos */
const expresiones = {
    numero: /^[0-9]$/,
};

/*Funciones*/
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            if (e.target.value == "") {
                document.querySelector(".tarjeta-enfrente-nombre").innerHTML =
                    "Kevin Armando Pineda";
            } else {
                document.querySelector(".tarjeta-enfrente-nombre").innerHTML =
                    e.target.value;
            }
            break;
        case "numero":
            if (e.target.value == "") {
                document.querySelector(".tarjeta-enfrente-numero").innerHTML =
                    "0000 0000 0000 0000";
            } else {
                document.querySelector(".tarjeta-enfrente-numero").innerHTML =
                    e.target.value;
            }
            break;
        case "fecha":
            const fechaMmInput = document.querySelector(".fecha-mm-input");
            const fechaYyInput = document.querySelector(".fecha-yy-input");
            const tarjetaEnfrenteFecha = document.querySelector(
                ".tarjeta-enfrente-fecha"
            );

            if (fechaMmInput.value == "" && !fechaYyInput.value == "") {
                tarjetaEnfrenteFecha.innerHTML = "00" + " / " + fechaYyInput.value;
            } else if (fechaYyInput.value == "" && !fechaMmInput.value == "") {
                tarjetaEnfrenteFecha.innerHTML = fechaMmInput.value + " / " + "00";
            } else if (fechaMmInput.value == "" && fechaYyInput.value == "") {
                tarjetaEnfrenteFecha.innerHTML = "00" + " / " + "00";
            } else {
                tarjetaEnfrenteFecha.innerHTML =
                    fechaMmInput.value + " / " + fechaYyInput.value;
            }
            break;
        case "cvc":
            if (e.target.value == "") {
                document.querySelector(".tarjeta-trasera-cvc").innerHTML = "000";
            } else {
                document.querySelector(".tarjeta-trasera-cvc").innerHTML =
                    e.target.value;
            }
            break;
    }
};

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});
