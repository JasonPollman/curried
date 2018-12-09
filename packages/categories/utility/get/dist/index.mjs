import toPath from"@foldr/to-path";export default function get(a,b,c){var d=toPath(b),e=d.length;if(!e||!a)return c;var f=a,g=0;if(1===e){f=a[d[0]]}else{while(g<e&&null!=f){f=f[d[g++]]}}return f===void 0?c:f}
//# sourceMappingURL=index.js.map
