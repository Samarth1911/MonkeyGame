

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(50,350,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.10;
  
  ground= createSprite(200,390,400,10);
 
 // ground.debug= true
  FoodGroup= createGroup();
  obstacleGroup=createGroup();
  
  score = 0;
  
  
  
  
  

  
}


function draw() {
  background(0,255,0);
     ground.velocityX= -6;
     if (keyDown("space")&& monkey.y>=130){
    monkey.velocityY=-13;
  }
     if (ground.x=25){
    ground.x=ground.width/2
  }
      score= Math.ceil(frameCount/frameRate());
     banana();
  obstacles()
     if (FoodGroup.isTouching(monkey)){
      FoodGroup.destroyEach();
      }
     if (obstacleGroup.isTouching(monkey)){
       
  
       ground.velocitX=0;
       monkey.velocityY=0;
   
       obstacleGroup.setVelocityXEach=(0);
    FoodGroup.setVelocityXEach=(0);
      
      obstacleGroup.setLifetimeEach=(-1);
    FoodGroup.setLifetimeEach=(-1);
            
     }
      
           
      
    
 
 
 
 

   monkey.velocityY=monkey.velocityY+0.8;
  
  
  monkey.collide(ground);
 
  drawSprites();
  textSize(20);
  fill("red");
text("Survival Time:"+score,200,50);
}
  
function banana(){
  if (frameCount % 60===0){
    var banana= createSprite(400,365,10,40);
     banana.y = Math.round(random(100,290));
     banana.addImage(bananaImage);
    banana.scale=0.10;
    banana.velocityX=-6;
    banana.lifetime=100;
    FoodGroup.add(banana);
  }
  
}
function obstacles(){
  if (frameCount % 80===0){
  var obstacle= createSprite(400,345,10,40);
  obstacle.addImage(obstacleImage);
    obstacle.scale=0.20;
  obstacle.velocityX=-6;
    obstacle.lifetime=100;
  obstacleGroup.add(obstacle);
}
}






