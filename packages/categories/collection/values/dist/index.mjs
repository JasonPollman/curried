import map from"@foldr/map";import keys from"@foldr/keys";import isMap from"@foldr/is-map";import isSet from"@foldr/is-set";var getValue=function(a){return a};export default function values(a){if(!a)return[];if(isMap(a)||isSet(a))return map(a,getValue);var b=[],c=keys(a),d=c.length,e=0;while(e<d){b[e]=a[c[e++]]}return b}
//# sourceMappingURL=index.js.map
