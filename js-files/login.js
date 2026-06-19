import{User} from "./appmethods.js"
import{UserManager} from "./appmethods.js"
import{Auth} from "./appmethods.js"

const form = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const emailInput = document.getElementById("loginEmail");
const passwordInput = document.getElementById("loginPassword");
const showPassword = document.getElementById("showPassword");
const rememberMe = document.getElementById("rememberMe");

console.log(showPassword);

// show password 
showPassword.addEventListener("click", function (e) {
    console.log("clicked checkbox");

    const isHidden = passwordInput.type === "password";

    passwordInput.type = isHidden ? "text":"password";

    if (passwordInput) {
        passwordInput.type = isHidden ? "text" : "password";
    }
});

// event listener
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

     if (Auth.isAdminLogin(email, password))
     {
         Auth.login({
        email: email, 
        isAdmin: true });

     alert("Admin login successful!"); 
     window.location.href = "admindashboard.html"; 
     return;
     }
     

    
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

      // decide storage based on remember me
    const storage = rememberMe.checked ? localStorage : sessionStorage;

    // save user
    storage.setItem("currentUser", JSON.stringify(user));

    // optional cleanup (prevents conflicts)
    if (rememberMe.checked) {
        sessionStorage.removeItem("currentUser");
    } else {
        localStorage.removeItem("currentUser");
    }

    alert("Login successful!");
    window.location.href = "tenantdashboard.html";


    form.reset();
});