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
    Toastify({
      text: "La reseña no puede estar vacía",
      duration: 3000,
      gravity: "top", // posición vertical
      position: "center", // posición horizontal
      backgroundColor: "linear-gradient(to right,rgb(245, 53, 53),rgb(252, 16, 16))",
      stopOnFocus: true,
      style: {
      color: "black", // color del texto
    },
    }).showToast();
    return;
  }

  if (texto.length > 500) {
    Toastify({
      text: "La reseña no puede tener más de 500 caracteres",
      duration: 3000,
      gravity: "top", // posición vertical
      position: "center", // posición horizontal
      backgroundColor: "linear-gradient(to right,rgb(242, 245, 244),rgb(222, 241, 188))",
      stopOnFocus: true,
      style: {
      color: "black", // color del texto
    },
    }).showToast();
    return;
  }

    Toastify({
    text: "Reseña enviada ✅",
    duration: 3000,
    gravity: "top", // posición vertical
    position: "right", // posición horizontal
    backgroundColor: "linear-gradient(to right,rgb(242, 245, 244),rgb(222, 241, 188))",
    stopOnFocus: true,
    style: {
    color: "black", // color del texto
  },
  }).showToast();

  // Borrar la reseña y el localStorage
  inputReseña.value = "";
  localStorage.removeItem("reseña");
});
