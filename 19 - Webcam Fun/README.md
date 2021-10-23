# JavaScript30 no. 19 - Fancy Webcam

🚧 Still under construction! The next step is to add a feature to change filter effects with a button click. So far, this works on one effect, but causes glitches when attempting to switch to another effect.

#### Goals
* Add video to a canvas element
* Once video is in the element, manipulate the canvas to add effects / download screenshots / etc
* Add ability to take a photo with button click
* This project has a server - will need to run this one locally, so it can be tied to a secure origin (local host, or https://)
  * Uses `browser-sync` - a package that allows you to run a live server for your code
  * run `npm start` to start the server
* Add feature to change filter effect on button click

#### What did I learn?
* Video is fed off the webcam (canvas context helps control this?)
* Access to media feeds requires a secure connection to the server
* The function `URL.createObjectURL()` is deprecated in application to `MediaStream` objects - MDN refers to use of `srcObject` instead
* `Uncaught TypeError: canvas.toDataUrl is not a function` - check syntax errors! 🤪

#### References
* [JavaScript30](https://javascript30.com/)
* [`URL.createObjectURL()` on MDN](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL)
* [`HTMLMediaElement.srcObject` on MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject)
* [`<input type="radio>` on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)