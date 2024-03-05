var numIntentos = 0;
var intentos = document.getElementById("intentos");
var numeroIngresado = document.getElementById("numero");
var btnAdivinar = document.getElementById("btnAdivinar");
var btnReiniciar = document.getElementById("btnReiniciar");
var mensaje = document.getElementById("mensaje");
var numeroSecreto = 0;

function iniciar(){
    numIntentos = 0;
    intentos.textContent = numIntentos;
    numeroIngresado.disabled = false;
    numeroIngresado.value = "";
    btnAdivinar.disabled = false;
    mensaje.textContent = "";
}

function adivinar(){
    let numeroEjemplares = 5;
    if(isNaN(numeroIngresado.value) || numeroIngresado.value > 10 || numeroIngresado.value < 1){
        mensaje.textContent = "¡Debes ingresar un numero válido!";
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
            mensaje.innerHTML = "Lo lamento, has perdido.<br>";
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