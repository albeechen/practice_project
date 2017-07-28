var img = document.getElementById("original");
var c = document.getElementById("copy");
var ctx = c.getContext("2d");
c.onmousemove=function(e) {
	var line_width = 50;
	var x = e.clientX;
	var y = e.clientY;
	var rx = x-751;
	var ry = y-200;
	ctx.drawImage(img, rx, ry, line_width, line_width, rx, ry, line_width, line_width);
}

var btn = document.getElementById("restartBtn");
btn.onclick = function(){
	location.reload();
}