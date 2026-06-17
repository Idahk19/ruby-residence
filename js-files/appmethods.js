class User {
    constructor(fullname, email, housenumber, password) {
        this.fullname = fullname;
        this.email = email;
        this.housenumber = housenumber;
        this.password = password;
    }
}
 
class UserManager{
    getUsers(){
        return JSON.parse(localStorage.getItem("users")) || [];
    }
    saveUsers(){
        localStorage.setItem("users", JSON.stringify(users));
    }
    addUsers(user){
        const users = this.getUsers();
        users.push(user);
        this.saveUsers(users)
    }
    emailExists(email){
        const users = this.getUsers();
        return users.find(user=> user.email === email);
    }
}
