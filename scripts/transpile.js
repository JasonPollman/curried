/**
 * Transpiles all packages to a `dist` directory local to it's package root.
 * Currently this will output two formats: CommonJS (.js) and ESMs (.mjs).
 * This will also ouput a source map that is referenced by both.
 * @since 10/24/18
 * @file
 */

import os from 'os';
import fs from 'fs';
import path from 'path';
import Promise from 'bluebird';
import compose from 'p-compose';
import ChildProcess from 'child_process';

import {
  red,
  dim,
  cyan,
  green,
} from 'chalk';

/**
 * This project's root directory.
 * @type {string}
 */
const PROJECT_ROOT = path.join(__dirname, '..');

/**
 * This absolute path to the /packages directory.
 * @type {string}
 */
const PACKAGES_DIRECTORY = path.join(PROJECT_ROOT, 'packages');

/**
 * This absolute path to the /.babelrc file.
 * @type {string}
 */
const BABEL_RC_PATH = path.join(PROJECT_ROOT, 'babel.config.js');

/**
 * The maximum number of files to babel concurrently.
 * @type {number}
 */
const BUILD_CONCURRENCY = os.cpus().length - 1;

const exec = Promise.promisify(ChildProcess.exec);
const lstatAsync = Promise.promisify(fs.lstat);
const readdirAsync = Promise.promisify(fs.readdir);

const { log } = console;
const nth = n => x => x[n];

const toStatsTuple = pkg => lstatAsync(pkg).then(stat => [pkg, stat]);
const statsTupleIsDirectory = data => nth(1)(data).isDirectory();

/**
 * Builds the babel command to execute.
 * @param {Object} options Babel command options.
 * @returns {string} A babel command for passing to `exec`.
 */
function getBabelCommand(options) {
  const {
    source = './src',
    ignore = '**/*.test.js',
    babelrc = BABEL_RC_PATH,
    destination,
    environment = 'production',
  } = options;

  return `NODE_ENV=${environment} npx babel ${source} \
    --out-dir ${destination}    \
    --source-maps               \
    --ignore=${ignore}          \
    --config-file="${babelrc}"  \
  `;
}

/**
 * Reads the /packages directory and returns a list of absolute paths contained within.
 * @param {string} [basepath=PACKAGES_DIRECTORY] The basepath of the directory to read.
 * @returns {Array<string>} An array of absolute filepaths contained in `basepath`.
 */
function getPackageFilelist(basepath = PACKAGES_DIRECTORY) {
  log(cyan.bold('Getting package file list...'));
  return readdirAsync(basepath).map(pkg => path.join(basepath, pkg));
}

/**
 * Filters a list of filepaths to only include directories using `Stat#isDirectory`.
 * @param {Array<string>} filepaths The list of filepaths to filter.
 * @returns {Array<string>} The filtered filepaths.
 */
function getPackageDirectories(filepaths) {
  log(cyan.bold('Filtering package file list...'));
  return Promise.map(filepaths, toStatsTuple).filter(statsTupleIsDirectory).map(nth(0));
}

/**
 * Moves the temp ESM files to the dist directory and then deletes the `./temp`
 * directory for the package at `cwd`.
 * @param {string} cwd The absolute path of the current package.
 * @returns {function} A callback function that will execute the command.
 */
function move(cwd) {
  return () => exec('mv ./temp/index.js ./dist/index.mjs && rm -r ./temp', { cwd });
}

/**
 * Builds a single package.
 * @param {string} cwd The current working directory for the package.
 * @returns {Promise} Resolves once the package has been transpiled.
 */
function transpilePackage(cwd) {
  log(dim('Transpiling %s'), path.basename(cwd));

  return Promise.all([
    exec(getBabelCommand({ environment: 'cjs', destination: './dist' }), { cwd }),
    exec(getBabelCommand({ environment: 'esm', destination: './temp' }), { cwd }).then(move(cwd)),
  ]);
}

/**
 * Builds all packages by transpiling the CJS format, then the ESM format.
 * Since babel doesn't provide an easy way to rename things, we'll be transpiling
 * to CJS first in the ../dist directory, then to the ./temp directory for ESM
 * versions. Then we'll use `mv` to move the ESM versions to ./dist and rename the extension.
 * @param {Array<string>} packages The list of packages to build (absolute filepaths).
 * @returns {Promise} Resolves once all packages have been transpiled.
 */
async function transpilePackages(packages) {
  await Promise.map(packages, transpilePackage, { concurrency: BUILD_CONCURRENCY });
  log(green.bold('Transpilation Complete!'));
}

const transpile = compose(
  transpilePackages,
  getPackageDirectories,
  getPackageFilelist,
);

transpile(PACKAGES_DIRECTORY).catch(e => log(red.bold(e.stack)));
