class Birds
{
    constructor(x,y)
    {
        var a = 
        {
            restitution:1.0
        }
        this.bird = Bodies.rectangle(x,y,50,50,a);
        this.width = 50;
        this.height = 50;
        World.add(world,this.bird);
    }

    display()
    {
        var pos= this.bird.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle = this.bird.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
        rectMode(CENTER);
        
        fill("purple");
        rect(0,0,this.width,this.height);
        pop();
    }
}