# Lessons learned

This video really rammed home the need to break tasks down into smaller doable stages.

## Three main steps to the process

1. Get our elements from the dom
2. Create are functions
3. Assign them to the element via events listeners

## Switching control method via a ternary statement

  ```javascript
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  ```

  The following statement is equal to `video.play()` or `video.pause()` depending on the state of the video.

## Updating button state via video play state

We switch between the pause and play icons depending on the state of playback. It is worth mentioning the video dom element has a whole host of different event listeners such as `duration` or `currentTime`.

**`textContent`** changes the content of a dom element this was how we were able to switch from the pause and play icons.

## Adding skip functionality

We use the data html element to tack on the speed changes passing them into the function depending on which one was clicked. We then add an event listender passing the change in speed and using `video.currentTime` to update the video playback speed.

## Range sliders

`<input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">`

During this video a discovered a new input type called range which I had never used before. You can define a min, max and step, you can the drag it side to side the value will change. Steping up and down by the step value we defined.

## Progress handle

To get the progress bar updating we calculate a percentage of how  complete the video is based off of the total time of the video and the current time we then append that number as a style to flex basis like so.

```javascript
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
```

## Change progress

We use the offset values to workout where the user wants to skip to to in the timeline. We get  the current width of the fill and the width of the progress bar and then times its by the duration which gives us the time we need to skip to!

`const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;`

## Drag progress functionality

Like in the canvas example we use a flag variable to see if the mouse was down if it was not then we did not fire the function to stop any weirdness.

```javascript
progress.addEventListener('mousemove', () => mousedown && scrub);
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
```

## Full screen functionality

Wes set a challenge for the end at this video to add the option to make the video full screen to do this I firstly added a new button with a fullscreen icon into it. I then assigned a variable to the element and assigned it an click event listener.

```javascript
const fullScreen = player.querySelector('.player__button--fullscreen');
fullScreen.addEventListener('click', toggleFullscreen);
```

I then created a function which calls the full screen javascript method I had to add prefixes in for the different browsers and also ensure the window and document where defined.

```javascript
function toggleFullscreen() {
  const doc = window.document;
  const requestFullScreen = player.requestFullscreen || player.mozRequestFullScreen || player.webkitRequestFullScreen || player.msRequestFullscreen;
  const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(player);
  } else {
    cancelFullScreen.call(doc);
  }
}
```
