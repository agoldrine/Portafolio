//Entendiendo la funcion for mientras se realiza math art.

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(43,53,79);
  noFill();
  strokeWeight (3);
  
  let col = {
    r: 255,
    g: 0,
    b: 0
  };
  
  //noLoop();
  
  for(angulo=0;angulo<=360;angulo=angulo+5){
    x = cos(angulo);
    y = sin(angulo);
    //col.r = col.r +5;
    col.g = col.g +3,5*cos(angulo);
    col.b = col.b +3,5*sin(angulo);
    
    if(col.g>=255){
        col.g=0;
       }
    if(col.b>=255){
        col.b=0;
       }
    
    stroke (col.r, col.g, col.b);
    circle(250-60*x,250-60*y,170);

  }
}