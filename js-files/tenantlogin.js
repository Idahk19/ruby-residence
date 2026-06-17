import{User} from "./appmethods.js"
import{UserManager} from "./appmethods.js"

const form = document.getElementById("loginForm");
const form = document.getElementById("loginError");

// event listener
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // get values
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    
    // find user
    const user = UserManager.findUserByEmail(email);
    
     if (!user) {
        loginError.textContent = "Email not found";
        return;
    }

     if (user.password !== password) {
        loginError.textContent = "Incorrect password";
        return;
    }
    alert("Login successful!");
    form.reset();
});