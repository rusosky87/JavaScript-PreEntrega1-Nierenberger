class Libro {
    constructor (id, título, imagen, precio) {
        this.id = id;
        this.título = título;
        this.imagen = imagen;
        this.precio = precio;
    }
}

const LibrosArray = [
    new Libro ('01', 'El Hombre Ilustrado', url='../img/01-RayBr.jpg', 'U$D 18.00'),
    new Libro ('02', 'Muerte en el Nilo', url='../img/02-AgaCh.jpg', 'U$D 15.00'),
    new Libro ('03', 'Nuestra Parte de Noche', url='../img/03-NatEn.jpg', 'U$D 27.00'),
    new Libro ('04', 'El Hobbit', url='../img/04-JrrTo.jpg', 'U$D 22.00'),
    new Libro ('05', 'La Balsa de Piedra', url='../img/05-JosSa.jpg', 'U$D 25.00')
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
