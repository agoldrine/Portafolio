//construccion de un filtro de imagen.

let foto;

function preload() {
  foto = loadImage ("TRAMA.jpg");
  }
  
function setup() {
  createCanvas(321, 508);
  rectMode (CENTER);
  noLoop ();
  }

let sp = 12 //spaciador de pixeles "spacer"

function draw() {
  background(255);
  noStroke();
  for (let y = 0; y < height; y += sp) {
    for (let x =0; x < width; x += sp) {
      let col = foto.get(x,y); //el punto sifnifica que le pertecene a
      Trazo (x,y, col);
    } 
  }
}

function Trazo (x,y, col) {
  let b= brightness (col);
  let n= round(map(b, 0, 255, 20, 0)); 
  let r = red(col);
  let g = green(col);
  let bl = blue(col);
  for(let i = 0; i < n; i++){
    let nx = random(-sp, sp);
      let ny = random(-sp, sp);
    
  let c = color(40+r, 20-g,10+ bl);  
  fill(c);
  ellipse (x + nx, y + ny, 15, 5);
    //rect(x, y, 20, 5);
  }
  
}