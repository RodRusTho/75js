// This file includes all the basic functions to get started using the engine
// Read the LICENSE file in the main directory of the engine.

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
};

// Function to create and display text.
function createText(tts1,p3,p4) {
  var c = document.getElementById("Main-Screen");
  var ctx = c.getContext("2d");
  var textToShow = tts1;
  var pos3 = p3;
  var pos4 = p4;
  ctx.fillText(textToShow,pos3,pos4);
};

function config(w1,h1,c1) {
  var width1 = w1;
  var height1 = h1;
  var colorToSet = c1
  document.getElementById("Main-Screen").width = width1;
  document.getElementById("Main-Screen").height = height1;
  document.getElementById("Main-Screen").style.backgroundColor = colorToSet;
}

// This file is for audio sources and audio playing.

// Function to play a sound
function playSound(s1) {
  var path = s1;
  let sound = new Audio(path);
  sound.load();
  sound.play();
  sound.load();
}

// Function to play background music
function bgMPlay(a1,v1) {
  var audId = a1;
  var volNu = v1;
  window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector(audId);
    audio.volume = v1;
    audio.play();
  });
}

// Function to pause background music
function bgMPause(a1) {
  var audId = a1;
  const audio = document.querySelector(audId);
  audio.pause();
}
