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

function bgMPause(a1) {
  var audId = a1;
  const audio = document.querySelector(audId);
  audio.pause();
}
