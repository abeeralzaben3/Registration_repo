const form = document.getElementById("register-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const address = document.getElementById("address").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (fullName === "") {
        alert("Please enter your full name");
        return;
    }

    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email");
        return;
    }

    if (password === "") {
        alert("Please enter a password");
        return;
    }

    if (address === "") {
        alert("Please enter your address");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    alert("Registration successful!");
});
