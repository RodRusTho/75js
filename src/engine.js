function createEnt(imgSrc,p1,p2) {
  var c = document.getElementById("Main-Screen");
  var ctx = c.getContext("2d");
  var img = document.getElementById(imgSrc);
  ctx.drawImage(img,p1,p2);
};
