class Ground
{
    constructor(x,y,width,height)
    {
        var a = 
        {
            isStatic: true
        }
        this.ground1 = Bodies.rectangle(x,y,width,height,a);
        this.width = width;
        this.height = height;
        World.add(world,this.ground1);
    }

    display()
    {
        var pos= this.ground1.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
    }
}