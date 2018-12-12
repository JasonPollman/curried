# @foldr/reduce

**The `reduce` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/reduce) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/reduce/src/index.js) for details.

This function is similar to Array#reduce except that it works for collections and guards
against bad input.

A collection is an Array, Object, String, Map, Set, or Arguments object.

Iterates over `collection`, calling `reducer` for each item in the collection and returning
the accumulation of the successive calls to `reducer`. Each invocation of `reducer` becomes
the "reduced" value of the previous call.

Reduction functions are called with the signature
`reducer(accumulator, value, key, collection)`, where:
- `accumulator` is either the initial value or the results of a previous `reducer` call.
- `value` is the current item in the collection being iterated over,
- `key` is the key of the current item in the collection being iterated over
- `collection` is the passed in collection.

```js
import reduce from '@foldr/reduce';

function square(acc, x) {
  return acc + x ** 2;
}

reduce([1, 2, 3], square, 0); // => 14
```
