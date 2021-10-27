# JavaScript30 no. 21 - Geolocation

[]()

<!-- *This project requires a local server - download the repo to run locally. 🙃* -->
<!-- *Then, `npm i` in the terminal to install the server.* -->
<!-- *Then, `npm start` to start the server. The terminal will prompt you with the url to access the project in your browser.* -->

#### Goals
* Build a simple feature that follows mouse movement in the browser
  * Highlight the link that the mouse is currently hovering over

#### What did I learn?
* The `Element.getBoundingClientRect()` method return a `DOMRect` object that provides information about the size of an element, and its position relative to the viewport
  * Returns an object containing coordinates and sizing, in pixels
  * Coordinates are in relation to the top-left of the viewport
* `width` and `height` properties returned also include `padding` and `border-width` measurements

* A `DOMRect` object is the smallest rectangle containing the entire element; the size and position of the elements wrapper
  * Sizing and coordinates are read-only

#### References
* [JavaScript30](https://javascript30.com/)
* [`Element.getBoundingClientRect()` on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
* [`DOMRect` on MDN](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect)