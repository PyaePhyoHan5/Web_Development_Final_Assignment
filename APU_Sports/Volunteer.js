document.addEventListener("DOMContentLoaded", function () {

    const submitBtn = document.querySelector(".submit-btn");
    const roles = document.querySelectorAll(".single-role");
    const dayButtons = document.querySelectorAll(".day-btn");

    let selectedRole = null;
    let selectedDay = null;

    // 🔹 ROLE SELECTION
    roles.forEach(role => {
        role.addEventListener("click", function () {

            roles.forEach(r => r.classList.remove("active"));
            this.classList.add("active");

            selectedRole = this.querySelector("h3").innerText;
        });
    });

    // 🔹 DAY SELECTION
    dayButtons.forEach(button => {
        button.addEventListener("click", function () {

            dayButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            selectedDay = this.innerText;
        });
    });

    // 🔹 SUBMIT
    submitBtn.addEventListener("click", function () {

        if (!selectedRole) {
            alert("Please select a role first!");
            return;
        }

        if (!selectedDay) {
            alert("Please select a day!");
            return;
        }

        // store data
        localStorage.setItem("selectedRole", selectedRole);
        localStorage.setItem("selectedDay", selectedDay);

        window.location.href = "RegistrationSuccessful.html";
    });

});