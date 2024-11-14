const boton = document.getElementById("boton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let NumeroRandom;

boton.onclick = function(){
    NumeroRandom = Math.random();
    myLabel.textContent =Math.floor(NumeroRandom *max) + 1 ;
}