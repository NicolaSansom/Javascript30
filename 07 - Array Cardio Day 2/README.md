# Lessons learned

🦄🦄🦄🦄🦄

## Array methods

### Some - `Array.prototype.some()`

This method checks that at least one item in an array meets are requirements. It will loop though every item in the array to check for a match see js for file for an example.

### Every -`Array.prototype.every()`

Similar  to `.some()` in that it loop over every item in an array this time however it will only return true if all of the items matches the requirements

### Find - `Array.prototype.find()`

This method just returns one item that matches are requirements instead of multiple items like filter. Useful when we are just looking for one specific item

## Avoid delete and use splice

If we want to take a redux like approach where instead of deleting something we make a copy of the original and update it, so in the context of the example we wanted to remove a comment. To do this we first created a copy of then removed the item.

If we join two arrays we must remember to spread them so they merge into one.
