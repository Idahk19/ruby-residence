export class User {
    constructor(fullname, email, housenumber, password) {
        this.fullname = fullname;
        this.email = email;
        this.housenumber = housenumber;
        this.password = password;
    }
}
 
export class UserManager{
    static getUsers(){
        return JSON.parse(localStorage.getItem("users")) || [];
    }
     static saveUsers(users){
        localStorage.setItem("users", JSON.stringify(users));
    }
     static addUser(user){
        const users = this.getUsers();
        users.push(user);
        this.saveUsers(users)
    }
     static emailExists(email){
        const users = this.getUsers();
        return users.some(user=> user.email === email);
    }
}
export class Auth {

    static #adminEmail = "admin@rubyresidence.com";
    static #adminPassword = "Admin123";

    static isAdminLogin(email, password) {
        return (
            email === this.#adminEmail &&
            password === this.#adminPassword
        );
    }

    static login(user) {
        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );
    }

    static logout() {
        localStorage.removeItem("currentUser");
    }

    static getCurrentUser() {
        return JSON.parse(
            localStorage.getItem("currentUser")
        );
    }
}
export class Bill{ 
     constructor(tenantName, houseNumber, month, type, amount, status, dueDate) {
        this.id = Date.now()+ Math.random();
        this.tenantName = tenantName;
        this.houseNumber = houseNumber;
        this.month = month;
        this.type = type;
        this.amount = amount;
        this.status = status;
        this.dueDate =  dueDate;
        this.createdAt = new Date().toISOString();
    }
}

export class BillManager {

    static getBills() {
        return JSON.parse(localStorage.getItem("bills")) || [];
    }

    static saveBills(bills) {
        localStorage.setItem("bills", JSON.stringify(bills));
    }

    static addBill(bill) {
        const bills = this.getBills();
        bills.push(bill);
        this.saveBills(bills);
    }
    static saveBills(bills) {
        localStorage.setItem("bills", JSON.stringify(bills));
    }

    static getBillsByHouse(houseNumber) {
        return this.getBills().filter(
            bill => bill.houseNumber === houseNumber
        );
    }

  static deleteBill(id) {

    const bills = this.getBills();

    const updatedBills = bills.filter(
        bill => String(bill.id) !== String(id)
    );

    this.saveBills(updatedBills);
}
}
export class Notices{
    constructor(noticeTitle, noticeText){
        this.noticeText = noticeText;
        this.noticeTitle = noticeTitle;
         this.createdAt = new Date().toISOString();
    }

}
export class ManageNotices{
    static getNotices(){
        return JSON.parse(localStorage.getItem("notices"))|| [];
    }
     static saveNotices(notices) {
        localStorage.setItem("notices", JSON.stringify(notices));
    }
     static addNotice(notice) {
        const notices = this.getNotices();
        notices.push(notice);
        this.saveNotices(notices);
    }
    
}
export class Issue {
    constructor(fullname, email, houseNumber, subject, message) {
        this.id = Date.now();
        this.fullname = fullname;
        this.email = email;
        this.houseNumber = houseNumber;
        this.subject = subject;
        this.message = message;
        this.createdAt = new Date().toISOString();
    }
}
export class IssueManager {

    static getIssues() {
        return JSON.parse(localStorage.getItem("issues")) || [];
    }

    static saveIssues(issues) {
        localStorage.setItem("issues", JSON.stringify(issues));
    }

    static addIssue(issue) {
        const issues = this.getIssues();
        issues.push(issue);
        this.saveIssues(issues);
    }
    
}
