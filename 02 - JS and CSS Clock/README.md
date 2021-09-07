# JavaScript30 no. 2 - CSS & JS Clock

#### Goals
* Add animation to clock hands to display current time
* Use a rotate() animation
  * by default, this effect will rotate an element around its own central axis
  * in the case of a clock, the hand should rotate around the central point of the clockface, or the innermost point of the hand
  * transform-origin: will determine from whence the motion occurs; 100% along the x-axis will place the pivot point along the far right-hand side of the line
* Write a function to allow the clock hands to move in correlation with the current time
  * set values for time and date
  * convert the seconds / minutes / hours to degrees that can be interpreted into the representation of a clock
  * use this conversion to apply transition to clock hands
  
