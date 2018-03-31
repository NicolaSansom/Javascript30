# Lessons learned

This episode was quiet an easy one. Picked up a few useful tips to help with debugging here  👏🏻

## Debuging in chrome

You can right click on a dom element and pick one of the break on options, when this is triggered it will pause on the line of codes that were fired 🔥

## Console logging

We can easily find out the properties of a dom element. To do this we use`console.dir(p)`. This will list useful things like available methods.

Something else I could see myself using is `console.group()` it allows us to wrap relating console logs in a labeled dropdown to help keep everything nice and organized. If we want the dropdown to be closed by default we can pass `console.groupCollapsed()`

`console.time()` is useful to find out how long a something takes to complete to give us an idea of performance. You just have define the time via a string and the pass that matching string into `console.timeEnd()`. This is not really needs we could just the performance tab.
