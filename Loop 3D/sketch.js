//Entendiendo el uso del Canvas en 3 Dimensiones

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {

  background(252);
  noFill();
  strokeWeight (1);
  
  let col = {
  r: 255,
  g: 0,
  b: 0
  };
  
  for (i=1; i<=5; i++){
    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255);
    stroke(col.r, col.g, col.b);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(50*i);
  }
}
    