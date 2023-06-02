
var position = 1000;
var positionWalk = 1;
var countFadeFrames = 0;
var isText = false;
var currentline = 0;
var convoDone = false;
var objective1 = true;
var objective2 = false;

const winscreen = new Image();
const walk1 = new Image();
const walk2 = new Image();
const walk3 = new Image();
const walk4 = new Image();
const sis1 = new Image();
const sis2 = new Image();
const sis3 = new Image();
const back1 = new Image();
var currentBackground = back1;
const back2 = new Image();

winscreen.src = "images/winscreen.jpg";
walk1.src = "images/walk1.jpg";
walk2.src = "images/walk2.jpg";
walk3.src = "images/walk3.jpg";
walk4.src = "images/walk4.jpg";
sis1.src = "images/sis1.jpg";
sis2.src = "images/sis2.jpg";
sis3.src = "images/sis3.jpg";
back2.src = "images/campdrawingbackground2.jpg";

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
  context.drawImage(image,-250,0,600,700); //-250 is pulling back
  context.restore();
  var grd = context.createRadialGradient(position+250,1500+250,5,position+250,1500+250,1000);
  grd.addColorStop(0,"#f7f2c600");
  grd.addColorStop(1,"#21243bAB");
  context.fillStyle = grd;
  context.fillRect(0,0,4032,3024);
}

function drawBackground1(image){
  var context = getCanvaContext();
  context.drawImage(image,0 ,0, 4032, 3024);
}

function shareObjective(){
  if(objective1){
    getCanvaContext().fillStyle = "red";
    getCanvaContext().font = "100px serif";
    getCanvaContext().fillText("Objective : Find your sister",0,100);
  }
  else if (objective2){
    getCanvaContext().fillStyle = "red";
    getCanvaContext().font = "100px serif";
    getCanvaContext().fillText("Objective : Go back to your tent",0,100);
  }
}

function walkingMCright(direction, background){
  drawBackground1(background);
  //could try with array of images
  //var array = [walk1,walk2,walk3,walk4];
    if(background === back2 ){
      drawSis(sis1);
      if(position >= 2000 && position <= 2500){
        showText();
      }
    }
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
  if(background === back2 ){
      if(position >= 2000 && position <= 2500){
        showText();
      }
    }
}
function showText(){
  if(!convoDone){ //is not convoDone = is not false == this is true
    getCanvaContext().fillStyle = "red";
    getCanvaContext().font = "100px serif";
    getCanvaContext().fillText("Talk to Sister, press E",1000,800);
    isText = true;
  }
}

function convo(){
  var mcPart = ["Hey what are you doing here?", "Still, you should have said something", "It is, but tell me when you leave the campsite, you could have gotten lost."];
  var sisPart = ["Oh hey, sorry I couldn't sleep. I wanted to look at the moon", "Yeah sorry, but the moon is really pretty", "Alright fine, next time I will tell ."];
  
  getCanvaContext().font = "100px serif";
  
  getCanvaContext().fillStyle = "red";
  getCanvaContext().fillText(mcPart[currentline],1000,900+(200*currentline));
  
  if(currentline === 1){
    drawSis(sis2);
  } else {
    drawSis(sis3);
  }
  getCanvaContext().fillStyle = "blue";
  getCanvaContext().fillText(sisPart[currentline],1000,1000+(200*currentline));
  
  currentline++;
}
function fadeBlack(){
  getCanvaContext().rect(0,0,4032,3024);
  getCanvaContext().fillStyle = "#00000005"; //80 half transparent 
  getCanvaContext().fill();
  console.log("faded");
  countFadeFrames++;
  if(countFadeFrames < 100){
    window.requestAnimationFrame(fadeBlack);
  }else if(currentBackground === back1){
    countFadeFrames = 0;
    newBack2();
    if(objective2){
      getCanvaContext().drawImage(winscreen,0,0,4032,3024);
    }
  } else if(currentBackground === back2){
    countFadeFrames = 0;
    newBack1();
  }
}
function newBack1(){
  position = 3500;
  currentBackground = back1;
  getCanvaContext().clearRect(0,0,4032,3024);
  drawBackground1(currentBackground);
  walkingMCright("left",currentBackground);
}
function newBack2(){
  position = 100;
  currentBackground = back2;
  getCanvaContext().clearRect(0,0,4032,3024);
  drawBackground1(currentBackground);
  walkingMCright("right",currentBackground);
}

function drawSis(image){
  var context = getCanvaContext();
  context.drawImage(image,2500,1500,500,500);
}

back1.addEventListener (
  "load", () => {
  var c = document.getElementById("myCanvas");
  drawBackground1(currentBackground);
  walkingMCright("right",currentBackground);
    shareObjective();
  c.addEventListener("keydown", (e) => {
  if (!e.repeat) {
    console.log(e);
    console.log(`Key "${e.key}" pressed [event: keydown]`);
  } else {
    console.log(`Key "${e.key}" repeating [event: keydown]`);
  }
    if(countFadeFrames > 0){ //if fadeBlack running, stop listening for keypress
      return 0;
    }
  if(e.keyCode === 39 && position < 3600){ //=== is checking if equal , == is casting
    position = position+100;
    walkingMCright("right",currentBackground);
    shareObjective();
  }
    if(position === 3600 && currentBackground === back1){
      countFadeFrames = 0;
      window.requestAnimationFrame(fadeBlack);
    }
    if(position === 100 && currentBackground === back2){
      countFadeFrames = 0;
      window.requestAnimationFrame(fadeBlack);
    }
    if(e.keyCode === 37 && position > 100){
    position = position-100;
    drawBackground1(currentBackground);
    walkingMCright("left",currentBackground);
      shareObjective();
    }
    if(e.keyCode === 69 && isText === true && currentline <=2){
      convo();
      objective1 = false;
      objective2 = true;
    }else if(currentline > 2 && e.keyCode === 69){
      convoDone = true;
        drawBackground1(currentBackground);
        walkingMCright("left",currentBackground);
      }
    if(position === 900 && currentBackground === back1 && objective2){
      countFadeFrames = 0;
      window.requestAnimationFrame(fadeBlack);
    }
  }); //end of eventlistener
},
    false
)

back1.src = "images/campdrawingbackground1.jpg";

//A variable container
//Declaration var, let, const

// let name = "Amy"; //string
// let isRainy = false; //boolean
// let age = 21; //number

// console.log(name);
// console.log("is it rainy " + isRainy);