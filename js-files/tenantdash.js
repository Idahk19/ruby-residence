// pull data from the localstorage
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

// protect the dashboard
if(!currentUser){
    window.location.href = "tenantlogin.html"
}
document.getElementById("welcomeUser").textContent =
`Welcome, ${currentUser.fullname}`
document.getElementById("welcomeUser").textContent =
` Email: ${currentUser.email}`
document.getElementById("welcomeUser").textContent =
`House Number ${currentUser.housenumber}`