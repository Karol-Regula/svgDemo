var b = document.getElementById("button-clear");
var svg = document.getElementById("svg");

var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
var x = 0;
var y = 0;
var first = 1;

function clear() {
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", "200");
  c.setAttribute("r", "2000");
  c.setAttribute("fill", "white");
  svg.appendChild(c);
}

function draw(event) {
  if (first != 1){
    var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute("x1", x);
    l.setAttribute("y1", y);
    l.setAttribute("x2", event.offsetX);
    l.setAttribute("y2", event.offsetY);
    l.setAttribute("style", "stroke:rgb(0,0,0);stroke-width:1");
    svg.appendChild(l);
  }
  first = 0;

  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  x = event.offsetX;
  y = event.offsetY;
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", "10");
  c.setAttribute("fill", "blue");
  svg.appendChild(c);
}

b.addEventListener('click', clear);
svg.addEventListener('click', draw);
