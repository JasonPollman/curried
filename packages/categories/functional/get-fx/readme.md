# @foldr/get-fx

**The `getFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/get-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/get-fx/src/index.js) for details.

**Functional, autocurried version of [get](#get).**

Walks the given object or string and finds the property
defined by `path`, which is a "path string" in the format
`foo.bar.baz`, `foo[1].bar`, `foo[bar][baz]`.

```js
import getFx from '@foldr/get-fx';

const thing = {
  foo: [
    { bar: 1 },
    { bar: 2 },
    { bar: 3 }
  ],
};

getFx('foo', thing);             // => [{ bar: 1 }, { bar: 2 }, { bar: 3 }]
getFx('foo[0]')(thing);          // => { bar: 1 }
getFx('foo[0].bar', thing);      // => 1
getFx('foo[0].bar.baz')(thing);  // => undefined
```
