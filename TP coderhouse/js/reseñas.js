const inputReseña = document.getElementById("inputReseña");
const btnEnviar = document.getElementById("btnEnviarReseña");

// Cargar texto guardado (si hay)
inputReseña.value = localStorage.getItem("reseña") || "";

// Guardar mientras escribe
inputReseña.addEventListener("input", () => {
  localStorage.setItem("reseña", inputReseña.value);
});

// Al hacer clic en "Enviar"
btnEnviar.addEventListener("click", () => {
  const texto = inputReseña.value.trim();

  if (texto.length === 0) {
    alert("La reseña no puede estar vacía.");
    return;
  }

  if (texto.length > 500) {
    alert("La reseña no puede tener más de 500 caracteres.");
    return;
  }

  alert("¡Gracias por tu reseña!");

  // Borrar la reseña y el localStorage
  inputReseña.value = "";
  localStorage.removeItem("reseña");
});
