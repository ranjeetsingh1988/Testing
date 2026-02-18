document.addEventListener("DOMContentLoaded", () => {
    const rose = document.querySelector(".rose");
   
    rose.addEventListener("click", () => {
        rose.Style.transform = "scale(1.2)";
        setTimeout(() => {
            rose.Style.transform = "scale(1)";
        }, 500);
    });
});
