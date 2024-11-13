//Math

console.log(Math.PI); //imprime 3.14
console.log(Math.E); //imprime 2.718

let x = 3.21;
let y = 2;
let z;

z = Math.round(x); //devuelve el entero más cercano al valor de x
console.log(z); //imprime 3
z = Math.floor(x); //devuelve el entero inferior al valor de x
console.log(z); //imprime 3
z = Math.ceil(x); //devuelve el entero superior al valor de x
console.log(z); //imprime 4
z = Math.trunc(x); //devuelve el entero truncado
console.log(z); //imprime 3


let a = 9;
z = Math.pow(a, y); //devuelve el valor de a elevado y
console.log(z); //imprime 81

z = Math.sqrt(a); //devuelve la raíz cuadrada de a
console.log(z); //imprime 3

z = Math.log(a) //Devuelve el logaritmo natural de a
console.log(z); //imprime

z= Math.sin(a); //devuelve el seno de a
console.log(z); //imprime 0.9980267284283688

z = Math.cos(a); //devuelve el coseno de a
console.log(z); //imprime 0.09983341664682813

z = Math.tan(a); //devuelve la tangente de a
console.log(z); //imprime 1.9952623149688725    

let c = -5;
z = Math.abs(c); //devuelve el valor absoluto de a
console.log(z); //imprime 5

z = Math.sign(c); //devuelve el signo de a
console.log(z); //imprime el signo de -5, que es -1


let m=3;
let n=2;
let o=1;

let max = Math.max(m, n, o); //devuelve el mayor valor de m, n y o
console.log(max); //imprime 3

let min = Math.min(m, n, o); //devuelve el menor valor de m, n y o
console.log(min); //imprime 1
