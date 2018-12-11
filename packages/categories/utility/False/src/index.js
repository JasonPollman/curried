/**
 * A function that always returns `false`.
 * @returns {boolean} The literal boolean `false`.
 *
 * @arity 0
 * @category utility
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { False } from '@foldr/all';
 *
 * False();  // => false
 * False(1); // => false
 */
export default function False() {
  return false;
}
