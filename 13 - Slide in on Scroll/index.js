function debounce(func, wait = 20, immediate = true) {
  // when invoked, a callback function is passed through, as well as two timing arguments; prevents the function from being continuously invoked upon scroll, and runs the function as indicated by the wait parameter (20 = 20milliseconds)
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImgs = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  // runs on scroll
  // console.log("event <>>>", e);
  // console.count(e);
  // this is too much - ran 70 times on one scroll! the debounce function will prevent this from running continually
  sliderImgs.forEach(image => {
    //need to figure out how far the page has been scrolled down
    // console.log(window.scrollY); // provides the vertical alignment of the window
    const slideInAt = ( window.scrollY + window.innerHeight ) - ( image.height / 2 );
    // sets the point at which the image should scroll in; halfway through the image with this formula
    // console.log("slide in at ...", slideInAt);
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

window.addEventListener("scroll", debounce(checkSlide));

