
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin, paper,ground;
var world;


function setup() {
	createCanvas(1350, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper=new Paper(200,450,70);
	ground=new Ground(width/2,670,width,40);
	dustbin=new Dustbin(1200,650);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
 
  paper.display();
  ground.display();
  dustbin.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
  	}
}





