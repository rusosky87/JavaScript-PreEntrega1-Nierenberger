class Libro {
    constructor(id, título, imagen, precio) {
        this.id = id;
        this.título = título;
        this.imagen = imagen;
        this.precio = precio;
    }
}

const LibrosArray = [
    new Libro('01', 'El Hombre Ilustrado', url = '../img/01-RayBr.jpg', 'U$D 18.00'),
    new Libro('02', 'Muerte en el Nilo', url = '../img/02-AgaCh.jpg', 'U$D 15.00'),
    new Libro('03', 'Nuestra Parte de Noche', url = '../img/03-NatEn.jpg', 'U$D 27.00'),
    new Libro('04', 'El Hobbit', url = '../img/04-JrrTo.jpg', 'U$D 22.00'),
    new Libro('05', 'La Balsa de Piedra', url = '../img/05-JosSa.jpg', 'U$D 25.00'),
    new Libro('06', 'La Eneida', url = '../img/06-VirMa.jpg', 'U$D 19.50'),
    new Libro('07', 'La Sombra del Viento', url = '../img/07-RuiZa.jpg', 'U$D 31.00'),
    new Libro('08', 'El Nombre de la Rosa', url = '../img/08-UmbEc.jpg', 'U$D 23.50'),
    new Libro('09', 'El Amor en los Tiempos del Cólera', url = '../img/09-GarMa.jpg', 'U$D 28.00')
]

const baúlDeLibros = document.getElementById("baúl-de-libros");

function mostrarFichas(Libros) {
    Libros.forEach(Libro => {
        const ficha = document.createElement('div');
        ficha.classList.add('ficha');
        ficha.innerHTML = `
                            <h2>${Libro.título}</h2>
                            <img src="${Libro.imagen}" alt="Portada" class='Tapas'>
                            <p>${Libro.precio}</p>
                            <p>Cod: ${Libro.id}</p>
                            `
        baúlDeLibros.appendChild(ficha);
        ficha.addEventListener('click', () => agregarAlCarrito(Libro));
    })

}

mostrarFichas(LibrosArray);


function agregarAlCarrito(Libro) {
    const itemsCarrito = JSON.parse(localStorage.getItem('CARRO')) || [];
    itemsCarrito.push(Libro);
    localStorage.setItem('CARRO', JSON.stringify(itemsCarrito));
    renderizarCarrito();
}

function renderizarCarrito() {
    const itemsCarrito = JSON.parse(localStorage.getItem('CARRO')) || [];
    const listaCarrito = document.getElementById('items-carrito');

    listaCarrito.innerHTML = '';

    itemsCarrito.forEach(Libro => {
        const elementoCarrito = document.createElement('li');

        elementoCarrito.textContent = `${Libro.título} - ${Libro.precio}`;
        listaCarrito.appendChild(elementoCarrito);
    });
}


window.addEventListener('load', () => {
    renderizarCarrito();
});

const toastify = document.querySelector ("#baúl-de-libros");
toastify.addEventListener ("click", () => {
    Toastify({
        text: "¡Agregado al CARRO!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            color: 'black',
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){}
      }).showToast();

} )

