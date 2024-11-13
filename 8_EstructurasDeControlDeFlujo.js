//================================================
//1. if - else
//================================================

//La siguiente función muestra el valor absoluto.
function absoluto(x){ 
    if (x >= 0){ //Inicia la sentencia if
        return x; //ejecuta este código si la comparación (x>=0) es verdadera.
    }
    else{ // se ejecuta el else si la comparación es falsa.
        return -x; // devuelve el valor absoluto
    }
}

console.log(absoluto(-5)); //imprime 5
console.log(absoluto(4)); //imprime 4

a = absoluto(-10)=== absoluto(10); //
console.log(a); //imprime True (verdadero)



//================================================
//2. for
//================================================

//Función que devuelve la suma de números en un arreglo
var primos = [1, 2, 3, 5, 7, 11];
function suma(array){
    var sum = 0; //Se inicializa la variable en 0.
    for(const x of array){ //Recorre todo el arreglo y se asigna el valor de cada elemento a la variable x
        sum += x; //Añade el valor a la suma
    }
    return sum; //Devuelve la suma
}

console.log(suma(primos)); //imprime 29


//================================================
//3. while
//================================================
//La siguiente función devuelve el factorial de un número
function factorial(n){ //Se declara la función
    producto = 1; // Variable producto que se inicializa en 1
    while(n>0){ //Si el valor de n es mayor que 0 se ejecuta lo siguiente
        producto *= n; //El valor del producto se multiplica por el valor de n
        n--; // n disminuye en 1 
    } //mientras n sea mayor a 0, se volverá a ejecutar el bucle while.
    return producto; //Devuelve el producto
}

console.log(factorial(5)); //imprime 120


//================================================
//4. For clásico
//================================================
// Realizamos la misma función anterior pero usando for
function factorial2(n){ //Se declara la función
    var producto = 1; //Se declara la variable producto que se inicializa en 1
    for(var i=1;i<=n;i++){ //Se declara la variable i que se inicializa en 1 y se incrementa en 1 en cada iteración del bucle
        producto *=i; //Se declara la variable producto a la que se le multiplica el valor de i
    }
    return producto; //Devuelve el producto
}

console.log(factorial2(5)); //imprime 120