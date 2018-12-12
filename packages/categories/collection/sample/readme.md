# @foldr/sample

**The `sample` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/sample) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/sample/src/index.js) for details.

Gets a random element from the provided collection.

```js
import sample from '@foldr/sample';

const items = ['foo', 'bar', 'baz'];
sample(items); // => Either 'foo', 'bar', or 'baz';

const point = { x: 1, y: 2 };
sample(point); // Either 1 or 2

const data = new Map([['a', 1], ['b', 2], ['c', 3]]);
sample(data); // => Either 1, 2, or 3
```
