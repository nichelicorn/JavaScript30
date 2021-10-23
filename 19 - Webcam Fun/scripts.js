// 🔎 Query selectors
const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");
const btnVideoStart = document.getElementById("btnVideoStart");
const btnTakePhoto = document.getElementById("btnTakePhoto");
// const radioBtns = document.querySelectorAll("filterSelect");
// const btnApplyFilter = document.getElementById("btnApplyFilter");
// const radioMenu = document.getElementById("radioMenu");
// const radioBtns = radioMenu.querySelectorAll("input");
const rbgSliders = document.getElementById("rbgSliders");
const btnRedEffect = document.getElementById("btnRedEffect");
const btnRgbSplit = document.getElementById("btnRgbSplit");
const btnGreenScreen = document.getElementById("btnGreenScreen");
const btnNoEffect = document.getElementById("btnNoEffect");

function setDimensions() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
};

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
      console.error("Uh oh! Something's not working. Did you grant camera access?", err);
    })
};

function paintToCanvas(e) {
  // console.log("event <>>>", e); // event is `canplay`
  const width = video.videoWidth;
  const height = video.videoHeight;
  // console.log("dimensions", width, "x", height);
  canvas.width = width;
  canvas.height = height;

  // Display webcam view in the window
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // Everything below this line applies to the filter effects
    // Take the pixels out
    // let pixels = ctx.getImageData(0, 0, width, height);
    // Shift the color
    // pixels = redEffect(pixels);
    // pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.1; // creates a stacked transparency effect
    // pixels = greenScreen(pixels);
    // Put the pixels back
    // ctx.putImageData(pixels, 0, 0);
  }, 17);
};

function redEffect(pixels) {
  // iterate over each pixel and shift the color; use a for loop here - this is a nonstandard Array and doesn"t have access to a .map() function
  for( let i = 0; i < pixels.data.length; i += 4 ) {
    pixels.data[i] = pixels.data[i +  10];  // red
    pixels.data[i + 1] = pixels.data[i + 77];// green
    pixels.data[i + 2] = pixels.data[i + 13];// blue
  };

  return pixels;
};

function paintRedEffect() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);

    let pixels = ctx.getImageData(0, 0, width, height);
    pixels = redEffect(pixels);

    ctx.putImageData(pixels, 0, 0);
  }, 17);
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

function paintRgbSplit() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);
    pixels = rgbSplit(pixels);
    ctx.putImageData(pixels, 0, 0);
  }, 17);
};

function greenScreen(pixels) {
  const levels = {}; // holds the min / max green

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
btnVideoStart.addEventListener("click", getVideo);
video.addEventListener("canplay", paintToCanvas); // once the video is available for playback, the canvas will be activated!
btnTakePhoto.addEventListener("click", takePhoto);
// btnApplyFilter.addEventListener("click", applyFilter);
btnRedEffect.addEventListener("click", paintRedEffect);
btnRgbSplit.addEventListener("click", paintRgbSplit);








// 📟 old code

// function applyFilter() {
//   // ✅ create / set variables for filter effect
//   // ✅ add event listener to radio buttons
//   // ✅ set value of selected radio button
//   // re-render pixels based on filter selection

//   // 🚧 Currently only works on one filter - clicking again creates a glitchy effect in the viewer and doesn't update the filter
//   // ✨ Switch these to individual buttons / functions rather than using a radio input menu with a single button to run the function

//   // Set canvas dimensions
//   const width = video.videoWidth;
//   const height = video.videoHeight;
//   canvas.width = width;
//   canvas.height = height;

//   let filterSelection; // will hold the value of the selected radio input
//   radioBtns.forEach(btn => {
//     if (btn.checked) {
//       filterSelection = btn.value;
//     }
//   }); // reassigns `filterSelection` based on value of checked radio input

//   console.log("filter selection <>>>", filterSelection);

//   // Apply selected effect to the webcam player
//   return setInterval(() => {
//     ctx.drawImage(video, 0, 0, width, height);
//     let pixels = ctx.getImageData(0, 0, width, height);
//     // console.log("pixels???", pixels);
//     // Set filter effect
//     if (filterSelection === "redEffect") {
//       pixels = redEffect(pixels); // ✅
//       ctx.putImageData(pixels, 0, 0);
//     } else if (filterSelection === "rbgSplit") {
//       pixels = rgbSplit(pixels); // doesn't work
//       ctx.putImageData(pixels, 0, 0);
//     // } else if (filterSelection === "greenScreen") {
//     //   let sliders = document.querySelector(".rgb");
//     //   sliders.classList.remove("hidden");
//     //   pixels = greenScreen(pixels);
//     //   ctx.putImageData(pixels, 0, 0);
//     } else if (filterSelection === "noEffect") {
//       pixels = ctx.getImageData(0, 0, width, height); // trips the hell out
//       ctx.putImageData(pixels, 0, 0);
//     };
//     // ctx.putImageData(pixels, 0, 0);
    
//   }, 22);

// };

// (filterSelection === "redEffect") ? pixels = redEffect(pixels)
//       : (filterSelection === "rbgSplit") ? pixels = rgbSplit(pixels)
//       : (filterSelection === "greenScreen") ? pixels = greenScreen(pixels)
//       : (filterSelection === "noEffect") ? pixels = ctx.getImageData(0, 0, width, height);
    
//   }, 22);

// What i was working on last night 👇 this wasn't working -- missing the return on the canvas
  // Take the pixels out
  // let pixels = ctx.getImageData(0, 0, width, height);
  // console.log("standard pixels");
  // Shift the color
  // if (filterSelection === "redEffect") {
  //   pixels = redEffect(pixels);
  // } else if (filterSelection === "rbgSplit") {
  //   pixels = rgbSplit(pixels);
  // } else if (filterSelection === "greenScreen") {
  //   pixels = rgbSplit(pixels);
  // } else if (filterSelection === "noEffect") {
  //   pixels = ctx.getImageData(0, 0, width, height);
  // };
  // ctx.globalAlpha = 0.1; // creates a stacked transparency effect
  // Put the pixels back
  // ctx.putImageData(pixels, 0, 0);
