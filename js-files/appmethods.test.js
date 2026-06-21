import { 
    User,
    UserManager,
    Auth,
    Bill,
    BillManager,
    Notices,
    ManageNotices,
    Issue,
    IssueManager
} from "../js-files/appmethods.js";

// mock local storage 
global.localStorage = {
    store: {},

    setItem(key, value) {
        this.store[key] = value;
    },

    getItem(key) {
        return this.store[key] || null;
    },

    removeItem(key) {
        delete this.store[key];
    },

    clear() {
        this.store = {};
    }
};

// test for admin authentication
test("admin login returns true for correct credentials", () => {

    const result = Auth.isAdminLogin(
        "admin@rubyresidence.com",
        "Admin123"
    );

    expect(result).toBe(true);
});
test("deletes a bill correctly", () => {

    const bills = [
        {
            id: 1,
            tenantName: "Idah",
            houseNumber: "B12",
            month: "June",
            type: "Rent",
            amount: 15000,
            status: "Pending",
            dueDate: "2026-07-05"
        }
    ];

    BillManager.saveBills(bills);

    BillManager.deleteBill(1);

    const updated = BillManager.getBills();

    expect(updated.length).toBe(0);
});

test("deletes an issue correctly", () => {

    const issues = [
        {
            id: 1,
            fullname: "Idah",
            houseNumber: "B12",
            subject: "Leakage",
            message: "Water leaking"
        }
    ];

    IssueManager.saveIssues(issues);

    IssueManager.deleteIssue(1);

    const updated = IssueManager.getIssues();

    expect(updated.length).toBe(0);
});

test("filters bills by house number correctly", () => {

    const bills = [
        { id: 1, houseNumber: "B12", amount: 15000 },
        { id: 2, houseNumber: "B13", amount: 10000 }
    ];

    BillManager.saveBills(bills);

    const result = BillManager.getBillsByHouse("B12");

    expect(result.length).toBe(1);
    expect(result[0].houseNumber).toBe("B12");
    });
    import { UserManager } from "../js-files/appmethods.js";

test("returns true when email already exists", () => {

    const users = [
        {
            fullname: "Idah Karwitha",
            email: "idahkarwitha9@gmail.com",
            housenumber: "B12",
            password: "1234"
        }
    ];

    UserManager.saveUsers(users);

    const result = UserManager.emailExists(
        "idahkarwitha9@gmail.com"
    );

    expect(result).toBe(true);
});