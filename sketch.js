//pong clone
//mouse to control both paddles

var paddleA, paddleB, ball, wallTop, wallBottom;
var MAX_SPEED = 10;
let landscape;
var gif_loadImg, gif_createImg;

function preload(){
   landscape = loadImage('victorian.jpg');
   gif_loadImg = loadImage("purplefire.gif");
 gif_createImg = createImg("purplefire.gif");
}

function setup() {
  createCanvas(1000, 500);
  //frameRate(6);
  image(gif_loadImg, 10, 10);
  gif_createImg.position(390, 90);

  paddleA = createSprite(30, height/2, 10, 100);
  paddleA.immovable = true;

  paddleB = createSprite(width-28, height/2, 10, 100);
  paddleB.immovable = true;

  wallTop = createSprite(width/2, -30/2, width, 30);
  wallTop.immovable = true;

  wallBottom = createSprite(width/2, height+30/2, width, 30);
  wallBottom.immovable = true;

  ball = createSprite(width/2, height/2, 30, 30);
  ball.maxSpeed = MAX_SPEED;

  paddleA.shapeColor = paddleB.shapeColor =ball.shapeColor = color(248,222,126);

  ball.setSpeed(MAX_SPEED, -180);
}

function draw() {
  background(landscape);
  paddleA.position.y = constrain(mouseY, paddleA.height/2, height-paddleA.height/2);
  paddleB.position.y = constrain(mouseY, paddleA.height/2, height-paddleA.height/2);

  ball.bounce(wallTop);
  ball.bounce(wallBottom);

  var swing;
  if(ball.bounce(paddleA)) {
    swing = (ball.position.y-paddleA.position.y)/3;
    ball.setSpeed(MAX_SPEED, ball.getDirection()+swing);
  }

  if(ball.bounce(paddleB)) {
    swing = (ball.position.y-paddleB.position.y)/3;
    ball.setSpeed(MAX_SPEED, ball.getDirection()-swing);
  }

  if(ball.position.x<0) {
    ball.position.x = width/2;
    ball.position.y = height/2;
    ball.setSpeed(MAX_SPEED, 0);
  }

  if(ball.position.x>width) {
    ball.position.x = width/2;
    ball.position.y = height/2;
    ball.setSpeed(MAX_SPEED, 180);
  }

  drawSprites();

}
