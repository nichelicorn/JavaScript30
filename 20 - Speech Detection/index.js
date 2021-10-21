window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
// set interim results
recognition.interimResults = true; // populates as you are speaking

// Create a break so that it will create a new paragraph each time speech ends
let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p); // will add each new p to the DOM as speech continues

recognition.addEventListener("result", e => {
  // console.log("event <>>>", e.results);
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("")

  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  };

  if (transcript.includes("unicorn")) {
    console.log("🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄")
  }
  console.log("🗣", transcript);
});

recognition.addEventListener("end", recognition.start);

recognition.start();

