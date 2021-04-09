class Slingshot{
    constructor(bodya,pointb){
    var option={
        bodyA:bodya,
        pointB:pointb,
        length:10,
        stiffness:0.5
    }    
    this.slingshot=Matter.Constraint.create(option)
    World.add(world,this.slingshot);
    
    }
    display()
    {image(this.sling1Img,200,20);
     image(this.sling2Img,170,20);
     strokeWeight(5);
     stroke(47,21,8);
        if(this.slingshot.bodyA){
            line(this.slingshot.bodyA.position.x-20,this.slingshot.bodyA.position.y,this.slingshot.pointB.x-10,this.slingshot.pointB.y)
            line(this.slingshot.bodyA.position.x-20,this.slingshot.bodyA.position.y,this.slingshot.pointB.x+30,this.slingshot.pointB.y)
            image(this.sling3Img,this.slingshot.bodyA.position.x-30,this.slingshot.bodyA.position.y-10,15,30);
        }
     
     }
    fly(){
        this.slingshot.bodyA=null
    }
    attach(body){
      this.slingshot.bodyA=body;  
    }
    }