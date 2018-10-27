/**
 * Transpiles all packages to a `dist` directory local to the package's root.
 * Currently this will output two formats: CommonJS (.js) and ESMs (.mjs).
 * This will also ouput a source map that is referenced by both.
 * @since 10/24/18
 * @file
 */

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

import {
  log,
  logTap,
  PROJECT_ROOT,
  MAP_CONCURRENCY,
  PACKAGES_DIRECTORY,
  getPackageFilelist,
  getPackageDirectories,
} from './utils';

const exec = Promise.promisify(ChildProcess.exec);

/**
 * This absolute path to the /.babelrc file.
 * @type {string}
 */
const BABEL_RC_PATH = path.join(PROJECT_ROOT, 'babel.config.js');

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
    --out-dir "${destination}" \
    --source-maps              \
    --ignore="${ignore}"       \
    --config-file="${babelrc}" \
  `;
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

  const promises = [
    exec(getBabelCommand({ environment: 'cjs', destination: './dist' }), { cwd }),
    exec(getBabelCommand({ environment: 'esm', destination: './temp' }), { cwd }).then(move(cwd)),
  ];

  return Promise
    .all(promises)
    .catch(e => log(red.bold('Error transpiling package %s: %s'), path.basename(cwd), e.message));
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
  return Promise.map(packages, transpilePackage, { concurrency: MAP_CONCURRENCY });
}

const transpile = compose(
  logTap(green.bold('Transpilation Successful!')),
  transpilePackages,
  logTap(cyan.bold('Transpiling %s packages...'), pkgs => pkgs.length),
  getPackageDirectories,
  getPackageFilelist,
);

transpile(PACKAGES_DIRECTORY).catch((e) => {
  log(red.bold(e.stack));
  process.exit(1);
});
