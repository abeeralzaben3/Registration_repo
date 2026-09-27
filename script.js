const form = document.getElementById("register-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("regFullName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const address = document.getElementById("regAddress").value;
    const confirmPassword = document.getElementById("regConfirmPassword").value;

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
