var screenFull = document.getElementById(screenId);

var x = 0;
var y = 0;
screenFull.onclick = function(event){
    x = event.clientX;
    y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    console.log(coords);
}