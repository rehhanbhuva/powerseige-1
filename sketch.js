const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6;
var ground;
var polygon;
var slingshot;
var gameState = "onSling";



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    box1 = new Box(770,355,70,70);
    box2 = new Box(630,355,70,70);
    box3 = new Box(700,355,70,70);
    box4 = new Box(735,290,70,70);
    box5 = new Box(665,290,70,70);
    box6 = new Box(695,215,70,70);
    polygon = Matter.Bodies.polygon(80,100, 55, 20);
    polygonImage = loadImage("polygon.png");
    World.add(world, polygon);
    slingshot = new SlingShot(polygon,{x:80,y:100});
}
function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon,{x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

 function draw(){
        background("black");
        Engine.update(engine);
        box1.display();
        box2.display();
        box3.display();
        box4.display();
        box5.display();
        box6.display();
        ground.display();
        image(polygonImage,polygon.position.x,polygon.position.y,50,50);
 
}
