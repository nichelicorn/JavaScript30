// 🔎 Query selectors
const canvas = document.getElementById("draw");
const main = document.querySelector("main");

// 👂 Event listeners
canvas.addEventListener("mousedown", setLineStart);
// canvas.addEventListener("mousedown", (e) => {
//   isDrawing = true;
//   [lastX, lastY] = [e.offsetX, e.offsetY];
//   });
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);

// 📐 Set Canvas properties
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - (window.innerHeight * .2);
// need to add a context - this is where the drawing occurs; can be 2D or 3D (for video games / 3D rendering)
const ctx = canvas.getContext("2d");
// ctx.strokeStyle = "BADASS";
// what the line does when it meets another line - look at these on MDN!
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 5;
// ctx.globalCompositeOperation = "multiply"; // this property creates an additive layering effect with the color

// 📐 Set line properties
// this will be used to stop the drawing when keyup / click released
let isDrawing = false;
// sets the starting and ending X and Y coordinates; 0,0 coord will start in the upper left corner
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

// ⚙️ Functions
function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];   // resets the values of lastX/Y to create new lines at the starting point

  // Set the color shift on the rainbow pen
  // hue++;
  //  // resets the hue value to 0
  // if (hue >= 360) {
  // hue = 0; 
  // };
  setLineColor();

  // Set line width animation
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
  direction = !direction;
  };
  if (direction) {
  ctx.lineWidth++
  } else {
  ctx.lineWidth--;
  };
}

function setLineColor() {
  hue++;
  // resets the hue value to 0
 if (hue >= 360) {
 hue = 0; 
 };
}
  
function setLineStart(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}
