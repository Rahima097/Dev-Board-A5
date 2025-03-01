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

// current time

const currentDate = new Date();
const currentTime = currentDate. toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });