# Lessons learnt

In todays lesson I am going to learn about speech recognition with the browser. Converting speech to written words.

To create a basic recognition:

```javascript
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
```

To start the speech detection, we simply create an event listener firstly console logging out the words. To get this to work we need to allow the browser to use the microphone.

```javascript
  recognition.addEventListener('result', e => {
    console.log(e.results);
  });

  recognition.start();
```

## Get words into a string

The speech detection stores the word it thinks was said, a percentage of confidence and also a bool if the user has finished speaking or not.

The data is very nested so we had to map over the data a couple of time and then join the words together.

```javascript
  recognition.addEventListener('result', e => {
    // convert results into a array, get results transcript
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      // join to make one big string, instead of separate arrays
      .join('');
  });
```

When we stop talking we need to redo the event listender using:

```javascript
  recognition.addEventListener('end', recognition.start);
```

## Add words into the dom so they can be seen

```javascript
  p.textContent = transcript;
  if(e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
```
