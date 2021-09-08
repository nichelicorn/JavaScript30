# JavaScript30 no. 3 - Variables with CSS & JavaScript

Learn about CSS variables!

[Play with CSS on Codepen!](https://codepen.io/nichelicorn/pen/BaZpvxZ)

#### Goals
* Explore *new* [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) feature
  * these variables will be updated during runtime using JavaScript!
* Work with `spacing`, `blur`, and `base-color` to test these features
* Use JS to select CSS variables and manipulate them on the DOM

#### Tidbits
* How do CSS variables work? 
  * declared on an element, or on `:root` to apply to all
  * use the syntax `--variable: value;` to declare CSS variable in the CSS file
  * to call the variable in the styles, use the syntax `var(--variable);` on the rule you'd like to use that value for
  * select CSS variables in JS by using a `querySelector` to select the desired HTML elements to be updated
  * a function can then be written which will determine which attributes to update
  * using an event listener, this function is then invoked when the appropriate user input is detected

* Using a console.log to look at `this.dataset` should show all `data-` keys set on an HTML element
  * console.log("this.dataset <>>>", this.dataset);
  * logs an object containing the data attributes set by the the `data-thing` attribute in the HTML

* an array has array methods built in; a `NodeList` *looks* like an array, but it isn't an array - it has a small list of prototypes available (`document.querySelectorAll` returns a `NodeList`, not an array)