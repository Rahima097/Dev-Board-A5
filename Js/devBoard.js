const taskTitle = document.querySelector(".task-title")
const completedBtns = document.querySelectorAll(".completed-btn");
for (let i = 0; i < completedBtns.length; i++) {
    const completedBtn = completedBtns[i];

    completedBtn.addEventListener("click", function (event) {
        const incompleteTask = getInnerTextByID("incomplete-task");
        const totalCount = getInnerTextByID("total-count");

        if (!completedBtn.disabled) {
            alert("Board Updated Successfully");

            completedBtn.disabled = true;
            completedBtn.style.backgroundColor = "#ced6ff";
            completedBtn.style.cursor = "not-allowed";

            const sum1 = totalCount + 1;
            const sum2 = incompleteTask - 1;
            
            setInnerTextByIDandValue("total-count",sum1);
            setInnerTextByIDandValue("incomplete-task",sum2);

            const container = document.getElementById("history-container");
            const div = document.createElement("div");
            div.classList.add("bg-white")
            div.innerHTML = `
            <p class="text-sm p-2 text-dark bg-light-sky my-2">You have Completed This Task ${taskTitle} at ${currentTime}</p>
            `
            container.appendChild(div)
        }
    })
}