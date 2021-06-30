var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  orangeImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x=mouseX
var select_spirtes = Math.round(random(1,2))
if (frameCount%80===0){
if (select_spirtes == 1){
  createApple();
}
else {
  createOrange();
} 
}
  drawSprites();
}
function createApple () {
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.scale =0.07 
  apple.velocityY = 3 
  apple.lifetime = 150
}
function createOrange () {
  orange = createSprite(random(50,350),40,10,10)
  orange.addImage(orangeImg)
  orange.scale =0.07 
  orange.velocityY = 3 
  orange.lifetime = 150
}
