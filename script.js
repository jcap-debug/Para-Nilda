```javascript
function iniciar() {

    console.log("Girasol presionado");

    const inicio = document.getElementById("inicio");
    const historia = document.getElementById("historia");

    // Animación de salida
    inicio.style.transition = "opacity 1s ease";
    inicio.style.opacity = "0";

    // Mostrar la segunda escena
    setTimeout(function () {

        inicio.style.display = "none";
        historia.classList.remove("oculto");

        // Aseguramos que sea visible
        historia.style.display = "block";

        console.log("Historia mostrada");

    }, 1000);
}
```
