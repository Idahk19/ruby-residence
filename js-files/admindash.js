import { Bill, UserManager } from "./appmethods.js";
import { BillManager } from "./appmethods.js"; 
import { Notices } from "./appmethods.js";
import { ManageNotices} from "./appmethods.js"; 

const users = UserManager.getUsers(); // get users using the method
const totalTenants = users.length // get number of users

document.getElementById("totalTenants").textContent = totalTenants; // display the number of users on the id

const form = document.getElementById("billsForm");
const addBillbtn = document.getElementById("addBillBtn");

addBillbtn.addEventListener("click", function (e) {
    e.preventDefault(); // adding bill button

    const tenantName = document.getElementById("tenantName").value.trim();
    const houseNumber = document.getElementById("houseNumber").value.trim();
    const month = document.getElementById("billMonth").value;
    const type = document.getElementById("billType").value;
    const amount = document.getElementById("billAmount").value;
    const status = document.getElementById("paymentStatus").value;
    const dueDate = document.getElementById("dueDate").value;
     
    console.log("Due Date:", dueDate);

    if (!tenantName || !houseNumber || !amount) {
        alert("Please fill all required fields");
        return;
    }

    const bill = new Bill( // instance
        tenantName,
        houseNumber,
        month,
        type,
        amount,
        status,
        dueDate

    );
   

    BillManager.addBill(bill); // method

    alert("Bill added successfully!");

    form.reset();
});
const noticeform = document.getElementById("noticesForm");
const postNoticeBtn = document.getElementById("postNoticeBtn");


postNoticeBtn.addEventListener("click", function (e) {
    e.preventDefault(); // notice submission

    const noticeTitle = document.getElementById("noticeTitle").value.trim();
    const noticeText = document.getElementById("noticeText").value.trim();
    

    if (!noticeText || !noticeTitle) {
        alert("Please fill all required fields");
        return;
    }

    const notice = new Notices( // new instance
        noticeText, 
        noticeTitle,
       
    );

    ManageNotices.addNotice(notice); // call method

    alert("Notice added successfully!");

    noticeform.reset();
});
async function loadStatistics() {
        // fetch total houses
        const response = await fetch("./houses.json");
        const houses = await response.json()
        const totalHouses = houses.length;
        
        // occupiedHouses
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const occupiedSet = new Set( // removes duplicate, ensures all houses are counted
            users.map(user => user.housenumber)
        );

        const occupied = occupiedSet.size; // set is not an array so we use .size

        // vacant houses
        const total = totalHouses;
        const vacantHouses = total - occupied;

         // display
        document.getElementById("vacantHouses").textContent = vacantHouses;
        document.getElementById("totalHouses").textContent = totalHouses;
        document.getElementById("occupiedUnits").textContent = occupied;
 } 
 loadStatistics();

        