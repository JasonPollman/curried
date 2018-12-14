# @foldr/delay

**The `delay` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/delay) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/delay/src/index.js) for details.

Creates a promise that resolves after the given number of milliseconds.

```js
import delay from '@foldr/delay';

(async function () {
  await delay(3000);
  console.log('Three seconds just passed!');
}());
```
