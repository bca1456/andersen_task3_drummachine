var saveButton = document.getElementById(saveBtnId);
var openButton = document.getElementById(openBtnId);
var screenFull = document.getElementById(screenId);

screenFull.onclick = function(event){
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    console.log(coords);
}

var startCoordinateX = 25;
var startCoordinateY = 251;

saveButton.addEventListener(eventTypeClick, saveToFile);
openButton.addEventListener(eventTypeClick, openFromFile);

function openFromFile(){
    var xhr = new XMLHttpRequest(); //ajax запрос
    xhr.open('GET', 'data.json', false);
    xhr.send();
    if (xhr.status != 200) {
        alert( xhr.status + ': ' + xhr.statusText ); 
    } else {
        console.log("all good ");
        var jsonDataArr = JSON.parse(xhr.responseText);
        console.log("length json: " + jsonDataArr.bits.length);
        for (var i = 0; i < jsonDataArr.bits.length; i++){
            var bit = jsonDataArr.bits[i];
            setupButtonClickingFromFile(bit);
            startCoordinateX += 41 - (i/10 + 1);
            startCoordinateY = 251;
            //console.log(startCoordinateX + "  " + startCoordinateY);
        }
        startCoordinateX = 25;
        //console.log(jsonDataArr[0]);
    }
}

function setupButtonClickingFromFile(bit) {
    var p = { x: startCoordinateX, y: startCoordinateY};
    console.log("go for one bit + row quantity: " + rowQuantity);
    for (var j = 0; j < rowQuantity; j++){
        simulateClick(startCoordinateX, startCoordinateY);
        //click(startCoordinateX, startCoordinateY);  
        console.log(startCoordinateX + "   " + startCoordinateY);
        startCoordinateY += 41 - (j/10 + 1);
    }
}

function simulateClick(x, y) {
    /*var $el = $(screenFull);
    var offset = $el.offset();
    var event = jQuery.Event( "mousedown", {
      which: 1,
      pageX: x,
      pageY: y
    });
    $el.trigger(event);*/
    jQuery(document.elementFromPoint(x, y)).click();
}


function saveToFile(){
    
}