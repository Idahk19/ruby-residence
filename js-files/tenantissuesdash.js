
import{IssueManager, Auth} from "./appmethods.js"


const tableBody = document.getElementById("issuesTableBody");

function displayIssues() {

    const currentUser = Auth.getCurrentUser();
    if (!currentUser) return;

    const issues = IssueManager.getIssues();
    console.log(IssueManager.getIssues());

    // filter only this user's issues
    const userIssues = issues.filter(issue =>
        issue.fullname === currentUser.fullname &&
        issue.houseNumber === currentUser.housenumber
    );
   

    tableBody.innerHTML = "";

    if (userIssues.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="5" class="p-3 text-center text-gray-500">
                    No issues submitted yet
                </td>
            </tr>
        `;
        return;
    }

    userIssues.forEach(issue => {

        tableBody.innerHTML += `
            <tr class="border-b">
                <td class="p-3">${issue.subject}</td>
                <td class="p-3">${issue.message}</td>
                <td class="p-3">${issue.date}</td>
                
                <td class="p-3 text-blue-700 font-semibold">
                   ${issue.reply || "No reply yet"}
                </td>
                
                
                <td class="p-2">
                    <button  <button onclick="deleteIssue('${issue.id}')"
                     class="deleteBtn bg-red-500 text-white px-2 py-1 rounded"
                        data-id="${issue.id}">
                        Delete
                    </button>
    
                    <button  <button onclick="editIssue('${issue.id}')"
                     class="editBtn bg-red-500 text-white px-2 py-1 rounded"
                        data-id="${issue.id}">
                        Edit
                    </button>
                </td>
               

            </tr>
        `;
    });
}

displayIssues();

window.deleteIssue = function(id) {

    const confirmDelete = confirm("Are you sure?");

    if (!confirmDelete) return;

    IssueManager.deleteIssue(id);

    displayIssues();

    alert("Issue deleted successfully!");
};

window.editIssue = function(id) {

    const issues = IssueManager.getIssues();

    const issue = issues.find(i => i.id == id);

    if (!issue) return;

    const updatedIssue = {
        ...issue,
        fullname: prompt("Full Name:", issue.fullname) || issue.fullname,
        email: prompt("Email:", issue.email) || issue.email,
        houseNumber: prompt("House Number:", issue.houseNumber) || issue.houseNumber,
        subject: prompt("Subject:", issue.subject) || issue.subject,
        message: prompt("Message:", issue.message) || issue.message,
        date: prompt("Date:", issue.date) || issue.date
    };

    IssueManager.editIssue(id, updatedIssue);

    displayIssues();

    alert("Issue updated successfully!");
};