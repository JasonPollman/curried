# @foldr/omit-fx

**The `omitFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/omit-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/omit-fx/src/index.js) for details.

**Functional, autocurried version of [omit](#omit).**

Creates a new object by "omitting" the given properties from `collection`.

Iteratee functions are called with the signature `iteratee(value)`, where:
- `value` is the current item in the collection being iterated over.

```js
import omitFx from '@foldr/omit-fx';

const data = {
  foo: 'foo',
  bar: 'bar',
  baz: 'baz',
};

// Using array shorthand
omitFx(['foo', 'baz'], omit); // => { bar: 'bar' }

// Using a function
omitFx((value, key) => value[0] === 'b')(data); // => { foo: 'foo }
```
