// posicao do circulo
let x = 200;
let y = 200;

// raio do circulo (extraído)
const radius = 25;
const diameter = radius * 2;

// velocidade do circulo
let speedX = Math.random() * 10 - 5; // velocidade aleatória entre -5 e 5
let speedY = Math.random() * 10 - 5; // velocidade aleatória entre -5 e 5

//codigo base do p5js
function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(0);
    fill(255);
    ellipse(x, y, diameter, diameter);
    x += speedX;
    y += speedY;

    // se tocar na borda horizontal, inverte a direção
    if (x < radius || x > width - radius) {
        speedX *= -1;
    }

    // se tocar na borda vertical, inverte a direção
    if (y < radius || y > height - radius) {
        speedY *= -1;
    }
}
