# @foldr/zip-fx

**The `zipFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/zip-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/zip-fx/src/index.js) for details.

**Functional, autocurried version of [zip](#zip).**

Creates an array of values grouped by index.

Returns an array of grouped arrays from the elements of the arrays provided. That is,
all elements of the first array in the returned array are the 0th index, the second array
in the return array is all the elements at index 1, and so on.

This method operates on "array-like" objects so Arguments and strings will work as expected.
Non-array-like values will be ignored from the input arguments.

```js
import zipFx from '@foldr/zip-fx';

zipFx(['a', 'b', 'c'], [1, 2, 3]); // => [[1, 'a'], [2, 'b'], [3, 'c']]
zipFx(['y', 2], ['x', 1]);         // => [['x', 'y'], [1, 2]]
zipFx('bar')('foo');               // => [['f', 'b'], ['o', 'a'], ['a', 'r']]
```
