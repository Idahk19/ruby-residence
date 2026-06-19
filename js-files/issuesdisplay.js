import{Issue} from "./appmethods.js"
import{IssueManager} from "./appmethods.js"


const tableBody = document.getElementById("issuesTableBody");

function displayIssues() {

    const issues = IssueManager.getIssues();

    tableBody.innerHTML = "";

    if (issues.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="5" class="p-3 text-center text-gray-500">
                    No issues submitted yet
                </td>
            </tr>
        `;
        return;
    }

    issues.forEach(issue => {

        tableBody.innerHTML += `
            <tr class="border-b">
                <td class="p-3">${issue.fullname}</td>
                <td class="p-3">${issue.email}</td>
                <td class="p-3">${issue.houseNumber}</td>
                <td class="p-3">${issue.subject}</td>
                <td class="p-3">${issue.message}</td>
            </tr>
        `;
    });
}

displayIssues();