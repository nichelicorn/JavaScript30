# JavaScript30 no. 3 - Variables with CSS & JavaScript

Learn about CSS variables!

[See the clock live on Codepen!](https://codepen.io/nichelicorn/pen/mdwRPzj)

#### Goals
* Explore *new* CSS variables feature
  * these variables can be updated during runtime using JavaScript!
* Work with `spacing`, `blur`, and `base-color` to test these features


#### Tidbits
* How do CSS variables work? 
  * declared on an element, or on `:root` to apply to all
  * use the syntax `--variable: value;` to declare CSS variable in the CSS file
  * to call the variable in the styles, use the syntax `var(--variable);` on the rule you'd like to use that value for
  * select CSS variables in JS

* an array has array methods built in; a `NodeList` *looks* like an array, but it isn't an array - it has a small list of prototypes available (`document.querySelectorAll` returns a `NodeList`, not an array)