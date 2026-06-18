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
