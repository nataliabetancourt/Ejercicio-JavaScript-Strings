
class Palabra {

    constructor (Palabra){
        this.Palabra = Palabra;
        this.x = random(10, 360);
        this.y = random (-500, -50);
        this.velocidad = random(1, 3);
    }

    draw () {
        fill(0);
        text(this.Palabra, this.x, this.y);
    }

    mover () {
        this.y += this.velocidad;
    }

    crearPalabras() {
        this.x = random(10, 360);
        this.y = random (-500, -50);
        this.velocidad = random(1, 3);
    }
}