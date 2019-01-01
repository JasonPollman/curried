# @foldr/walk

**The `walk` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/walk) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/walk/src/index.js) for details.

Recursively walks an object, invoking `invokee` for each non-object property
of `object`.

Note: `invokee` is called with two arguments:
1. The current value of the property belonging to the object being iterated over.
2. An array of the "path" to that property.

```js
import walk from '@foldr/walk';

const object = { foo: 1, bar: 2 };

let total = 0;
walk(object, x => { total += x; });

// total === 3
// Note this will recurisively walk an object...

const object = {
  foo: 1,
  bar: {
    baz: 3,
    quxx: 4,
  }
};

let sum = 0;

walk(object, (value, path) => {
  // Path is an array to the path of `value` from `object`.
  // For example, if the value is `4`, the path would be ['bar', 'quxx']
  sum += value;
});

// total === 8
```
