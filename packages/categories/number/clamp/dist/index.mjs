import toNumber from"@foldr/to-number";var INF=1/0;export default function clamp(a,b,c){if(c===void 0){c=b;b=-INF}a=toNumber(a);if(a!==a)return a;b=toNumber(b);c=toNumber(c);if(c!==c)c=INF;if(b!==b)b=-INF;if(b>c)c=b;return a<b?b:a>c?c:a}
//# sourceMappingURL=index.js.map
