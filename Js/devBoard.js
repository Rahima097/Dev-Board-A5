const completedBtns = document.querySelectorAll(".completed-btn");
for (let i = 0; i < completedBtns.length; i++) {
    const completedBtn = completedBtns[i];
    completedBtn.addEventListener("click", function (event) {
        if (!completedBtn.disabled) {
            alert("Board Updated Successfully");
            completedBtn.disabled = true;
            completedBtn.style.backgroundColor = "#ced6ff";
            completedBtn.style.cursor = "not-allowed";
        }
    })



}