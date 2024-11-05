document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll(".buy-button");

    buyButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Redireciona para uma página de checkout (simulada)
            window.location.href = "https://www.instagram.com/1donjuannn";
        });
    });
});
