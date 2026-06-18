import { Bill } from "./appmethods.js";
import { BillManager } from "./appmethods.js"; 
import { Notices } from "./appmethods.js";
import { ManageNotices} from "./appmethods.js"; 

console.log("Bills JS loaded");

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

console.log(document.getElementById("postNoticeBtn"));
console.log(document.getElementById("noticeForm"));

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