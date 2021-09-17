// 🔎 Query selectors
const h1 = document.querySelector("h1");

// 👂 Event listeners
h1.addEventListener("click", makeGreen);

// Datasets
const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'Hugo', age: 8 }
];

let functionTable = [];

// DOM updates
function makeGreen() {
  const h1 = document.querySelector('h1');
  h1.style.color = '#BADA55';
  // h1.style.fontSize = '50px';
  console.log("The header is green now 🐸");
}

// Console tools


const logFunctions = {
  // Regular
  regular() {
    console.log("Hello, I am a regular string.");
    console.log(`Hello, I am a $ { JavaScript string interpolation } !`);
  },

  // Interpolated
  // not used as frequently; inserts the second string in place of the %s in the first string
  interpolated() {
    console.log("Hello, I am an %s interpolation!", "✨");
  },

  // Styled
  // %c in front of the thing you want to style, followed by a string containing the styling rules
  styled() {
    console.log("%c I am some great styled text", "font-family: Courier New, serif; background: turquoise");
  },

  // Warning!
  // displays a warning ⚠️ message in the console with the stack trace (where it was called)
  // use warnings and errors inside of functions if these messages are needed
  warning() {
    console.warn("👻");
  },

  // Error
  // displays an error ❗️ message in the console with the stack trace
  error() {
    console.error("👻");
  },

  // Info
  // displays an info ℹ️ message in the console
  info() {
    console.info("Geckos lack eyelids, so they lick their eyes to wet them.");
  },

  // Testing
  // displays an error ❗️ message if the conditional fails; does nothing if the assertion is correct
  assert() {
    console.assert(h1.classList.contains("ouch"), "There is no ouch!");

    console.assert(2 === 2, "That is wrong!");
  },

  // Clearing
  // clears the console
  clear() {
    console.clear();
  },

  // Viewing DOM Elements
  domElement(e) {
    // console.log("event <>>>", e);
    // console.log("event target <>>>", e.target);
    // console.log("element <>>>", element);
    // target the event element
    const logThis = e.target;
    // logs element as an object
    // console.log("logThis <>>>", logThis);

    // logs the element and its prototype
    console.log("element prototype <>>>");
    console.dir(logThis);
  },


  // Grouping together
  // group elements of similar type
  grouping() {
    dogs.forEach(dog => {
      // log each item in the group, with style applied
    console.group(`%c${dog.name}`, "font-family: Courier New, serif; background-color: turquoise");
    // log each item collapsed with a dropdown
    // console.groupCollapsed(`${dog.name}`)
    console.log(`This is ${dog.name}, who is ${dog.age} years old.`);
    console.groupEnd(`${dog.name}`);
    });
  },

  // Counting
  // logs the number of times that item appears
  count() {
    console.count("strawberry 🍓");
    console.count("pickle 🥒");
    console.count("pickle 🥒");
    console.count("strawberry 🍓");
    console.count("pickle 🥒");
    console.count("pickle 🥒");
    console.count("strawberry 🍓");
    console.count("strawberry 🍓");
    console.count("strawberry 🍓");
  },


  // Timing
  // logs the message, and the time needed to complete the action
  timing() {
    console.time("fetching data");
    fetch("https://api.github.com/users/nichelicorn")
      .then(data => data.json())
      .then(data => {
      console.timeEnd("fetching data");
      console.log(data);
    });
  },

  // Tables
  // logs data in a table format, rather than arrays / objects
  table() {
    console.table(dogs);
  }
};

function displayFcnLog() {
  // functionTable = Object.keys(logFunctions);
  const names = Object.keys(logFunctions);
  functionTable = names.map(name => `logFunctions.${name}()`);
  console.table(functionTable);
}

console.log("To view some console methods in action, try out these commands in the terminal! 👇 (Listed under the 'Values' column.)");
// console.log(`logFunctions.${Object.keys(logFunctions)}`);
displayFcnLog();
