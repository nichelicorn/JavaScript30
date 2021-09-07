// 🔎 Query Selectors
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

// ⚙️ Functions
setInterval(setDate, 1000);

function setDate() {
  const now = new Date();
  
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  if ( seconds === 0 ) {
    secondHand.style.transition = "none";
  }
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  if ( minutes === 0 ) {
    minuteHand.style.transition = "none";
  }
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  if ( hours === 0 ) {
    hourHand.style.transition = "none";
  }
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
};