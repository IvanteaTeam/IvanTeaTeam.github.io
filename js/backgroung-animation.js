var bgcanv = document.getElementsByClassName('background-animation')[0].getElementsByTagName('canvas')[0];

var ctx = bgcanv.getContext('2d');

bgcanv.width = window.innerWidth;
bgcanv.height = window.innerHeight;

var loopIterationCount = 0;
var leftY = 0;
var rightY = 0;
var rocketParams = {
  width : 30,
  height : 120,
    margin : 20,
    v : 7,
    d : 60
};
var ballABSV = 7;
var ballX = 100;
var ballY = 100;
var ballR = 15;
var xv = 0;
var yv = 0;

function moveLeft(p){
    if(leftY>p+rocketParams.d){leftY-=rocketParams.v;}else 
    if(leftY<p-rocketParams.d){leftY+=rocketParams.v}
    if(leftY<0)leftY=0;
    if(leftY+rocketParams.height>window.innerHeight){leftY = window.innerHeight-rocketParams.height;}
}

function moveRight(p){
    if(rightY>p+rocketParams.d){rightY-=rocketParams.v;}else 
    if(rightY<p-rocketParams.d){rightY+=rocketParams.v}
    if(rightY<0)rightY=0;
    if(rightY+rocketParams.height>window.innerHeight){rightY = window.innerHeight-rocketParams.height;}
}

function Intelect(){
    moveLeft(xv>0?window.innerHeight/2-rocketParams.height/2:ballY-rocketParams.height/2);
    moveRight(xv<0?window.innerHeight/2-rocketParams.height/2:ballY-rocketParams.height/2);
}

function my_rand(n){
    var out = 0;
    for(var i = 0;i<n;i++){
        out+=Math.random();
    }
    return out;
}
function rand_sign(){
    return (Math.random()>0.5?1:-1);
}

function again(){
    ballX = window.innerWidth/2;
    ballY = window.innerHeight/2;
    xv= my_rand(ballABSV)*rand_sign();
    yv = my_rand(ballABSV)*rand_sign();
    leftY = rightY = window.innerHeight/2-rocketParams.height/2;
    rocketParams.d = my_rand(40)+40;
}

function moveBall(){
    ballX+=xv;
    ballY+=yv;
    if(ballY-ballR<=0||ballY+ballR>=window.innerHeight)yv = -yv;
    if(ballY>=leftY&&ballY<=leftY+rocketParams.height&&ballX-ballR>=rocketParams.margin&&ballX-ballR<=rocketParams.margin+rocketParams.width)
    {xv = -xv;ballX+=ballR;}
    if(ballY>=rightY&&ballY<=rightY+rocketParams.height&&ballX+ballR>=window.innerWidth-rocketParams.margin-rocketParams.width&&ballX+ballR<=window.innerWidth-rocketParams.margin)
    {xv = -xv;ballX-=ballR;}
    
}
function main(){
moveBall();
    
    
    if(ballX>window.innerWidth||ballX<0){again();}
    Intelect();
    
}
function draw(){
    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0,bgcanv.width,bgcanv.height);
    ctx.fillStyle = "#000";
    ctx.fillRect(rocketParams.margin,leftY,rocketParams.width,rocketParams.height);
    ctx.fillRect(window.innerWidth-rocketParams.width-rocketParams.margin,rightY,rocketParams.width,rocketParams.height);
    ctx.arc(ballX,ballY,ballR,0,2*Math.PI,false);
    ctx.fill();
    moveBall();
}

function update(){
    bgcanv.width = window.innerWidth;
    bgcanv.height = window.innerHeight;
    draw();
}



function loop(){
        
        if(!(window.innerHeight>window.innerWidth||window.innerWidth<750)){
            main();
            if(loopIterationCount==0){
                loopIterationCount = 0;
            update();
        
    }else{
        loopIterationCount++;
    }}
}

requestAnimationFrame(function func(){
    loop();
    requestAnimationFrame(func);
});



again();