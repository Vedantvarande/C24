class Pig
{
    constructor(x,y)
    {
        var a = 
        {
            restitution:1.0
        }
        this.pig = Bodies.rectangle(x,y,50,50,a);
        this.width = 50;
        this.height = 50;
        World.add(world,this.pig);
    }

    display()
    {
        var pos= this.pig.position;
        var angle = this.pig.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
        rectMode(CENTER);
        
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}