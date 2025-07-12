function cargarCarrito() {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
}

function mostrarCarrito() {
  const carritoContainer = document.getElementById("carritoContainer");
  const listaCarrito = document.getElementById("listaCarrito");

  if (!listaCarrito || !carritoContainer) return;

  listaCarrito.innerHTML = "";

  if (carrito.length > 0) {
    carritoContainer.style.display = "block";

    let total = 0;

    carrito.forEach((item, index) => {
      const li = document.createElement("li");
      li.classList.add("item-carrito");
      li.innerHTML = `
        ${item.nombre} - Cantidad: ${item.cantidad} - Precio: $${item.precio}
        <button class="btn-eliminar-item" data-index="${index}">❌</button>
      `;

      listaCarrito.appendChild(li);
      total += item.precio * item.cantidad;
    });

    const totalLi = document.createElement("li");
    totalLi.classList.add("total-carrito");
    totalLi.textContent = `Total: $${total}`;
    listaCarrito.appendChild(totalLi);

    const botonesEliminar = document.querySelectorAll(".btn-eliminar-item");
    botonesEliminar.forEach(boton => {
      boton.addEventListener("click", () => {
        const index = parseInt(boton.dataset.index);
        carrito.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        mostrarCarrito();
      });
    });

  } else {
    carritoContainer.style.display = "none";
  }
}

function configurarBotonFinalizar() {
  const finalizarCompraBtn = document.getElementById("finalizarCompra");
  const carritoContainer = document.getElementById("carritoContainer");

  if (!finalizarCompraBtn) return;

  finalizarCompraBtn.addEventListener("click", () => {
    carrito = [];
    localStorage.removeItem("carrito");
    if (carritoContainer) carritoContainer.style.display = "none";
    Swal.fire({
      text: "¡Gracias por tu compra!",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
      position: "center"
    });

    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  });
}

// Función que inicializa todo
function inicializarCarrito() {
  cargarCarrito();
  mostrarCarrito();
  configurarBotonFinalizar();
}