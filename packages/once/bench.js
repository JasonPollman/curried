const _ = require('lodash');
const Benchmark = require('benchmark');

const once = require('./dist').default;

const { log } = console;

const toFixed = n => n.toLocaleString('en-US', { maximumFractionDigits: 0 });

function handleCycleComplete({ target }) {
  const { name, hz, error } = target;
  log(`${name}: ${error ? `[Error: ${error.message}]` : toFixed(hz)}`);
}

const onceDoubleLodash = _.once(num => num * 2);
const onceDoubleFoldr = once(num => num * 2);

new Benchmark.Suite()
  .add('Foldr #1', () => onceDoubleFoldr(2))
  .add('Lodash #1', () => onceDoubleLodash(2))
  .on('cycle', handleCycleComplete)
  .run({ async: true });
