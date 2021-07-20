var canvas;
var music;
var ball;
var block1,block2,block3,block4;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
ball=createSprite(750,100,40,40);
   ball.shapeColor="white";
ball.setVelocity(4,9);
block1=createSprite(0,580,360,30);
block1.shapeColor="blue";
block2=createSprite(290,580,230,30);
block2.shapeColor="green";
block3=createSprite(515,580,230,30);
block3.shapeColor="yellow";
block4=createSprite(740,580,230,30);
block4.shapeColor="red";
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
ball.bounceOff(edges);

if(ball.isTouching(block1)&&ball.bounceOff(block1)){
    ball.shapeColor="blue";
    music.play();
}
if(ball.isTouching(block2)&&ball.bounceOff(block2)){
    ball.shapeColor="green";
}

if(ball.isTouching(block3)&&ball.bounceOff(block3)){
    ball.shapeColor="yellow";
    
}
if(ball.isTouching(block4)&&ball.bounceOff(block4)){
    ball.shapeColor="red";
    ball.setVelocity(0,0);   
}
    //add condition to check if box touching surface and make it box
    drawSprites();
}
