let rotationAmount = 0
let rotationS = 0.01
let rotationA = 0
let rotationSinMagnitude = 0.001

let isScrolling = false
let axis = [1, 0, 0];


var canvas;
function setup() {
  canvas = createCanvas(210, 80, WEBGL);
  canvas.parent('header-sketch-container');
}

function draw() {
  // background(200);
  clear()
  
  rotationAmount += rotationS
  rotate(rotationAmount, axis);
  // Draw a box.
  box(200,40,10);
  
}

//fook off m8

function mouseWheel(event) {
  isScrolling = true
  rotationAmount += event.delta/50
}