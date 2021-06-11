const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


var division=[]
var particle=[]
var plinko=[]
var divisionHeight=200
var score=0




function setup() {
  createCanvas(800,400);
engine = Engine.create()
world = engine.world

ground=new Ground(400,397,800,5)

for(var k=0; k<=width;k=k+80){
  division.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
}


for(var j=75; j<=width;j=j+50){
  plinko.push(new Plinko(j,75))
}


for(var j=50; j<=width-10;j=j+50){
  plinko.push(new Plinko(j,175))
}






  
}
function draw() {
  background("cyan");  

Engine.update(engine)
ground.display()


for(var i=0; i< plinko.length;i++){
  plinko[i].display()
}

if(frameCount%60===0){
particle.push(new Particle(random(100,700),10,10))
score++
}





for(var j=0; j< particle.length;j++){
  particle[j].display()
}




for(var k=0; k< division.length;k++){
  division[k].display()
}



  drawSprites();
}