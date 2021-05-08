var gardenImg;
var tom, jerry;
var cat1Img, cat2Img;
var mouse1Img,mouse2Img;
function preload() {
    gardenImg = loadImage("images/garden.png");
    cat1Img = loadAnimation("images/cat1.png");
    cat2Img = loadAnimation("images/cat2.png","images/cat3.png");
    mouse1Img = loadAnimation("images/mouse1.png");
    mouse2Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    cat4Img = loadAnimation("images/cat4.png");
    mouse4Img = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     tom=createSprite(870,600);
    tom.addAnimation("catSleeping",cat1Img);
    tom.scale = 0.2;

    jerry=createSprite(200,600);
    jerry.addAnimation("jerrysleeping",mouse1Img);
    jerry.scale = 0.15;





}

function draw() {


    
    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x<(tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("tomCollide",cat4Img);
        tom.changeAnimation("tomCollide");
        tom.x = 300;

        jerry.addAnimation("jerryCollide",mouse4Img);
        jerry.changeAnimation("jerryCollide");
        
    }

    drawSprites();
    text(mouseX + "," + mouseY,mouseX,mouseY);
    
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
jerry.addAnimation("mouseTeasing",mouse2Img);
jerry.changeAnimation("mouseTeasing");
jerry.frameDelay = 10 ; 

tom.velocityX = -5;
tom.addAnimation("tomStanding",cat2Img);
tom.changeAnimation("tomStanding");
tom.frameDelay = 10;

}
  //For moving and changing animation write code here


}
