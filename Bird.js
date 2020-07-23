class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);

    this.path = []
  }

  display() {
    super.display();

if(this.body.velocity.x>10 && this.body.position.x>210){

  var position = [this.body.position.x,this.body.position.y];
  
    this.path.push(position);
  
}

  }
}
