// 🌐 Global variables
const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100;

// ⚙️ Functions
function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;   // get dimensions of the shadowy element
  let { offsetX: x, offsetY: y } = e; // same as e.offsetX...
  
  // console.log(x, y); // logs page coordinates -- resets on each element - want the coordinates to cover the entire window

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  } // sets coordinates for the entire window - will not reset on each new element

  const xWalk = (( x / width * walk ) - ( walk / 2 )); // sets how far out the shadow will "walk" from its original position along the x-axis
  const yWalk = (( y / height * walk ) - ( walk / 2 ));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 20px yellow,
    ${xWalk * -1}px ${yWalk}px 20px darkgoldenrod,
    ${yWalk}px ${xWalk * -1}px 20px orange,
    ${yWalk * -1}px ${xWalk}px 20px black
  `;
}

// 👂 Event listeners
hero.addEventListener("mousemove", shadow);


