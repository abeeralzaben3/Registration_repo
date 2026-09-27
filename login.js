const form = document.getElementById("login-form");
const email = document.getElementById("loginEmail");
const password = document.getElementById("loginPassword");
const msg = document.getElementById("loginMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (email.value === "") {
        msg.textContent = "Please enter your email.";
        return;
    }

    if (password.value === "") {
        msg.textContent = "Please enter your password.";
        return;
    }

    if (!email.value.includes("@")) {
        msg.textContent = "Please enter a valid email.";
        return;
    }

    msg.textContent = "Login information is valid!";
});
