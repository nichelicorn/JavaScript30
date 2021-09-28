
  const pressed = [];
  const secretCode =[ "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowLeft", "ArrowRight", "ArrowRight", "b", "a" ];

window.addEventListener("keyup", (e) => {
  console.log("key <>>>", e.key);
  pressed.push(e.key);
  console.log("pressed <>>>", pressed);
  // push key into an array
  // trim array to a certain length (match number of characters in the secret code)
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  // if (pressed.join("").includes(secretCode)) {
  //   console.log("you have revealed the secret chamber");
  //   cornify_add();
  // }
  if(pressed.join("") === secretCode.join("")) {
    console.log("are you ready for some unicorns?! 🦄✨");
    cornify_add();
  }
  // if (pressed === secretCode) {
  //   console.log("are you ready for some unicorns?! 🦄✨");
  // }
})

