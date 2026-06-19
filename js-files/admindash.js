import { Bill, UserManager } from "./appmethods.js";
import { BillManager } from "./appmethods.js"; 
import { Notices } from "./appmethods.js";
import { ManageNotices} from "./appmethods.js"; 

const users = UserManager.getUsers();
const totalTenants = users.length

document.getElementById("totalTenants").textContent = totalTenants;



const form = document.getElementById("billForm");
const addBillbtn = document.getElementById("addBillBtn");

addBillBtn.addEventListener("click", function (e) {
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
const noticeform = document.getElementById("noticeForm");
const postNoticeBtn = document.getElementById("postNoticeBtn");


postNoticeBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const noticeTitle = document.getElementById("noticeTitle").value.trim();
    const noticeText = document.getElementById("noticeText").value.trim();
    

    if (!noticeText || !noticeTitle) {
        alert("Please fill all required fields");
        return;
    }

    const notice = new Notices(
        noticeText,
        noticeTitle,
       
    );

    ManageNotices.addNotice(notice);

    alert("Notice added successfully!");

    form.reset();
});
async function totalHousesAvailable() {
    try{
        const response = await fetch("./js-files/houses.json");
        const houses = await response.json()
        const totalHouses = houses.length;
        
        document.getElementById("totalHouses").textContent = totalHouses;
       
    } catch(error){
        console.error("Failed to load houses", error);
    }
    
}
totalHousesAvailable()

//occupied units
function occupiedHouses(){

const users = JSON.parse(localStorage.getItem("users")) || [];

const occupiedSet = new Set( // removes duplicate, ensures all houses are counted
    users.map(user => user.housenumber)
);

return occupiedSet.size;

}
const occupied = occupiedHouses();
document.getElementById("occupiedUnits").textContent = occupied;

// vacant houses
const total = totalHouses;
const vacantHouses = total - occupied;
document.getElementById("vacantHouses").textContent = vacantHouses;
