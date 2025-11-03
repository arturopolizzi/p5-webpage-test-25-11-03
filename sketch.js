let rotationAmount = 0
let rotationS = 0.01

let axis = [1, 0, 0];

var canvas;
function setup() {
  canvas = createCanvas(210, 80, WEBGL);
  canvas.parent('header-sketch-container');
  prevScrollY = window.scrollY
}

function draw() {
  clear()
  
  rotationAmount += rotationS
  rotate(rotationAmount, axis);

  box(200,60,10);
  
  if (prevScrollY != window.scrollY) {
    rotationDiff = window.scrollY - prevScrollY
    rotationDiffScaled = rotationDiff * 0.004
    rotationAmount += rotationDiffScaled
    rotationS = rotationDiffScaled
  }
  
  if (rotationS != 0.01) {
    rotationSDiff = 0.01 - rotationS
    rotationSDiffScaled = rotationSDiff * 0.05
    rotationS += rotationSDiffScaled
  }
  
  prevScrollY = window.scrollY
}

// function mouseWheel(event) {
//   isScrolling = true
//   rotationAmount += event.delta/50
// }