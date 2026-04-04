document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".short-text");

    buttons.forEach(btn => {

        btn.addEventListener("click", () => {

            const card = btn.closest(".news-item, .card");
            const fullText = card.querySelector(".full-text");

            if (!fullText) return;

            fullText.classList.toggle("show");

            if (fullText.classList.contains("show")) {
                btn.textContent = "READ LESS";
            } else {
                btn.textContent = "READ MORE";
            }

        });

    });

});