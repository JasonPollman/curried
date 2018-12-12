# @foldr/reduce-right

**The `reduceRight` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/reduce-right) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/reduce-right/src/index.js) for details.

This function is similar to [reduce](#reduce), except that
iteration is performed from right to left.

Reducer iteratee functions are called with the signature
`reducer(accumulator, value, key, collection)`, where:
- `accumulator` is either the initial value or the results of a previous `reducer` call.
- `value` is the current item in the collection being iterated over,
- `key` is the key of the current item in the collection being iterated over
- `collection` is the passed in collection.

```js
import reduceRight from '@foldr/reduce-right';

function square(acc, x) {
  return acc + x ** 2;
}

reduceRight([1, 2, 3], square, 0); // => 14
```
