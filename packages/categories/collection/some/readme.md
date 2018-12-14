# @foldr/some

**The `some` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/some) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/some/src/index.js) for details.

This function is similar to `Array#some` except that is works for Array, Object, String,
Map, Set, and Arguments objects.

Iterates over `collection`, calling `predicate` for each item in the collection. If `predicate`
returns truthy, iteration is broken and `true` is returned. Otherwise `false` is returned.

Predicate functions are called with the signature `predicate(value, key, collection)`, where:
- `value` is the current item in the collection being iterated over.
- `key` is the key of the current item in the collection being iterated over.
- `collection` is the passed in collection.

```js
import some from '@foldr/some';

function isEven(x) {
  return x % 2 === 0;
}

some([1, 2, 3], isEven);            // => true
some([2, 4, 6], isEven);            // => true
some([1, 3, 5], isEven);            // => false

some({ a: 1, b: 2, c: 3 }, isEven); // => true
some({ a: 2, b: 4, c: 6 }, isEven); // => true
some({ a: 1, b: 3, c: 5 }, isEven); // => false
```
