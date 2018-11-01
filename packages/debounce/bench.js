const _ = require('lodash');
const R = require('rambda');
const Benchmark = require('benchmark');

const debounce = require('./dist').default;

const { log } = console;

const toFixed = n => n.toLocaleString('en-US', { maximumFractionDigits: 0 });

function handleCycleComplete({ target }) {
  const { name, hz, error } = target;
  log(`${name}: ${error ? `[Error: ${error.message}]` : toFixed(hz)}`);
}

const foldrDebounce = debounce(num => num * 2);
const lodashDebounce = _.debounce(num => num * 2);

new Benchmark.Suite()
  .add('Foldr #1', () => foldrDebounce(2))
  .add('Lodash #1', () => lodashDebounce(2))
  .on('cycle', handleCycleComplete)
  .run({ async: true });
