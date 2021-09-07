// 🌐  Global variables
const keys = document.querySelectorAll(".key");

// 👂 Event Listeners
window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// ⚙️ Functions
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  // stops the function from running at all
  audio.currentTime = 0;
  // resets the audio file start time to the beginning
  audio.play();
  // this will only play the audio once through -- can't instantly press the button again; need to add the currentTime resetter to allow multiple keystrikes without waiting for the play to complete
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
};