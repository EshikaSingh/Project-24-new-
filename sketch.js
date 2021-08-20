const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 600);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	dustbin1 = new Dustbin(740,540,250,20);
	dustbin2 = new Dustbin(610,475,20,130);
	dustbin3 = new Dustbin(870,475,20,130);

	ball = new Ball(30,553,25,25);

	ground = new Ground(450,570,900,20);
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ball.display();

  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}