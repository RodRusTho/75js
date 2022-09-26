function createEnt(imgSrc,p1,p2,w1,w2) {
  var c = document.getElementById("Main-Screen");
  var ctx = c.getContext("2d");
  var img = document.getElementById(imgSrc);
  var pos1 = p1
  var pos2 = p2
  var wid1 = w1
  var wid2 = w2
  ctx.drawImage(img,pos1,pos2,wid1,wid2);
};

function setBackground(colorToSet) {
  var c = document.getElementById("Main-Screen").style.backgroundColor = colorToSet;
}
