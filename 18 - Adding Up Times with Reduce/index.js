// Given a list of video clips / times, return the total of all hours, minutes, and seconds of video play

// const timeNodes = document.querySelectorAll("[data-time]"); // returns a NodeList; the [] will look for anything with this data attribute
// const seconds = timeNodes.map(node => node.dataset.time); // can't do a map on a NodeList - this isn't a real array; must convert the nodeList to an array; can use the spread operator, or the Array.from method
const timeNodes = [...document.querySelectorAll("[data-time")];
// const timeNodes = Array.from(document.querySelectorAll("[data-time]"));
// console.log("timeNodes <>>>", timeNodes);

// Iterate through the timeNodes and return the total seconds of all videos
function calculateTotalTime() {
  const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
      // split string into minutes and seconds, then convert to a number, will call `parseFloat()` against each entry
      const [mins, secs] = timeCode.split(":").map(parseFloat);
      return (mins * 60) + secs; // adds up the total number of seconds
    })
    .reduce((total, videoSecs) => total + videoSecs);
  
  let secondsLeft = seconds;
  // set the hours
  const hours = Math.floor(secondsLeft / 3600); // returns the whole number only
  secondsLeft = secondsLeft  % 3600; // reset the value of secondsRemaining to what is left after breaking out the hours
  // set the minutes
  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;
  
  // console.log("secs remaining <>>>", secondsLeft);
  console.log("Video time remaining <>>>", hours, mins, secondsLeft);
}

// Display video times in the window
const videos = [...document.querySelectorAll("li")]; // select all list elements

let videoContainer = document.querySelector("ul");

function displayTimes() {
  videoContainer.innerHTML = "";
  videos.map((vid, i) => {
    // console.log("vid <>>>", vid);
    // console.log("vid.data-time <>>>", vid.dataset.time);
    videoContainer.innerHTML += `
      <article class="video-card">
        <h3>Video ${i + 1}<h3>
        <p contenteditable>Playback time: ${vid.dataset.time}</p>
      </article>        
    `;
  });
};

const totalTime = document.getElementById("totalTime");

function displayTotalTime() {

}

window.addEventListener("load", displayTimes);
