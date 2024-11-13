const btnDisminuir = document.getElementById("disminuirBtn");
const btnResetear = document.getElementById("resetBtn");
const btnAumentar = document.getElementById("AumentarBtn");
const contador = document.getElementById("contador");

let contar = 0;

btnDisminuir.onclick = function() {
    contar--;
    contador.textContent = contar;
};
btnAumentar.onclick = function() {
    contar++;
    contador.textContent = contar;
};

btnResetear.onclick = function() {
    contar=0;
    contador.textContent = contar;
};