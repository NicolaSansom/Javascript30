# Lessons learnt

In this video we are focusing on two areas: mouse events and working with html 5 video. To create a draggable slider which increases / decrases the speed of a video.

## Set up playback slider draggability

We largely use techniques we learnt in the last video to get this effect to work.

```javascript
  speed.addEventListener('mousemove', function (e) {
    // get placement of mouse relative to the bar
    const y = e.pageY - this.offsetTop;
    // convert it a percent
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    // set the height to be used within the css
    const height = Math.round((percent) * 100) + '%';
    // bind values to css height
    bar.style.height = height;
  })
```

## Display playback speed

When someone is at the top or bottom of the bar we do not want the values to be 0 and 100 but instead 0.4 & 4. To do this we must work out the playback rate taking into account these cap values.

```javascript
  const playbackRate = percent * (max - min) + min;
  bar.textContent = playbackRate.toFixed(2) + 'x';
```

## Attach playback speed to video

```javascript
  video.playbackRate = playbackRate;
```
