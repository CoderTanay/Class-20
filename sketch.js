var fixedRect,movingRect

function setup() { 
  createCanvas(1200,800); 
  fixedRect = createSprite(600, 100, 50, 80); 
  fixedRect.shapeColor = "green"; 
  //fixedRect.debug = true; 
  movingRect = createSprite(600,600,80,30); 
  movingRect.shapeColor = "green"; 
  //movingRect.debug = true; 
  movingRect.velocityY = -3; 
  fixedRect.velocityY = 3; 
}

function draw() { 
  background(255,255,255); 
  // movingRect.x = World.mouseX; 
  // movingRect.y = World.mouseY; 
  console.log(movingRect.x - fixedRect.x); 
  console.log(movingRect.x); 
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2
     && fixedRect.x -movingRect.x <fixedRect.width/2+movingRect.width/2
     && movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2 
     && fixedRect.y -movingRect.y <fixedRect.height/2+movingRect.height/2){ 
       movingRect.shapeColor = "red"; 
       fixedRect.shapeColor = "red"; 
       movingRect.velocityY = movingRect.velocityY * (-1); 
       fixedRect.velocityY = fixedRect.velocityY * (-1); 
      }

      else { movingRect.shapeColor = "green"; 
      fixedRect.shapeColor = "green"; } 
      
      drawSprites();
 }