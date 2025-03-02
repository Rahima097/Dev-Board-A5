// for get innerText
function getInnerTextByID(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

// for set innerText
function setInnerTextByIDandValue(id,value){
    document.getElementById(id).innerText = value;
}

//for handle toggle
function handleToggle(id,status){
    document.getElementById(id).style.display = status;
}


