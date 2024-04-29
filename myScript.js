tool.minDistance = 10;
tool.maxDistance = 50;

var color = 'black';
var size = 10;

var colorselect = document.getElementById("color-picker");
colorselect.addEventListener('change', function ColorChanger(){
	color = this.value;
});

var brushsize = document.getElementById("brush-size");
brushsize.addEventListener('change', function BrushSize(){
	size = this.value;
});

function onMouseDrag(event) {
	var square = new Path.Rectangle(event.middlePoint, size);
	square.fillColor = color;
}