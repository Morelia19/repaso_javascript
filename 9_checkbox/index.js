const myCheckbox = document.getElementById("miCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const miBtn = document.getElementById("miBtn");
const resultado = document.getElementById("resultado");
const resultadPago = document.getElementById("resultadPago");

miBtn.onclick = function () {
    if (myCheckbox.checked) {
        resultado.textContent = "Te has suscrito";
    }
    else {
        resultado.textContent = "No te has suscrito";
    }

    if (visaBtn.checked) {
        resultadPago.textContent = `Estás pagando con Visa`;
    }
    else if (masterCardBtn.checked) {
        resultadPago.textContent = `Estás pagando con MasterCard`;
    }
    else if (payPalBtn.checked) {
        resultadPago.textContent =  `Estás pagando con PayPal`;
    }
    else {
        resultadPago.textContent = "Elige un tipo de pago";
    }
};