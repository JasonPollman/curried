# @foldr/pick

**The `pick` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/pick) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/pick/src/index.js) for details.

Creates a new object by "picking" (or selecting) the given properties.

Iteratee functions are called with the signature `iteratee(value, key, collection)`, where:
- `value` is the current item in the collection being iterated over.
- `key` is the key of the current item in the collection being iterated over.
- `collection` is the passed in collection.

```js
import pick from '@foldr/pick';

const data = {
  foo: 'foo',
  bar: 'bar',
  baz: 'baz',
};

// Using array shorthand
pick(data, ['foo', 'baz']); // => { foo: 'foo', baz: 'baz' }

// Using function
pick(data, (value, key) => value[0] === 'b'); // => { bar: 'bar', baz: 'baz' }
```
