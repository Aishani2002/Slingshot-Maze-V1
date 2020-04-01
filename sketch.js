const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, slingShot;

var i,j
function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    //ground = new Ground(600,height,1200,20);
    ball = new Ball(200,300,50,50);
    
    slingShot = new Slingshot(ball.body,{x:200,y:50});
}

function draw(){
    //background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    
    
  //outer loop
  for(i=1; i <= 5; i++)
   {
   //inner loop
    for(j=1; j<=i; j++)
   {
     //document.write('*');
     block1 = new Redblock(800,390,30,30);
    }
     //document.write('<br/>');
     block2 = new Orangeblock(700,380,30,30);
   }
    
    slingShot.display(); 
    block1.display();
    block2.display();

}


function mouseDragged (){
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}

function mouseReleased (){
    slingShot.fly();
}
