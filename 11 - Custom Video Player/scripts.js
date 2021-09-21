// 🌐 Global variables
let mousedown = false;

// 🔎 Query selectors
const playerVideo = document.querySelector(".player__video");
const player = document.querySelector(".player");
const video = player.querySelector(".viewer"); // find the video inside the player
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]"); // will grab anything that has a `data-skip` attribute
const ranges = player.querySelectorAll(".player__slider");
const fsBtn = document.getElementById("fsBtn");

// ⚙️ Functions
function togglePlay() {
  // a ternary, set to a variable - sets the value as the method depending upon the current state of video play
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚'; // can use `this` because it is bound to the video itself
  toggle.textContent = icon;
}

function skip() {
  const skipTime = parseFloat(this.dataset.skip); // parseFloat will convert the string contained in the dataset into a usable number
  video.currentTime += skipTime;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = ( video.currentTime / video.duration ) * 100;   // sets a % of video playtime
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = ( e.offsetX / progress.offsetWidth ) * video.duration; // returns a % and multiplies by the video time
  video.currentTime = scrubTime;
}

function toggleScreen() {
  !document.fullscreenElement ? playerVideo.requestFullscreen().catch(err => {
        alert("Sorry, unable to enter fullscreen mode: ${err.message} (${err.name})")
      }) : document.exitFullscreen();
}

// 👂 Event listeners
fsBtn.addEventListener("click", toggleScreen);
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate)); // will fire with  mousemovement, not just a click
skipButtons.forEach(button => button.addEventListener("click", skip));
toggle.addEventListener("click", togglePlay);
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e)); // first checks the mousedown variable, and if it is true, moves on to the next piece; if condition 1 is false it will return;
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);