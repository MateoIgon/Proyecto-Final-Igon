const form = document.getElementById("formAgregarProducto");
const mensajeExito = document.getElementById("mensajeExito");

// Función para validar campos con funciones de orden superior
const validarCampos = (campos, validadores) => {
  return campos.every((campo, i) => validadores[i](campo));
};

// Obtener productos existentes
const obtenerProductos = () => JSON.parse(localStorage.getItem("productos")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const precio = parseFloat(document.getElementById("precio").value);
  const categoria = document.getElementById("categoria").value;

  const campos = [nombre, precio, categoria];
  const validadores = [
    n => n.length > 0,
    p => !isNaN(p) && p > 0,
    c => ["Mate", "Yerba", "Bombilla"].includes(c)
  ];

  const valido = validarCampos(campos, validadores);

  if (!valido) {
    alert("Por favor, completá los campos correctamente.");
    return;
  }

  const nuevoProducto = { nombre, precio, categoria, imagen: "imagenes/ComingSoon.jpg", cantidad: 1 };

  const productos = obtenerProductos();
  productos.push(nuevoProducto);
  localStorage.setItem("productos", JSON.stringify(productos));

    Swal.fire({
    text: "¡Gracias por contribuir!",
    icon: "success",
    timer: 2000,
    showConfirmButton: false,
    position: "center"
  });
  form.reset();
});
