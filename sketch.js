var movimgRect, fixedRect;

function setup() {
  createCanvas(800, 400);

  movingRect = createSprite(400, 200, 60, 90);
  movingRect.shapeColor = 'black';

  fixedRect = createSprite(600, 200, 90, 50);
  fixedRect.shapeColor = 'black';


}


function draw() {
  background('lavender');

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  //algorithm for collision
  //calling a function
  isTouching();

  drawSprites();
}

function isTouching(){

  if (fixedRect.x - movingRect.x < movingRect.width / 2 + fixedRect.width / 2
    &&
    movingRect.x - fixedRect.x < movingRect.width / 2 + fixedRect.width / 2
    &&
    fixedRect.y - movingRect.y < movingRect.width / 2 + fixedRect.width / 2
    &&
    movingRect.y - fixedRect.y < movingRect.width / 2 + fixedRect.width / 2

  ) {
    movingRect.shapeColor = 'orange';
    fixedRect.shapeColor = 'orange';

  }
  else {
    movingRect.shapeColor = 'black';
    fixedRect.shapeColor = 'black';
  }


}