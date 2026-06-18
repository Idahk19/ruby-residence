// pull data from the localstorage
const currentUser = 
    JSON.parse(localStorage.getItem("currentUser")) ||
    JSON.parse(sessionStorage.getItem("currentUser"));

// protect the dashboard
if(!currentUser){
    window.location.href = "tenantlogin.html"
}
document.getElementById("welcomeUser").textContent =
`Welcome, ${currentUser.fullname}`
document.getElementById("userEmail").textContent =
` Email: ${currentUser.email}`
document.getElementById("userHouse").textContent =
`House Number ${currentUser.housenumber}`

