// 🔎 Query selectors
const triggers = document.querySelectorAll("a"); // get all the triggers, links in this case
const highlight = document.createElement("span");

highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink() {
  // console.log("highlight!", this); // logs the element triggering the function
  const linkCoords = this.getBoundingClientRect();
  console.log("linkCoords <>>>", linkCoords); // returns info about where on the page `this` actually lives

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  }

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px`;
};

triggers.forEach(a => a.addEventListener("mouseenter", highlightLink));

