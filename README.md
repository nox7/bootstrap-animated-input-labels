# Bootstrap (v4.x) Animated Form Labels
Similar to how Google uses field labels as placeholders until the field is non-empty, this currently works for Bootstrap forms inputs to do the same.

## SCSS Notice
The stylesheet in the styles folder is necessary for this to work. Include it in your custom theme for parsing, or parse it as its own CSS sheet.

## Example
There is an example document `example.html` but the basic gist is as follows (assuming you included the CSS and JS in your document)
```html
<div class="ls-form-input">
	<input type="text" class="form-control form-control-sm">
	<label>Email</label>
</div>
```

It is **very important** the label comes after the input.

## Valid Fields
This works with textareas, text inputs (non-checkbox and non-radio), and select menus. The label **must come after the input**.
