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