# Lessons learned

This was quiet a challenge to get my head around having never really done anything like this with pure javascript before, I had ago myself but did not hit the mark ☹️

I put some of the pieces together but made a few mistakes such as using querySelectorAll but not selecting the correct dom elements.

## Create reference to the input that was last checked

In order to figure out which item was last checked we created a let variable which stores this dom element. It acts as a means to find the first and last points and calculate the items in between them.

## Check if the shift key was down

If we already have an event such as onClick we can easily find out if the shift key was hold down at the time of the click, the information is attached to the onClick event and will return true or false. So we do not need to use the window events in this case.

## Loop over items to find first and list checked items

The next step to solving this challenge is looping over the checkboxes. When I tried to solve this issue myself was trying to  figure out things like index's and where the items sit within the dom tree which in this cases was not needed. This was actually very simple once I got my head around it. The loop statement went like this:

```javascript
function handleCheck(e) {
let inBetween = false;
  // Check if they had the shift key down and check if item is checked
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
```

When an item is clicked we do a check to make sure the shift key was down and the checkbox was not being unchecked. Then we see if the checkbox is the currently selected one or the last checked one switching the `inBetween` variable from true then back to false when on the last item. This means `inBetween` is set to true in between the first and last checkboxes.
