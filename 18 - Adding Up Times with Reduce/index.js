// Given an HTML dataset, return the total of all hours, minutes, and seconds of video play

// 🔎 Query selectors
const timeNodes = [...document.querySelectorAll("[data-time")]; // convert NodeList to an array using the spread operator, OR `Array.from()` method
let totalTime = document.getElementById("totalTime");
let videoContainer = document.querySelector("ul");
const videos = [...document.querySelectorAll("li")]; // select all list elements


// ⚙️ Functions
function calculateTotalTime() {
  // Iterate through the timeNodes and return the total seconds of all videos
  const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
      const [mins, secs] = timeCode.split(":").map(parseFloat); // split string into minutes and seconds, then convert to a number
      return (mins * 60) + secs; // calculates the total number of seconds
    })
    .reduce((total, videoSecs) => total + videoSecs);
    
  // Determine values of each applicable time measurement
  let secondsLeft = seconds;
  const hours = Math.floor(secondsLeft / 3600); // returns the whole number only
  secondsLeft = secondsLeft  % 3600; // reset the value of secondsRemaining to what is left after breaking out the hours
  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  displayTotalTime(hours, mins, secondsLeft);
};

function displayTotalTime(hrs, mns, scs) {
  totalTime.innerHTML = `
    <h3>Total Video Playback Time : ${hrs}:${mns}:${scs}</h3>
  `;
};

function displayTimes() {
  videoContainer.innerHTML = "";

  videos.map((vid, i) => {
    videoContainer.innerHTML += `
      <article class="video-card">
        <h3>Video ${i + 1}<h3>
        <p>Playback time: ${vid.dataset.time}</p>
      </article>        
    `;
  });
};

// 👂 Event listeners
window.addEventListener("load", calculateTotalTime);
window.addEventListener("load", displayTimes);