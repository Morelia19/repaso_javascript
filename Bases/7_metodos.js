// Cuando una función  es asignada a una propiedad de un objeto
// se le llama método
//todos los objetos de javascript tienen un método
var a = []; // creamos un arreglo vacío
a.push(1, 2, 3) // el método push agrega elementos al final del arreglo
console.log(a); // [1, 2, 3]

a.reverse(); // el método reverse invierte el orden de los elementos del arreglo
console.log(a); // [3, 2, 1]

// =============================================================================
// Podemos definir nuestros propios métodos también
// Usamos "this" para referirnos al objeto en el que se define el método

// Utilizaremos el arreglo "puntos" visto en "4_arrays"
var puntos = [
    {x: 0, y: 0}, //Un arreglo con dos elementos
    {x: 1, y: 1} //Cada elemento es un objeto
];

puntos.dist = function(){ // Define un método para calcular la distancia entre dos puntos
    var p1 = this[0]; //Primer elemento del arreglo de puntos
    var p2 = this[1]; //Segundo elemento del arreglo de puntos

    var a = p2.x - p1.x; //Diferencia entre las coordenadas x
    var b = p2.y - p1.y; //Diferencia entre las coordenadas y
    return Math.sqrt(a*a + b*b); //Teorema de pitágoras. Math.sqrt sirve para calcular la raíz cuadrada
};
console.log(puntos.dist()); //Devuelve la distancia entre los dos primeros puntos