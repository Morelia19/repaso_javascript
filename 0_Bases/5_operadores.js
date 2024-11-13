// Los operadores actúan en los valores para producir un nuevo valor
console.log(3 + 2); //output: 5
console.log(3 - 2); //output: -1
console.log(3 * 2); //output: 6
console.log(3 / 2); //output: 1.5

// =============================================================================
// Para el siguiente ejemplo usaremos el arreglo "puntos" creado anteriormente

var puntos = [
    {x: 0, y: 0}, //Un arreglo con dos elementos
    {x: 1, y: 1} //Cada elemento es un objeto
];

console.log(puntos[1].x - puntos[0].x); //output: 1 => 1 - 0 = 1

// =============================================================================
console.log("3"+"2"); //output: 32 => al declarar un string se puede concatenar con otro string utilizando el operador "+"

// =============================================================================
// Javascript soporta los siguientes shorthands
var count = 1;
count++;
console.log(count); //output: 2
count--;
console.log(count); //output: 1
count +=2;
console.log(count); //output: 3
count -=2;
console.log(count); //output: 1
count *= 2;
console.log(count); //output: 2
count /= 2;
console.log(count); //output: 1

// =============================================================================
// =============================================================================
// Los operadores de comparación son muy útiles para comparar valores
// Evaluan a verdadero si los valores son iguales o falso si no son iguales
var x = 2, y = 3; //El signo = es de asignación

console.log(x === y); //false
console.log(x !== y); //true 
console.log(x < y); //true
console.log(x > y); //false
console.log(x <= y); //true
console.log(x >= y); //false

console.log("two" === "three"); //false
console.log("two" > "three"); //true
console.log(false === (x > y)); //true: false es igual a false

// =============================================================================
// Los operadores lógicos combinan valores booleanos
var x = 2, y = 3;
console.log((x === 2) && (y === 3)); //true: ambos son verdaderos, && significa "y"
console.log((x > 3) || (y < 3)); //false: ninguna comparación es verdadera, || significa "o"
console.log(!(x === y)); //true: ! invierte el valor booleano.