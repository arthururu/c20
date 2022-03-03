
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var solooptions
var block1
var block2
var block3
var solo


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	solooptions={
		isStatic : true

	}

	blockprimeiro = {

		frictionAir:0,
		restitution:0.999999999999999999999999999999999999999999999999999999999999999999999999999999,
		friction:0
	}
	blocksegundo = { 

		frictionAir : 0.99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
		retitution : 0.1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111,
		friction : 0
	}
	blockterceiro = {

		frictionAir : 1,
		restitution : 0.99999999999999999999999999999999999999999999999999999999999999999999999999999999,
		friction : 0

	}





	solo = Bodies.rectangle(800,680,1600,5,solooptions)
	block1 = Bodies.circle(300,20,30,blockprimeiro)
	block2 = Bodies.rectangle(750,300,30,30,blocksegundo)
	block3 = Bodies.rectangle(200,20,30,30,blockterceiro)
	World.add(world,block1)
	World.add(world,block2)
	World.add(world,block3)
	World.add(world,solo)
	
	fill("brown")
	rectMode(CENTER)
	ellipseMode(RADIUS)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(191);
  rect(solo.position.x,solo.position.y,1600,5)
  ellipse(block1.position.x,block1.position.y,30)
  rect(block2.position.x,block2.position.y,30,30)
  rect(block3.position.x,block3.position.y,30,30)
  
  

 
}



