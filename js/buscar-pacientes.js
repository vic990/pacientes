var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click", function () {
  console.log("buscando");
  var xhr = new XMLHttpRequest();
  var url = "https://alura-es-cursos.github.io/api-pacientes/pacientes.json";
  xhr.open("GET", url);
  xhr.addEventListener("load", function () {
    var errorAjax = document.querySelector("#error-ajax");
    if (xhr.status == 200) {
        errorAjax.classList.add("invisible");
        respuesta = xhr.responseText;
        var pacientes = JSON.parse(respuesta);
        pacientes.forEach(function (paciente) {
            adicionarPacienteEnLaTabla(paciente);
            console.log(paciente);
        });
    } else {
        errorAjax.classList.remove("invisible");
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  });
  xhr.send();
});
