# Lessons learned

In this video are learn all about mouse move adding a cool drop shadow.

The main takeaway of this video is that we can use the mouseover event to get position where cursor is, however if there are nested element you need to do some extra maths to account for these a get normalized values.

element.style allows us to append css styles onto a element.

## More example of es6 destructuring

```javascript
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
```

## Setting html element as editable

In this video I found out if you want the user to be able to edit an element we can do `<h1 contenteditable>` who new!

## Creating the funky shadow effect 😎

We create the shadow effect be firstly creating a mousemove event over the text taking the offset x & y values relative to the page.

We then get the width and height of the hero. To overcome the fact that the mousemove event that get confused and give offset values of h1 relative to the hero we needed to check the target and then add then offset. Then we created walk value which was how many pixel the shadow would move in the background. Then calculating the values from the offset, width and walk variable.

```javascript
  function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if(this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }
    // zero would be under the text
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.7),
      ${yWalk * -1}px ${xWalk * -1}px 0 rgba(0, 0, 255, 0.7)
    `;

  }
```
