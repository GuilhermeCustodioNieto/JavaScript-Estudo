function setup() {
  createCanvas(400, 400);
  background("white");
}

function draw() {
  fill("red");
  stroke("blue");
  if(mouseIsPressed){
    rect(mouseX, mouseY, 30, 40);
  }
}