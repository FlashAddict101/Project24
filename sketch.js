
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const papercircle = Matter.Body;

var paperCircle;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    //ellipse(350, 350, 55, 55);

	Engine.run(engine);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("red")
	
	ground1Sprite=createSprite(750,height-80,20,100);
	ground1Sprite.shapeColor=color("red")

	ground2Sprite=createSprite(600,height-80,20,100);
	ground2Sprite.shapeColor=color("red")

	//papercircle = createSprite(200, height-80, width,10);
	 //papercircle.shapeColor=color("blue")

	 //paperCircle = new Circle(700,320,70,70);
  
}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
  background(0);

  ellipse(200, height-70, 55, 55);
  ellipseMode(RADIUS);
  //KeyPressed();

  //paperCircle.display();
  
  drawSprites();
 
}

function KeyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.setStatic(paperCircle, false);
		Matter.Body.applyForce(paperCircle.body,paperCircle.body.position,{x:85,y:-85})
	}
} 
