let texts;
let words = [];
let palabras = [];
let tiempo;

function preload(){
  texts = loadStrings('./assets/strings.txt');
}

function setup() {
  createCanvas(400, 400);
  console.log(texts);
  frameRate(10);
  tiempo = 0;
  for (let index = 0; index < texts.length; index++) {
    let arrayWords = texts[index].split(' '); 
    for (let index = 0; index < arrayWords.length; index++) {
      words.push(arrayWords[index]);
    }

    for (let index = 0; index < words.length; index++) {
        palabras[index] = new Palabra (words[index]);
    }
  }

  console.log(words);

}

function draw() {
  background(220);

  if (frameCount%10 == 0) {
    tiempo++;
  }

  for (let index = 0; index < palabras.length; index++) {
    if (index == tiempo) {
      palabras[index].crearPalabras();
    }
    palabras[index].draw();
    palabras[index].mover();
  }

}
