import keys from"@foldr/keys";import isArrayLike from"@foldr/is-array-like";import toStringTag from"@foldr/to-string-tag";export default function size(a){if(!a)return 0;if(isArrayLike(a))return a.length;var b=toStringTag(a);return"[object Map]"===b||"[object Set]"===b?a.size:keys(a).length}
//# sourceMappingURL=index.js.map
