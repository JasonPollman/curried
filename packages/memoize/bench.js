const _ = require('lodash');
const assert = require('assert');
const Benchmark = require('benchmark');
const memoize = require('./dist');

const { log } = console;
const toFixed = n => n.toLocaleString('en-US', { maximumFractionDigits: 0 });

function handleCycleComplete({ target }) {
  const { name, hz, error } = target;
  log(`${name}: ${error ? `[Error: ${error.message}]` : toFixed(hz)}`);
}

const identity = x => x;
const sum = (x, y) => x + y;

const fIdentity = memoize(identity, x => x[0]);
const lIdentity = _.memoize(identity);

const fSum = memoize(sum);
const lSum = _.memoize(sum, (a, b) => JSON.stringify({ 0: a, 1: b }));

new Benchmark.Suite()
  .add('Foldr (identity)', () => assert(fIdentity(5) === 5))
  .add('Lodash (identity)', () => assert(lIdentity(5) === 5))
  .add('Foldr (sum)', () => assert(fSum(1, 2) === 3))
  .add('Lodash (sum)', () => assert(lSum(1, 2) === 3))
  .on('cycle', handleCycleComplete)
  .run({ async: false });
