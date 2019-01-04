# @foldr/clone

**The `clone` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/clone) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/clone/src/index.js) for details.

Shallow clones an object.

This method is a convenience method for [cloneDepth](#clone-depth),
with the `depth` set to `0`.

```js
import clone from '@foldr/clone';

clone('foo');
// => 'foo'

clone({ foo: 'bar' });
// => A shallow clone of { foo: 'bar' }

const object = {
  x: {
    y: {
      z: {},
    },
  },
};

const cloned = clone(object);
// => cloned !== object
// => cloned.x === object.x
// => cloned.x.y === object.x.y
// => cloned.x.y.z === object.x.y.z
```
