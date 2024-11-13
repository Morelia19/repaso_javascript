// El tipo de dato más importante en Javascript es el objeto (object)
// Los objetos son colecciones de pares llave-valor
// Los objetos pueden contener cualquier tipo de dato
// Los objetos también pueden contener otros objetos

// Creamos un objeto
var libro = { //los objetos comienzan y terminan con llaves
    tema: "JavaScript", //la propiedad tema contiene el valor "JavaScript"
    autores: "Morelia", //la propiedad autores contiene un arreglo con el valor "Morelia"
};

//Accedemos a las propiedades del objeto con . (punto) o [] (corchetes)
console.log(libro.tema); //"JavaScript"
console.log(libro["tema"]); //"JavaScript"
console.log(libro.autores); //["Morelia"]
console.log(libro["autores"]); //["Morelia"]

// =============================================================================
libro.anio = 2024; //Creamos una nueva propiedad
libro.contenido = {}; //Creamos un objeto vació dentro del objeto libro

console.log(libro.anio); //2024
console.log(libro.contenido); //{}

// =============================================================================
libro.paginas = {cantidad: 1000}; //Creamos el objeto "paginas" con la propiedad de "cantidad" dentro del objeto libro
console.log(libro.paginas); //{cantidad: 1000}
console.log(libro.paginas.cantidad); //1000

// =============================================================================
//condicionalmente accedemos a las propiedades del objeto
console.log(libro.contenido?.capitulo?.seccion1)  //indefinido: libro.contenido no tiene la propiedad "capitulo1"
//Sin ?, se obtendrá un error
console.log(libro.contenido.capitulo.seccion1)

//El error que se produce es porque el objeto libro.contenido no tiene la propiedad "capitulo1":

//TypeError: Cannot read properties of undefined (reading 'seccion1')
//at Object.<anonymous> (/Users/morelia/Documents/repaso_javascript/3_objects.js:34:38)
//at Module._compile (node:internal/modules/cjs/loader:1364:14)
//at Module._extensions..js (node:internal/modules/cjs/loader:1422:10)
//at Module.load (node:internal/modules/cjs/loader:1203:32)
//at Module._load (node:internal/modules/cjs/loader:1019:12)
//at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
//at node:internal/main/run_main_module:28:49