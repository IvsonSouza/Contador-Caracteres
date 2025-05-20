const campoPrincipal = document.getElementById("campo-principal");
const contadorTexto = document.getElementById("contador");

campoPrincipal.addEventListener("input", function () {
    contadorTexto.textContent = campoPrincipal.value.length;
});