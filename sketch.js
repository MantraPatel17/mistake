const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, bin;
var ground;
var world;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
  world = engine.world;
  
  paper = new Paper(200,200,50);
  ground = new Ground(800,650,1600,20);

}


function draw() {
  
  background(0,0,0);

  Engine.update(engine);
   
  paper.display();
  ground.display();
 
  drawSprites();

  keyPressed();
}

function keyPressed(){

  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});  
  }
}