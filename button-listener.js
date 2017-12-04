var saveButton = document.getElementById(saveBtnId);
var openButton = document.getElementById(openBtnId);

var startCoordinateX = 13;
var startCoordinateY = 13;

saveButton.addEventListener(eventTypeClick, saveToFile);
openButton.addEventListener(eventTypeClick, openFromFile);

function openFromFile(){
    var xhr = new XMLHttpRequest(); //запрос
    xhr.open('GET', 'data.json', false);
    xhr.send();
    if (xhr.status != 200) {
        alert( xhr.status + ': ' + xhr.statusText ); 
    } else {
        var jsonDataArr = JSON.parse(xhr.responseText);
        console.log("length json: " + jsonDataArr.bits.length);
        //debugger;
        for (var i = 0; i < jsonDataArr.bits.length; i++){
            var bit = jsonDataArr.bits[i];
            setupButtonClickingFromFile(bit);
        }
        startCoordinateX = 13;
        startCoordinateY = 13;
    }
}

function setupButtonClickingFromFile(bit) {
    
    data.tracks.forEach(function(track, row) {

      track.steps.forEach(function(on, column) {
        //debugger;
        var p = { x: startCoordinateX, y: startCoordinateY };
        if (isPointInButton(p, column, row)) {
            if (bit[column] == 1){  //если в файле встретили 1 , то включаем
                track.steps[column] = true;
            } else {
                track.steps[column] = false;
            }
        }
        startCoordinateX += BUTTON_SIZE + 13;
      });
      startCoordinateX = 13;
      startCoordinateY += BUTTON_SIZE + 13;
    });
}

function saveToFile(){
    const writeJsonFile = require('write-json-file');
    writeJsonFile('data.json', tracksToJSON()).then(() => {
        console.log('done');
    });
}

function tracksToJSON(){
    var newJSON = [];
    var newArr = [];
        data.tracks.forEach(function(track, row) {
            
            track.steps.forEach(function(on, column) {
            //debugger;
            var p = { x: startCoordinateX, y: startCoordinateY };
            if (isPointInButton(p, column, row)) {
                if (track.steps[column]){  //если в включен звук, то записываем 1 в файл
                    newArr.push(1);
                    //jsonDataArr.bits[i][column] = 1;
                } else {
                    newArr.push(0);
                    //jsonDataArr.bits[i][column] = 0;
                }
            }
            startCoordinateX += BUTTON_SIZE + 13;
            });
            startCoordinateX = 13;
            startCoordinateY += BUTTON_SIZE + 13;
            newJSON.push(newArr);
            newArr = [];
        });

    startCoordinateX = 13;
    startCoordinateY = 13;
        return newJSON;
}