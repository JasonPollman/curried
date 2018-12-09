import isNumber from"@foldr/is-number";export function isFinitePolyfill(a){return isNumber(a)&&isFinite(a)}export default Number.isFinite||isFinitePolyfill;
//# sourceMappingURL=index.js.map
