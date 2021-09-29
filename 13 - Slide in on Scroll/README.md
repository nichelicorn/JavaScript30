# JavaScript30 no. 13 - Slide in on Scroll

[Get sliding!](https://codepen.io/nichelicorn/pen/BaZMgXQ)

#### Goals
* Transition image into the window on scroll when the image is just "peeking" out of the bottom of the window
  * Ensure a smooth transition
* Try different effects

#### What did I learn?
* Debounce functions can be used to control the timing of a function invocation once an event has occurred
  * In this example, the debounce allows an image event to occur based on scrolling, but *prevents* the function from being invoked continuously on the scroll
  * The term 'debouncer' originates in electronics. Pushing a physical button, like on your TV remote, produces more than one signal, but the TV responds as though the click occurred only once.
  * Debouncers are special functions that handle two tasks : allocating a scope for a `timer` variable; scheduing the timing of function invocation

#### References
* [JavaScript30](https://javascript30.com/)
* [Debounce - How to Delay a Function in JavaScript (JS ES6 Example) by Ondrej Polesny](https://www.freecodecamp.org/news/javascript-debounce-example/)