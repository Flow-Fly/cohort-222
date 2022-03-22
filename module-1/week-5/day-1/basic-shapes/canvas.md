# Canvas allow you to draw and animate your drawing easily on any webpage

## Starting-up

- You will need a canvas element
- Give it the desired width and height through JavaScript
- Grab the canvas element using JavaScript and get it's context (an object with various methods that will allow you to manipulate the canvas.)

/!\ It might be handy to use some `JsDoc`, allowing you to give some context to your IDE:
`/** @type {HTMLCanvasElement} */` placed above the canvas element will feed the methods to vsCode.

### Available methods

- ...beginPath(), allow you to begin a new path.
- ...fillRect(x,y,width,height), allow you to create a filled rectangle (or square)
- ...rect(x,y,width,height), allow you to create a layout for a rectangle that you can fill or stroke.
- ...strokeRect(x, y, width, height), Draws a rectangular outline
- ...crealrRect(x, y, width, height), clear anything insede of the area.
- ...fill(), will fill a closed path.
- ...stroke(), will stroke the outline.
- ...closePath(), will try to close a path.
- ...arc(x, y, radius, startAngle(rad), endAngle(rad), counterClockWise)

And a lot of others!
