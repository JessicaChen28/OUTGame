
var position = 1000;
var positionWalk = 1;

const walk1 = new Image();
const walk2 = new Image();
const walk3 = new Image();
const walk4 = new Image();
const back1 = new Image();
const back2 = new Image();

walk1.src = "images/walk1.jpg";
walk2.src = "images/walk2.jpg";
walk3.src = "images/walk3.jpg";
walk4.src = "images/walk4.jpg";

function getCanvaContext(){
  var c = document.getElementById("myCanvas");
  return c.getContext("2d");
}

function drawMCwalk(image, direction){
  var context = getCanvaContext();
  context.save(); 
  context.translate(position+(500/2), 1500); //500/2 is overshotting 
  if(direction === "left") {
      context.scale(-1,1); //x,y
  }
  
  context.drawImage(image,-250,0,500,500); //-250 is pulling back
  context.restore();
}

function drawBackground1(image){
  var context = getCanvaContext();
  context.drawImage(image,0 ,0);
}

function walkingMCright(direction){
  drawBackground1(back1);
  //could try with array of images
  //var array = [walk1,walk2,walk3,walk4];
  if(positionWalk === 1 ) {
    drawMCwalk(walk1, direction);
    positionWalk = 2;
  }
  else if(positionWalk === 2){
    drawMCwalk(walk2, direction);
    positionWalk = 3;
  }
  else if(positionWalk === 3){
    drawMCwalk(walk3, direction);
    positionWalk = 4;
  }
  else if(positionWalk === 4){
    drawMCwalk(walk4, direction);
    positionWalk = 1;
  }
}

back1.addEventListener (
  "load", () => {
  var c = document.getElementById("myCanvas");
    drawBackground1(back1);
  c.addEventListener("keydown", (e) => {
  if (!e.repeat) {
    console.log(e);
    console.log(`Key "${e.key}" pressed [event: keydown]`);
  } else {
    console.log(`Key "${e.key}" repeating [event: keydown]`);
  }
  if(e.keyCode === 39 && position < 3000){ //=== is checking if equal , == is casting
    position = position+100;
    walkingMCright("right");
  }
    if(e.keyCode === 37 && position > 1000){
    position = position-100;
    drawBackground1(back1);
    walkingMCright("left");
    }
  }); //end of eventlistener
},
    false
)

back1.src = "images/campdrawingbackground1.jpg";

const blackTrans = new Image();
blackTrans.onkeypress =  function(){};
blackTrans.addEventListener(
  "keypress", () => {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.drawImage(blackTrans, 0, 0);
  }
)
blackTrans.src = "images/black.jpg";


//A variable container
//Declaration var, let, const

// let name = "Amy"; //string
// let isRainy = false; //boolean
// let age = 21; //number

// console.log(name);
// console.log("is it rainy " + isRainy);