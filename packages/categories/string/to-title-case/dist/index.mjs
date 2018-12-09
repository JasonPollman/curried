import toWords from"@foldr/to-words";import toUpperFirst from"@foldr/to-upper-first";export default function toTitleCase(a){var b=toWords(a),c=b.length;if(!c)return"";var d=1,e=toUpperFirst(b[0].toLowerCase());while(d<c){e+=" ".concat(toUpperFirst(b[d++].toLowerCase()))}return e}
//# sourceMappingURL=index.js.map
