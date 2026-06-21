import{BillManager, Auth} from "./appmethods.js"

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

// display bills 

const tableBody = document.getElementById("tenantBillsBody")

function displayTenantBills(){
    const currentUser = Auth.getCurrentUser();
    if (!currentUser){
        return;
    }
    const bills = BillManager.getBills();

    const tenantBills = bills.filter(
        bill => bill.houseNumber === currentUser.housenumber
    );

    // Create empty container
    const grouped = {};
    tenantBills.forEach(bill => {
        const dueDate = new Date(bill.dueDate);
        // create name of groups
        const groupName = `${bill.month} ${dueDate.getFullYear()}`;
        // if the group doesnt exist create it
        if (!grouped[groupName]) {
        grouped[groupName] = [];
  
}
  //Put the current bill inside its group
    grouped[groupName].push(bill);

});
   tableBody.innerHTML = "";

     // Display grouped bills
    Object.keys(grouped).forEach(groupName => {

        let total = 0;

        // Month Header
        tableBody.innerHTML += `
            <tr class="bg-gray-200 font-bold">
                <td colspan="5" class="p-3">
                    ${groupName}
                </td>
            </tr>
        `;

        grouped[groupName].forEach(bill => {

            total += Number(bill.amount);

            tableBody.innerHTML += `
                <tr class="border-b">
                    <td class="p-3">${bill.type}</td>
                    <td class="p-3">Ksh ${bill.amount}</td>
                    <td class="p-3">${bill.status}</td>
                    <td class="p-3">${bill.dueDate}</td>
                </tr>
            `;
        });

        // Monthly Total
        tableBody.innerHTML += `
            <tr class="bg-red-50 font-bold">
                <td colspan="2" class="p-3">
                    Monthly Total
                </td>
                <td colspan="3" class="p-3 text-red-900">
                    Ksh ${total}
                </td>
            </tr>
        `;
    });
}

displayTenantBills();
    
  

