import toString from"@foldr/to-string";var ESCAPE_RE=/[\\^$.*+?()[\]{}|]/g;export default function escapeRegExp(a){a=toString(a);return a&&ESCAPE_RE.test(a)?a.replace(ESCAPE_RE,"\\$&"):a}
//# sourceMappingURL=index.js.map
