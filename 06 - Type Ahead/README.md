# Lessons learned

## Fetch data from a API

Fetch returns a promise, the result of this promise if the call has been successful in resolving the data is a blob which not only stores the data but the responce from the API for example, the type of call and the status code.

```javascript
const endpoint = 'http://mydata/cities';
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data))
```

`.then` is what happens after the promise resolves. In the example, after the promise the data is converted into a userable json file, the .json() is a method within fetch, this could differ depending on the data received.

Then `.json()` returns another promise, it is in this step that we can pass the resulting data into a variable, in the example we are spreading the values within the empty cities variable resulting an array of cities. Spread splits the items in single arguments passed within the push function.

### Filtering with a regex

When working on something a like a simple search using .match does not cut it because you cannot pass a variable into a regular expression. Instead you need to create regex.

The syntax for this is:
`const regex = new RegExp(wordToMatch, )`

The first thing passed into the regex is the variable and the second is search parems. In the example we pass in `'gi'`.

`g` means search the whole of the string the user types

`i` means  it is not case sensitive, so the user could type a word in and it would still match is the case was different to the stored data.

You simply then match the regex within the .match method

`place.city.match(regex)`

## Insert DOM elements

`node.innerHTML`

This method allows you a append additional mark up into the DOM

If you want to match a regex and change the DOM based on these changes for example add a highlight to the matched word this can be done via `.replace()`

``

## Top tip

Write the functions first and then hook up to event listener last
