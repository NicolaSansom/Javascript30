# Lessons learnt

This is the final video in the series 💀 😭 I feel I have come such a long way and really brushed up on the basics of how javascript works. This is really helped me when working with frameworks
like react and when approaching solving issues. Along with the new method of coming notes on
the thing that I have learnt along the way.

 When I have completed this series I would like take some time to read back over all of the
 notes I have taken and put together some of the most useful things that I have learnt along the way.

 Anyway onto the final video 😬

 We building a game called whack a mole the old school one that you used to able to play in arcades.

## Random elements

The first thing we do create functions for the random elements of the game namely the hole the mole will pop up in and the amount of time between each mole popping. To get these values we lean on `Math.random`

### Create random amount of milliseconds

```javascript
  function randTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
```

### Select a random mole hole

```javascript
  function randHole(holes) {
    const ixd = Math.floor(Math.random() * holes.length);
    const hole = holes[ixd];
    console.log(hole);
  }
```

We do not want a mole popping up in the same hole twice so we store the last hole in a variable
and then do check to see if the hole is the same as the last one if it is we rerun the function.

```javascript
  if(hole  === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
```

## Get the moles to pop up

```javascript
  function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    // Display the mole
    hole.classList.add('up');
    // When the time is up hide the mole again
    setTimeout(() => {
      hole.classList.remove('up');
    }, time);
  }
```

## Add an ending to game

If we were to call the peep function with the code we have now it would run
forever more so we need to create an end.

```javascript

  function startGame() {
    // reset the scoreboard
    scoreBoard.textContent = 0;
    // set the game to false
    timeUp = false;
    peep();
    // after ten seconds end the game
    setTimeout(() =>
      timeUp = true
      , 1000);
  }

```

## Increase score if they click

Now we have check for clicks on the mole to stop people cheating we check the `isTrusted` variable to make sure people are not faking click in javascript.

TODO:
Create an different levels of the game

## Extra bits

### Store past scores in local storage

Using the knowledge I picked up for the taco episode I stored past score in local storage within a list of storing the date and time and the score.

#### Adding the scores

```javascript
  const now = new Date();
  const finalScore = {
    time: `${now.getDate()}-${now.getMonth()}-${now.getFullYear()} - ${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`,
    score: `${score === 1 ? `1 mole whacked` : `${score} moles whacked`}`
  };
  pastScores.push(finalScore);
  localStorage.setItem('scores', JSON.stringify(pastScores));
```

#### Getting & displaying the scores

```javascript
  const pastScoresList = document.querySelector('.past-scores');
  const pastScores = JSON.parse(localStorage.getItem('scores')) || [];

  function populatePastScoresList(pastScores = [], pastScoresList) {

    pastScoresList.innerHTML =
      pastScores
        // sort highest score first
        .sort((a, b) => parseInt(b.score.split(' ')[0]) - parseInt(a.score.split(' ')[0]))
        // filter out zero scores
        .filter(result => parseInt(result.score.split(' ')[0]) !== 0)
        .map((result, i) => {
          return `
            <li>
              <h3 class="date">${result.time}</h3>
              <div class="result">
                <p>${result.score}</p>
              </div>
            </li>
          `;
        }).join('');
  }
```

### Adding different levels

As an extra bonus and I also added in custom level. Harder levels have quicker min and max times the moles pop out of. For the user a pick there speed I used a select letting the user pick from three different levels. I used the styles I learnt in the previous video to create this.

```javascript
  let levelSpeed = { min: 200, max: 1000 };
  document.startGame.addEventListener('submit', function (e) {
    e.preventDefault();
    // Split string values out into two integers
    const selectedLevelSpeed = this.level.value.split(' ').map(speed => parseInt(speed));
    // set the level speed
    levelSpeed.min = selectedLevelSpeed[0];
    levelSpeed.max = selectedLevelSpeed[1];
    startGame();
  })
```

I also updated the start function so it consumed the levelSpeed variable `const time = randomTime(levelSpeed.min, levelSpeed.max);`
