# @foldr/is

**The `is` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is/src/index.js) for details.

Determines if the given value is an instance of `Constructor`.

```js
import is from '@foldr/is';

is(Object, {});    // => true
is(String, 'foo'); // => true
is(String, {});    // => false

// Note, `is` is curried, so you can do things like...

class Point {
  constructor(x, y) {
     this.x = x;
     this.y = y;
  }
}

const isPoint = is(Point);

isPoint(new Point(0, 1)); // => true
isPoint({});              // => false
```
