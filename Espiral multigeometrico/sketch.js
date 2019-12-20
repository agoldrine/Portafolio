let angulo = 2.0;
let centro = 200;
let escalar = 1;
let velocidad = 0.3
let col = {
  r: 255,
  g: 0,
  b: 0
};

function setup() {
  createCanvas(400, 400);
  noStroke();
  background (240);
}

function draw() {
  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(0, 255);
  let x = centro + cos(angulo) * escalar;
  let y = centro + sin(angulo) * escalar;
  fill(col.r, col.g, col.b);
  noStroke();
  let r = round(random(1,4)); //Random, que es un punto flotante,   nunca va a ser 1.0
  if(r=='1'){
    circle (x, y, random (3,8));
    }
  if(r=='2'){
    triangle(x + random(3,8), y + random (3,8), x - random (3,8),     y   + random (3,8), x - random (3,8), y - random (3,8));
  }
  if(r=='3'){
    square (x, y, random (3,8));
  }

  angulo += velocidad;
  escalar += velocidad;
  
}