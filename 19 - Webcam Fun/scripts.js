// 🔎 Query selectors
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const btnVideoStart = document.getElementById("btnVideoStart");
const btnTakePhoto = document.getElementById("btnTakePhoto");

// ⚙️ Functions
function getVideo() {
  navigator.mediaDevices.getUserMedia( { video: true, audio: false }) // navigator searches the device for the media and returns a promise
    .then(localMediaStream => {
      console.log("local media stream 🎥 <>>>", localMediaStream);
      // ⚠️ This method is deprecated
      // video.src = window.URL.createObjectURL(localMediaStream);
      // needs to be converted to some kind of url; use this method to convert the media stream into something the video player can understand
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.error("Uh oh! Something's not working. Did you grant access?", err);
    })
};

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  // console.log("dimensions", width, "x", height);
  canvas.width = width;
  canvas.height = height;

  // Display webcam view in the window
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // Take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // Shift the color
    // pixels = redEffect(pixels);
    // pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.1; // creates a stacked transparency effect
    pixels = greenScreen(pixels);
    // Put the pixels back
    ctx.putImageData(pixels, 0, 0);

  }, 17);
};

function redEffect(pixels) {
  // iterate over each pixel and shift the color; use a for loop here - this is a nonstandard Array and doesn't have access to a .map() function
  for( let i = 0; i < pixels.data.length; i += 4 ) {
    pixels.data[i] = pixels.data[i +  10];  // red
    pixels.data[i + 1] = pixels.data[i + 77];// green
    pixels.data[i + 2] = pixels.data[i + 13];// blue
  };
  return pixels;
};

function rgbSplit(pixels) {
  // iterate over each pixel and pull the colors apart to create a color shifting effect
  for( let i = 0; i < pixels.data.length; i += 4 ) {
    pixels.data[i - 250] = pixels.data[i + 0];  // red
    pixels.data[i + 333] = pixels.data[i + 1]; // green
    pixels.data[i - 150] = pixels.data[i + 2];// blue
  };
  return pixels;
};

function greenScreen(pixels) {
  const levels = {}; // holds the min / max green

  console.log("levels <>>>", levels);

  [...document.querySelectorAll(".rgb input")].forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  };

  return pixels;

};

function takePhoto() {
  // Play camera shutter soundclip
  snap.currentTime = 0;
  snap.play(); // plays the sound, starting @ 0:00

  // Grab the canvas data
  const data = canvas.toDataURL("image/jpeg");
  // console.log("data <>>>", data); // returns a base64 string - a string representing a visual representation; this can be used to create an image
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "lovely"); 
  // download attribute opens the download interface
  link.innerHTML = `
    <img src="${data}" alt="Webcam screenshot" />
  `;
  strip.insertBefore(link, strip.firstChild); // inserts link into the strip, before the first child
};

// 👂 Event Listeners
// getVideo();
btnVideoStart.addEventListener("click", getVideo);
video.addEventListener("canplay", paintToCanvas); // once the video is available for playback, the canvas will be activated!
btnTakePhoto.addEventListener("click", takePhoto);