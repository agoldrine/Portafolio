//Triángulo de Sierpinski

let niveles;

function setup() {
  createCanvas(400, 400);
  noStroke();
  niveles = 1;
}

function draw() {
  background(240);
  let niveles = round(map(mouseX, 0, width, 0, 8));
  trig (width/2,80,300, niveles);
}

/* función recursiva */
function trig(x,y,a,l) {
  
   /* triángulo equilátero donde 
   (x,y) es el vértice superior 
   y 'a' es el lado. 'l' es el 
   nivel de la recursión.
   */   
  
  let x2 = x + cos(PI/2) * a;
  let y2 = y + sin(PI/3) * a;

  let x3 = x + cos(2 * PI/3) * a;
  let y3 = y + sin(2 * PI/3) * a;

  // triángulo 'grande' blanco
  fill("lightblue");
  triangle(x, y, x2, y2, x3, y3);

  // triángulo 'chico' negro
  fill("orange");
  triangle((x + x2)/2, (y + y2)/2, (x + x3)/2, (y + y3)/2, x, y3);

  if (l > 1) {
    trig(x, y, a/2, l - 1);
    trig((x + x2)/2, (y + y2)/2, a/2, l - 1);
    trig((x + x3)/2, (y + y3)/2, a/2, l - 1);
  }
}

