# Lesson learned
This was the most challenging lesson yet.

## Dev tools

When logging out arrays can return the data in more readable format

`console.table(array)`


### Destructuring

If you have a string that you would like to split up into variables you can destructure it, here is an example:

`const guy = 'Beck Glenn';`

 `const [last, first ] = fullName =  guy.split(' ');`

## Different array methods

This lessons covers various functions that can be applied to arrays

### Filters  - `Array.prototype.filter()`

Filter takes a function which returns a new array with items that match that statement, for example the following returns inventors born within the 1500s.

`const olderInventors = inventors.filter(inventor => (inventor.year >= 1500 &&  inventor .year <= 1599));`

Written without es6

`const olderInventors = inventors.filter(function(inventor) {
  if(inventor.year >=1500 && inventor.year <= 1599) {
    return: true;
  }
}`

In this case inventor is one of the objects stored within the inventors array. Filter iterating over each one. Effectively running the query against each item to see if it matches.

#### Maps - `Array.prototype.map()`

Map returns the same amount of items as the original array as opposed to filter which can return less items depending on the result. A couple example are:

`const inventorsName = inventors.map(inventor => inventor.first + ' ' + inventor.last)`

Takes the inventors array and returns the first and last name combined into a single string.

` suggestions.map((suggestion, index) => (
          <Text type="success" className="feedback suggestion" key={index}>{suggestion}
          </Text>
        ))`

Return each suggestion written out in a p tag(text component).

#### Sort - `Array.prototype.sort()`

Sort works by comparing two items at one time. Returning either 1 or -1. 1 would place the object higher, -1 would place object lower

`function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}`

` const byDate = inventors.sort((inventorA, inventorB) =>inventorA.year > inventorB.year ? 1 : -1);
    console.table(byDate)`

This example checks if the year in which inventorA was born is higher then inventorB therefore putting lower/ younger number first

#### Reduce - `Array.prototype.reduce()`

Reduce works be having a running total and a single item passed in this is looped over to reach all items within the array. It take a function with these two values.

`const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);`

Total must be set. For example it needs to be set to 0 else it will be undefined(). So in the context of the example it results in:

`[object Object]7859843780508967907681`

It is possible to pass a object if multiple totals are needed.
You would check if the item had a total if not set it to zero. Either add the item to it matching total.

#### Includes - `Array.prototype.includes()`

The `includes()` method determines whether an element includes something.

`const cheeseRecipe = recipe.includes.('cheese');`
