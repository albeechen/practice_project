var img = document.getElementById("original");
img.setAttribute("src", "source/photo.jpg");
var c = document.getElementById("copy");
c.setAttribute("width", "500");
c.setAttribute("height", "330");
var ctx = c.getContext("2d");
c.onmousemove = function(e) {
    var line_width = 35;
    var x = e.clientX;
    var y = e.clientY;
    var rx = x - 760;
    var ry = y - 180;
    ctx.drawImage(img, rx, ry, line_width, line_width, rx, ry, line_width, line_width);
}

var btn = document.getElementById("restartBtn");
btn.onclick = function() {
    location.reload();
}