# JavaScript30 no. 20 - Speech Detection

[]()

#### Goals
* Set up speech recognition in the browser
* Add error handling for unsupported browsers

#### What did I learn?
* `SpeechRecognition` is a global variable that lives on top of the window object
  * ⛔️ This is an experimental technology, and is *not* supported in Firefox, Opera, or Internet Explorer
  * Will need to convert to an array or use `for ... of` to iterate through the resultes 
  * There is SO MUCH data in these speech objects

#### References
* [JavaScript30](https://javascript30.com/)
* [`SpeechRecognition` on MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)