function setup() {
  createCanvas(1280, 720);
  background(0);
}

function draw() {
  push();
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, mouseX/10, mouseY/10);
  pop();
  push();
  fill(0, 255, 0);
  ellipse((mouseX + width/5), mouseY, mouseX/10, mouseY/10);
  pop();
  push();
  fill(0, 0, 255);
  ellipse((mouseX - width/5), mouseY, mouseX/10, mouseY/10);
  pop();
  
  push();
  fill(0, 255, 0);
  ellipse(mouseX, (mouseY + height/3), mouseX/10, mouseY/10);
  pop();
  push();
  fill(0, 0, 255);
  ellipse((mouseX + width/5), (mouseY + height/3), mouseX/10, mouseY/10);
  pop();
  push();
  fill(255, 0, 0);
  ellipse((mouseX - width/5), (mouseY + height/3), mouseX/10, mouseY/10);
  pop();
  
  push();
  fill(0, 0, 255);
  ellipse(mouseX, (mouseY - height/3), mouseX/10, mouseY/10);
  pop();
  push();
  fill(255, 0, 0);
  ellipse((mouseX + width/5), (mouseY - height/3), mouseX/10, mouseY/10);
  pop();
  push();
  fill(0, 255, 0);
  ellipse((mouseX - width/5), (mouseY - height/3), mouseX/10, mouseY/10);
  pop();
}