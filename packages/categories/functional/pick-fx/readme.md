# @foldr/pick-fx

**The `pickFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/pick-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/pick-fx/src/index.js) for details.

**Functional, autocurried version of [pick](#pick).**

Creates a new object by "picking" (or selecting) the given properties.

Iteratee functions are called with the signature `iteratee(value)`, where:
- `value` is the current item in the collection being iterated over.

```js
import pickFx from '@foldr/pick-fx';

const data = {
  foo: 'foo',
  bar: 'bar',
  baz: 'baz',
};

// Using array shorthand
pickFx(['foo', 'baz'], data); // => { foo: 'foo', baz: 'baz' }

// Using function
pickFx((value, key) => value[0] === 'b')(data); // => { bar: 'bar', baz: 'baz' }
```
