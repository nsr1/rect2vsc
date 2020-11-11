var rect1
var rect2


function setup() {
  createCanvas(800,400);
 rect1 =  createSprite(400, 200, 50, 50);
 rect1.shapeColor = "green"
 rect1.velocityX = 5
 rect1.velocityY = 5
 
 rect2 = createSprite(100,100,50,50);
 rect2.shapeColor = "green"
 rect2.velocityX = 5
 rect2.velocityY = 5

 rect3 =  createSprite(100, 200, 50, 50);
 rect3.shapeColor = "green"
 rect3.velocityX = 5
 rect3.velocityY = 5
 
}

function draw() {
  background(0);
  
  rect2.x = World.mouseX
  rect2.y = World.mouseY

  if(isTouching(rect1, rect2))
    {
  
      rect1.shapeColor = "red"
      rect2.shapeColor = "red"
    }
  else
  {
    rect1.shapeColor = "green"
    rect2.shapeColor = "green"
  }

  
  
  bounceOff(rect3,rect2);
  drawSprites();
}