import { UserManager } from "./appmethods.js";


const tableBody = document.getElementById("tenantsTableBody");

function loadTenants() {
    const users = UserManager.getUsers();

    tableBody.innerHTML = "";

    users.forEach(user => {
        const row = document.createElement("tr");

        row.classList.add("border-b");

        row.innerHTML = `
            <td class="p-3">${user.fullname}</td>
            <td class="p-3">${user.housenumber}</td>
            <td class="p-3">${user.email}</td>
            <td class="p-3 text-green-600 font-semibold">Active</td>
        `;

        tableBody.appendChild(row);
    });
}

loadTenants();