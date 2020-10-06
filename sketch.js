const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)


    box1 = new Box(800,520,70,70);
    box2 = new Box(1000,520,70,70);
    pig1 = new Pig(900, 540);
    log1 = new Log(900,500,280, PI/2);

    box3 = new Box(800,460,70,70);
    box4 = new Box(1000,460,70,70);
    pig2 = new Pig(900, 480);

    log3 =  new Log(900,400,280, PI/2);

    box5 = new Box(900,400,70,70);
    log4 = new Log(840,360,150, PI/7);
    log5 = new Log(960,360,150, -PI/7);

    bird = new Bird(200,200);

}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
}