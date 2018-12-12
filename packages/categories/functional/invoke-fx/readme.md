# @foldr/invoke-fx

**The `invokeFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/invoke-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/invoke-fx/src/index.js) for details.

**Functional, autocurried version of [invoke](#invoke).**

Invokes the function at `path` of `object`.

```js
import invokeFx from '@foldr/invoke-fx';

const object = {
  foo: {
    bar() {
      return 'invoked!';
    },
    baz: [1, 2, 3, 4],
  },
};

invoke('foo.bar', [])(object);           // => 'invoked!'
invoke('foo.baz.slice', [0, 3])(object); // => [1, 2, 3]
```
