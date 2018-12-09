import getIteratee from"@foldr/internal-iteratee";import iterator,{BREAK}from"@foldr/internal-iterator";export default iterator({$$empty:function a(){},$$unwrap:function b(a){return a.x},$$results:function a(){return{x:void 0}},$$reverse:!0,$$prepare:getIteratee,$$handler:function h(a,b,c,d,e,f,g){if(a&&a.capped?!c(e):!c(e,f,g)){return}b.x=e;return BREAK}});
//# sourceMappingURL=index.js.map
