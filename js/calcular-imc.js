

function mostrarMensaje() {
    console.log("ud hizo click");
}




var pacientes = document.querySelectorAll(".paciente");


for (var i=0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;


    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdIMC = paciente.querySelector(".info-imc");

    pesoEsValido = validarPeso(peso);
    alturaEsValida =validarAltura(altura);


    if (!pesoEsValido) {
        console.log("peso incorrecto");
        tdIMC.textContent = "Peso Incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if (!alturaEsValida) {
        console.log("altura incorrecta");
        tdIMC.textContent = "Altura Incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");

    }


    if ( pesoEsValido && alturaEsValida) {
        
        tdIMC.textContent= calcularIMC(peso, altura);
    }

}

function  calcularIMC(peso,altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);

}

function validarPeso(peso){
    if (peso >= 0  && peso < 1000 ) {
        return true;
    }
    else {
        return false;
    }
}

function validarAltura(altura){
    if (altura >= 0 && altura < 3.0 ) {
        return true;
    }
    else {
        return false;
    }
}