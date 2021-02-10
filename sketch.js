var hr, hrAngle;
var mn, mnAngle;
var sc, scAngle;

function setup() {
  createCanvas(400, 400);

  angleMode(DEGREES);

}

function draw() {
  background(0);
  
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 60, 0, 360);

  //drawing seconds hand 
  push();
  translate(200, 200);
  rotate(scAngle); //rotate the hand based on angle calculated
  stroke(255, 0, 0);
  strokeWeight(3);
  line(0, 0, 100, 0);
  pop();
  //point(0, 0);
  stroke(255, 0, 0);
  strokeWeight(7);
  noFill();
  arc(200, 200, 300, 300, 0, scAngle);

  //drawing minute hand 
  push();
  translate(200, 200);
  rotate(mnAngle); //rotate the hand based on angle calculated
  stroke(0, 255, 0);
  strokeWeight(5);
  line(0, 0, 100, 0);
  pop();
  //point(0, 0);
  stroke(0, 255, 0);
  strokeWeight(7);
  noFill();
  arc(200, 200, 280, 280, 0, mnAngle);

  //drawing hour hand 
  push();
  translate(200, 200);
  rotate(hrAngle); //rotate the hand based on angle calculated
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();
  //point(0, 0);
  stroke(0, 0, 255);
  strokeWeight(7);
  noFill();
  arc(200, 200, 260, 260, 0, hrAngle);

  drawSprites();
}