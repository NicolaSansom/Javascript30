# Lessons learned

Very much looking forward to this video this is going to be something different than what we have done so far.

## Get webcam to appear in the video element

To use the webcam you use navigator like so:

```javascript
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
  .then(localMediaStream => {
    console.log(localMediaStream);
  });
```

`getUserMedia` returns a promise which we then attach a then onto piping though the local media stream.

To get the video to display you have to convert the media stream into a URL that the html video player can understand, then you need to play the video, like so:

```javascript
    video.src = window.URL.createObjectURL(localMediaStream);
    video.play();
```

## Paint webcam to canvas

When painting video to canvas it is important that the canvas size matches the width & height of the video. You set these values & then create an interval drawing the video image to the screen. This refreshes every 16ms

```javascript
function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height)
  }, 16)
}
```

0 0, is starting at the top left of the canvas also passing in the width & height of the canvas

When calling the function we need to add an event listener to checkout when the video has been loaded in.

## Take photo function

### Setting up snap sound

```javascript
  snap.currentTime = 0;
  snap.play();
```

### Grabing the image

You can get the image within base 64 which can then be used to set up a download link

```javascript
  const data = canvas.toDataURL('image/jpeg');
```

To display the images taken create an new element when the function ran which piped in the an image element into the strip div. The take photo button was already set up with an onClick to run the `takePhoto` function.

## Filter on the canvas

To add filters onto the video you first get the pixel out of the canvas and then tweak them and pipe that back into the canvas to show the user. We loop over all of the pixels and change there rgba values and feed that back in to the canvas.

```javascript
  let pixels = ctx.getImageData(0, 0, width, height);
  pixels = redEffect(pixels);
  ctx.putImageData(pixels, 0, 0);
```

### Plus equals
