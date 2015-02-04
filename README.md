# uns.selectbox.js
a workaround way for IE select's options with "display:none"

# Tutorial

 1 - Init the selectBox. The arg parse in must be either unique '.selector' or a jquery  object. If the '.selector' not unique. It won't work properly
```javascript
// init the dropdown that have its options going to use in show and hide
// @arg (var)  can be accepted as a unique '.selector' or an jquery object.
var tdd = $().initDropdown($selectBox);
```


 2 - _selectbox.showHideOptions('.hide-selectors', '.show-selector');
 '.hide-selectors' - the selector of options that got to hide
 '.show-selector' - the selector of options that got to show
```javascript
// @hide-selector, the selector of elements that will be hide in the select box
// @show-selector, the selector of elements that will be show in the select box
tdd.showHideOptions('.hide-selectors', '.show-selector');
```

if there's only one param, it will be the hide selector
```javascript
tdd.showHideOptions('.hide-selectors');
```
