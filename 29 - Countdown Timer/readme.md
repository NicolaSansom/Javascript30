# Lessons learnt

I cannot believe I am also done with this course it is been a long time coming. Just two videos left 😱

Today we learn how to set up different countdown timers, also working out the time that the timer will be done in.

## Countdown function

Set interval does not run straight away it waits a second. To combat this we run the second function once when the function is first provoked before the setInterval.

We have to times and divide by a 1000 to convert to and from milliseconds

```javascript
  let countdown;

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }

      console.log(secondsLeft)
    }, 1000);
  }
```

## Converting seconds to minutes

I learnt more about both the remainder & math.floor operators

```javascript
  function displayTimeLeft(seconds) {
    // The Math.floor() function returns the largest integer less than or equal to a given number.
    // @example Math.floor(5.05) would return 5
    const mintutes = Math.floor(seconds / 60);
    // The remainder operator returns the remainder left over when one operand is
    // divided by a second operand.It always takes the sign of the dividend.
    // @example 10 % 15 would return 5
    const secondsRemaining = seconds % 60;
    console.log({mintutes, secondsRemaining});
  }
```

## Display time in the document

We use `querySelector` to get the h1 from the document and then use `.textContent` to append the mintues and seconds. If the remaining amount of seconds left is under 10 we added in a 0 zero before the numbers

```javascript
  const timerDisplay = document.querySelector('.display__time-left');
  const display = `${mintutes}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;
  timerDisplay.textContent = display;
```

## Display finish time

Underneath the countdown we also display how many mintutes are remaining we do this be passing in the milliseconds within the then variable we created in countdown function into a `new Date()` like so:

```javascript
  const then = now + seconds * 1000;
  displayEndTime(then);
```

We then use the `getHours()` and `getMintutes()` functions to get the time, as we use a 24 hours clock we did not need to convert to a 12 hours clock

```javascript
  function displayEndTime(timeStamp) {
    const finishTime = new Date(timeStamp);
    const mintutes = finishTime.getMinutes();
    const hours = finishTime.getHours();
    endTimeDisplay.textContent = `Be back at ${hours}:${mintutes < 10 ? '0' : ''}${mintutes}`;
  }
```

## Setting up the quick shortcuts

To do this we simplily use `querySelectorAll` and added an on click onto all of the buttons
We the used the data-time attribute and passed that into the timer function we created prior.

```javascript
  function startTimer() {
    timer(parseInt(this.dataset.time))
  }

  buttons.forEach(button => button.addEventListener('click', startTimer));
```

There is slight weirdness where if we click on when of the other timer button while one is still loading it will switch back and forth in displaying both. To combat this we had reset the setInterval to zero.

```javascript
  // clear any old timers
  clearInterval(countdown);
```

## Custom form input

Unlike when selecting a class or button element when using a form that has a name you can
just go `document.awesomeForm` futher more if you had an input within that form with a name
you could go `document.awesomeForm.name`.

Heres the function which triggers the timer:

```javascript
  document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    this.reset();
    timer(mins * 60);
  });
```
