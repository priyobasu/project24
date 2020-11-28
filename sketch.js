const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
var engine, world, object, ground;
var box1,box2,box3,paper;
function setup() {
  createCanvas(800, 400);
  engine=Engine.create(); // create engine
  world=engine.world;     // create world in the engine
  /* */// adding body to the world
  ground=new Ground(400,height,800,10)
 box1=new Box(550,390,150,10);
 box2= new Box(630,370,10,100);
 box3= new Box(480,370,10,100);
 paper=new Paper(100,10,40);
 
}

function draw() {
  background("black");
  //fill("lime");
  Engine.update(engine);// update the engine
  
  ground.display();
  box1.display();
  box2.display();
  
  box3.display();
  paper.display();
  
  
  if (keyDown(UP_ARROW)) {

	Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20});

  }
    
}
