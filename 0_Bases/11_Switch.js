// SWITCH = pueden ser una buena alternativa de una sentencia if.

let dia = 2
switch(dia){
    case 1:
        console.log("Hoy es Lunes");
        break;
    case 2:
        console.log("Hoy es Martes");
        break;
    case 3:
        console.log("Hoy es Miércoles");
        break;
    case 4:
        console.log("Hoy es Jueves");
        break;
    case 5:
        console.log("Hoy es Viernes");
        break;
    case 6:
        console.log("Hoy es Sábado");
        break;
    case 7:
        console.log("Hoy es Domingo");
        break;
    default:
        console.log("No es un dia válido");
}

// EJEMPLO 2

let resultadoTest = 85;
let resultadoLetra;

switch (true) {
    case resultadoTest >= 90:
        resultadoLetra = "A";
        break;
    case resultadoTest >= 80:
        resultadoLetra = "B";
        break;
    case resultadoTest >= 70:
        resultadoLetra = "C";
        break;
    case resultadoTest >= 60:
        resultadoLetra = "D";
        break;
    default:
        resultadoTest = "F";
}

console.log(resultadoLetra);