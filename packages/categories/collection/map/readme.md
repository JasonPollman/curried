# @foldr/map

**The `map` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/map) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/map/src/index.js) for details.

This function is similar to `Array#map` except that is works for Array, Object, String,
Map, Set, and Arguments objects.

Iterates over `collection`, calling `iteratee` for each item in the collection and returning
a new array containing the return values from the calls to `iteratee`.

Iteratee functions are called with the signature `iteratee(value, key, collection)`, where
`value` is the current item in the collection, `key` is the key of the current item in the
collection, and `collection` is collection.

```js
import map from '@foldr/map';

function square(x) {
  return x ** 2;
}

map([1, 2, 3], square);            // => [1, 4, 9]
map({ a: 1, b: 2, c: 3 }, square); // => [1, 4, 9]
map('foobar', identity);           // => ['f', 'o', 'o', 'b', 'a', 'r']
```
