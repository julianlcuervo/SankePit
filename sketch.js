var s;
var scl=20;
var food;
var punt=0;
var dirr=0;

var buttonLeft;
var buttonDown;
var buttonUp;
var buttonRight;
//var posx=0;
//var piel;


function setup(){
  createCanvas(580,420);
  //createCanvas(displayWidth-700, displayHeight-300);
  hei=(displayHeight-300);
  s = new Snake();
  frameRate(8);
  //piel=createImg('img/piel.jpg');
  //piel.size(20,20);
  pickLocation();

  background(0);
  buttonLeft = createButton('<');
  //buttonLeft.position(10, 589);
  buttonLeft.position(110,hei+49);
  buttonLeft.size(120,40);
  buttonLeft.mousePressed(fLeft);

  buttonDown = createButton('v');
  buttonDown.position(220, hei+93);
  buttonDown.size(120,40);
  buttonDown.mousePressed(fDown);

  buttonUp = createButton('^');
  buttonUp.position(220,hei+5);
  buttonUp.size(120,40);
  buttonUp.mousePressed(fUp);

  buttonRight = createButton('>');
  buttonRight.position(330, hei+49);
  buttonRight.size(120,40);
  buttonRight.mousePressed(fRight);
}

/*
function touchStarted() {

  if(mouseX>180 & dirr!==1 & dirr!==2){
    s.dir(1,0);
    dirr=1;
  }else if(mouseX<180 & dirr!==2 & dirr!==1){
    s.dir(-1,0);
    dirr=2;
  }else if(mouseY>360 & dirr!==3 & dirr!==4){
    s.dir(0,1);
    dirr=3;
  }else if(mouseY<360 & dirr!==4 & dirr!==3){
    s.dir(0,-1);
    dirr=4;
  }
  console.log(mouseX+"    "+mouseY+"     "+dirr);

}*/

function fLeft() {
  if(punt===1){
  s.dir(-1,0);
  }else if(dirr!==3){
    s.dir(-1,0);
    dirr=4;
  }
}
function fDown() {
  if(punt===1){
  s.dir(0,1);
  }else if(dirr!==1){
    s.dir(0,1);
    dirr=2;
  }
}
function fUp() {
  if(punt===1){
  s.dir(0,-1);
  }else if(dirr!==2){
    s.dir(0,-1);
    dirr=1;
  }
}
function fRight() {
  if(punt===1){
  s.dir(1,0);
  }else if(dirr!==4){
    s.dir(1,0);
    dirr=3;
  }
}


function pickLocation(){//permite que la comida este en el cuadrante correcto
  var cols=floor(width/scl);//numero de escalas en el plano
  var rows=floor(height/scl);//numero de escalas en el plano
  food = createVector(floor(random(cols)),floor(random(rows)));
  food.mult(scl);  
  punt++;
  //counter();
}

function draw(){
  background(51);//fondo gris

  if(s.eat(food)){//si la snake come la comida
    pickLocation();
  }

  if((punt-1)<10){

  textSize(32);
  fill(255);
  text((punt-1), displayWidth-720, 25); 

  } else if ((punt-1)<100) {

  textSize(32);
  fill(255);
  text((punt-1), displayWidth-738, 25); 

  }else {

  textSize(32);
  fill(255);
  text((punt-1), displayWidth-754, 25);

  }
  //textSize(16);
  //text('Font Size 16', 10, 90); 

  s.death();
  s.update();
  s.show();

  fill(255,0,100);//color rojo (la comida)
  rect(food.x,food.y,scl,scl);//posicion(x,y) y esacala (20,20)

}

function keyPressed(){//permite el uso del teclado(direccionamiento)
  if(punt===1){

    if (keyCode === UP_ARROW) {
    s.dir(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0,1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1,0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1,0);
  }

  } else{
  if (keyCode === UP_ARROW & dirr!==2) {
    s.dir(0,-1);
    dirr=1;
  } else if (keyCode === DOWN_ARROW & dirr!==1) {
    s.dir(0,1);
    dirr=2;
  } else if (keyCode === RIGHT_ARROW & dirr!==4) {
    s.dir(1,0);
    dirr=3;
  } else if (keyCode === LEFT_ARROW & dirr!==3) {
    s.dir(-1,0);
    dirr=4;
  }
}
}

function fin(){
  alert("GAME OVER - SCORE: " + (punt-1));
  punt=1;
}

//function counter(){
  //textSize(32);
  //text(punt-1, 530, 23);
//}

