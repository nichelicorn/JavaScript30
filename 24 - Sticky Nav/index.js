const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;


function fixNav() {
  // set nav bar to a fixed position once the header has been scrolled through
  // console.log("top of Nav <>>>", topOfNav);
  // console.log("y scroll <>>>", window.scrollY);
  const scrollDoc = document.body;
  if (window.scrollY >= topOfNav) {
    scrollDoc.style.paddingTop = nav.offsetHeight + "px";
    scrollDoc.classList.add("fixed-nav");
  } else {
    scrollDoc.style.paddingTop = 0;
    scrollDoc.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);

