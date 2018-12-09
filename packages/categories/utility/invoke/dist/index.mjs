import toPath from"@foldr/to-path";export default function invoke(a,b,c){if(!a)return;var d=toPath(b),e=d.length;if(!e)return;var f=0,g=a,h=a;while(f<e&&null!=g){h=g;g=g[d[f++]]}if("function"!=typeof g)return;return g.apply(h,c&&"object"==typeof c?c:void 0)}
//# sourceMappingURL=index.js.map
