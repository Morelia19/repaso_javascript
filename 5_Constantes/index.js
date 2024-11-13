//PI es una constante, es un valor que no cambia.
const PI = 3.14;
let radio;
let circunferencia;


document.getElementById("miBoton").onclick = function() {
    radio = document.getElementById("miRadio").value;
    radio = Number(radio);
    circunferencia = 2* PI * radio;
    document.getElementById("miResultado").textContent = circunferencia + " cm";
}