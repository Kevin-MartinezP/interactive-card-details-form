/*Variable*/
const contenedorFormulario = document.querySelector(".contenedor-formulario");
const inputs = document.querySelectorAll(".contenedor-formulario input");

/*Objetos */
const expresiones = {
    numero: /^[0-9 ]+$/,
    letras: /^[A-Z ]+$/i,
    fecha: /^[0-9]+$/
};

const campos = {
    nombre : false,
    numero : false,
    fecha  : false,
    cvc    : false
}

/*Eventos */
contenedorFormulario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (campos.nombre && campos.numero && campos.fecha && campos.cvc) {
        contenedorFormulario.reset();
        document.querySelector(".contenedor-datos-agregados").classList.remove("inactive");
        document.querySelector(".ocultar-formulario").classList.add("inactive");
    }else{
        document.querySelector(".parrafo-blank").classList.remove("inactive");
    }

});



/*Funciones*/
const validarFormulario = (e) => {
    document.querySelector(".parrafo-blank").classList.add("inactive");
    switch (e.target.name) {
        case "nombre":
            if (expresiones.letras.test(e.target.value)) {
                document.querySelector(".parrafo-invalido-card-name").classList.add("inactive");
                document.querySelector(".contenedor-formulario .nombre-tarjeta-input").style.outline = "unset";
                campos.nombre = true;
            }else if (e.target.value == "") {
                document.querySelector(".parrafo-invalido-card-name").classList.add("inactive");
                document.querySelector(".contenedor-formulario .nombre-tarjeta-input").style.outline = "unset";
                campos.nombre = false;
            }else {
                document.querySelector(".contenedor-formulario .nombre-tarjeta-input").style.outline = "2px solid hsl(0, 100%, 66%)";
                document.querySelector(".parrafo-invalido-card-name").classList.remove("inactive");
                campos.nombre = false;
            }
            
            if (e.target.value == "") {
                document.querySelector(".tarjeta-enfrente-nombre").innerHTML =
                    "Kevin Armando Pineda";
            }else if(expresiones.numero.test(e.target.value)) {
                document.querySelector(".tarjeta-enfrente-nombre").innerHTML =
                    "Kevin Armando Pineda";
            }else {
                document.querySelector(".tarjeta-enfrente-nombre").innerHTML =
                    e.target.value;
            }
            break;
        case "numero":
            if (expresiones.numero.test(e.target.value)) {
                document.querySelector(".parrafo-invalido-card-number").classList.add("inactive");
                document.querySelector(".contenedor-formulario .numero-tarjeta-input").style.outline = "unset";
                campos.numero = true;
            }else if (e.target.value == "") {
                document.querySelector(".contenedor-formulario .numero-tarjeta-input").style.outline = "unset";
                document.querySelector(".parrafo-invalido-card-number").classList.add("inactive");
                campos.numero = false;
            }else {
                document.querySelector(".contenedor-formulario .numero-tarjeta-input").style.outline = "2px solid hsl(0, 100%, 66%)";
                document.querySelector(".parrafo-invalido-card-number").classList.remove("inactive");
                campos.numero = false;
            }

            if (e.target.value == "") {
                document.querySelector(".tarjeta-enfrente-numero").innerHTML =
                    "0000 0000 0000 0000";
            } else if (expresiones.letras.test(e.target.value)) {
                document.querySelector(".tarjeta-enfrente-numero").innerHTML =
                    "0000 0000 0000 0000";
            }else {
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
            
            if(expresiones.fecha.test(fechaMmInput.value) && expresiones.fecha.test(fechaYyInput.value)) {
                document.querySelector(".parrafo-invalido-fecha").classList.add("inactive");
                document.querySelector(".contenedor-formulario .fecha-mm-input").style.outline = "unset";
                document.querySelector(".contenedor-formulario .fecha-yy-input").style.outline = "unset";
                campos.fecha = true;
            }else if(fechaMmInput.value == "" && fechaYyInput.value == "") {
                document.querySelector(".parrafo-invalido-fecha").classList.add("inactive");
                document.querySelector(".contenedor-formulario .fecha-mm-input").style.outline = "unset";
                document.querySelector(".contenedor-formulario .fecha-yy-input").style.outline = "unset";
                campos.fecha = false;
            }
            else {
                document.querySelector(".contenedor-formulario .fecha-mm-input").style.outline = "2px solid hsl(0, 100%, 66%)";
                document.querySelector(".contenedor-formulario .fecha-yy-input").style.outline = "2px solid hsl(0, 100%, 66%)";
                document.querySelector(".parrafo-invalido-fecha").classList.remove("inactive");
                campos.fecha = false;
            }

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

            if (expresiones.numero.test(e.target.value)) {
                document.querySelector(".parrafo-invalido-cvc").classList.add("inactive");
                document.querySelector(".contenedor-formulario .cvc-input").style.outline = "unset";
                campos.cvc = true;
            }else if (e.target.value == "") {
                document.querySelector(".parrafo-invalido-cvc").classList.add("inactive");
                document.querySelector(".contenedor-formulario .cvc-input").style.outline = "unset";
                campos.cvc = false;
            }else {
                document.querySelector(".contenedor-formulario .cvc-input").style.outline = "2px solid hsl(0, 100%, 66%)";
                document.querySelector(".parrafo-invalido-cvc").classList.remove("inactive");
                campos.cvc = false;
            }

            if (e.target.value == "") {
                document.querySelector(".tarjeta-trasera-cvc").innerHTML = "000";
            }else if(expresiones.letras.test(e.target.value)) {
                document.querySelector(".tarjeta-trasera-cvc").innerHTML = "000";
            }else {
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

