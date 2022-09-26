function createEnt(imgSrc,p1,p2) {
  var c = document.getElementById("Main-Screen");
  var ctx = c.getContext("2d");
  var img = document.getElementById(imgSrc);
  var pos1 = p1
  var pos2 = p2
  ctx.drawImage(img,pos1,pos2);
};
