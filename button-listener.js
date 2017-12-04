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
        //simulateClick(200, 200);
        console.log("all good ");
        var jsonDataArr = JSON.parse(xhr.responseText);
        console.log("length json: " + jsonDataArr.bits.length);
        //debugger;
        for (var i = 0; i < jsonDataArr.bits.length; i++){
            var bit = jsonDataArr.bits[i];
            setupButtonClickingFromFile(bit);
            //startCoordinateX += BUTTON_SIZE + 13;
            //startCoordinateY += BUTTON_SIZE + 13;
            //console.log(startCoordinateX + "  " + startCoordinateY);
        }
        startCoordinateX = 13;
        startCoordinateY = 13;
        //console.log(jsonDataArr[0]);
    }
}

function setupButtonClickingFromFile(bit) {
    
    data.tracks.forEach(function(track, row) {

      track.steps.forEach(function(on, column) {
        //debugger;
        var p = { x: startCoordinateX, y: startCoordinateY };
        if (isPointInButton(p, column, row)) {
          track.steps[column] = !on;
        }
        startCoordinateX += BUTTON_SIZE + 13;
      });
      startCoordinateX = 13;
      startCoordinateY += BUTTON_SIZE + 13;
    });
}

function saveToFile(){
    
}