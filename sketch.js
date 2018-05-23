// MAKE THE LABEL

var paddle1 = { x: 0, y: 0, w: 25, h: 250};
var paddle2 = { x: 0, y: 0, w: 25, h: 250};
var ball = { x: 0, y: 0, w: 20, h: 20 };
var speedX = 15;
var speedY = 15;
var player1 = 0;
var player2 = 0;
var font = undefined;
var collisionOfPaddle1WithBall = false;
var collisionOfPaddle2WithBall = false;

function preload() {
  font = loadFont('BLOCKFONT.otf');
  
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
  ball.x = window.innerWidth / 2;
  ball.y = window.innerHeight / 2;
  
  paddle1.y = (window.innerHeight / 2) + (paddle1.w / 2);
  paddle2.y = (window.innerHeight / 2) + (paddle2.w / 2);
  paddle2.x = window.innerWidth - paddle2.w;
}

function draw() {
  background(0, 0, 0);
  
  blocks();
  
  textSize(250);
  textFont(font);
  fill(255, 255, 255);
  text(player1, window.innerWidth / 4, window.innerHeight / 4);
  text(player2, window.innerWidth / 1.50, window.innerHeight / 4);
  fill(255, 255, 255);
  noStroke();
  rect(paddle1.x, paddle1.y, paddle1.w, paddle1.h);
  rect(paddle2.x, paddle2.y, paddle2.w, paddle2.h);
  fill(random(1,255),random(1,255),random(1,255));
  ellipse(ball.x, ball.y, ball.w, ball.h);
  
  ball.x += speedX;
  ball.y += speedY;
  
  collisionOfPaddle1WithBall = collideRectCircle(paddle1.x,paddle1.y,paddle1.w,paddle1.h,ball.x,ball.y,ball.w);
  collisionOfPaddle2WithBall = collideRectCircle(paddle2.x,paddle2.y,paddle2.w,paddle2.h,ball.x,ball.y,ball.w);
  if(collisionOfPaddle1WithBall === true) {
    speedX = 7.5;
  } else if(collisionOfPaddle2WithBall === true) {
    speedX = -7.5;
  }
  
  if(ball.x > window.innerWidth) {
    ball.x = window.innerWidth / 2;
    ball.y = window.innerHeight / 2;
    player1 += 1;
  } else if(ball.x < 0) {
    ball.x = window.innerWidth / 2;
    ball.y = window.innerHeight / 2;
    player2 += 1;
  } else if(ball.y < 0) {
    speedY = 5;
  } else if(ball.y > window.innerHeight) {
    speedY = -5;
 }
  
  if (keyIsDown(UP_ARROW)) {
    paddle2.y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    paddle2.y += 5;
  }
  if(keyIsDown(87)){
    paddle1.y -= 5;
  }
  if(keyIsDown(83)){
    paddle1.y +=5;
  }
  if(player1 === 11) {
    noLoop();
    if(confirm("Player 1 wins!!!!! Do you want to play again?")) {
      location.reload();
    } else {
      window.close();
    }
  }
  else if(player2 === 11) {
    noLoop();
    if(confirm("Player 2 wins!!!!! Do you want to play again?")) {
      location.reload();
    } else {
      window.close();
    }
  }
  
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  
  ball.x = window.innerWidth / 2;
  ball.y = window.innerHeight / 2;
  paddle1.y = (window.innerHeight / 2) + (paddle1.w / 2);
  paddle2.y = (window.innerHeight / 2) + (paddle2.w / 2);
  paddle2.x = window.innerWidth - paddle2.w;
}

function blocks() {
  for(var i = 20; i < window.innerHeight; i += 20) {
    rect(width / 2, i,  10, 10);
  }
  /*rect(width / 2, height / 2,       10, 10);
  rect(width / 2, height / 2 + 20,  10, 10);
  rect(width / 2, height / 2 + 40,  10, 10);
  rect(width / 2, height / 2 + 60,  10, 10);
  rect(width / 2, height / 2 + 80,  10, 10);
  rect(width / 2, height / 2 + 80,  10, 10);
  rect(width / 2, height / 2 + 100, 10, 10);
  rect(width / 2, height / 2 + 120, 10, 10);
  rect(width / 2, height / 2 + 140, 10, 10);
  rect(width / 2, height / 2 + 160, 10, 10);
  rect(width / 2, height / 2 + 180, 10, 10);
  rect(width / 2, height / 2 + 200, 10, 10);
  rect(width / 2, height / 2 + 220, 10, 10);
  rect(width / 2, height / 2 + 240, 10, 10);
  rect(width / 2, height / 2 + 260, 10, 10);
  rect(width / 2, height / 2 + 280, 10, 10);
  rect(width / 2, height / 2 + 300, 10, 10);
  rect(width / 2, height / 2 + 320, 10, 10);
  rect(width / 2, height / 2 + 340, 10, 10);
  rect(width / 2, height / 2,       10, 10);
  rect(width / 2, height / 2 - 20,  10, 10);
  rect(width / 2, height / 2 - 40,  10, 10);
  rect(width / 2, height / 2 - 60,  10, 10);
  rect(width / 2, height / 2 - 80,  10, 10);
  rect(width / 2, height / 2 - 80,  10, 10);
  rect(width / 2, height / 2 - 100, 10, 10);
  rect(width / 2, height / 2 - 120, 10, 10);
  rect(width / 2, height / 2 - 140, 10, 10);
  rect(width / 2, height / 2 - 160, 10, 10);
  rect(width / 2, height / 2 - 180, 10, 10);
  rect(width / 2, height / 2 - 200, 10, 10);
  rect(width / 2, height / 2 - 220, 10, 10);
  rect(width / 2, height / 2 - 240, 10, 10);
  rect(width / 2, height / 2 - 260, 10, 10);
  rect(width / 2, height / 2 - 280, 10, 10);
  rect(width / 2, height / 2 - 300, 10, 10);
  rect(width / 2, height / 2 - 320, 10, 10);
  rect(width / 2, height / 2 - 340, 10, 10);*/
}
