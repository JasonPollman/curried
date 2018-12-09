import toNumber from"@foldr/to-number";var MAX_VALUE=Number.MAX_VALUE;export default function toFinite(a){if(!a)return 0===a?a:0;a=toNumber(a);if(!a)return 0===a?a:0;return a>MAX_VALUE?MAX_VALUE:a<-MAX_VALUE?-MAX_VALUE:a}
//# sourceMappingURL=index.js.map
