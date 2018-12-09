import random from"@foldr/random";import values from"@foldr/values";import isArray from"@foldr/is-array";export default function sample(a){if(!a)return;var b=isArray(a)?a:values(a);return b[random(b.length-1)]}
//# sourceMappingURL=index.js.map
