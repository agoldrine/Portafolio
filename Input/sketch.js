//Interacción colores
//Prueba cambio de tipografía. Se importa la tipografía desde googlefonts, se pasa a la cascada de estilos y listo!

function setup () {
  
  createCanvas (300, 400);
  input = createInput("Amarillo", color);
  input.position (10, 80);
  button = createButton ('enter');
  button.position (200, 80);
  button.mousePressed (greet);
  background (180);
  x = 'Write your favorite color';
  textSize(24);
  textFont ("Mansalva", 20);
  text (x, 10, 40);
  inputcolor = select("#colorSelect");
}

let inputcolor;

function greet () {
  circulo = input.value ();  
  
  text(input.value(),random(100,250),random(100,300));
  

}

function draw(){
  let c = inputcolor.value();
  console.log(c);
}