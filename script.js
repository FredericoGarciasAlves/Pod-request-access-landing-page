document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const email = document.getElementById("email");

    form.setAttribute("novalidate", true);

    form.addEventListener("submit", function (event) {
        if (emailVoid()) {
            event.preventDefault();
        }
    });

    function emailVoid() {
        let emailVoid = false;
        let emailValue = email.value;
        const paragrath = document.createElement("p");
        paragrath.innerText = "Oops! Please check your email";
        paragrath.setAttribute("class", "alert-email");
        if (!emailValue || emailValue.indexOf("@") === -1) {
            removeAlert();
            form.insertAdjacentElement("afterend", paragrath);
            emailVoid = true;
        } else {
            removeAlert();
        }
        const mediaQuery = window.matchMedia("(max-width: 375px)");
        if (mediaQuery.matches) {
            const btnSubmit = document.getElementById("btn-submit");
            removeAlert();
            paragrath.style.marginLeft = "5rem";
            btnSubmit.insertAdjacentElement("afterend", paragrath);
        }
        return emailVoid;
    }

    function removeAlert() {
        const alert = document.querySelector(".alert-email");
        if (alert) {
            alert.remove(); // Remove o elemento de alerta
        }
    }
});
