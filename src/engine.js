// This file includes all the basic functions to get started using the engine
// Read the LICENSE file in the main directory of the engine.

// Function to define a screen height and width.
function cScreenSize(w1,h1) {
  var width1 = w1;
  var height1 = h1;
  document.getElementById("Main-Screen").width = width1;
  document.getElementById("Main-Screen").height = height1;
}

// Function to create entities such as players, floors, enemies and such.
function createEnt(imgSrc,p1,p2,w1,w2) {
  // Defines the canvas and context = 2d
  var c = document.getElementById("Main-Screen");
  var ctx = c.getContext("2d");
  // Takes the image source
  var img = document.getElementById(imgSrc);
  // Defines the position and size
  var pos1 = p1;
  var pos2 = p2;
  var wid1 = w1;
  var wid2 = w2;
  // Displays image
  ctx.drawImage(img,pos1,pos2,wid1,wid2);
};

// Function to change the background of the game
function setBackground(colorToSet) {
  document.getElementById("Main-Screen").style.backgroundColor = colorToSet;
}
