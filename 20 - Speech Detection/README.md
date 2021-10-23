# JavaScript30 no. 20 - Speech Detection

*This project requires a local server - download the repo to run locally 🙃*

#### Goals
* ✅ Set up speech recognition in the browser
* Add error handling for unsupported browsers - revisit this - not sure how to set up feature detection

#### What did I learn?
* `SpeechRecognition` is a global variable that lives on top of the window object
  * ⛔️ This is an experimental technology, and is *not* supported in Firefox, Opera, or Internet Explorer
  * Will need to convert to an array or use `for ... of` to iterate through the resultes 
  * There is SO MUCH data in these speech objects
<!-- ✨ Feature queries test browser support of CSS features -->
<!-- * Feature queries provide a way to test browser support of a certain feature -->
  <!-- * Similar to a media query, they check the browser envnironment for a conditon and run a block of rules if the conition is true -->
* I couldn't figure out how to add error handling on this round ... will revisit at the end of the 30!

#### References
* [JavaScript30](https://javascript30.com/)
* [`SpeechRecognition` on MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
* [Implementing feature detection on MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
<!-- * [Using feature queries on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Conditional_Rules/Using_Feature_Queries) -->