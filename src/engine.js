// This file includes all the basic functions to get started using the engine
// Read the LICENSE file in the main directory of the engine.


function cScreenSize(w1,w2) {
  var width1 = w1;
  var width2 = w2;
}

// Function to create entities such as players, floors, enemies and such.
function createEnt(imgSrc,p1,p2,w1,w2) {
  var c = document.getElementById("Main-Screen");
  var ctx = c.getContext("2d");
  var img = document.getElementById(imgSrc);
  var pos1 = p1;
  var pos2 = p2;
  var wid1 = w1;
  var wid2 = w2;
  ctx.drawImage(img,pos1,pos2,wid1,wid2);
};

// Function to change the background of the game
function setBackground(colorToSet) {
  var c = document.getElementById("Main-Screen").style.backgroundColor = colorToSet;
}
