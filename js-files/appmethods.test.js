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


test("admin login returns true for correct credentials", () => {

    const result = Auth.isAdminLogin(
        "admin@rubyresidence.com",
        "Admin123"
    );

    expect(result).toBe(true);
});