# @foldr/debounce

**The `debounce` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/debounce) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/debounce/src/index.js) for details.

[Debounces](https://codeburst.io/throttling-and-debouncing-in-javascript-646d076d0a44)
a function by waiting `delay` ms before executing it and ignoring all invocations before
`delay` has expired.

*Note, this uses `setTimeout`.*

```js
import debounce from '@foldr/debounce';

const log = () => console.log('Invoked!');
const debounced = debounce(log, 1000);

for (let i = 0; i < 1000; i++) {
  log();
}

// 1 second passes, and `log` is called only once.
```
