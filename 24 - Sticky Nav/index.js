// 🔎  Query selectors / modifiers
const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

// ⚙️ Functions
function fixNav() {
  // sets nav bar to a fixed position once the header has been scrolled through
  const scrollDoc = document.body;
  if (window.scrollY >= topOfNav) {
    scrollDoc.style.paddingTop = nav.offsetHeight + "px";
    scrollDoc.classList.add("fixed-nav");
  } else {
    scrollDoc.style.paddingTop = 0;
    scrollDoc.classList.remove("fixed-nav");
  }
};

// 👂 Event Listeners
window.addEventListener("scroll", fixNav);