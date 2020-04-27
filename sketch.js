function setup() {

  //create the canvas
  createCanvas(displayWidth, displayHeight - 170);
  //createSprite(400, 200, 50, 50);

  //create the maze boundary
  object1 = createSprite(50, 100, 30, 1200);
  object2 = createSprite(685, 700, 1300, 30);
  object3 = createSprite(1350, 115, 30, 1200);
  object4 = createSprite(685, 10, 1300, 30);
}

function draw() {

  //clear the background
  background(0);

  //create draw sprites
  drawSprites();
}