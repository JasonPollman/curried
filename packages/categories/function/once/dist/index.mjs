import SafeSymbolFor from"@foldr/internal-symbol";export var ARITY=SafeSymbolFor("source-arity");function noop(){}export default function once(a){if("function"!=typeof a)return noop;var c=0,d;function b(){if(0<c)return d;c++;d=a.apply(this,arguments);return d}b[ARITY]=0<=a[ARITY]?a[ARITY]:a.length;return b}
//# sourceMappingURL=index.js.map
