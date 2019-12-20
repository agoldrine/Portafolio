function setup() {
  frameRate(5);
  createCanvas(400, 400);
  randomColor = color(random(255), random(255), random(255));
}

function draw() {
  background("lightblue");
  textFont ("Helvetica", 70);
  text ('Hola', random (0, 400), random (0,400));
  fill (randomColor); 
  
  
}