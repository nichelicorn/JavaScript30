// 🌐 Global variables
const pressed = [];
const secretCode =[ "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowLeft", "ArrowRight", "ArrowRight", "b", "a" ];

const clues = document.querySelectorAll(".clue");

// 👂 Event listeners
window.addEventListener("keyup", unicornifyPage);
window.addEventListener("keydown", tabOverClues);

// ⚙️ Functions
function unicornifyPage(e) {
  // push key value into an array
  pressed.push(e.key);
  // console.log("pressed key <>>>", e.key);
  // trim array to a certain length (match number of characters in the secret code)
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if(pressed.join("") === secretCode.join("")) {
    console.log("are you ready for some unicorns?! 🦄✨");
    cornify_add();
  }
  console.log("pressed keys <>>>", pressed);
};

function tabOverClues(e) {
  console.log(e.key);
}