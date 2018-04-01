# Lessons learned

In this episode we look into creating KONAMI code this is basically where a user can type a combination of keys such as 'Nicola'. Sort out like a easter egg.

## Negative array.slice()

After all of the key a user presses is being sorted in an array we aim to to get rid of an that are longer then the length of the secret code. So for example if the code was 5 keys were would only want to store if keys. In this situation we also  need to count from the back  To do this we use a negative splice.

`pressed.splice(-secretCode.length  - 1, pressed.length - secretCode.length);`

Working with splice prompted me to investage the method and looked on the mozilla page. Here is few of the useful things I learnt.

`array.slice(where to start, number of things to delete(can be 0), items to insert)`

### Use splice to remove a item

```javascript
const hockeyTeams = ['devils', 'panthers', 'giants', 'capitals', 'flames'];
const removed = hockeyTeams.splice(3, 1);

// removed is ["giants"]
// hockeyTeams is  ['devils', 'panthers','capitals', 'flames'];
```

### Use splice to add an item

```javascript
const hockeyTeams = ['devils', 'panthers', 'giants', 'capitals', 'flames'];
const add = hockeyTeams.splice(2, 0, 'clan');

// removed is nothing
// hockeyTeams is  ['devils', 'panthers',','clan', capitals', 'flames'];
```

We can have a unlimited amount of things to be inserted for example `const add = hockeyTeams.splice(2, 0, 'clan', 'steelers, 'flyers');`

### Defining a index from the back

As seen in the video we can also select a negative index which counts in from the back. This also mean items at the front can be removed. In the context of the video has the length of the array goes up the second argument increase and when it equal one it will start to remove items.

```javascript
const hockeyTeams = ['devils', 'panthers', 'giants', 'capitals', 'flames'];
const add = hockeyTeams.splice(-6, 1);

// removed is ['capitals']
// hockeyTeams is  ['devils', 'panthers', 'giants', 'flames'];
```

### Passing just one argument to splice

Passing just one argument means that the item that has that index and something after will be deleted example:

```javascript
const hockeyTeams = ['devils', 'panthers', 'giants', 'capitals', 'flames'];
const add = hockeyTeams.splice(2);

// removed is ['giants, 'capitals', 'flames']
// hockeyTeams is  ['devils', 'panthers'];

```

## Get items in an array to merge into one string

`join()` merges all items within an array into a string, this is used in the video so we can check for the secret code.

```javascript
const letters = ['n', 'i', 'c', 'o', 'a'];
const myName = letters.join('');

// myName is  'nicola';
```

## Unicorn fun  🦄🦄🦄🦄

To make unicorns and raindow appear at random do:
`cornify_add();`
