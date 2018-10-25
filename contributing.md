# Rules of Engagement

## Contributions
**Are always welcome!**    
We operate using strandard GitHub Pull Requests. So, if you'd like to contribute to foldr and aren't
sure how, check out: [Creating A Pull Request](#https://help.github.com/articles/creating-a-pull-request/).

**In order to keep this project clean, well tested, and maintainable, we also ask that you adhere to the following project guidelines when submitting PRs:**

## File Standards
**This is a [lerna](#https://github.com/lerna/lerna) based mono-repo.**    
Each "library function" resides in its own directory within the `packages` directory. Therefore,
each `packages` sub-directory should only contain public library functions.

The exception to this rule is the `all` directory which is an automatically generated
"aggregate" package that exports all of the other packages. It's published as `@foldr/all`.

**Project Setup:**
```bash
.
|- scripts                   # Houses internally used CI/CD scripts
|- packages                  # Stores each package (library function)
|  |- xxx                    # The library function `xxx`.
|  |  |- src                 # Source files for xxx.
|  |  |  |- index.js         # Contains xxx's main export.
|  |  |  |- index.test.js    # Unit test file for xxx.
|  |  |- dist                # Automatically generated build output for xxx (.gitignored).
|  |  |  |- index.js         # CommonJS build output for xxx.
|  |  |  |- index.mjs        # ESM build output for xxx.
|  |  |  |- index.js.map     # Source map used by both index.js and index.mjs
|  |- yyy                    # The library function `yyy`.
...
```

### File Naming Conventions
**All files in this project should be named using all lowercase characters and in `kebab-case`.**    
Since this is a requirement of npm package names and we're mapping directories to npm modules, this
standard seemed a natural fit.

## Documentation Standards
**Since all documentation for this project is built using JSDoc, all JSDoc blocks should be well-written and use proper punctuation.**

Moreover, since we're using JSDoc tags to build the API documentation, the following tags should
be included on exposed library functions:

| Tag         | Reason |
| ----------- | ------ |
| `@param`    | All parameters the function receives should be documented. |
| `@returns`  | The return value of the function should be documented. |
| `@memberof` | **This should be set to `foldr`.**<br />This tag is used as a sentinel value to identify the doc block as a public facing function that belongs on the docs site (as opposed to an internal—but potentially exported—function). |
| `@since`    | **Formatted: `@since vX.X.X`.**<br />This tag is used to track when the version of this function was added to the primary (`all`) package. **Not the version of the package itself.** |
| `@export`   | For good measure. |
| `@example`  | Used as the code example on the doc site. This should contain **valid** js code. |

**An Example JSDoc:**

```js
/**
 * Function composition.
 *
 * Creates a new function that returns the result of invoking
 * the given functions in successive order from right to left
 * passing the results of the previous invocation to the next
 * function.
 *
 * Each function will be invoked with the `this` binding available
 * to the newly created function.
 *
 * This function is very similar to `pipe`, except that the order
 * of function execution flows from right to left (bottom to top).
 *
 * @param {...function} functions The functions to compose.
 * @returns {function} The composite function.
 * @category function
 * @memberof foldr 
 * @since v0.0.0
 * @export
 * @example
 * function add(a, b) {
 *   return a + b;
 * }
 *
 * function square(x) {
 *   return x * x;
 * }
 *
 * const sumSquared = compose(square, add);
 * sumSquared(1, 2); // => 9
 * sumSquared(2, 3); // => 25
 */
export default function compose() { ... }
```

## Testing Standards
**For PR's to be pulled, unit test coverage must meet the coverage thresholds defined in the `jest.config.js` file at the root of this project.**
That is, 99% coverage. Istanbul disable directives are acceptable only in the following case(s):

- **The testing environment prohibits testability:**    
  For example: `export default Number.isNaN || isNaNPolyfill`. Here, we're exporting a native function
  if it's available or a polyfill otherwise. Since jest is run in node, `Number.isNaN` will always be
  used. However, you should still independently test the pollyfill function itself.

## Linting Standards
**All code should be lint-free per the `.eslintrc` defined in the root of this repository.**    

This project uses the [Airbnb Javascript Style Guide](#https://github.com/airbnb/javascript).
However, some rules have been disabled to quite the linter in favor of more performant code.

In general, the rule is: if it makes the code faster, adding `eslint-disable` directives at the top
of the file is acceptable. However, keep in mind that the `babel-plugin-minify` handles most of
these micro-optimizations (like declaring all variables in a single statement). So, you should do
your best not to break lint rules first and optimize later.

**To lint the project execute:**

```bash
npm run lint
```