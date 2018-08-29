# Lessons learnt

In in this video we learn more about event listeners works and some of the more edge case scenarios we may need to take into account in the future.

## Bubbling

The concept on bubbling is when the browser triggers clicks on wrapped items for example if you had a div with a class name of `one` within that div is another div with the class name of `two`, clicking `two` would also mark a click for `one` because it is wrapped within it.

1; Capture

When you click on element it will ripple down to find what was clicked on for example `body > .intro > h1` capturing all of the where the click was from.

2; Goes back up

It then changes triggering the events upwards. Using capture: true will fire then event when going down for each item.

```javascript
  divs.forEach(div => div.addEventListener('click', logText, {capture: true }));
```

## Stop propagation

If we only want an function to run on selected item and not bubble up like explained we can use:

```javascript
  function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation(); // stop bubbling
  }
```

So in the context of the example `two` would just match on clicking div `two` not the wrapping div `one`

## Once

As well as the capture option, there is a new option which can be passed into an event listender called once. This runs once and then unbinds itself which would be like doing `div.removeEventLisnter('click', logText)`. This could be useful if we only wanted an action on a button to run once.
