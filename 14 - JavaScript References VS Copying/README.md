# JavaScript30 no. 14 - JavaScript references or copying?

[Are you making a copy, or referencing the original?](https://replit.com/@nichelicorn/CopyingObjects#index.js)

#### Goals
* Understand the difference between using a copy vs. reference when working with JavaScript arrays and objects, especially when working with nested data

#### What did I learn?
* String and number data types can be created and reassigned using another variable's values; updating these new variables does not affect the original variable's value
  *  if a new variable (pickle) is declared using another variable as its value (cucumber), brining the pickle does not alter the cucumber
* Complex data types (objects and arrays) do not behave this way
  * declaring an array or object using only another variable's name creates a reference to the original object; any alterations to the "new" variable will alter the original object as well
  * if a copy is needed for alteration, other methods must be employed to ensure the original data is maintained
* `Array.prototype.slice()` : 
  * Returns a shallow copy of an array into a new array object, with the selection being indicated by the optional `start` and `end` parameters
  * `slice` does not alter the original array!
* `Array.prototype.concat()` :
  * Used to merge two or more arrays
  * Returns a *new* array, and doesn't alter the original arrays
* Spread syntax `...` :
  * Allows an iterable to be included in a new object or list
    * can also be used to pass an iterable as a function argument
    * Works with arrays and objects (ES2018)
* `Object.assign()` :
  * Copies all enumerable properties from the source object into a target object
  * syntax: `Object.assign(target, ...sources)`;
  * Properties in the target will be overwritten by any properties in the source(s) with the same key; later updates overwrite earlier ones
  * Returns the target object

#### References
* [JavaScript30](https://javascript30.com/)
* [House on Haunted Hill](https://en.wikipedia.org/wiki/House_on_Haunted_Hill)
* [Vincent Price](https://en.wikipedia.org/wiki/Vincent_Price)
* [`Array.prototype.slice()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
* [`Array.prototype.concat()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
* [Spread syntax `...` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
* [`Object.assign()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)