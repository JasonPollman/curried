# @foldr/every

**The `every` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/every) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/every/src/index.js) for details.

This function is similar to `Array#every` except that it works for collections and
guards against bad input.

A collection is an Array, Object, String, Map, Set, or Arguments object.

Iterates over `collection`, calling `predicate` for each item in the collection. If `predicate`
returns falsy, iteration is broken and `false` is returned. Otherwise `true` is returned.

Predicate functions are called with the signature `predicate(value, key, collection)`, where:
- `value` is the current item in the collection being iterated over.
- `key` is the key of the current item in the collection being iterated over.
- `collection` is the passed in collection.

```js
import every from '@foldr/every';

function isEven(x) {
  return x % 2 === 0;
}

every([1, 2, 3], isEven);            // => false
every([2, 4, 6], isEven);            // => true

every({ a: 1, b: 2, c: 3 }, isEven); // => false
every({ a: 2, b: 4, c: 6 }, isEven); // => true
```
