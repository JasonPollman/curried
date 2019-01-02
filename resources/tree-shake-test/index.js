/**
 * This is a silly file used to ensure that the tree-shaking capabilities
 * of webpack work with foldr. If so, we can test the output file size to
 * ensure only the correct library functions were bundled.
 * @since 1/1/19
 * @file
 */

import { partial, invokeTimes } from '../../packages/aggregates/all';

const { log } = console;
invokeTimes(5, partial(log, 'Hello world! #%s'));
