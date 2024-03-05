document.getElementById(botón);
addEventListener("click", Iniciar);

function Iniciar () {
    let Intentos = 3;
    let númeroEjemplares = 5;
    while (Intentos > 0) {
        let númeroJugador = prompt(
            "Tienes " + Intentos + " intentos. Escribe un número.");
    if (númeroEjemplares == númeroJugador) {
        alert("¡Correcto! Gracias por jugar.");
        break;
        }
    if (númeroJugador !== númeroEjemplares) {
        alert("¡Fallaste!");
        }
        Intentos--;
    }
    if (Intentos == 0) {
        alert("Lo siento, has perdido.");
    }
}