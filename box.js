class Box
{
    constructor(x,y,width,height)
    {
        var a = 
        {
            restitution:1.0,
            friction:2.0,
            //density:1.0
        }
        this.box = Bodies.rectangle(x,y,width,height,a);
        this.width = width;
        this.height = height;
        World.add(world,this.box);
    }

    display()
    {
        var pos= this.box.position;
        var angle = this.box.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();
    }
}