# Lessons learned

## Debounce

When using event listener such as on scroll it often means the specified  function is fired off hundreds of times. This can often cause performance issues and is overkill. A solution to this is debouncing, which means the function will be run a most every few seconds, the time can be configured. So instead of passing the function within the eventlistender like we have been doing in the pass we instead of pass in the debounce function.

## Animating images on scroll

In order to figure when to start transitioning the images we use `window.scrollY`, which log how many pixel the user is scrolled down the page. This however only tells us how far we on scrolled down at the top of the window we need to understand how far we are scrolled down at the bottom of the window we add the innerHeight `window.scrollY + window .innerHeight`.
