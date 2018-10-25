const _ = require('lodash');
const R = require('rambda');
const Benchmark = require('benchmark');

const compact = require('./dist');

const { log } = console;

const toFixed = n => n.toLocaleString('en-US', { maximumFractionDigits: 0 });

function handleCycleComplete({ target }) {
  const { name, hz, error } = target;
  log(`${name}: ${error ? `[Error: ${error.message}]` : toFixed(hz)}`);
}

new Benchmark.Suite()
  .add('Foldr #1', () => compact([1, 2, {}, '', [3, 4, 5, [6, 7, [8]]], 9, null, undefined, [null, [null]]]))
  .add('Lodash #1', () => _.compact([1, 2, {}, '', [3, 4, 5, [6, 7, [8]]], 9, null, undefined, [null, [null]]]))
  .add('Rambda #1', () => R.compact([1, 2, {}, '', [3, 4, 5, [6, 7, [8]]], 9, null, undefined, [null, [null]]]))
  .on('cycle', handleCycleComplete)
  .run({ async: true });
