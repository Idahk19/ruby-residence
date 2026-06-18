import { Bill } from "./appmethods.js";
import { BillManager } from "./appmethods.js"; 

console.log("Bills JS loaded");

const form = document.getElementById("billForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const tenantName = document.getElementById("tenantName").value.trim();
    const houseNumber = document.getElementById("houseNumber").value.trim();
    const month = document.getElementById("billMonth").value;
    const type = document.getElementById("billType").value;
    const amount = document.getElementById("billAmount").value;
    const status = document.getElementById("paymentStatus").value;


    if (!tenantName || !houseNumber || !amount) {
        alert("Please fill all required fields");
        return;
    }

    const bill = new Bill(
        tenantName,
        houseNumber,
        month,
        type,
        amount,
        status
    );

    BillManager.addBill(bill);

    alert("Bill added successfully!");

    form.reset();
});