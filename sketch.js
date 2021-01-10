var thickness, wall;
var bullet,speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 10, 5);
  bullet.shapeColor='white';
  thickness=random(22,83);
  wall= createSprite(1200, 200,thickness, height/2);
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);

}

function draw() {
  background(0);  
  
  bullet.velocityX=speed;
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
    console.log(damage);
    if(damage>10){
      wall.shapeColor='red';
    }
    else {
      wall.shapeColor='green';
    }
  }
  
  
  drawSprites();
}

function hasCollided(ibullet,iwall){
  bulletRightEdge=ibullet.x+ibullet.width;
  wallLeftEdge=iwall.x;
  if(bulletRightEdge>= wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}








