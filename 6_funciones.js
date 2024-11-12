function mas1(x){ //Se declara una función llamada "mas1" que toma un argumento llamado "x"
    return x + 1; //Devuelve el valor de x+1
} //Las funciones terminan con un punto y coma

mas1(2); //Devuelve 3: 2 + 1 = 3

// =============================================================================
var y = 3;
var cuadrado = function(x){ //Las funciones son valores y pueden ser asignados a variables
    return x * x;
};

console.log(cuadrado(mas1(y))); //16: invocamos la función mas1 con el valor de "y" y devolvemos el resultado de cuadrado 


// =============================================================================
// =============================================================================
// Arrow functions
// son funciones que no necesitan una variable para guardar su valor

const mas1 = x => x + 1; //Las funciones de flecha son similares a las funciones normales, pero no necesitan una variable para guardar su valor
console.log(mas1(2)); //Devuelve 3

const cuadrado = x => x * x;
console.log(cuadrado(mas1(2))); //Devuelve 9
