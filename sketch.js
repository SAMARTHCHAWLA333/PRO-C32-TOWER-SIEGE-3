const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var block1;
var backgroundImg,platform;
var polygon;
var score;

function preload() {
    getTime();    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    
    world = engine.world;

    text("SCORE:"+score,750,40);

    ground = new Ground(600,height,1200,20);
   
    block1 = new Block(330,235,50,50);
    block2 = new Block(360,235,50,50);
    block3 = new Block(390,235,50,50);
    block4 = new Block(420,235,50,50);
    block5 = new Block(450,235,50,50);
    block6 = new Block(360,195,50,50);
    block7 = new Block(390,195,50,50);
    block8 = new Block(420,195,50,50);
    block9 = new Block(390,155,50,50);
    block10 = new Block(930,235,50,50);
    block11 = new Block(960,235,50,50);
    block12 = new Block(990,235,50,50);
    block13 = new Block(1020,235,50,50);
    block14 = new Block(1050,235,50,50);
    block15 = new Block(960,195,50,50);
    block16 = new Block(990,195,50,50);
    block17 = new Block(1020,195,50,50);
    block18 = new Block(990,155,50,50);
    slingshot = new Slingshot(bird.body,{x:200 , y:50});
    polygon = new Polygon();
    
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    Engine.update(engine);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    text.display();
}

function mouseDragged(){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
slingshot.fly();
}

function keyPressed(){
if(keyCode === 32){
    slingshot.attach(polygon.body);
}  
}

async function getTime(){
    var response =  await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var jsondata = await response.json();
    var datetime = jsondata.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);
    if(hour>6 && hour<19){
        pic = ("sprites/morning.png");
    }
    else{
        pic = ("sprites/night.jpg");
     }
     backgroundImg = loadImage(pic);
}
