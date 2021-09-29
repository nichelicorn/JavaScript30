// 🔎 Query selectors
const sliderImgs = document.querySelectorAll(".slide-in");

// 👂 Event listeners
window.addEventListener("scroll", debounce(checkSlide));

// ⚙️ Functions
function debounce(func, wait = 20, immediate = true) {
  // when invoked, a callback function is passed through, as well as two timing arguments; prevents the function from being continuously invoked upon scroll, and runs the function as indicated by the wait parameter (20 = 20milliseconds)
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide(e) {
  // this is too much - ran 70 times on one scroll! the debounce function will prevent this from running continually
  sliderImgs.forEach(image => {
    const slideInAt = ( window.scrollY + window.innerHeight ) - ( image.height / 2 );
    // sets the point at which the image should scroll in; halfway through the image with this formula
    const imageBottom = image.offsetTop + image.height;
    // px. level of how far the image is from the top of the window plus the image height to get the bottom border

    // add mathematical values to named variables - this makes the logic pieces easier to understand! think developer empathy 💖
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    // checks the vertical position of the image to determine if it does / not show
    if (isHalfShown && isNotScrolledPast) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
}
