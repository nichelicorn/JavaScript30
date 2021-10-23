// 🌐 Global variables
let p = document.createElement("p");
const words = document.getElementById("words");
words.appendChild(p); // will add each new p to the DOM as speech continues

// 🗣 Speech recognition variables
// if (TypeError) {
//   console.log("TypeError detected ❗️", TypeError.message);
// };
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// let recognition = {};
// function setRecognition() {
//   recognition = new SpeechRecognition();
//   recognition.interimResults = true; // populates as you are speaking
//   console.log("recognition in the thing <>>>", recognition);
//   return recognition;
// };
const recognition = new SpeechRecognition();
recognition.interimResults = true; // populates as you are speaking
// console.log("recognition", recognition);

// 🔎 Query selectors
// const btnToListen = document.getElementById("btnToListen");

// ⚙️ Functions
function printSpeech(e) {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("")

  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  };

  if (transcript.includes("unicorn" || "Unicorn")) {
    console.log("🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄")
  };

  if (transcript.includes( "NPR" || "national public radio")) {
    console.log("opening NPR in a new tab 🧩");
    let url = "https://www.npr.org";
    window.open(url, "NPR Home");
  };

  console.log("🗣", transcript);
};

function checkForError(TypeError) {
  // console.log("TypeError???", e);
  console.log("testing for speech recognition 🗣");
  if (TypeError) {
    console.log("TypeError detected ❗️", TypeError.message);
  };
};

// function startTyping() {
//   recognition.start();
//   btnToListen.style("visibility: hidden;");
// };

// 👂 Event listeners
// window.addEventListener("load", setRecognition);
recognition.start();
// btnToListen.addEventListener("click", startTyping);
recognition.addEventListener("end", recognition.start);
recognition.addEventListener("result", printSpeech);
// window.addEventListener("load", checkForError);

