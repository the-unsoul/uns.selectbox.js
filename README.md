# uns.selectbox.js
a workaround way for IE select's options with "display:none"

# Tutorial


```
// init the dropdown that have its options going to use in show and hide
// @arg (var)  can be accepted as a unique '.selector' or an jquery object.
// need to be ~unique~
var tdd = $().initDropdown($selectBox);
```

```
// @hide-selector, the selector of elements that will be hide in the select box
// @show-selector, the selector of elements that will be show in the select box
tdd.showHideOptions('.hide-selectors', '.show-selector');

// @hide-selector, the selector of elements that will be hide in the select box
tdd.showHideOptions('.hide-selectors');
```
