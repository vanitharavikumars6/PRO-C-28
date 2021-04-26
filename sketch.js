
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var treeImg;
var mango1;
var stone;
var boy;
var launcher;
var launchForce=100;


function preload()
{
	treeImg = loadImage("tree.png");
	boyImg=loadImage("boy.png");
}

function setup() {
	createCanvas(1500,700);
 engine = Engine.create();
 world = engine.world;

 fill("black");
    textSize(50);
    textFont("signPainter");
    text("Click up arrow key to have a second chance",20,550);
    text("''CLEAN''",520,590);


	//Create the Bodies Here.
	ground = new Ground (width/2, 640, 1500,50);



    mango1 = new Mango(800,350,70,70);
	mango2 = new Mango(890,360,70,70);
	mango3 = new Mango(800,250,70,70);
	mango4 = new Mango(900,260,70,70);
	mango5 = new Mango(1050,200,70,70);
	mango6 = new Mango(900,110,70,70);
	mango7 = new Mango(1000,150,70,70);
	mango8 = new Mango(1100,250,70,70);
	mango9 = new Mango(970,220,70,70);
	mango10 = new Mango(1100,120,70,70);
	mango11 = new Mango(1200,230,70,70);
	mango12 = new Mango(1250,350,70,70);

    stone = new Stone(93,540,20,20);
    //boy = new Boy(250,560,220,220);

    launcher = new Launcher(stone.body,{x:275,y:510});

Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(220);

  fill("blue");
  textStyle(BOLD);
 // textFont("futura");
  textSize(40);
  text("Click up arrow key to have a second chance!!!!",20,45);
  
ground.display();

//boy.display();

mango1.display();
mango2.display();
mango12.display();
image(treeImg,1000,340,600,600);
image(boyImg,350,560,220,220);
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
mango11.display();


launcher.display();
stone.display();

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);
detectCollision(stone,mango8);
detectCollision(stone,mango9); 
detectCollision(stone,mango10);
detectCollision(stone,mango11);
detectCollision(stone,mango12);


}

function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
launcher.fly();
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:93,y:510})
		launcher.attach(stone.body)
	}
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if(distance<=lmango.radius+lstone.radius){
		  Matter.Body.setStatic(lmango.body,false);
	  }
   }