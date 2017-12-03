var saveButton = document.getElementById(saveBtnId);
var openButton = document.getElementById(openBtnId);

saveButton.addEventListener(eventTypeClick, saveToFile);
openButton.addEventListener(eventTypeClick, openFromFile);

function openFromFile(){
    var xhr = new XMLHttpRequest(); //ajax запрос
    xhr.open('GET', 'data.json', false);
    xhr.send();
    if (xhr.status != 200) {
    alert( xhr.status + ': ' + xhr.statusText ); 
    } else {
    var data = JSON.parse(xhr.responseText);
    console.log(data);
    }
}

function saveToFile(){
    
}