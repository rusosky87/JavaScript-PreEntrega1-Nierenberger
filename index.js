
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
    constructor (id, título, imagen, precio) {
        this.id = id;
        this.título = título;
        this.imagen = imagen;
        this.precio = precio;
    }
}

const LibrosArray = [
    new Libro ('01', 'El Hombre Ilustrado', url='./img/01-RayBr.jpg', 'U$D 18.00'),
    new Libro ('02', 'Muerte en el Nilo', url='./img/02-AgaCh.jpg', 'U$D 15.00'),
    new Libro ('03', 'Nuestra Parte de Noche', url='./img/03-NatEn.jpg', 'U$D 27.00'),
    new Libro ('04', 'El Hobbit', url='./img/04-JrrTo.jpg', 'U$D 22.00'),
    new Libro ('05', 'La Balsa de Piedra', url='./img/05-JosSa.jpg', 'U$D 25.00')
]

const baúlDeLibros = document.getElementById("baúl-de-libros");

function mostrarFichas (Libros) {
    Libros.forEach ( Libro => {
        const ficha = document.createElement ('div');
        ficha.classList.add ('ficha');
        ficha.innerHTML =   `
                            <h2>${Libro.título}</h2>
                            <img src="${Libro.imagen}" alt="Portada" class='Tapas'>
                            <p>${Libro.precio}</p>
                            <p>Cod: ${Libro.id}</p>
                            `
        baúlDeLibros.appendChild (ficha);
    })
}

mostrarFichas (LibrosArray);