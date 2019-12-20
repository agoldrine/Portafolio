//Entendiendo el uso de imagenes y sonido externo.

let bg;

function preload () {
  song = loadSound("Shooting Stars.mp3");//cargar canción
  bg = loadImage('Background.jpg');//cargar fondo
  img = loadImage('Herbert-spencer.png');//cargar                   estampado
  // La imagen de fondo debe tener el mismo tamaño que el          lienzo, según el método createCanvas().
  // En este programa, el tamaño de la imagen es de                300x200 pixels.
  }

function setup() {
  createCanvas(480, 480);
  background(bg);
  song.play();
  }

function draw() {
  fill('pink');
  textSize(32);
  text('¡Haz Click!',150,100);
}

function mousePressed() {
  stamp(mouseX,mouseY);
  }

function stamp(x,y) {

  push();
  
  imageMode(CENTER);
  image(img, x, y, 60, 75);
  
  pop();
  }