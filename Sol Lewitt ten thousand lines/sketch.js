//Imitando el Cuadro Ten Thousand Lines el artista Sol LeWitt
//10.000 líneas de 20 pixeles de largo, ubicadas aleatoriamente en el lienzo

let posX=[];
let posY=[];

let a=20;

function setup() {
  createCanvas(500, 500);
  strokeWeight(0.3)
  noLoop(); //No loop para se ejecute una vez

}

function draw() {
  background(250);
  
  for (let i = 0; i < 10000; i++){
          
  posX.push(random(a, width - a));//Definir una posición en X y una en Y 
  posY.push(random(a, height - a));
 
  push();
    
  translate(posX[i], posY[i]);
  rotate (random(TWO_PI));//Trasladar y rotar para que sean aún más aleatorias 
    
  line (-20,0,20,0);
  
  pop();//Push y pop para volver al origen al hacer una línea
  }
}
