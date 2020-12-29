class Logs
{
    constructor(x,y,height,angle)
    {
        var a = 
        {
            restitution:1.0,
            friction:2.0,
            //density:1.0

        }
        this.logs = Bodies.rectangle(x,y,20,height,angle,a);
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.logs,angle);
        World.add(world,this.logs);
    }

    display()
    {
        var pos= this.logs.position;
        var angle = this.logs.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill("orange");
        rect(0,0,this.width,this.height);
        pop();
    }
}