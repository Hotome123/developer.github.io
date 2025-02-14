document.addEventListener("DOMContentLoaded", () => {
    const flores = document.querySelectorAll(".flor");
    
    flores.forEach(flor => {
        flor.addEventListener("mouseover", () => {
            flor.classList.add("movimiento");
        });

        flor.addEventListener("mouseleave", () => {
            flor.classList.remove("movimiento");
        });
    });
});
