# Lessons leant

In this video we learn how create a fixed navigation on scroll this is something I have done both in react and jquery it was intestering to learn how to do this with just plain javascript and no frameworks.

## Get offset of the hero section to figure out what the fix needs to happen

```javascript
  const nav = document.querySelector('#main');
  const topOfNav = nav.offsetTop;
```

If the offset it is equal to or more then the length of the hero section then fix the navigation in the example we add a class when the nav need to be fixed

```javascript
  function fixNav() {
    // When scrolling past the hero section fix and the nav else make it not fixed
    if(window.scrollY >= topOfNav) {
      document.body.classList.add('fixed-nav');
    } else {
      document.body.classList.remove('fixed-nav');
    }
  }
```

### Stop the content jump

Now we have a basic fixed nav however when the navigation switches to being fixed it is no longer part of the css layout so their is a jump where the content moves up. To offset this we use `offsetHeight` which gives the height of the navigation this is better then using an hard coded value in case of future changes

```javascript
    function fixNav() {
      if(window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
      } else {
        document.body.style.paddingTop = 0;
      }
    }
```

### Display the logo when fixed

In css there was mobile logo that was hidden to get it display when fixed we simpley added:

```css
  .fixed-nav li.logo {
    max-width: 500px;
  }
```

Because we added the fixed class onto the body it goes flexability to add additional changes when fixed

#### I found out we cannot scale the width to auto

The takeaway from this one is in order to get a smooth transition we need to ensure the extra space is taken care of when fixing an item.
