# Lessons learnt

This episode we learn how to create a stripe menu like follow like this was very interesting as I have been a big fan of these animation on the stripe website for a while!

We start off creating a really simple effect where the hover state follows along and then in later tutorial we will attempt the full menu

## Setting up the basics

First things first we do the basics setting on an mouseenter eventlister for all the links on the page and setting on up the highlight span element

```javascript
  const triggers = document.querySelectorAll('a');

  // create the highlight element
  const highlight = document.createElement('span');
  highlight.classList.add('highlight');
  document.body.append(highlight);

  function highlightLink() {
    console.log('Highlight');
  }

  // Add event listener to each of the link on the page
  triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
```

## Figuring out width, height, x & y values

Find out how big the element we hovered over is and where on page it is.

We use `getBoundingClientRect` which is something I have used in the past which easily returns all of this info.

```javascript
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
```

We then assign the width & height values to the CSS

```javascript
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
```

### X & Y Placement

We use the transform property to apply placement using top and left values from the rect function

```javascript
  highlight.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top}px`;
```

### Fixing when scrolling down

When scrolling down the screen the aligment of the items gets throw off by the amount of have scrolled, to fix this we:

There are couple of way to approach this the first to find out what the offset of the parent is the second which we did in the tutorial was to take away how much the user has scrolled down.

We use window.scroll x & y values to do this

```javscript
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  }
```
