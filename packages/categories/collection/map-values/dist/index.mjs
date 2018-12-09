import iterator from"@foldr/internal-iterator";import getIteratee from"@foldr/internal-iteratee";var EmptyObject=function(){return{}};export default iterator({$$empty:EmptyObject,$$results:EmptyObject,$$prepare:getIteratee,$$handler:function h(a,b,c,d,e,f,g){b[f]=a&&a.capped?c(e):c(e,f,g)}});
//# sourceMappingURL=index.js.map
