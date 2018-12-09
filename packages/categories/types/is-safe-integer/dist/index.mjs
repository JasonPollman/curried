import isInteger from"@foldr/is-integer";export function isSafeIntegerPolyfill(a){return isInteger(a)&&Math.abs(a)<=Number.MAX_SAFE_INTEGER}export default Number.isSafeInteger||isSafeIntegerPolyfill;
//# sourceMappingURL=index.js.map
