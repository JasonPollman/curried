# @foldr/always

**The `always` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/always) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/always/src/index.js) for details.

Creates a function that *always* returns the given value.

```js
import always from '@foldr/always';

const Null = always(null);
Null() // => null

// Beware, `always` always returns the same value!
// So mutation side-effects are possible!

const foo = always({ foo: 'bar' });
const thing = foo() // => { foo: 'bar' };
thing.baz = 'quxx';

const sameThing = foo() // => { foo: 'bar', baz: 'quxx' };
```
