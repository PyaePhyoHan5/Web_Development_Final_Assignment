document.addEventListener("DOMContentLoaded", function () {

    const submitBtn = document.querySelector(".submit-btn");
    const roles = document.querySelectorAll(".single-role");

    let selectedRole = null;

    // click role
    roles.forEach(role => {
        role.addEventListener("click", function () {

            // remove previous selection
            roles.forEach(r => r.classList.remove("active"));

            // highlight selected
            this.classList.add("active");

            // store selected role
            selectedRole = this.querySelector("h3").innerText;
        });
    });

    // submit button
    submitBtn.addEventListener("click", function () {

        if (!selectedRole) {
            alert("Please select a role first!");
            return;
        }

        // optional: store role
        localStorage.setItem("selectedRole", selectedRole);

        window.location.href = "RegistrationSuccessful.html";
    });

});