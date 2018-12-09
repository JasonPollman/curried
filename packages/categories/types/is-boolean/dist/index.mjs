import toStringTag from"@foldr/to-string-tag";import isObjectLike from"@foldr/is-object-like";export default function isBoolean(a){return!0===a||!1===a||isObjectLike(a)&&"[object Boolean]"===toStringTag(a)}
//# sourceMappingURL=index.js.map
