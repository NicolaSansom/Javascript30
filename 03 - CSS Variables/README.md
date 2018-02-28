# Lessons Learned

## CSS variables are better then I expected

`<input type='color'>` pulls up a color picker!

### Variables in CSS

```css
:root {
  --base: #000;
}

div {
  background-color: var(--base)
}
```

This creates a variable that can be used anywhere in the CSS file. Furthermore, you can update those variables in the `<html>` tag like so: `<html style='--base: #ffffff'>` and overwrite them. That's what we use in this tutorial to dynamically change the CSS properties.

## Javascript

`.addEventListener('change', functionName)` for value changes
`.addEventListener('mousemove', functionName)` for any mouse movement over a given div/whatever

`__proto__` is a list of methods that can be called on the object!

`this.dataset` contains all the stuff from the `data-` html tags.

`document.documentElement.style.setProperty('--base', '20px')` --> updates the global CSS variables (that's why we put them in `:root`)

`document.querySelectorAll` return all matches