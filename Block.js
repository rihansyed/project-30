class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:1,
          friction:0.01,
          density:0.01
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if((this.body.speed) < 3){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
 
      }
      else{
      
       World.remove(world,this.body);
      
      }
      

    }
  }
