# Lessons learned

In this lesson we learn the difference between a reference and copy.

## Referencing string, numbers and booleans

If we were to reference a variable as follows:

```javascript
let favouriteSport= 'hockey';
let favouriteEvent = favouriteSport;
favouriteSport = 'football';
```

When we `console.log` out favouriteEvent it would be `'hockey'` instead of football because the update to the `favouriteSport`  variable does not happen until after favouriteEvent has been created. So you can safety update the original variable without effecting variables that reference the original one.

## Referencing arrays

Arrays and the way they are referenced differs if you had:

```javascript
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    const team = players;

    console.log(players, team);

    team[3] = 'Lux';
```

Both the `players` and `team` variable would be changed because team is just reference to players. So when using array its better to make a copy.

```javascript
    const team2 = players.slice();
    const team3 = [].concat(players);
    const team4 = Array.from(players);
```

### Es6 Spread opector

```javascript
    const team5 = ...players;
```

Spread will take every item out of the array and put it into the containing array.

## Referencing objects

Object have similar behavior to array in the way they update.

To take a copy of a object we can do `const captain = Object.assign({}, item to copy, {things to change / create})`. Spread should also be coming to objects soon.

Its worth mentioning that assign is shallow so if there are nested objects and we update them it it wll also effect the original object. Instead we have use a clone deep function this is very rare though.
