let rotationAmount = 0
let rotationS = 0.01

let axis = [1, 0, 0];

let boxDimensions = [450, 60, 10];
let containerHeight = boxDimensions[1] + 20;
let mainContentPaddingTop = containerHeight - 25;

var canvas;
let prevTouchY = null

let img1
let img2

function preload() {
  img1 = loadImage("box sides v2_1.png")
  img2 = loadImage("box sides v2_2.png")
}
function setup() {

  const parentEl = document.getElementById('header-sketch-container');
  if (parentEl) parentEl.style.height = containerHeight + 'px';
  const mainContentEl = document.getElementById('main-content');
  if (mainContentEl) mainContentEl.style.paddingTop = mainContentPaddingTop + 'px';

  prevScrollY = window.scrollY

  textureMode(IMAGE)
}

function draw() {
  clear()
  canvas = createCanvas(boxDimensions[0]+30, containerHeight, WEBGL);
  canvas.parent('header-sketch-container');
  
  
  rotationAmount += rotationS
  rotate(rotationAmount, axis);

  customBox(...boxDimensions);

  // if (prevScrollY != window.scrollY) {
  //   rotationDiff = window.scrollY - prevScrollY
  //   rotationDiffScaled = rotationDiff * 0.004
  //   rotationAmount += rotationDiffScaled
  //   rotationS = rotationDiffScaled
  // }
  
  // if (rotationS != 0.01) {
  //   rotationSDiff = 0.01 - rotationS
  //   rotationSDiffScaled = rotationSDiff * 0.05
  //   rotationS += rotationSDiffScaled
  // }
  
  // prevScrollY = window.scrollY
}

function customBox(w, h, d) {
  const halfW = w / 2;
  const halfH = h / 2;
  const halfD = d / 2;

  // Front face
  beginShape(QUADS);
  texture(img2);
  vertex(-halfW, -halfH, halfD, 0, 0);
  vertex(halfW, -halfH, halfD, img1.width, 0);
  vertex(halfW, halfH, halfD, img1.width, img1.height);
  vertex(-halfW, halfH, halfD, 0, img1.height);
  endShape();

  // Back face
  beginShape(QUADS);
  texture(img1);
  vertex(-halfW, -halfH, -halfD, 0, img2.height);
  vertex(-halfW, halfH, -halfD, 0, 0);
  vertex(halfW, halfH, -halfD, img2.width, 0);
  vertex(halfW, -halfH, -halfD, img2.width, img2.height);
  endShape();

  // Other faces without textures
  beginShape(QUADS);
  // Top face
  vertex(-halfW, -halfH, -halfD);
  vertex(halfW, -halfH, -halfD);
  vertex(halfW, -halfH, halfD);
  vertex(-halfW, -halfH, halfD);

  // Bottom face
  vertex(-halfW, halfH, -halfD);
  vertex(-halfW, halfH, halfD);
  vertex(halfW, halfH, halfD);
  vertex(halfW, halfH, -halfD);

  // Right face
  vertex(halfW, -halfH, -halfD);
  vertex(halfW, halfH, -halfD);
  vertex(halfW, halfH, halfD);
  vertex(halfW, -halfH, halfD);

  // Left face
  vertex(-halfW, -halfH, -halfD);
  vertex(-halfW, -halfH, halfD);
  vertex(-halfW, halfH, halfD);
  vertex(-halfW, halfH, -halfD);
  endShape();
}

function mouseWheel(event) {
  rotationAmount += event.delta/100
}