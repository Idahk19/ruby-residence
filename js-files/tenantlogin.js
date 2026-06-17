import{User} from "./appmethods.js"
import{UserManager} from "./appmethods.js"

const form = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const emailInput = document.getElementById("loginEmail");
const passwordInput = document.getElementById("loginPassword");
const showPassword = document.getElementById("showPassword");

console.log(showPassword);

// show password 
showPassword.addEventListener("change", function (e) {
    console.log("clicked checkbox");

    if (this.checked) {
        passwordInput.type = "text";
        
    } else {
        passwordInput.type = "password";
        
    }
});

// event listener
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    
    // find user
    const user = UserManager.getUsers().find(user => user.email === email);
    
     if (!user) {
        loginError.textContent = "Email not found";
        return;
    }

     if (user.password !== password) {
        loginError.textContent = "Incorrect password";
        return;
    }
    alert("Login successful!");
    window.location.href = "tenantdashboard.html";

    form.reset();
});