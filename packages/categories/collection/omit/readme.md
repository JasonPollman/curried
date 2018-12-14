# @foldr/omit

**The `omit` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/omit) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/omit/src/index.js) for details.

Creates a new object by "omitting" the given properties from `collection`.

Iteratee functions are called with the signature `iteratee(value, key, collection)`, where:
- `value` is the current item in the collection being iterated over.
- `key` is the key of the current item in the collection being iterated over.
- `collection` is the passed in collection.

```js
import omit from '@foldr/omit';

const data = {
  foo: 'foo',
  bar: 'bar',
  baz: 'baz',
};

// Using array shorthand
omit(data, ['foo', 'baz']); // => { bar: 'bar' }

// Using a function
omit(data, (value, key) => value[0] === 'b'); // => { foo: 'foo }
```
