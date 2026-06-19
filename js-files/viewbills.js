import { BillManager } from "./appmethods.js";

const tableBody = document.getElementById("billsTableBody");

// DISPLAY BILLS
function displayBills() {

    const bills = BillManager.getBills();

    tableBody.innerHTML = "";

    bills.forEach((bill) => {

        tableBody.innerHTML += `
            <tr class="border-b">

                <td class="p-2">${bill.tenantName}</td>
                <td class="p-2">${bill.houseNumber}</td>
                <td class="p-2">${bill.month}</td>
                <td class="p-2">${bill.type}</td>
                <td class="p-2">${bill.amount}</td>
                <td class="p-2">${bill.status}</td>
                <td class="p-2">${bill.dueDate}</td>

                <td class="p-2">
                    <button class="deleteBtn bg-red-500 text-white px-2 py-1 rounded"
                        data-id="${bill.id}">
                        Delete
                    </button>
                </td>

            </tr>
        `;
    });
}

displayBills();
tableBody.addEventListener("click", (e) => {

    const deleteBtn = e.target.closest(".deleteBtn");

    if (!deleteBtn) return;

    const id = deleteBtn.dataset.id;

    const confirmDelete = confirm("Are you sure you want to delete this bill?");

    if (!confirmDelete) return;

    BillManager.deleteBill(id);

    displayBills();
});