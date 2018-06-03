# Lessons learned

In this video we practice using the reduce array method, pulling time that is sorted as strings out of the dom and adding them all together to create total amount of time.

One things I learnt in this video is to watch out for NodeList even though they look like arrays in the console they need to be converted into arrays because they do not have the same methods.

Using double maps is not something I have done to often but is useful when breaking things down multiple levels see:

```javascript
  const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

  const seconds = timeNodes
    .map(node => node.dataset.time) // get the time nodes
    .map(timeCode => {
      const [ mins, secs ] = timeCode.split(':').map(parseFloat); // split into mins and seconds using destructuring
      return (mins * 60) + secs;
    })
    .reduce((total, videoSeconds) => total + videoSeconds); // them all together

    let secondsLeft = seconds;
    const hours = Math.round(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;

    const mins = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;
```

## Mod

In this video I used mod(`%`) for the first time. Mod divides for example `11 % 5` and returns the leftovers after something has been evenly distributed. In the example case that is 1.
