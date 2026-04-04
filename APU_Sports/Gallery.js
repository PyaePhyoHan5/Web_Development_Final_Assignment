document.querySelectorAll(".gallery-item img").forEach(img => {

    img.addEventListener("click", () => {

        const popup = document.createElement("div");
        popup.classList.add("popup");

        const bigImg = document.createElement("img");
        bigImg.src = img.src;

        const closeBtn = document.createElement("span");
        closeBtn.innerHTML = "&times;";
        closeBtn.classList.add("close-btn");

        popup.appendChild(bigImg);
        popup.appendChild(closeBtn);
        document.body.appendChild(popup);

        closeBtn.onclick = () => popup.remove();

        popup.onclick = (e) => {
            if (e.target !== bigImg) popup.remove();
        };
    });

});