// what my program does is when you press the 's' key the square changes colors and  makes more squares that are bigger

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let rectWidth = 50;
  let rectHeight = 50;
  let rectX = 0;
  let rectY = 0;
  //  press s key
  if (keyIsPressed && key == 's') {
    // draws 4 rectangles each one gets bigger then the last using a for loop
    for (let i = 0; i < 4; i++) {
      fill(random(255), random(255), random(255));
      rect(rectX, rectY, rectWidth*(i+1), rectHeight*(i+1));
      rectX += rectWidth/2;
      rectY += rectHeight/2;
    }
  } else {
    // draws only 1 rectangle if the s key isnt pressed
    fill(0, 255, 0);
    rect(rectX, rectY, rectWidth, rectHeight);
  }
}