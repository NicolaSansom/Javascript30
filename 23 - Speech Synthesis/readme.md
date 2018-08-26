# Lessons learnt

In this video we create a text to voice application using the speech synthesis build in the browser. We will be able to tweak the pitch and speed of the voice as well.

 To initiate the speech API we do:

```javascript
  const msg = new SpeechSynthesisUtterance();
```

Then all of the ui elements are linked to variables using `querySelector` / `querySelectorAll`

`speechSynthesis` is a global variable that as various functions that can be called the steps involved into getting the textarea read out aloud are:

Before the text can be spoken out we need to voice selected to do this we add an event listender on the `speechSynthesis` global variable.

Each voice has a name and language this speak in. In this video we let the video select voice via a dropdown. Available voices are found and presented as so

```javascript
  // Format voice into html dropdown options
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice =>
      `<option value="${voice.name}">${voice.name}(${voice.lang})</option>`)
    .join('');
```

Once this is set up we can get the speech synthesis working in the console

```javascript
  speechSynthesis.speak(msg);
```

## Change voices on dropdown selection and play what is in the textarea

```javascript
  function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
  }

  function toggle() {
    speechSynthesis.cancel();
    speechSynthesis.speak(msg);
  }

```

## Allow to stop, play & change speed/pitch of playback

```javascript
  // Adjust pitch & speed of voice playback
  function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
  }

  options.forEach(option => option.addEventListener('change', setOption));
  speakButton.addEventListener('click', toggle);
  // we use an arrow function so the fucntion only runs on click not on page load
  stopButton.addEventListener('click', () => toggle(false));
```
