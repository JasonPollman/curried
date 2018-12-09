export default function flatten(a){if(!a||!a.length)return[];var b=[],c=a.length,d=-1,e=0;while(++d<c){if(!a[d]||a[d].constructor!==Array){b[e]=a[d];e++}else{var f=a[d],g=-1,h=f.length;while(h--){b[e]=f[++g];e++}}}return b}
//# sourceMappingURL=index.js.map
