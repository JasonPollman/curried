/**
 * Runs benchmark files for each package.
 * That is, if a package contains a bench.js schema file.
 * @since 10/27/18
 * @file
 */

import glob from 'glob';
import path from 'path';
import assert from 'assert';
import Promise from 'bluebird';
import compose from 'p-compose';
import fs from 'fs-extra-promise';
import Benchmark from 'benchmark';

import {
  dim,
  red,
  bold,
  cyan,
  green,
  yellow,
} from 'chalk';

// Libraries we'll be testing...
import lodash from 'lodash';
import fp from 'lodash/fp';
import * as ramda from 'ramda';
import * as foldr from '../packages/all';

import packageJson from '../package.json';

import {
  log,
  logTap,
  PROJECT_ROOT,
  PROJECT_META_ROOT,
} from './utils';

const LIBRARIES = {
  fp,
  foldr,
  ramda,
  lodash,
};

const noop = () => {};
const globAsync = Promise.promisify(glob);

/**
 * Stores stats about each test suite for logging/dumping
 * at the end of the benchmarking.
 * @type {Object}
 */
const stats = {};

/**
 * Filters the packages to bench according
 * to the first argument to the CLI.
 * @type {Array<string>}
 */
const filteredPackages = (process.argv[2] || '').trim()
  .split(/ *, */g)
  .filter(Boolean)
  .filter(value => value !== 'all');

/**
 * Pads a string.
 * @param {number} n The length to pad the string to.
 * @param {string} s The string to pag.
 * @returns {string} The padded string.
 */
const pad = (n, s) => ' '.repeat(n).concat(s).slice(-n);

/**
 * Formats a number to it's fixed form according to the current locale.
 * @param {number} n The number to convert.
 * @returns {string} The formatted number.
 */
const toFixedLocale = n => n.toLocaleString('en-US', { maximumFractionDigits: 0 });

/**
 * Quick and dirty object `forEach` implementation.
 * @param {Object} object The object to iterate over.
 * @param {function} iteratee The function to call for each property of the object.
 * @returns {undefined}
 */
const each = (object, iteratee) => {
  Object.keys(object).forEach(key => iteratee(object[key], key, object));
};

/**
 * Creates a function that's called when a suite test cycle is completed.
 * @param {Object} options Suite testing options.
 * @returns {function} A handler for cycle.on('complete').
 */
function handleCycleComplete(options) {
  const { pkg } = options;
  stats[pkg] = stats[pkg] || {};

  return ({ target }) => {
    const { hz, name, error } = target;
    const ops = Math.trunc(hz);

    // Extract the library name from the "banner" description name.
    // Then populate the global stats object with the results.
    const [, lib] = name.match(/\[(\w+)\]/);
    const stat = stats[pkg][lib] || {};

    stats[pkg][lib] = {
      ops: ops + (stat.ops || 0),
      passed: (stat.passed || 0) + (error ? 0 : 1),
      failed: (stat.failed || 0) + (error ? 1 : 0),
    };

    // Get the average operations per second for the current package/library.
    stats[pkg][lib].avg = Math.trunc(stats[pkg][lib].ops / (stats[pkg][lib].passed || 1));

    log('%s  %s', name, error ? red.bold(`[Error: ${error.message}]`) : green(toFixedLocale(ops)));
  };
}

/**
 * Prints a message if `foldr` isn't the fastest.
 * @param {Object} options Suite testing options.
 * @returns {undefined}
 */
function handleSuiteComplete(options) {
  return () => {
    const { pkg } = options;
    const stat = stats[options.pkg];

    let fastest;

    let bestAverage = 0;
    let foldrAverage = 0;

    // Determines which library was fastest
    // for this particular package suite run.
    each(stat, ({ avg }, library) => {
      if (library === 'foldr') foldrAverage = avg;

      if (avg > bestAverage) {
        bestAverage = avg;
        fastest = library;
      }
    });

    if (fastest !== 'foldr') {
      const diff = Math.round(Math.abs(1 - (foldrAverage / bestAverage)) * 100);
      const msg = '\n[PERFORMANCE WARNING]\nPackage "%s": %s was %s% faster than foldr!';
      log(yellow.bold(msg), pkg, fastest, diff);
    }
  };
}

/**
 * Creates a callback function for adding a set of tests to a benchmark suite.
 * @param {Benchmark.Suite} suite The suite to add the tests to.
 * @returns {function} An Array#forEach iteratee function.
 */
function addTestsToSuite(suite) {
  return (data) => {
    const {
      name,
      tests,
      setup = noop,
      expect = noop,
    } = data;

    // Call setup to get test input.
    const input = setup();

    each(tests, (test, library) => {
      const title = `${dim(pad(60, name))}  ${bold(pad(8, `[${library}]`))}`;
      let i = 0;

      // Only running assertions on the first iteration.
      suite.add(title, () => (i++ === 0 ? expect(test(input), assert, library) : test(input)));
    });
  };
}

/**
 * Executes a test suite.
 * @param {Object} options Test suite options.
 * @returns {Promise} Resolves once the test suite has completed running.
 */
function executeBenchmarkSuite(options) {
  const suite = new Benchmark.Suite();
  const { pkg, schema } = options;

  // Trigger the instantation of the test suite array.
  // This function should return a "bench schema array".
  schema({ ...LIBRARIES }).forEach(addTestsToSuite(suite));

  process.stdout.write('\n');
  log(cyan.bold('[SUITE %s]\n'), pkg.toUpperCase());

  return new Promise(resolve => suite
    .on('complete', resolve)
    .on('complete', handleSuiteComplete(options))
    .on('cycle', handleCycleComplete(options))
    .run({ async: false }),
  );
}

/**
 * Executes all of the found/filtered benchmark test suites.
 * @param {Array<Object>} suites The test suites to run.
 * @returns {Promise} Resolves once all tests suites have run.
 */
function executeBenchmarkSuites(suites) {
  if (!suites.length) {
    log(yellow.bold('No benchmark files found. Exiting...\n'));
    process.exit(0);
  }

  return Promise.mapSeries(suites, suite => (
    Promise.delay(100).then(() => executeBenchmarkSuite(suite))
  ));
}

/**
 * Finds all of the benchmark tests suites to run.
 * @returns {Array<Object>} An array of the required suite schemas.
 */
function globAndRequireBenchmarkFiles() {
  const pattern = filteredPackages.length ? `+(${filteredPackages.join('|')})` : '!(all)';
  const globString = path.join(__dirname, '..', 'packages', pattern, 'bench.js');

  log(dim('Looking for benchmark files matching: "%s"'), globString);

  return globAsync(globString).map((file) => {
    log(dim('> %s'), path.relative(PROJECT_ROOT, file));

    // eslint-disable-next-line global-require, import/no-dynamic-require
    const module = require(file);
    const pkg = path.basename(path.dirname(file));

    return { pkg, file, schema: module.default || module };
  });
}

/**
 * Calculates a totals object based on the provided stats object.
 * @param {Object} statsObject The stats object to calculate totals using.
 * @returns {Object} A totals object.
 */
function calculateTotalsFromStats(statsObject = stats) {
  const results = {};

  each(statsObject, (libraries) => {
    each(libraries, ({ ops, passed, failed }, library) => {
      const stat = results[library] || {};

      results[library] = {
        ops: ops + (stat.ops || 0),
        passed: (stat.passed || 0) + passed,
        failed: (stat.failed || 0) + failed,
      };

      results[library].avg = Math.trunc(results[library].ops / (results[library].passed || 1));
    });
  });

  return results;
}

/**
 * Writes the `bench-[version].json` file to the `/docs` directory
 * based on the stats object. This will "incrementally" update
 * the files, only updating/recalculating the packages that were
 * run during the current tests.
 * @returns {Promise} Resolves once the benchmark results have
 * been written to disk.
 */
async function updateStatsJson() {
  const destination = path.join(PROJECT_META_ROOT, 'bench', `${packageJson.version}.json`);
  const { packages } = await fs.readJsonAsync(destination).catchReturn({});

  const aggregate = { ...packages, ...stats };
  const updates = calculateTotalsFromStats(aggregate);

  return fs.outputFileAsync(destination, JSON.stringify({
    totals: updates,
    packages: aggregate,
  }));
}

/**
 * Prints final the stats to the stdout.
 * @returns {undefined}
 */
function printStatsTotals() {
  const totals = calculateTotalsFromStats(stats);

  log(cyan.bold('\n[RESULTS: AVERAGE OPERATIONS PER SECOND]\n'));
  each(totals, ({ avg }, library) => {
    log('  %s %s', bold(pad(8, `[${library}]`)), green(toFixedLocale(avg)));
  });
}

const start = Date.now();
const MS2S = x => (x / 1000 / 60).toFixed(2);

const benchmark = compose(
  () => log(cyan.bold('\n[BENCHMARK TESTING COMPLETED IN %sM]\n'), MS2S(Date.now() - start)),
  updateStatsJson,
  printStatsTotals,
  executeBenchmarkSuites,
  globAndRequireBenchmarkFiles,
  logTap(cyan.bold('[BENCHMARKING]\n')),
);

benchmark().catch((e) => {
  log(red.bold(e.stack));
  process.exit(1);
});
