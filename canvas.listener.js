var canvasFull = document.getElementById(canvasId);

canvasFull.onclick = function(event){
    var x = event.pageX;
    var y = event.pageY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    console.log(coords);
}