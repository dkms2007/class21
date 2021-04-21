var canvas;
var block1,block2,block3,block4;
var ball, edges;
var musicSound;

function preload(){
    // load sound here
    musicSound = loadSound("music.mp3")

}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(10,580,200,30);
    block1.shapeColor = "red";

    block2 = createSprite(220,580,200,30);
    block2.shapeColor = "pink";

    block3 = createSprite(430,580,200,30);
    block3.shapeColor = "black";

    block4 = createSprite(640,580,200,30);
    block4.shapeColor = "yellow";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityY = -2;
    ball.velocityX = 2;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "red";
        musicSound.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "pink";
        musicSound.play();

    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball)){
        ball.shapeColor = "black";
        musicSound.play();
    }

    //write code to bounce off ball from the block4
    if(block4.isTouching(ball)){
        ball.shapeColor = "yellow";
        musicSound.play();
    }
        drawSprites();
}
