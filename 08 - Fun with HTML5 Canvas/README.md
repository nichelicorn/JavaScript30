# JavaScript30 no. 8 - Fun with HTML5 Canvas

Create a drawing tablet in the window!

[Visit CodePen to draw some rainbows!](https://codepen.io/nichelicorn/pen/RwgjJqz)

#### Goals
* Learn the fundamentals of HTML Canvas

#### What did I learn?
* The HTML `<canvas>` element is used to create a drawing space in the window

* Use `canvas.getContext()` to set the rendering environment
  * Context  is where the drawing occurs; can be 2D or 3D (for video games / 3D rendering)
  * Context is constant once it is set - "it will always return the same drawing context instance as was returned the first time the method was invoked. It is not possible to get a different drawing context object on a given canvas element." 
  * `canvas.getContext()` is not fully supported in Safari and Internet Explorer

* Style elements can be set to the context using `CanvasRenderingContext2D.method`
  * Includes lineWidth, lineJoin, shadowBlur, shadowColor, etc...

* Lines are drawn using contextual rending methods
  * [`ctx.beginPath()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath) : creates a new path for drawing by clearing the previous list of sub-paths (the XY coordinates of the previous line)
  * [`ctx.strokeStyle = style`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle) : sets the color, gradient, or pattern to be used for each stroke / line
  * [`ctx.moveTo()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo) : begins a new sub-path at the specfied coordinates; sets the starting point of a new line; does NOT render anything itself
  * [`ctx.lineTo()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo) : adds additional coordinates to the current sub-path (an ending point for the line), allowing a line to be rendered; does NOT render anything itself
  * [`ctx.stroke()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke) : strokes (outlines) a specified subpath with the current stroke style; strokes are aligned to the center of the path - half is drawn on the inner side and half on the outer side (if there is no style applied, the pen appears in a + pattern)

* Use conditionals to quit a function if you don't need it to run under a falsy condition
* Can use destructuring to reassign multiple variable values at once

#### References
* [JavaScript30](https://javascript30.com/)
* [`Canvas API` on MDN : ](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
* [`HTMLCanvasElement.getContext()` on MDN : ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext)
* [`CanvasRenderingContext2D` on MDN : ](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)