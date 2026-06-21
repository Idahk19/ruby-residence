import { ManageNotices } from "./appmethods.js";

const container = document.getElementById("noticesContainer");

function displayNotices() {

    const notices = ManageNotices.getNotices();
    console.log("NOTICES:", notices);

    container.innerHTML = "";

    if (notices.length === 0) {
        container.innerHTML = `
            <p class="text-gray-500 text-center">
                No notices available.
            </p>
        `;
        return;
    }

    notices.forEach(notice => {

        container.innerHTML += `
            <div class="bg-white shadow rounded-lg p-5 border-l-4 border-red-900">
                

                <p class="text-gray-600 mt-2">
                    ${notice.noticeText}
                </p>
                <h3 class="text-lg font-bold text-red-900">
                    ${notice.noticeTitle}
                </h3>
                <p class="text-xs text-gray-400 mt-3">
                   ${new Date(notice.createdAt).toLocaleString()}
                </p>

            </div>
        `;
    });
}

displayNotices();
