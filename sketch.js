let n = 0;
let d = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  noFill();
  stroke(255);
  strokeWeight(1);
  beginShape();
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 150 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();

  noFill();
  stroke(0, 0, 255);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < 361; i++) {
    let k = i;
    let r = 150 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();
  n += 0.003;
  d += 0.003;
}

function windowResized() {
  resizeCanvas(400, 400);
}
