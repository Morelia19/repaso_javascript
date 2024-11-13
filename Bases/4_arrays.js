//Javascript también soporta arreglos: listas de valores
var primos =[2, 3, 5, 7, 11]; //Los arreglos comienzan y terminan con corchetes
console.log(primos[0]); //output: 2 => 2 es el primer elemento (index 0)
console.log(primos.length); //output:5 => cantidad de elementos
console.log(primos[primos.length-1]); //output:11 => El último elemento del arreglo

primos[5] = 13; //Se agrega un nuevo elmento al último indice
console.log(primos); //output: [2, 3, 5, 7, 11, 13]

primos[5] = 17; //Se cambia el valor del último elemento
console.log(primos); //output: [2, 3, 5, 7, 11, 17]

var empty = []; //Se crea un arreglo vacío
console.log(empty); //output: []
console.log(empty.length); //output: 0

// =============================================================================
// Los objetos y arreglos pueden contener otros objetos y arreglos
var puntos = [
    {x: 0, y: 0}, //Un arreglo con dos elementos
    {x: 1, y: 1} //Cada elemento es un objeto
];

console.log(puntos[0]); //output: {x: 0, y: 0}
console.log(puntos[1]); //output: {x: 1, y: 1}
console.log(puntos[0].x); //output: 0
console.log(puntos[1].x); //output: 1
console.log(puntos[0].y); //output: 0
console.log(puntos[1].y); //output: 1

// =============================================================================
var data = { //Se crea un objeto con dos propiedades
    trial1: [[1,2],[3,4]], //El valor de cada propiedad es un arreglo.
    trial2: [[2,3],[4,5]], //Los elementos del arreglo son arreglos.
}
console.log(data.trial1); //output: [[1, 2], [3, 4]]
console.log(data.trial2); //output: [[2, 3], [4, 5]]
console.log(data.trial1[0]); //output: [1, 2]
console.log(data.trial2[0]); //output: [2, 3]
console.log(data.trial1[0][0]); //output: 1 muestra el primer elemento del primer arreglo de la propiedad trial1
console.log(data.trial2[0][0]); //output: 2 muestra el primer elemento del primer arreglo de la propiedad trial
console.log(data.trial1[1][1]); //output: 4 muestra el segundo elemento del segundo arreglo de la propiedad trial1
console.log(data.trial2[1][1]); //output: 5 muestra el segundo elemento del segundo arreglo de la propiedad trial2



