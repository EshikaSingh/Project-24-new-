class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 0.9
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      ellipseMode(RADIUS);
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(255,0,255);
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  };