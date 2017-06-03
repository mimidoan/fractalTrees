var slider;
var angle;


function setup() {
  createCanvas(600,600);
  slider = createSlider(0, PI/2, PI/4, 0.01);

}

function draw() {
  background(51);
  angle = slider.value();

  translate(300, height);
  branch(150);
}

function branch(len) {

  if(len * 0.67 >= 3) {
    stroke(255);
  } else {
    stroke(random(255),random(255),random(255));
  }

  line(0, 0, 0, -len);
  translate(0, -len);


  if (len > 2) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }

}
