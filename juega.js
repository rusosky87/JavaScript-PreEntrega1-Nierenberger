let numIntentos = 0;
let intentos = document.getElementById("intentos");
let numeroIngresado = document.getElementById("numero");
let btnAdivinar = document.getElementById("btnAdivinar");
let btnReiniciar = document.getElementById("btnReiniciar");
let mensaje = document.getElementById("mensaje");

function iniciar(){
    numIntentos = 0;
    intentos.textContent = numIntentos;
    numeroIngresado.disabled = false;
    numeroIngresado.value = "";
    btnAdivinar.disabled = false;
    mensaje.textContent = "";
}

function adivinar(){
    let numeroEjemplares = 9;
    if(isNaN(numeroIngresado.value) || numeroIngresado.value > 10 || numeroIngresado.value < 1){
        mensaje.textContent = "¡Debes ingresar un número válido!";
        numeroIngresado.value = "";

    }else{
        numIntentos++;
        intentos.textContent = numIntentos;

    if(numIntentos < 3 && numeroIngresado.value != numeroEjemplares){
        if(numeroIngresado.value != numeroEjemplares){
                mensaje.textContent = "¡Fallaste! Inténtalo de nuevo.";}}

    else if(numeroIngresado.value == numeroEjemplares){
            mensaje.textContent = "¡Lo conseguiste! ¡Felicitaciones!";
            terminar();

    }else{
            mensaje.innerHTML = "Lo siento, has perdido.<br>";
            terminar();
        }       
    }
}
function terminar(){
    numeroIngresado.disabled = true;
    btnAdivinar.disabled = true;
}


document.addEventListener("DOMContentLoaded", iniciar, false);
btnReiniciar.addEventListener("click", iniciar, false);
btnAdivinar.addEventListener("click", adivinar, false);