
import{IssueManager, Auth} from "./appmethods.js"


const tableBody = document.getElementById("issuesTableBody");

function displayIssues() {

    const currentUser = Auth.getCurrentUser();
    if (!currentUser) return;

    const issues = IssueManager.getIssues();

    // filter only this user's issues
    const userIssues = issues.filter(issue =>
        issue.fullname === currentUser.fullname &&
        issue.houseNumber === currentUser.houseNumber
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

                <td class="p-2">
                    <button class="deleteBtn bg-red-500 text-white px-2 py-1 rounded"
                        data-id="${issue.id}">
                        delete
                    </button>
                </td>
                <td class="p-2">
                    <button class="deleteBtn bg-red-500 text-white px-2 py-1 rounded"
                        data-id="${issue.id}">
                        Edit
                    </button>
                </td>
               

            </tr>
        `;
    });
}

displayIssues();