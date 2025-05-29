let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const productos = [
    //Mates
    {
      nombre: "Mate Porongo",
      precio: 1500,
      imagen: "imagenes/Mate_porongo.jpg",
      categoria: "Mate",
      cantidad: 1
    },
    {
      nombre: "Mate Torpedo",
      precio: 2500,
      imagen: "imagenes/Mate_torpedo.jpg",
      categoria: "Mate",
      cantidad: 1
    },
    {
      nombre: "Mate Criollo",
      precio: 1000,
      imagen: "imagenes/Mate_criollo.jpg",
      categoria: "Mate",
      cantidad: 1
    },
    {
      nombre: "Mate Camionero",
      precio: 1500,
      imagen: "imagenes/Mate_camionero.jpg",
      categoria: "Mate",
      cantidad: 1
    },
    {
      nombre: "Mate Imperial",
      precio: 3000,
      imagen: "imagenes/Mate_imperial.jpg",
      categoria: "Mate",
      cantidad: 1
    },
    //Yerbas
    {
      nombre: "Yerba Rosamonte",
      precio: 500,
      imagen: "imagenes/Yerba_rosamonte.jpg",
      categoria: "Yerba",
      cantidad: 1
    },
    {
      nombre: "Yerba Canarias",
      precio: 2000,
      imagen: "imagenes/Yerba_canarias.jpg",
      categoria: "Yerba",
      cantidad: 1
    },
    {
      nombre: "Yerba Unión",
      precio: 1000,
      imagen: "imagenes/Yerba_union.jpg",
      categoria: "Yerba",
      cantidad: 1
    },
    //Bombillas
    {
      nombre: "Bombilla Pico De Loro",
      precio: 1000,
      imagen: "imagenes/Bombilla_picoDeLoro.jpg",
      categoria: "Bombilla",
      cantidad: 1
    },
    {
      nombre: "Bombilla Con Resorte",
      precio: 750,
      imagen: "imagenes/Bombilla_conResorte.jpg",
      categoria: "Bombilla",
      cantidad: 1
    },
    {
      nombre: "Bombilla Hexagonal",
      precio: 800,
      imagen: "imagenes/Bombilla_hexagonal.jpg",
      categoria: "Bombilla",
      cantidad: 1
    },
    {
      nombre: "Bombilla Chata",
      precio: 1200,
      imagen: "imagenes/Bombilla_chata.jpg",
      categoria: "Bombilla",
      cantidad: 1
    }
  ];

function mostrarProductos(categoria) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  const productosFiltrados = productos.filter(p => p.categoria === categoria);

  productosFiltrados.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="product-img" />
      <h2>${producto.nombre}</h2>
      <p>Precio: $${producto.precio}</p>
      <button class="btn-agregar">Agregar al carrito</button>
    `;

    const botonAgregar = div.querySelector(".btn-agregar");
    botonAgregar.addEventListener("click", () => {
      const productoExistente = carrito.find(p => p.nombre === producto.nombre);
      if (productoExistente) {
        productoExistente.cantidad++;
      } else {
        carrito.push({ ...producto, cantidad: 1 });
      }
      localStorage.setItem("carrito", JSON.stringify(carrito)); 
      console.log("Carrito actual:", carrito);
      alert(`${producto.nombre} agregado al carrito.`);
    });

    container.appendChild(div);
  });
}

console.log(carrito);