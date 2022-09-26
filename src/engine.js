var c = document.getElementById("Main-Screen");
var ctx = c.getContext("2d");

function createEnt(posx, posy, imgSrc) {
  ctx.drawImage(document.getElementById(imgSrc), posx, posy);
}

createEnt(10,10,"player");
