var x = 0
var xb = 500
var y = 0
var yb = 500


function setup() {
  fullscreen()
  createCanvas(500, 500)
  frameRate(60)
  var r = random(500)
}

function draw() {
  background(0);
  if(keyIsDown(LEFT_ARROW)){
  fill(255, 0, 0);
  ellipse(x, 250, 100, 100);
  x = x + 1
  }
  else{
    x = 0
  }
  if(keyIsDown(RIGHT_ARROW)){
  fill(0, 255, 0);
  ellipse(xb, 250, 100, 100);
  xb = xb - 1
  }
  else{
    xb = 500
  }
  if(keyIsDown(UP_ARROW)){
  fill(0, 0, 255);
  ellipse(250, yb, 100, 100);
  yb = yb - 1
  }
  else{
    yb = 500
  }
  if(keyIsDown(DOWN_ARROW)){
  fill(255, 0,255);
  ellipse(250, y, 100, 100);
  y = y + 1
  }
  else{
    y = 0
  }
}
 