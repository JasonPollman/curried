import toWords from"@foldr/to-words";export default function toKebabCase(a){var b=toWords(a),c=b.length;if(!c)return"";var d=1,e=b[0].toLowerCase();while(d<c){e+="-".concat(b[d++].toLowerCase())}return e}
//# sourceMappingURL=index.js.map
