import { Issue, IssueManager } from "./appmethods.js";

const form = document.getElementById("issuesForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fName").value.trim();
    const email = document.getElementById("email").value.trim();
    const houseNumber = document.getElementById("houseNumber").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!fullname || !email || !houseNumber || !subject || !message) {
        alert("Please fill all fields");
        return;
    }

    const issue = new Issue(
        fullname,
        email,
        houseNumber,
        subject,
        message
    );

    IssueManager.addIssue(issue);

    alert("Message sent successfully!");

    form.reset();
});