// 🌐 Global variables
let child1 = undefined;
let child2 = undefined;

// 🔎 Query selectors
const boxes = document.querySelectorAll("input");

// 👂 Event listeners
document.addEventListener("click", assignBoxes);
document.addEventListener("keyup", verifyKey);
window.addEventListener("load", boxes.forEach(box => box.checked = false));

// ⚙️ Functions
function verifyKey(e) {
  if (e.keyCode === 16) {
    checkBoxes();
  }
};

function checkBoxes(e) {
  const child1Num = child1.slice(-1);
  const child2Num = child2.slice(-1);
  if (child1 && child2) {
  } else {
    console.log("nothing is selected");
  };

  boxes.forEach(box => {
    const boxNum = box.id.slice(-1);
    if (boxNum > child1Num && boxNum < child2Num) {
    // if (boxNum >= child1Num && boxNum <= child2Num) {
      // box.checked = true;
      box.checked = !box.checked; 
    } else if ( boxNum < child1Num && boxNum > child2Num) {
    // } else if ( boxNum <= child1Num && boxNum >= child2Num) {
      // box.checked = true;
      box.checked = !box.checked;
    }
  }); // this solution works as long as there is a like box to be checked on the other "end" of the chain - if user attempt to select a checked box, and an unchecked box, throws an error : `Uncaught TypeError: can't access property "slice", child2 is undefined`

  [child1, child2] = [undefined, undefined];
}

function assignBoxes(e) {
  if (e.target.type === "checkbox" && e.target.checked && child1 === undefined) {
    child1 = e.target.id;
  } else if (e.target.type === "checkbox" && e.target.checked && child2 === undefined) {
    child2 = e.target.id;
  }
};
