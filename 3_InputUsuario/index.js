//¿Cómo capturar el input del usuario?

//1. Fácil: Ventana emergente
//2. Profesional: caja de texto en HTML

//==============================================================================

//1. Fácil: Ventana emergente

//let nombre = window.prompt("¿Cómo te llamas?");

//console.log(nombre);

//*descomenta para ver su funcionamiento.

//==============================================================================
//2. Profesional: caja de texto en HTML

let usuario;
document.getElementById("Enviar").onclick = function() {
    usuario = document.getElementById("Texto").value;
    console.log(usuario);
    document.getElementById("miH1").textContent += ` ${usuario}`;
    
}