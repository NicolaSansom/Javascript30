# Lessons learned

This video we use the `Array.sort` methods to sort an array of bands without taking in account the starting word.

Wes challenged me complete this task before watching the video which I was able to do however there were some differences in implentation
which made the final code more slim and refined some of the thing to note were:

## Run variables though a function instead of repeating and improve the regex to catches more case

I did:

```javascript
  const sortedBands = bands.sort(((a, b) => {
    const bandA = a.replace(/the |An |A /g, '');
    const bandB = b.replace(/The |An |A  /g, '');
    return bandA < bandB ? -1 : 1;
  }));
```

They did:

```javascript
  function strip(bandName) {
    return bandName.replace(/^(a |the |an)/i, '').trim(); // i means create both upper and lower case words, ^ means at the start of a string
  }
  // If a is more then b move it up, if it less move it down
  const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
```

## Sometimes it is cleaner to apply methods directly to a node instead of splitting it up into variables and functions

I did:

```javascript
const bandsList = document.querySelector('ul#bands');
function populateList(sortedBands = [], bandsList) {
  bandsList.innerHTML = sortedBands.map((band) => {
    return `
      <li>
        ${band}
      </li>
    `;
  }).join('');
}
sortedBands && bandsList && populateList(sortedBands, bandsList);
```

They did:

```javascript
document.querySelector('#bands').innerHTML = sortedBands.map((band) => {
  return `
      <li>
        ${band}
      </li>
    `;
}).join('');
```

Overall I am happy with my attempt and felt I use the correct approach but could have cut and improved my code taking into account what I have described above.
