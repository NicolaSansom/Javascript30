# Lessons learnt

This video was an explanation on from the concepts learnt in video 22 where we create a moving highlighter effect.

I have been a fan of navigation animation in stripe for a long time so enjoyed learning how to recreate it.

## How it works

The effect works by have a position absolute div and the follow the mouse around resizing to be the size of the content within the each dropdown.

### Displaying the content within a dropdown

When hovering over a li we firstly want the dropdown to display. This was done by using class list to add a mouse a class when hovering.

```javascript
  this.classList.add('trigger-enter');
  setTimeout(() => {
    this.classList.add('trigger-enter-active')
  }, 150)
```

We have a slight delay on the second calls to first add `display: block;` and then `opacity` this is done because in order to animate opacity the item need to first be visable, another reason we did this is so we could get coords of the items which you cannot do when a product is hidden.

## Display & figure out size of active dropdown 

To get the background to show on hover we an open class which matches up with styles in the CSS. Then we need to get the size of the active dropdown so that the floating dropdown background can be the correct size.

Get the size we get `getBoundingClientRect` which not only gives the size but where abouts it is on the page. We can feed these details into dropdown background so it can be the correct size and in the correct place.

## Find out where the nav

We also need to find out where about the navigation in on the page and take this into account when placing the dropdown background because `getBoundingClientRect` give coords relative to the page not to the parent.

When we have all of these details we then assign them to the `dropdownBackground`

```javascript
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left + navCoords.left
  }
  // Set background size
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, {coords.top}px)`);
```

## Stop UI issues

If you hover very quickly over each item the UI started to go a little crazy this is because class being removed before JS was able to run correctly. To fix this we do:

```javascript
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
```
