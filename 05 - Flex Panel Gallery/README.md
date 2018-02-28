# Lesson learned

Mostly CSS related content in lesson related to flex nothing really new in this area to note

## Javascript

Transition end requires us to first pass in the event, if you console log this out it will show you all of the css propeties that were transitioned. In the example we needed the text animation to trigger after the flex animation was complete.

To do this we need to get the name of the flex property by typing
`e.propertyName === 'flex'`

Then we just need to toggle the class!

Very simple stuff but a great episode to show something working in practice.

## When not to use arrow functions

When I was working on this video I thought that I could use arrow functions in place of normal functions like Wes did in the video. This led to the code not working when I switched back to normal function it did, how led to me to an [article](https://www.http://wesbos.com/arrow-function-no-no/.com)

The top and bottom of it is that `this` is not bind to the element, it is instead bind to the window so we get this error
`TypeError, cannot read property 'toggle' of undefined`

So when you want this to be the element and not window just use normal functions!