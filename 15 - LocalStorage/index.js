// 🔎 Query selectors
const addItems = document.querySelector('.add-items'); // the form to add items to the list
const itemsList = document.querySelector('.plates'); // the list to be updated
const items = JSON.parse(localStorage.getItem("items")) || []; // loads

// ⚙️ Functions
function addItem(e) {
  e.preventDefault(); // stops the page from reloading when the form is submitted; this is a default behavior
  // console.log("target", e.target);
  const text = (this.querySelector("[name=item]")).value; //looks inside the form tag for something with a name attribute of item; narrows the search on the page to just the form in question
  const item = {
    text, // an ES6 shorthand - if the key & value have the same name, can use this shorthand instead of listing out key: value
    done: false
  }
  console.log("item <>>>", item);
  // add the item to the items array
  items.push(item);
  populateList(items, itemsList);
  // set items to localStorage
  localStorage.setItem("items", JSON.stringify(items));
  this.reset(); // resets the form
}

function populateList( plates = [], platesList ) {
 // needs the list of items to populate; argument creates an empty array as placeholder for data, and platesList is the 
 platesList.innerHTML = plates.map((plate, i) => {
   return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""} /> 
      <label for="item${i}">${plate.text}</label>
    </li>
   `;
 }).join(""); // the .join creates one string, rather than an array of strings
 // currently, this re-renders the list each time; React / Angular solve these problems
}

function toggleDone(e) {
  // console.log("e <>>>", e); // clicks on the label and the input elements
  // want to target 
  if (!e.target.matches("input")) {
    return; // skip this unless it's an input
    // console.log("e target <>>>", e.target);
  }
  const el = e.target;
  console.log("el.dataset.index <>>>", el.dataset.index);
  const index = el.dataset.index;
  items[index].done = !items[index].done; // toggles the value of this Boolean value
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

// 👂 Event listeners
addItems.addEventListener("submit", addItem); // want to listen for a submit event on a form - a click event doesn't necessarily pick up all needed info (?)

// this list doesn't exist yet when this code is running
// works the first time, but because the list is refreshed with each submission the DOM updates and these tags disappear
populateList(items, itemsList);
// const checkBoxes = document.querySelectorAll("input");
// checkBoxes.forEach(input => input.addEventListener("click", () => alert("hi")));
// listen for a click on the parent element (plates) to target a child element that doesn't yet exist on the page
itemsList.addEventListener("click", toggleDone);

