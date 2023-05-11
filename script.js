const back1 = new Image();
back1.addEventListener (
  "load", () => {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.drawImage(back1,0 ,0);
  c.addEventListener("keydown", (e) => {
  if (!e.repeat) {
    console.log(`Key "${e.key}" pressed [event: keydown]`);
  } else {
    console.log(`Key "${e.key}" repeating [event: keydown]`);
  }
});
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