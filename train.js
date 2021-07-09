class Train{
    constructor(x, y, width, height, mass) {
        var options = {
            isStatic: false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        Matter.Body.setMass(this.body,this.body.mass*5);
        this.image = loadImage("images/coach.png");
        World.add(world, this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}