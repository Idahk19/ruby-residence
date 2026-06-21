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