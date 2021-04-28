class Umbrella{
    constructor(x,y){
        var options = {
            isStatic : true,
        } 
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.image = loadImage("walkingFrame/walking_1.png","walkingFrame/walking_2.png","walkingFrame/walking_3.png","walkingFrame/walking_4.png","walkingFrame/walking_5.png","walkingFrame/walking_6.png","walkingFrame/walking_7.png","walkingFrame/walking_8.png");
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x , pos.y+70 ,300,300)
    }
}