function Snake(){
  this.x=0;//inicio de x en 0
  this.y=0;//inicio de y en 0
  this.xspeed=1;//inicia moviendose en x
  this.yspeed=0;//inicio de y
  this.total=0;
  this.tail=[];//cola

  this.dir = function(x,y){
    this.xspeed=x;//direccion en x
    this.yspeed=y;//direccion en y
  }

  this.eat = function(pos){
    var d = dist(this.x,this.y,pos.x,pos.y);
    if (d<1) {//si la distancia entre skane y la comida es menor a 1 pixel retorna true
      this.total++;
      return true;
    } else{
      return false;
    }
  }

  this.death=function(){
    for(var i = 0 ;i < this.tail.length;i++){
      var pos = this.tail[i];
      var d = dist(this.x,this.y,pos.x,pos.y);
      if(d<1){
        console.log('game over');
        fin();
        this.total=0;
        this.tail=[];
      }
    }
  }

  this.update = function(){

    if(this.total===this.tail.length){
      for (var i = 0; i <this.tail.length-1; i++) {
      this.tail[i]=this.tail[i+1];
      }    
    }
    this.tail[this.total-1]=createVector(this.x,this.y);

    this.x = this.x+this.xspeed*scl;//permite el movimiento en x
    this.y = this.y+this.yspeed*scl;//permite el movimiento en y

    this.x= constrain(this.x,0,width-scl);//limita el movimiento de sanke a la pantalla
    this.y= constrain(this.y,0,height-scl);//limita el movimiento de sanke a la pantalla
  }

  this.show = function(){
    fill('rgb(0,255,0)');//color blanco
    for (var i =0; i < this.tail.length; i++) {
      rect(this.tail[i].x,this.tail[i].y,scl,scl);
    }
    rect(this.x,this.y,scl,scl);//tamaño de snake

  }
}

