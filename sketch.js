const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var drops = [];
var maxDrops = 100;
var umbrella;
var rand;
var night;
var Thunder , thunder1 , thunder2 , thunder3, thunder4;
var ThunderCreatedFrame= 0;

function preload(){
    night = loadImage("nightImage.jpg");
    thunder1 = loadImage("thunder1Bolt.png");
    thunder2 = loadImage("thunder2Bolt.png");
    thunder3 = loadImage("thunder3Bolt.png");
    thunder4 = loadImage("thunder4Bolt.png");
    
}

function setup(){
   var canvas = createCanvas (500,700);

   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,500);

   for(var i = 0; i < maxDrops ; i++){
       drops.push(new createDrop(random(0,500), random(0,500)));

   }
    
}

function draw(){
    Engine.update(engine);
    background(night);

    rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
        ThunderCreatedFrame = frameCount;
        Thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1 : Thunder.addImage(thunder1);
            break ;
            case 2 :  Thunder.addImage(thunder2);
            break;
            case 3 :  Thunder.addImage(thunder3);
            break;
            case 4 :  Thunder.addImage(thunder4);
            break;
            defaul : break;
        }
        Thunder.scale = 0.7;

    }
    if(ThunderCreatedFrame + 10 === frameCount && Thunder){
        Thunder.destroy();

    }
    umbrella.display();

    for(var i = 0 ; i < maxDrops ; i++ ){
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
    
}   

