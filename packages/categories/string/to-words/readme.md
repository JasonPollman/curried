# @foldr/to-words

**The `toWords` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/to-words) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/to-words/src/index.js) for details.

Converts a string to an array of words.

This function uses the `\p{Lower_Case_Letter}`, `\p{Upper_Case_Letter}`, and
`\p{Decimal_Digit_Number}` unicode categories to match against the given string.
Therefore, all non-letter and digit unicode characters will be omitted from the returned string.

```js
import toWords from '@foldr/to-words';

toWords('foo bar')         // => ['foo', 'bar']
toWords('foo barBaz_quxx') // => ['foo', 'bar', 'Baz', 'quxx']
```
