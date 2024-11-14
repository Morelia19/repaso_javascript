let edad = document.getElementById("miEdad");
const enviar = document.getElementById("enviar");
const resultado = document.getElementById("resultado");

enviar.onclick = function () {
    let edad_convertida = Number(edad.value);
    if (edad_convertida >= 100) {
        resultado.textContent = "Eres muy mayor.";
    }
    else if (edad_convertida ==0) {
        resultado.textContent = "No puedes entrar. Acabas de nacer.";
    }
    else if (edad_convertida >=18) {
        resultado.textContent = "Eres un adulto.";
    }
    else if (edad_convertida <0) {
        resultado.textContent = "No puedes tener menos de 0 años.";
    }
    else {
        resultado.textContent = "Debes de ser mayor a 18.";
    }
};
