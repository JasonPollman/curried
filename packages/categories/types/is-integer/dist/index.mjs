import isFinite from"@foldr/is-finite";var floor=Math.trunc||Math.floor;export function isIntegerPolyfill(a){return isFinite(a)&&floor(a)===a}export default Number.isInteger||isIntegerPolyfill;
//# sourceMappingURL=index.js.map
