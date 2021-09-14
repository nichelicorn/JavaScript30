# JavaScript30 no. 6 - Type Ahead

Display search results in real time, with highlighted query results

[Witness the highlighting on CodePen!](https://codepen.io/nichelicorn/pen/rNwGJxG)

#### Goals
* Show all matching results from a dataset when a term is input into a search bar
* Fetch external data with built-in `fetch API`
* Display data sorted by specific property

#### What did I learn?
* Can use the `...` spread operator to add unique objects to an existing array
* using [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) - this is fully new to me
  * A `RegExp` object is used to match text with a pattern
  * In this example, a new regular expression is created using a [`RegExp()` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) function
  * syntax : `new RegExp(pattern[, flags])`;
  * The `pattern` is the text of the regular expression; here we are passing through a variable to represent this value
  * The `flags`, if specified, indicate what type of search to complete
  * `g` (global match) - searches for all matching results
  * `i` (ignore case) - ignores casing in the query / results
  * `match()` returns an array containing all matches, including captured groups; returns `null` if no matches are found
* String prototype [`String.prototype.replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) returns a new string with some or all matches of a `pattern`. This `pattern` can be a string or a `RegExp`.
  * syntax : `str.replace(regexp, newSubstr / replacerFunction)`
  * the second argument represents either a literal replacement, or a function indicating what to do in this instance