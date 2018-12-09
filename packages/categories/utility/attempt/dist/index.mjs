import isObject from"@foldr/is-object";export default function attempt(a,b,c){try{return a.apply(void 0,isObject(b)?b:void 0)}catch(a){return 2<arguments.length?c:a}}
//# sourceMappingURL=index.js.map
