// 🔎 Query selectors
const canvas = document.getElementById("draw");
const main = document.querySelector("main");

// 👂 Event listeners
canvas.addEventListener("mousedown", setLineStart);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);

// 📐 Set Canvas properties
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - (window.innerHeight * .2);
const ctx = canvas.getContext("2d");
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 5;

// 📐 Set line properties
let isDrawing = false;
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

  setLineColor();
  setLineWidth();
}

function setLineColor() {
  hue++;
  if (hue >= 360) hue = 0;
}
  
function setLineStart(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function setLineWidth() {
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  };
  direction ? ctx.lineWidth++ : ctx.lineWidth--;  
}