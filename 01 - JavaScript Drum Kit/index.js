window.addEventListener('keydown', playSound);

function playSound(e) {
  // console.log('event keycode <>>>', e.keycode);
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
// this will dynamically return an audio element if it has a dataKey matching the event keyCode
// console.log("audio <>>>", audio);
if(!audio) return;
// stops the function from running at all
audio.currentTime = 0;
audio.play();
// this will only play the audio once through -- can't instantly press the button again; need to add the currentTime resetter to allow multiple keystrikes without waiting for the play to complete
  key.classList.add("playing");
}

function removeTransition(e) {
  // console.log("event <>>>", e);
  if (e.propertyName !== "transform") return;
    // skip it if it's not a transform
  // console.log("propertyName <>>>", e.propertyName);
  this.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));


