# JavaScript30 no. 15 - Local storage and event delegation

[]()

#### Goals
* Create persistent state using local storage
* Use event delegation to allow events to occur on elements added to the DOM after pageload
* Add a button to clear the list / localStorage
* Add a button to check all / uncheck all

#### What did I learn?
* Can use `.this.querySelector()` to select an element based on an event
* ES6 includes a shorthand property that allows an object key / value pair of the same name to be listed as a single word (eg, a key value pair of `name: name` could simply be listed as `name`)
* A `submit` event fires directly on a form element, not on the `<button>` or `<input type="submit">` element that may have actually been clicked / received user input
  * A form that does not pass validation will prevent submission from occurring

#### References
* [JavaScript30](https://javascript30.com/)
* [Click event on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)
* [Submit event on MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)