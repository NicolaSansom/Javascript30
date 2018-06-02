# Lessons learned

In this lesson we learnt about local storage and event deligation by creating a fish themed to do list.

## Handling forms

When submitting a form we need to listen for one submit. This also takes into account things like pressing enter on the keyboard to submit unlike listening for a click would.

By default the submit will refresh the page expecting to process the date serverside which we do not always want to happen to stop this we can do `e.preventDefault()`.

When submiting the form we also have easy assess to items in the form, so to get the value of the item we just needed to do `const text = this.querySelector('[name=item]').value;`

Form elements have a method called `reset()` which clears all the inputs within a form.

To connect a label and checkbox the label has a `for` property which needs to match up with the id of the checkbox its linking to.

Passing any value to checked will make a checkbox checked!

## Displaying an array of items in a list

When creating a function that is expecting an array it is sometimes handy to pass in a default of a empty array to avoid undefined errors.

When we are generating inner html from a map we need to join it together at the end because a map returns a array.

`.innerHTML` can be passed to a node object and insert html into an element.

```javascript
   function populateList(plates = [], platesList) {
      platesList.innerHTML = plates.map((plate) => {
        return `
          <li>
            <label for="">${plate.text}</label>
          </li>
        `;
      }).join('');
    }
```

It is worth noting everytime a new item is created the whole list is recreated this is not always best for performance.

## Locale storage

Locale storage works be storing a strings within the browser which we can save data to and then a site can then have access to.

To add an something to actually very easy. In the example we are adding items array into storage. Local storage can only store string and values so passing in objects and array will result in `[object, Object]`

The local storage API includes a few different methods firstly

### `setItem()`

Due to the fact that local storage only allow for keys and string when adding are array in we need to first convert it into a string.

```javascript
    localStorage.setItem('items', JSON.stringify(items));
```

## `getItem()`

To get items out of local storage we can use `localStorage.getItem(key)`. In order to prosits the data on refresh we use:

`const items = JSON.parse(localStorage.getItem('items')) || []`.

We use `JSON.parse` to convert a stringified array back into a array

## Event delegation

If items are created after we are listening for them they will not have events listenter attached to them.

The concept of event delegation is that we are listening for click on the parent from there we are figuring out if the onClick was on the thing we wanted to check for.

In the case of the example we only wanted the function to run if the item click was on of the todo items.

```javascript
    function toggleDone(e) {
      if (!e.target.matches('input')) return; // skip this if unless it a input
      const el = e.target; // get the element we want
      const index = el.dataset.index; // get the dataset we attached so that it could be found in the items array
      items[index].done = !items[index].done; // use ! to get to opposite of what it currently is
    }
```

## Extra credit

Wes challenged us to implement a couple of feature onto the TODO.

### Delete all

### Check all

### Uncheck all
