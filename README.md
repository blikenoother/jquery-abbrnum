# abbrnum: a jQuery plugin

Abbrnum is a jQuery plugin that makes it easy to support automatically updating
fuzzy numbers (e.g. "12k" or "13.1m") from number embedded in your HTML.

## Usage

First, load jQuery and the plugin:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" type="text/javascript"></script>
<script src="jquery.abbrnum.js" type="text/javascript"></script>
```

Now, let's attach it to your number container element on DOM ready - put this in the head
section:

```html
<script type="text/javascript">
   jQuery(document).ready(function() {
     $("abbr-number").abbrNum();
   });
</script>
```

This will turn elements with a class of abbr-number to abbreviation number

```html
<label class="abbr-number">12345</label>
<input type="text" class="abbr-number" value="9865468.123" decplaces="1">
```

into something like this:

```html
<label class="abbr-number">12k</label>
<input type="text" class="abbr-number" value="9.9m" decplaces="1">
```
You can add attribute `decplaces` to element for number of **decimal letter** like above example or you can pass in option like this (if you will pass both then option decPlaces will be overwritten by attribute decplaces):

```html
<script type="text/javascript">
   jQuery(document).ready(function() {
     $("abbr-number").abbrNum({
     	decPlaces:1
     });
   });
</script>


Copyright (c) 2013, Chirag (blikenoother -[at]- gmail [*dot*] com)