// 🌐 Global variables
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true; // populates as you are speaking
// Create a break so that it will create a new paragraph each time speech ends
let p = document.createElement("p");
const words = document.getElementById("words");
words.appendChild(p); // will add each new p to the DOM as speech continues

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

// 👂 Event listeners
recognition.start();
recognition.addEventListener("end", recognition.start);
recognition.addEventListener("result", printSpeech);