# @foldr/map-right

**The `mapRight` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/map-right) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/map-right/src/index.js) for details.

This function is like `map` except that iteration is performed from right to left.

Iteratee functions are called with the signature `iteratee(value, key, collection)`, where
`value` is the current item in the collection, `key` is the key of the current item in the
collection, and `collection` is collection.

```js
import mapRight from '@foldr/map-right';

function square(x) {
  return x ** 2;
}

mapRight([1, 2, 3], square);            // => [9, 4, 1]
mapRight({ a: 1, b: 2, c: 3 }, square); // => [9, 4, 1]
mapRight('foobar', identity);           // => ['r', 'a', 'b', 'o', 'o', 'f']
```
