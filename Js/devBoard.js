const taskTitles = document.getElementsByClassName("task-title")
const completedBtns = document.querySelectorAll(".completed-btn");
for (let i = 0; i < completedBtns.length; i++) {
    const completedBtn = completedBtns[i];

    completedBtn.addEventListener("click", function (event) {
        const incompleteTask = getInnerTextByID("incomplete-task");
        const totalCount = getInnerTextByID("total-count");
        const completedBtnValue = parseInt(completedBtn.value);

        if (!completedBtn.disabled) {
            alert("Board Updated Successfully");

            completedBtn.disabled = true;
            completedBtn.style.backgroundColor = "#ced6ff";
            completedBtn.style.cursor = "not-allowed";

            const sum1 = totalCount + completedBtnValue ;
            const sum2 = incompleteTask - completedBtnValue ;

            setInnerTextByIDandValue("total-count", sum1);
            setInnerTextByIDandValue("incomplete-task", sum2);

            const taskTitleText = taskTitles[i].innerText;
            const currentDates = new Date();
            const currentTime = currentDates.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });

            const container = document.getElementById("history-container");
            const div = document.createElement("div");
            div.classList.add("bg-white")
            div.innerHTML = `
            <p class="text-sm p-2 text-dark bg-light-sky my-2">You have Completed This Task ${taskTitleText} at ${currentTime}</p>
            `
            container.appendChild(div)
            
            if(incompleteTask == 1 && totalCount == 27){
                alert("congratulations!!! You have completed all the current task.");
            }
        }
    })
}

// blog page connect with discover something box
document.getElementById("discover-something").addEventListener("click", function () {
    window.location.href = "./blogs.html"
})

