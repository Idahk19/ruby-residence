import { BillManager } from "./appmethods.js";

const tableBody = document.getElementById("billsTableBody");

function displayBills() {

    const bills = BillManager.getBills();

    tableBody.innerHTML = "";

    // Group bills by house number
    const groupedBills = {};

    bills.forEach(bill => {

        if (!groupedBills[bill.houseNumber]) {
            groupedBills[bill.houseNumber] = [];
        }

        groupedBills[bill.houseNumber].push(bill);
    });

    // Display each house section
    for (const houseNumber in groupedBills) {

        const houseBills = groupedBills[houseNumber];

        let total = 0;

        // House heading
        tableBody.innerHTML += `
            <tr>
                <td colspan="5"
                    class="bg-red-900 text-white font-bold p-3">
                    HOUSE ${houseNumber}
                </td>
            </tr>
        `;

        // Bills under that house
        houseBills.forEach(bill => {

            total += Number(bill.amount);

            tableBody.innerHTML += `
                <tr class="border-b">

                    <td class="p-2">${bill.type}</td>
                    <td class="p-2">Ksh ${bill.amount}</td>
                    <td class="p-2">${bill.status}</td>
                    <td class="p-2">${bill.dueDate}</td>

                    <td class="p-2 flex gap-2">

                        <button
                            onclick="editBill('${bill.id}')"
                            class="bg-blue-500 text-white px-3 py-1 rounded">
                            Edit
                        </button>

                        <button
                            onclick="deleteBill('${bill.id}')"
                            class="bg-red-500 text-white px-3 py-1 rounded">
                            Delete
                        </button>

                    </td>

                </tr>
            `;
        });

        // Total row
        tableBody.innerHTML += `
            <tr class="bg-gray-100 font-bold">

                <td class="p-2">
                    Total
                </td>

                <td class="p-2">
                    Ksh ${total}
                </td>

                <td colspan="3"></td>

            </tr>
        `;
    }
}

displayBills();


// DELETE BILL
window.deleteBill = function(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this bill?"
    );

    if (!confirmDelete) return;

    BillManager.deleteBill(id);

    displayBills();
};


// EDIT BILL
window.editBill = function(id) {

    const bill = BillManager.getBills().find(
        b => b.id == id
    );

    if (!bill) return;

    const updatedBill = {
        ...bill,
        tenantName:
            prompt("Tenant Name:", bill.tenantName) ||
            bill.tenantName,

        houseNumber:
            prompt("House Number:", bill.houseNumber) ||
            bill.houseNumber,

        month:
            prompt("Month:", bill.month) ||
            bill.month,

        type:
            prompt("Type:", bill.type) ||
            bill.type,

        amount:
            Number(
                prompt("Amount:", bill.amount)
            ) || bill.amount,

        status:
            prompt("Status:", bill.status) ||
            bill.status,

        dueDate:
            prompt("Due Date:", bill.dueDate) ||
            bill.dueDate
    };

    BillManager.editBill(id, updatedBill);

    displayBills();
};