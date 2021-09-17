let codeToVisualize = {}
;

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
  const h1 = document.querySelector('h1');
  h1.style.color = '#BADA55';
  h1.style.fontSize = '50px';
  console.log("The header is green now 🐸");
}

// Regular
console.log("hello");
console.log(`Hello, I am a $ { JavaScript string interpolation } !`);

// Interpolated
console.log("Hello, I am a %s interpolation!", "✨"); 
// not used as frequently; inserts the second string in place of the %s in the first string

// Styled
console.log("%c I am some great styled text", "font-family: Courier New, serif; background: turquoise");
// %c in front of the thing you want to style, followed by a string containing the styling rules

// warning!
console.warn("👻");
// displays a warning ⚠️ message in the console with the stack trace (where it was called)
// use warnings and errors inside of functions if these messages are needed

// Error :|
console.error("👻");
// displays an error ❗️ message in the console with the stack trace

// Info
console.info("Geckos lack eyelids, so they lick their eyes to wet them.");
// displays an info ℹ️ message in the console

// Testing
const h1 = document.querySelector("h1");
console.assert(h1.classList.contains("ouch"), "There is no ouch!");

console.assert(2 === 2, "That is wrong!");
// displays an error ❗️ message if the conditional fails; does nothing if the assertion is correct

// clearing
// console.clear();
// clears the console, a frustrating reality if you need those messages!!

// Viewing DOM Elements
// console.log("p <>>>", p);
// logs <p> element as an object
// console.dir(p);
// logs the element and its prototype

// Grouping together
dogs.forEach(dog => {
// console.group(`${dog.name}`);
console.groupCollapsed(`${dog.name}`)
console.log(`This is ${dog.name}, who is ${dog.age} years old.`);
console.groupEnd(`${dog.name}`);
});
// group elements of similar type

// counting
console.count("pickle");
console.count("pickle");
console.count("radish");
console.count("pickle");
console.count("pickle");
console.count("radish");
console.count("radish");
console.count("radish");
// logs the number of times that item appears

// timing
console.time("fetching data");
fetch("https://api.github.com/users/nichelicorn")
  .then(data => data.json())
  .then(data => {
  console.timeEnd("fetching data");
  console.log(data);
});
// logs the message, and the time needed to complete the action

// Tables
console.table(dogs); 
// logs data in a table format, rather than arrays / objects

// 🪟 Console in the Window
const visualConsole = console.log;




codeToVisualize = {
  ...dogs,
  
};

// rethink this - set the output as an element
// return an innerHTML that displays the code in a div

// console.log = function() {
//   const message = [].join.call(arguments, " ");
//   $(".output").text(message);
//   visualConsole.apply(console, arguments);
// }
// console.log("👻");