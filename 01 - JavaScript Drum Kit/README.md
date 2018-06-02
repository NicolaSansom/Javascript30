# Lessons Learned

This first lesson covered a range of different topics.

[keycode.info](http://www.keycode.info) - shows you which key code corresponds to the keys on your keyboard

## HTML

kbd tag formats text plainly in-line.

You can make your own HTML data bits by using `data-` so you can have `data-key` or `data-octopus` and store that information in the tag itself.

The HTML `<audio>` tag references an audio file. It can be played with Javascript by simply `obj.play()`.
If you want the audio to reply from the start on button pass you need to first restart the audio because the default functionality is to ignore the play command if the sound is already playing.

We used `audio[data-key="${e.keyCode}"]` with back-ticks around it to select the audio tag with the `data-key` corresponding to the one pressed.

`key.classList.add('cssClass')` == jQuery's `key.addClass('cssClass')`

## Event Listeners

`keys.forEach(key => key.addEventListener('type', functionName)` Adds an event listener on each key (div). There a number of useful events you can listen for a couple of examples are CSS listeners `animationend` and `transitionend`. [Event types](https://developer.mozilla.org/en-US/docs/Web/Events).
The event can then be passed into the function.
