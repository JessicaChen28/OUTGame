function setup(){
  createCanvas(400,400);
}
function draw(){
  background(220);
  ellipse(50,50,50,50);
}
console.log("Hello");
console.log("Goodbye");

console.log("Hi");

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

// const back2 = new Image();
// back2.addEventListener(
//   "load", () => {
    
//   }
// )

// c.addEventListener("keydown", (e) => {
//   if (!e.repeat) {
//     logMessage(`Key "${e.key}" pressed [event: keydown]`);
//   } else {
//     logMessage(`Key "${e.key}" repeating [event: keydown]`);
//   }
// });



//A variable container
//Declaration var, let, const

let name = "Amy"; //string
let isRainy = false; //boolean
let age = 21; //number

console.log(name);
console.log("is it rainy " + isRainy);

document.getElementById("p1").innerHTML = "Hello " + name;