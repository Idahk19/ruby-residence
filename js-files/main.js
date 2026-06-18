import{User} from "./appmethods.js"
import{UserManager} from "./appmethods.js"

const form = document.getElementById("formInput");
const email = document.getElementById("emailInput");
const housenumber = document.getElementById("houseNo");
const passwordInput = document.getElementById("password");
const fullname = document.getElementById("fullname");
const confirmPasswordInput = document.getElementById("repeatPassword");
const passwordError = document.getElementById("passwordError");
const showPassword = document.getElementById("showPassword");
const emailError = document.getElementById("emailError");

// show password 
showPassword.addEventListener("change", function (e) {
    console.log("clicked checkbox");

    if (this.checked) {
        passwordInput.type = "text";
        confirmPasswordInput.type = "text";
    } else {
        passwordInput.type = "password";
        confirmPasswordInput.type = "password";
    }
});

form.addEventListener("submit", function (e){
    e.preventDefault();
    console.log("SUBMIT FIRED");

    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    const emailValue = email.value.trim();

     // email check
    if (UserManager.emailExists(emailValue)) {
        emailError.textContent = "Email already exists";
        return;
    }
    // password match
    if (password !== confirmPassword){
        passwordError.textContent = "Passwords do not match";
        return;
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
    fullname.value.trim(),
    emailValue,
    housenumber.value.trim(),
    password
);


// adds new user
UserManager.addUser(user);

alert("Registration successful!");
window.location.href = "tenantlogin.html";

form.reset();

});