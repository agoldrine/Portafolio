//Imitando el cuadro wall drawing #815 de Sol LeWitt, siendo 50 puntos en posiciones aleatorias todos conectados por lineas

function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(252);
  stroke(0);
  strokeWeight (0.2);
  noLoop ();
  x = [];
  y = [];
  x[1] = random (25,375);
  y[1] = random (25,375);
  
  for (i=2; i <=50; i++) {
    for (j=2; j <=i; j++){
      x[i] = random (25,375);
      y[i] = random (25,375);
      
      line (x[i], y[i],x[i-1],y[i-1]);
    }
  }
}