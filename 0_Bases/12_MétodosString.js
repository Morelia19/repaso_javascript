//String methods = permite manipular y trabajar con texto.


// Definir la variable
let nombreUsuario = "Ailerom";

// Convertir a mayúsculas
console.log(nombreUsuario.toUpperCase()); // "AILEROM"

// Convertir a minúsculas
console.log(nombreUsuario.toLowerCase()); // "ailerom"

// Capitalizar la primera letra (sin método directo, usando combinación de métodos)
console.log(nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1).toLowerCase()); // "Ailerom"

// Invertir el orden de las letras (no hay método directo, usando combinación de métodos)
console.log(nombreUsuario.split("").reverse().join("")); // "moreliA"

// Reemplazar caracteres
console.log(nombreUsuario.replace("A", "O")); // "Oilerom"

// Contar la cantidad de veces que aparece un carácter
console.log((nombreUsuario.match(/e/g) || []).length); // 1

// Encontrar la posición de un carácter
console.log(nombreUsuario.indexOf("r")); // 5

// Dividir la cadena en una lista (ejemplo con "e" como separador)
console.log(nombreUsuario.split("e")); // ["Ail", "rom"]

// Verificar si comienza con un carácter o cadena específica
console.log(nombreUsuario.startsWith("A")); // true

// Verificar si termina con un carácter o cadena específica
console.log(nombreUsuario.endsWith("m")); // true

// Longitud de la cadena
console.log(nombreUsuario.length); // 7

// Eliminar espacios en blanco (aunque en este caso no tiene)
console.log(nombreUsuario.trim()); // "Ailerom"

// Repetir la cadena 3 veces
console.log(nombreUsuario.repeat(3)); // "AileromAileromAilerom"

// Convert the number to a string and pad it to a fixed length (for example, 5 characters)
console.log(nombreUsuario.toString().padStart(5, '0'));

// Check if the reversed string includes the padded original string
console.log(nombreUsuario.includes("m"));
