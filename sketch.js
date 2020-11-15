
var bullet,weight,speed,wall,thickness;
var bullet_img,wall_img,ground,ground_img,wallg_img,wallr_img;
var ground2,ground3;
var die;

function preload(){
  
  bullet_img=loadImage("bullet.jpg");
  wall_img=loadImage("Wall.jpg");
  wallr_img=loadImage("wallr.jpg");
  wallg_img=loadImage("wallg.jpg")
  ground_img=loadImage("ground.jpg");
  die=loadSound("die.mp3");
}


function setup() {
  createCanvas(1600,400);
  ground=createSprite(200,200,800,800);
  ground.addImage(ground_img);
  ground.scale=1;
  
  ground2=createSprite(800,200,200,200);
  ground2.scale=1;
  ground2.addImage(ground_img);

  ground3=createSprite(1400,200,200,200);
  ground3.scale=1;
  ground3.addImage(ground_img);

  bullet =createSprite(50, 200, 50, 50);
  bullet.shapeColor="white";
  bullet.addImage(bullet_img);
  
  bullet.scale=0.5;

  thickness=random(22,83);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="grey";
  wall.addImage(wall_img);

  speed=random(223,321);
  weight=random(30,52);
  
  bullet.velocityX=speed;
}

function draw() {
  background("black"); 
  
  if(collided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if(damage<10){
      wall.addImage(wallg_img);
      wall.scale=0.7;
     
      
      bullet.depth=wall.depth;
      bullet.depth=bullet.depth+1;
    }
    if(damage>10){
      wall.addImage(wallr_img);
      wall.scale=1.4;
      bullet.depth=wall.depth;
      bullet.depth=bullet.depth+1;
    }
  }
  
  
  drawSprites();
}
function collided(o,a){
  bulletRightEdge=o.x+o.width;
  wallLeftEdge=a.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}