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
                   <button onclick="deleteBill('${bill.id}')"
    class="bg-red-500 text-white px-2 py-1 rounded">
    Delete
</button>
                </td>
                <td class="p-2">
                   <button onclick="editBill('${bill.id}')"
    class="bg-blue-500 text-white px-2 py-1 rounded">
    Edit
</button>
                </td>

            </tr>
        `;
    });
}

displayBills();

window.deleteBill = function(id) {

    const confirmDelete = confirm("Are you sure you want to delete this bill?");
    if (!confirmDelete) return;

    BillManager.deleteBill(id);

    displayBills(); 
};
window.editBill = function(id) {

    const bill = BillManager.getBills().find(b => b.id == id);

    if (!bill) return;
    // take the whole object then change whatever you want
    const updatedBill = {
        ...bill,
        tenantName: prompt("Tenant Name:", bill.tenantName),
        houseNumber: prompt("House Number:", bill.houseNumber),
        month: prompt("Month:", bill.month),
        type: prompt("Type:", bill.type),
        amount: Number(prompt("Amount:", bill.amount)),
        status: prompt("Status:", bill.status),
        dueDate: prompt("Due Date:", bill.dueDate)
    };

    BillManager.editBill(id, updatedBill);

    displayBills();
};