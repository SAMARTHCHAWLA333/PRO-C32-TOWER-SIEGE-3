const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg,platform;
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
   
    block1 = new Block();
    block2 = new Block();
    block3 = new Block();
    block4 = new Block();
    block5 = new Block();
    block6 = new Block();
    block7 = new Block();
    block8 = new Block();
    block9 = new Block();
    block10 = new Block();
    block11 = new Block();
    block12 = new Block();
    block13 = new Block();
    block14 = new Block();
    block15 = new Block();
    block16 = new Block();
    block17 = new Block();
    block18 = new Block();
    block19 = new Block();
    block20 = new Block();
    block21 = new Block();
    block22 = new Block();
    block23 = new Block();
    block24 = new Block();
    block25 = new Block();
    block26 = new Block();
    block27 = new Block();
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
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
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