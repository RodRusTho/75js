class Seventy {
  
  // Start the game and run code.
  function initWindow(caW, caH, caName) {
    // Define canvas width, height and ID from
    // what the user input into the attributes.
    const canvasWidth  = caW;
    const canvasHeight = caH;
    const c            = caName;
    
    // Change the canvas height and width of canvas
    document.getElementById(canvasId).style.width  = caW;
    document.getElementById(canvasId).style.height = caH;
    
    return canvasWidth, canvasHeight, c;
  }
}
