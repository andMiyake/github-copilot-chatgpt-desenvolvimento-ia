class Circulo {
    constructor(x, y, radius) {
        this.x = x;              // usa valores recebidos
        this.y = y;
        this.radius = radius;
        this.diameter = radius * 2;
        this.speedX = Math.random() * 10 - 5;
        this.speedY = Math.random() * 10 - 5;
    }

    reset() {
        this.x = width / 2;
        this.y = height / 2;
        this.speedX = Math.random() * 10 - 5;
        this.speedY = Math.random() * 10 - 5;
    }

    update() {
        // mover
        this.x += this.speedX;
        this.y += this.speedY;

        // se tocar na borda horizontal, reseta no meio da tela
        if (this.x < this.radius || this.x > width - this.radius) {
            this.reset();
        }

        // se tocar na borda vertical, inverte a direção
        if (this.y < this.radius || this.y > height - this.radius) {
            this.speedY *= -1;
        }
    }

    desenha() {
        fill(color(255, 0, 0));
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}

let circulo = new Circulo(800, 400, 25);

//codigo base do p5js
function setup() {
    createCanvas(800, 400);
    circulo = new Circulo(width / 2, height / 2, 25); // agora width/height existem
}

function draw() {
    background(color(0, 0, 0));
    circulo.update();
    circulo.desenha();
}
