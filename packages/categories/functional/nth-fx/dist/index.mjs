import FunctionalFactory from"@foldr/internal-fmake";export default function nth(a,b){if(!a)return;var c=+b,d=a.length,e=0<=c?c:d+c;return a&&e<d&&-1<e?a[e]:void 0}export var f=FunctionalFactory(nth,{arity:2,signature:[1,0]});
//# sourceMappingURL=index.js.map
