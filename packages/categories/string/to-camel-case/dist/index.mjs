import toWords from"@foldr/to-words";import toUpperFirst from"@foldr/to-upper-first";export default function toCamelCase(a){var b=toWords(a),c=b.length;if(!c)return"";var d=1,e=b[0].toLowerCase();while(d<c){e+=toUpperFirst(b[d++])}return e}
//# sourceMappingURL=index.js.map
