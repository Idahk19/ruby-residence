// pull data from the localstorage
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

// protect the dashboard
if(!currentUser){
    window.location.href = "tenantlogin.html"
}