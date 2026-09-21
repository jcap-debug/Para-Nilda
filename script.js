```javascript
function iniciar() {

    // Ocultar la pantalla inicial
    const inicio = document.getElementById("inicio");

    inicio.style.transition = "opacity 1s ease";
    inicio.style.opacity = "0";


    // Después de desaparecer, mostrar la historia
    setTimeout(() => {

        inicio.style.display = "none";

        const historia = document.getElementById("historia");

        historia.style.display = "block";

    }, 1000);

}
```
