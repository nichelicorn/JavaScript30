# JavaScript30 no. 2 - CSS & JS Clock

A clock that lives on the Internet, made with vanilla JavaScript

[See the clock live on Codepen!](https://codepen.io/nichelicorn/pen/mdwRPzj)

#### Goals
* Add animation to clock hands to display current time
* Use a rotate() animation
  * by default, this effect will rotate an element around its own central axis
  * in the case of a clock, the hand should rotate around the central point of the clockface, or the innermost point of the hand
  * transform-origin: will determine from whence the motion occurs; 100% along the x-axis will place the pivot point along the far right-hand side of the line
* Write a function to allow the clock hands to move in correlation with the current time
  * set values for time and date
  * convert the seconds / minutes / hours to degrees that can be interpreted into the representation of a clock
  * use this conversion to apply transition to clock hands
* Write functionality to remove blurry transition when minutes / seconds / hours rollover
* Refactor

#### What did I learn?
* Use [`transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) CSS properties to apply animation styles to elements on the page
  * It applies a [`<transform-function>`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function) that will manipulate the element within its plane on the page
  * Multiple formulas can be passed through for a single element
* Transition effects can be manipulated by adding a [`transition-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) rule which, "in essence, lets you establish an acceleration curve so that the speed of the transition can vary over its duration."
  * This applies a realistic appearance to moving elements, where a small recoil effect is visible
