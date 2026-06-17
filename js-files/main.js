const form = document.getElementById("formInput");
const email = document.getElementById("emailInput");
const housenumber = document.getElementById("houseNo");
const password = document.getElementById("password");
const fullname = document.getElementById("fullname");
const confirmPassword = document.getElementById("repeatPassword");
const passwordError = document.getElementById("passwordError");
const showPassword = document.getElementById("showPassword");

// show password 
showPassword.addEventListener("change", function (e) {

    if (this.checked) {
        password.type = "text";
        confirmPassword.type = "text";
    } else {
        password.type = "password";
        confirmPassword.type = "password";
    }
});

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

// instance for the new user
const user = new User(
    fullname,
    email,
    housenumber,
    password
);

// adds new user
UserManager.addUser(user);

// check if the same email exists
if (UserManager.emailExists(email)){
    passwordError.textContent = "Email already exists";
    return
}

form.reset();

})