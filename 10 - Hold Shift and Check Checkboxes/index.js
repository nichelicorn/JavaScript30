// challenge: allow multiple checkboxes to be selected
  // user clicks one box, presses and hold shift key, checks another box
  // all checkboxes inbetween the checked boxes should now be selected
// how can this be accomplished?
  // what needs to happen on the page?
  // check boxes should be selectable so an action can be performed upon them
  // will need to listen for a click event on box1
  // will need to listen for shift key being pressed / held down
  // will need to listen for a click event on box2
// what could this function look like?
  // 😊 happy path
  // step 1 - box is checked by user
  // step 2 - shift key is pressed / held by user
    // can an event listener be inside a function?
  // step 3 - box is checked by user
  // RESULT - all boxes between checked boxes are checked

// 🌐 Global variables
let child1 = undefined;
let child2 = undefined;

// 🔎 Query selectors
const boxes = document.querySelectorAll("input");

// 👂 Event listeners
// need an event listener for the shift key being pressed - should this be on the document?
document.addEventListener("click", assignBoxes);
document.addEventListener("keyup", verifyKey);
window.addEventListener("load", console.clear());
window.addEventListener("load", boxes.forEach(box => box.checked = false));

// ⚙️ Functions
function verifyKey(e) {
  if (e.keyCode === 16) {
    // console.log("this is the key you are looking for");
    checkBoxes();
  }
};

function checkBoxes(e) {
  const child1Num = child1.slice(-1);
  const child2Num = child2.slice(-1);
  if (child1 && child2) {
    // console.log(`child1 is ${child1}, child2 is ${child2}`);
  } else {
    console.log("nothing is selected");
  };

  boxes.forEach(box => {
    const boxNum = box.id.slice(-1);
    if (boxNum > child1Num && boxNum < child2Num) {
    // if (boxNum >= child1Num && boxNum <= child2Num) {
      // box.checked = true;
      box.checked = !box.checked; // causes only the in-between boxes to be checked
      // console.log("hello pickle");
    } else if ( boxNum < child1Num && boxNum > child2Num) {
    // } else if ( boxNum <= child1Num && boxNum >= child2Num) {
      // box.checked = true;
      box.checked = !box.checked;
      // console.log("hello pickle");
    }
  }); // this solution works as long as there is a like box to be checked on the other "end" of the chain - if user attempt to select a checked box, and an unchecked box, throws an error : `Uncaught TypeError: can't access property "slice", child2 is undefined`

  [child1, child2] = [undefined, undefined];
}

function assignBoxes(e) {
  if (event.target.type === "checkbox" && event.target.checked && child1 === undefined) {
    child1 = event.target.id;
    console.log("child1 <>>> ", child1);
  } else if (event.target.type === "checkbox" && event.target.checked && child2 === undefined) {
    child2 = event.target.id;
    console.log("child2 <>>> ", child2);
  }
};
