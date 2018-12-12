# @foldr/invoke

**The `invoke` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/invoke) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/invoke/src/index.js) for details.

Invokes the function at `path` of `object`.
`invoke` will use the `this` binding of the object the function belongs to.

```js
import invoke from '@foldr/invoke';

const object = {
  foo: {
    bar() {
      return 'invoked!';
    },
    baz: [1, 2, 3, 4],
  },
};

invoke(object, 'foo.bar');               // => 'invoked!'
invoke(object, 'foo.baz.slice', [0, 3]); // => [1, 2, 3]
```
