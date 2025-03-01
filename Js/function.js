// for get innerText
function getInnerTextByID(id){
    const value = document.getElementById(id).innerHTML;
    const convertedValue = parseInt(value);
    return convertedValue;
}

// for get innerText
function setInnerTextByIDandValue(id,value){
    document.getElementById(id).innerText = value;
}

//for handle toggle
function handleToggle(id,status){
    document.getElementById(id).style.display = status;
}

// current time

const currentDates = new Date();
const currentTime = currentDates. toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });