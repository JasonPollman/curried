import is from"@foldr/is";var isPromiseBase="function"==typeof Promise?is(Promise):function(){return!1},isThenable=function(a){return"function"==typeof a.then&&"function"==typeof a.catch};export default function isPromise(a){return isPromiseBase(a)||!!a&&isThenable(a)}
//# sourceMappingURL=index.js.map
