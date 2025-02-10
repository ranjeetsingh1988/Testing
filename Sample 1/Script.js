document.addEventListener("DOMContentLoaded", () => {
    const rose = document.querySelector(".rose");
   
    rose.addEventListener("click", () => {
        rose.style.transform = "scale(1.2)";
        setTimeout(() => {
            rose.style.transform = "scale(1)";
        }, 500);
    });
});