const boton = document.querySelector("button");

let colorCeleste = "#a8d0e6";
let colorBlanco = "#ffffff";

// Variable para controlar el estado del color (true = celeste, false = blanco)
let colorActualCeleste = false;

boton.addEventListener("click", () => {
    if (colorActualCeleste) {
        document.body.style.backgroundColor = colorBlanco;
        colorActualCeleste = false;
    } else {
        document.body.style.backgroundColor = colorCeleste;
        colorActualCeleste = true;
    }

    // Cambiar el texto del botón para que quede dinámico
    boton.textContent = colorActualCeleste ? "Volver al blanco" : "Volver al celeste";
});
