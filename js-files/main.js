const form = document.getElementById("formInput");
const email = document.getElementById("emailInput");
const housenumber = document.getElementById("houseNo");
const password = document.getElementById("password");
const fullname = document.getElementById("fullname");
const confirmPassword = document.getElementById("repeatPassword");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (e){
    e.preventDefault();
    if (password !== confirmPassword){
        passwordError.textContent = "Passwords do not match";
    }
    // password length
    if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters";
    return;
    }
    // uppercase
    if (!/[A-Z]/.test(password)) {
    passwordError.textContent = "Add at least 1 uppercase letter";
    return;
    }
    // number
    if (!/\d/.test(password)) {
    passwordError.textContent = "Add at least 1 number";
    return;

}

const user = {
    fullname,
    email,
    housenumber,
    password
};

localStorage.setItem("user", JSON.stringify(user));

alert("Account created successfully!");
form.reset();
})