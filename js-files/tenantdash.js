import{Auth} from "./appmethods.js"

// pull data from the localstorage
const currentUser = 
    JSON.parse(localStorage.getItem("currentUser")) ||
    JSON.parse(sessionStorage.getItem("currentUser"));

// protect the dashboard
if(!currentUser){
    window.location.href = "login.html"

}
if (currentUser.isAdmin) {
    document.getElementById("welcomeUser").textContent =
        `Welcome, Admin`;

    document.getElementById("userEmail").textContent =
        `Email: ${currentUser.email}`;

    document.getElementById("userHouse").textContent =
        `House Number: N/A`;

} else {
    document.getElementById("welcomeUser").textContent =
        `Welcome, ${currentUser.fullname}`;

    document.getElementById("userEmail").textContent =
        `Email: ${currentUser.email}`;

    document.getElementById("userHouse").textContent =
        `House Number: ${currentUser.housenumber}`;
}

