# Lessons learnt

In this videos we learn how to do click and drag effect from scratch, I have used packages many times to get this link of effect in carousels so it was really intesting to get an understanding how these work.

## Setting up mouse movements event listeners

As expected the key to get this effect to work is running functions are mouse movement the first thing we do is set up all of the event listeners and actions that will fire on different mouse events

```javascript
  slider.addEventListener('mousedown', () => {};
  slider.addEventListener('mouseleave', () => {};
  slider.addEventListener('mouseup', () => {};
  slider.addEventListener('mousemove', () => {};
```

### Figuring when the user is clicking down

To do this we have a `isDown` variable which we set to true on the `mousedown` event listeners and false on `mouseleave` & `mouseup` event listeners.

### Adding the zoom in effect when `isDown` is active

When is `isDown` is active we add an active class which as a css animation zoom and in out effect for `mouseleave` & `mouseup`.

```javascript
  slider.addEventListener('mousedown', () => {
    isDown = true;
    slider.classList.add('active');
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
```

### Moving drag area based off of mousex start and end coords values

We get the mouse coords when clicking down, we have to offset how far the slider div is offset as the `mousedown` coords are relative to the page itself. We also store the slider offset value so we can move back to that place when the user stops dragging.

#### Start coords

```javascript
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.offsetLeft;
```

#### End coords

The end X values to gotten within the `mousemove` function. It is the same as what was done in previous function accept called at a different time.

```javascript
  const x = e.pageX - slider.offsetLeft;
```

#### Figure out movement based on to values

```javascript
  const walk = x - startX;
```

#### Assigning these values to scroll left property

```javascript
  slider.scrollLeft = scrollLeft - walk;
```
