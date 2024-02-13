
let formasDeOrdenarLosLibros = prompt(
    "¿Cómo deseas ordenar los libros?   1: Por nombre de autor.  2: Por nombre de género.  3: Por fecha de lanzamiento."
);

if (formasDeOrdenarLosLibros == "1") {
    console.log(
    "1.- BRADBURY, Ray - El Hombre Ilustrado - 1951  2.- CHRISTIE, Agatha - Muerte en el Nilo - 1 de Noviembre de 1937  3.- ENRIQUEZ, Mariana - Nuestra Parte de Noche - 2019,  4.- TOLKIEN, J.R.R. - El Hobbit - 21 de Septiembre de 1937  5.- SARAMAGO, José - La Balsa de Piedra - 1986"
    );
} else if (formasDeOrdenarLosLibros == "2") {
    console.log(
    "1.- CIENCIA FICCIÓN - El Hombre Ilustrado, Ray Bradbury.  2.- LITERATURA FANTÁSTICA - El Hobbit, J.R.R. Tolkien.  3.- POLICIAL - Muerte en el Nilo, Agatha Christie.  4.- REALISMO MÁGICO - La Balsa de Piedra, José Saramago.  5.- TERROR - Nuestra Parte de Noche, Mariana Enriquez."
    );
} else if (formasDeOrdenarLosLibros == "3") {
    console.log(
    "1.- SEPTIEMBRE 21, 1937 - El Hobbit.  2.- NOVIEMBRE 1, 1937 - Muerte en el Nilo.  3.- 1951 - El Hombre Ilustrado.  4.- 1986 - La Balsa d Piedra.  5.- 2019 - Nuestra Parte de Noche."
    );
} else console.log("OPCIÓN NO VÁLIDA");

document.getElementById(botón);
addEventListener("click", Iniciar);
function Iniciar() {
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

class Libro {
    constructor (id, título, imagen, sinópsis, precio) {
        this.id = id;
        this.título = título;
        this.imagen = imagen;
        this.sinópsis = sinópsis;
        this.precio = precio;
    }
}