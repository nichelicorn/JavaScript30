const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100;

function shadow(e) {
  // console.log(e);
  // get dimensions of the shadowy element
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e; // same as e.offsetX...
  

  // console.log(x, y); // logs page coordinates -- resets on each element

  if (this !== e.target) { // if the target is not hero (`this`, the element the event was fired upon)
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  // console.log(x, y); // coordinates are now set for the entire page - will not reset on each new element

  const xWalk = (( x / width * walk ) - ( walk / 2 )); // sets how far out the shadow will "walk" from its original position along the x-axis
  const yWalk = (( y / height * walk ) - ( walk / 2 ));

  // console.log("x, y walk <>>>", xWalk, yWalk);

  text.style.textShadow = `${xWalk}px ${yWalk}px 10px orange`;

}

hero.addEventListener("mousemove", shadow);


