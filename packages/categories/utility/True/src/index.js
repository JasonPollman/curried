/**
 * A function that always returns `true`.
 * @returns {boolean} The literal boolean `true`.
 *
 * @arity 0
 * @category function
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { True } from '@foldr/all';
 *
 * True();  // => true
 * True(0); // => true
 */
export default function True() {
  return true;
}
