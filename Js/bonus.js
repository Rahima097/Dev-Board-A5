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