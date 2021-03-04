const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball;


function preload(){


}




function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,590,1200,50);
  log1 = new log(350,400,250,10);
  log2 = new log(650,300,200,10);
  block1 = new Block(350,385,20,20);
  block2 = new Block(370,385,20,20);
  block3 = new Block(330,385,20,20);
  block4 = new Block(390,385,20,20);
  block5 = new Block(310,385,20,20);
  block6 = new Block(320,365,20,20);
  block7 = new Block(340,365,20,20);
  block8 = new Block(360,365,20,20);
  block9 = new Block(380,365,20,20);
  block10 = new Block(330,345,20,20);
  block11 = new Block(350,345,20,20);
  block12 = new Block(370,345,20,20);
  block13 = new Block(340,325,20,20);
  block14 = new Block(360,325,20,20);
  block15 = new Block(350,305,20,20);
  block16 = new Block(650,285,20,20);
  block17 = new Block(630,285,20,20);
  block18 = new Block(670,285,20,20);
  block19 = new Block(690,285,20,20);
  block20 = new Block(610,285,20,20);
  block21 = new Block(620,265,20,20);
  block22 = new Block(640,265,20,20);
  block23 = new Block(660,265,20,20);
  block24 = new Block(680,265,20,20);
  block25 = new Block(630,245,20,20);
  block26 = new Block(650,245,20,20);
  block27 = new Block(670,245,20,20);
  block28 = new Block(640,225,20,20);
  block29 = new Block(660,225,20,20);
  block30 = new Block(650,205,20,20);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingshot1 = new slingshot(this.ball,{x:250,y:100});
}

function draw() {
  background("white");  
  Engine.update(engine);

 ground.display();
 log1.display();
 log2.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block18.display();
 block19.display();
 block20.display();
 block21.display();
 block22.display();
 block23.display();
 block24.display();
 block25.display();
 block26.display();
 block27.display();
 block28.display();
 block29.display();
 block30.display();

ellipse(ball.position.x,ball.position.y,20)
slingshot1.display();

  drawSprites();
}


function mouseDragged(){

  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot1.fly();
}

function keyPressed(){

  if (keyCode === 32){
   slingshot1.attach(this.ball);
   
  }
}