
let r,g,b;
function setup() {
  createCanvas(displayWidth, displayHeight);
  //createCanvas(640,480);
  r = random(50,255);
  g=random(0,100);
  b=(50, 255);
}
function draw(){
  background(r,g,b);
  //console.log('draw');
  //text(accelerationX","+ accelerationY","+accelerationZ);
}
function deviceMoved(){
  r=map(accelerationX, -90, 90, 100, 175);
  g=map(accelerationY, -90, 90, 100, 200);
  b=map(accelerationZ, -90, 90, 100, 200);
}


// function draw() {
//   background(220);
// }