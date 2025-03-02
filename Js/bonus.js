// currentDate script
let currentDate = new Date ();

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let dayOfWeek = daysOfWeek[currentDate.getDay()];
let month = monthsOfYear[currentDate.getMonth()];
let dayOfMonth = currentDate.getDate();
let year = currentDate.getFullYear();

let formattedDate = `${dayOfWeek}, <br> ${month} ${dayOfMonth} ${year}`;

document.getElementById('current-date-container').innerHTML = formattedDate;

//  randomly backgroundColor change when click theme button

function getRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const themeBtn = document.getElementById('theme-img');
themeBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = getRandomColor();
});

// clear history container when click the clear history btn
document.getElementById("clear-history-btn").addEventListener("click", function(){
    // handleToggle("history-container", "none")
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerHTML = '';
})


