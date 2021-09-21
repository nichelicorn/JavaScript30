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
  // call .play on the video, or .pause
  // if (video.paused) { // paused is a property that lives on the video; there is not a playing property
  //   video.play();
  // } else {
  //   video.pause();
  // }
  // re-written as a ternary, set to a variable
  const method = video.paused ? "play" : "pause";
  video[method]();

  // update image on button to pause / play depending on current state; listen to the video for whenever it is paused (even if it's not in this function)
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚'; // can use `this` because it is bound to the video itself
  console.log("it icon", icon);
  toggle.textContent = icon;
  // console.log("update the button");
}

function skip() {
  // define how much the video will skip when the button is clicked; refer to the element's `data-skip` attribute
  console.log("skipping!", this.dataset.skip); // the time to skip forward / back
  const skipTime = parseFloat(this.dataset.skip); // parseFloat will convert the string contained in the dataset into a usable number
  video.currentTime += skipTime;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  // set a % of video playtime
  const percent = ( video.currentTime / video.duration ) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  console.log("hello scrubber");
  console.log(e); // use X-offset to pinpoint clicked area of the progress bar
  const scrubTime = ( e.offsetX / progress.offsetWidth ) * video.duration; // will return a % and multiply that by the video time
  video.currentTime = scrubTime;
}

function toggleScreen() {
  const fullHeight = window.screen.height;
  const fullWidth = window.screen.width;
  
  console.log(`full screen mode, you would like? ${fullHeight} x ${fullWidth}?`);

  // set viewer height & width to window dimensions;
  // should this be set as a style?

  // when the TV button is clicked,
  // screen will transition to full-size video
  // ✅ set an event listener on the button
  // ✅ find full screen size (height * width)
  // need to create transition to update video player element
  

  // 👇 these aren't doing anything;
  // playerVideo.style.height = fullHeight;
  // playerVideo.style.width = fullWidth;
  // [video.height, video.width = fullHeight, fullWidth];
  // video.height = fullHeight;
  // video.width = fullWidth;
}

// 👂 Event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
// listen for the video to emit an event, called "time update", and when that happens we will runn handleProgress
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach(button => button.addEventListener("click", skip));

ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate)); // will fire with  mousemovement, not just a click

let mousedown = false;
progress.addEventListener("click", scrub);
// progress.addEventListener("mousemove", (e) => mousedown && scrub(e))); // first checks the mousedown variable, and if it is true, moves on to the next piece; if condition 1 is false it will return;
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);

fsBtn.addEventListener("click", toggleScreen);