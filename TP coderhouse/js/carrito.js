carrito = JSON.parse(localStorage.getItem("carrito")) || carrito || [];
const carritoContainer = document.getElementById("carritoContainer");
const listaCarrito = document.getElementById("listaCarrito");
const finalizarCompraBtn = document.getElementById("finalizarCompra");

if (listaCarrito && finalizarCompraBtn && carritoContainer) {
  listaCarrito.innerHTML = "";

  if (carrito.length > 0) {
    carritoContainer.style.display = "block";
    let total = 0;
    carrito.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("item-carrito");
    li.textContent = `${item.nombre} - Cantidad: ${item.cantidad} - Precio: $${item.precio}`;
    listaCarrito.appendChild(li);
    total += item.precio * item.cantidad;
    });

    const totalLi = document.createElement("li");
    totalLi.classList.add("total-carrito");
    totalLi.textContent = `Total: $${total}`;
    listaCarrito.appendChild(totalLi);
  } else {
    carritoContainer.style.display = "none";
  }

finalizarCompraBtn.addEventListener("click", () => {
  carrito = [];
  localStorage.removeItem("carrito");
  carritoContainer.style.display = "none";
  alert("¡Gracias por tu compra!");
  window.location.href = "index.html";
});
}
