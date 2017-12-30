# multimap-js
This is a quick and simple little utility that allows you to map over more than one array at a time. I'm sure we've all had times where we're getting data from two different source and the indexes match up but we can't just use .map() on one and use the index of that to use on the other one. (Okay, just kidding. You can do exactly that.) But this is just one function that does it for you. 

## Examples

Codepen [here](https://codepen.io/anon/pen/ZXOGyd?editors=0011)

## Usage

```javascript
var newArray = multimap(array1, array2[, array3...], function callback(arg1, arg2[, arg3...]) {
  // return element for newArray
});
```

## Todo
* Make better, more robust -- this is kind of vague... (maybe work with any iterable)
* Implement reduce & filter
* Options (or function) to feed it to know how to handle when the arrays are different lengths. Right now it just goes until the first array fed runs out. 
* Make into little NPM module
