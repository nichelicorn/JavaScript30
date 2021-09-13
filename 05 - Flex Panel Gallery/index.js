// 🔎 Query selectors
const panels = document.querySelectorAll(".panel");

//  Event listeners
panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));

// Functions
function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log("e.propertyName", e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  };
}