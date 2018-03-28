# Lessons learned

In this video we learn about the canvas element this was interesting because it is something I have never really touched before.

## What is a canvas?

The canvas lets you draw pixels on the onto it, well not the canvas itself the canvas context. The context can either by 3d or 2d in the example we used 2d canvas.

The context has many properties some of them include:

`strokeStyle` - color of the stroke when you draw on the canvas

`lineCap` - The shape of the line end

`globalCompositeOperation` - Brand modes

## Create default variables

In preparation for being able to draw on the canvas we create a isDrawing variable. The idea is when we click down this will change to true when we let go it will go back to false.

Another thing we needed to create was x and y variables these help calculate where the user is clicking on the canvas so be able to figure the start and end coordinates.

## Mouse move event listenter

Whenever the mouse moves we have access to where about's the mouse is on the canvas meaning we have the X and Y coordinates.

```javascript
  function draw(e) {
    if(!isDrawing) return; // will only run when mouse is down
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }

  canvas.addEventListener('mousemove', draw);
  // when mouse is being hold down
  canvas.addEventListener('mousedown', () => isDrawing = true);
  // when the user not holding down
  canvas.addEventListener('mouseup', () => isDrawing = false);
  // when they are off canvas
  canvas.addEventListener('mouseout', () => isDrawing = false);
```

## Drawing on a canvas

To draw on canvas we follow a sequence of different functions which are available on the context variable. Taking the start point and seeing map to where the user currently is on the canvas.

### When we have a pair of related items as could use deconstructing

`[lastX, lastY] = [e.offsetX, e.offsetY];`

## HSL is the rainbow  all colors!! 🌈

HSL stands for “Hue Saturation Lightness”.

### Summarized

A hue is specified as an angle within the [color wheel](https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2015/01/hsl-color-wheel.png "color wheel"). relative to red.

*Saturation and lightness are represented as percentages
*100% is full saturation, and 0% is a shade of gray
*100% lightness is white, 0% lightness is black, and 50% lightness is “normal”

In the context of the example when we were drawing we looped though all of the colors so from 0 to 360.
