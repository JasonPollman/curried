# @foldr/escape-regexp

**The `escapeRegExp` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/escape-regexp) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/escape-regexp/src/index.js) for details.

Escapes characters that have special meaning in regular expressions. That is:
`\\`, `^`, `$`, `.`, `*`, `+`, `?`, `(`, `)`, `[`, `]`, `{`, `}`, and `|`. This
is useful to creating new regular expressions from user input, for example.

```js
import escapeRegExp from '@foldr/escape-regexp';

escapeRegExp('$1.00');                      // => '\\$1\\.00'
escapeRegExp('foobar');                     // => 'foobar'
escapeRegExp('Is there anybody in there?'); // => 'Is there anybody in there\\?'
```
