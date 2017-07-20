var ball=document.getElementById("ball");
var leftP=document.getElementById('leftP');
var rightP=document.getElementById('rightP');
var body=document.getElementsByTagName("body");
var maxHeight = document.body.clientHeight;
console.log(maxHeight);
var maxWidth = document.body.clientWidth;
var number

document.getElementById("button").onclick=function(){
  location.reload();

}
function playerRight(direction){
var currentPosTop=parseFloat(rightP.style.top.slice(0,-2))
var currentPosLeft=parseFloat(rightP.style.left.slice(0,-2))
  // console.log(currentPosTop);
  if (direction=="down" && currentPosTop!=640){
    // console.log("i am here");
    rightP.style.top=(currentPosTop+20)+"px";

  }
  if (direction=="up" && currentPosTop!=0){
    rightP.style.top=(currentPosTop-20)+"px";

  }
}
function playerLeft(direction){
var currentPosTop=parseFloat(leftP.style.top.slice(0,-2))
var currentPosLeft=parseFloat(leftP.style.left.slice(0,-2))
  // console.log(currentPosTop);
  if (direction=="down" && currentPosTop!=640){

    // console.log("i am here");

    leftP.style.top=(currentPosTop+20)+"px";

  }
  if (direction=="up" && currentPosTop!=0){

    leftP.style.top=(currentPosTop-20)+"px";

  }
}

function startGame(){
  var ballTop=parseFloat(ball.style.top.slice(0,-2));
  var ballLeft=parseFloat(ball.style.left.slice(0,-2));
  var RightP
  var DelTop=-10;
  var DelLeft=10;

  number=setInterval(function(){
    var currentPosTop=parseFloat(ball.style.top.slice(0,-2));
    var currentPosLeft=parseFloat(ball.style.left.slice(0,-2));
    var rightPosTop=parseFloat(rightP.style.top.slice(0,-2));
    var leftPosTop=parseFloat(leftP.style.top.slice(0,-2));

    ball.style.top =(currentPosTop+DelTop)+"px";
    ball.style.left=(currentPosLeft+DelLeft)+"px";
    if (currentPosTop<0){
      DelTop=10;
    }
    if (currentPosTop>maxHeight-50){
      DelTop=-10;
    }
    // console.log(currentPosLeft);
    // console.log(maxWidth);
    // console.log(rightP.style.top);
    // console.log(currentPosTop);
    console.log(maxWidth);
    if (Math.abs(currentPosLeft-maxWidth)<=70&& Math.abs(currentPosTop-rightPosTop)<50){
      DelLeft=-10;
    }
    if (currentPosLeft<=20 && (Math.abs(currentPosTop-leftPosTop))<50) {
      DelLeft=10;
    }
    if (currentPosLeft>=maxWidth){
      clearInterval(number);
      document.getElementById("leftwinsp").style.color="white";
      document.getElementById("button").style.backgroundColor="#f44336"
      document.getElementById("button").style.color="white"
    }
    if (currentPosLeft<=-50){
      clearInterval(number);
      document.getElementById("rightwinsp").style.color="white";
      document.getElementById("button").style.backgroundColor="#f44336"
      document.getElementById("button").style.color="white"


    }
    document.body.addEventListener("keydown",function(event){
      if (event.key==" "){
        clearInterval(number);
      }
    })
  },38)
}


document.body.addEventListener("keydown",function(event){
  if (event.key==" "){
    startGame();

    document.getElementById("instructions").style.color='transparent';
    document.getElementById("centerLine").style.borderLeft="dashed white 2px";
  }
  if (event.key=="ArrowDown"){
    // console.log(event.key);
    playerRight("down");
  }
  if (event.key=="ArrowUp"){
    // console.log(event.key);
    playerRight("up");
  }
  if (event.key=="w"){
    playerLeft("up");
  }
  if (event.key=="s"){
    playerLeft("down");
  }
})
