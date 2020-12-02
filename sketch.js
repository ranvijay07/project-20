var car, wall;

var speed,weigth;


function setup() {
  createCanvas(800,400);

  speed=random(55,90);
  weigth=random(400,1500);

  car=createSprite(50,200,20,20);
  car.velocityX=speed;
  car.shapeColor="white";
  car.debug=true;
  
  wall=createSprite(700,200,20,height/2);
  wall.shapeColor="grey"
  wall.debug=true;

}

function draw() {
  background("black");
  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weigth * speed* speed/22509;
    if(deformation>180){
      car.shapeColor="red"
    }
    if(deformation>100){
      car.shapeColor="yellow"
    }
    if(deformation>80){
      car.shapeColor="green"
    }
  }


  drawSprites();
}