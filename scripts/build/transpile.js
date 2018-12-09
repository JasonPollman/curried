/**
 * Transpiles all packages to a `dist` directory local to the package's root.
 * Currently this will output two formats: CommonJS (.js) and ESMs (.mjs).
 * This will also ouput a source map which both use.
 * @since 10/24/18
 * @file
 */

import path from 'path';
import glob from 'glob';
import fs from 'fs-extra-promise';
import Promise from 'bluebird';
import compose from 'p-compose';
import { transformFileAsync } from '@babel/core';

import {
  red,
  dim,
  cyan,
  green,
} from 'chalk';

import { PROJECT_ROOT } from '../constants';

import {
  log,
  logTap,
  getPackageFilelist,
  getPackageDirectories,
} from '../utils';

import babelrc from '../../babel.config';

const globAsync = Promise.promisify(glob);
const rel = filepath => path.relative(PROJECT_ROOT, filepath);

const withSourceMapURL = (uri, code) => code.trim().concat(`\n//# sourceMappingURL=${uri}\n`);

/**
 * Transpiles the files in a package.
 * @param {Object} options Transpiliation options.
 * @returns {Promise} Resolves once the files in the package have been transpiled.
 */
async function transformPackage(options) {
  const { ext, pkg, envName } = options;

  const srcpath = path.join(pkg, 'src');
  const outpath = path.join(pkg, 'dist');

  // This will transpile everything in src/ with a `.js`
  // extenstion that's not prefixed with `.test`
  const files = await globAsync(`${srcpath}/**/!(*.test).js`);

  return Promise.map(files, async (file) => {
    const basename = path.basename(file, path.extname(file));
    const subdirs = path.relative(srcpath, path.dirname(file));

    const destination = path.join(outpath, subdirs);
    const destinationMap = path.join(destination, `${basename}.js.map`);
    const destinationCode = path.join(destination, `${basename}.${ext}`);

    log(dim('%s => %s'), rel(file), rel(destinationCode));

    const { map, code } = await transformFileAsync(file, {
      ...babelrc,
      envName,
      sourceMaps: true,
      sourceRoot: path.relative(PROJECT_ROOT, pkg),
    });

    const withSourceMap = withSourceMapURL(path.relative(outpath, destinationMap), code);

    await Promise.all([
      fs.outputFileAsync(destinationCode, withSourceMap),
      ext === 'js' ? fs.outputFileAsync(destinationMap, JSON.stringify(map)) : Promise.resolve(),
    ]);
  });
}

/**
 * Builds a single package.
 * @param {string} pkg The current working directory for the package.
 * @returns {Promise} Resolves once the package has been transpiled.
 */
function transpilePackage(pkg) {
  return Promise.all([
    transformPackage({ pkg, envName: 'esm', ext: 'mjs' }),
    transformPackage({ pkg, envName: 'commonjs', ext: 'js' }),
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
  return Promise.mapSeries(packages, transpilePackage);
}

const transpile = compose(
  logTap(green.bold('\nTranspilation Successful!')),
  transpilePackages,
  logTap(cyan.bold('[TRANSPILING %s PACKAGES]'), pkgs => pkgs.length),
  getPackageDirectories,
  getPackageFilelist,
);

transpile(PROJECT_ROOT).catch((e) => {
  log(red.bold(e.stack));
  process.exit(1);
});
