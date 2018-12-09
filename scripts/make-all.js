/**
 * Creates the `@foldr/all` aggregate package by creating an all/index.js file
 * that imports all of the non-internal packages in the /packages directory.
 * This is basically the "full" build of all foldr packages.
 * @since 10/24/18
 * @file
 */

import path from 'path';
import Promise from 'bluebird';
import compose from 'p-compose';
import fs from 'fs-extra-promise';

import {
  red,
  cyan,
  green,
  magenta,
} from 'chalk';

import {
  log,
  logTap,
  camelize,
  MAP_CONCURRENCY,
  PACKAGES_DIRECTORY,
  getPackageFilelist,
  getPackageDirectories,
  filterIgnoredAndInternalPackages,
} from './utils';

import mainPackageJson from '../package.json';

/**
 * The path to /packages/all.
 * @type {string}
 */
const FOLDR_ALL_PACKAGE_ROOT = path.join(PACKAGES_DIRECTORY, 'auto', 'all');

/**
 * The path to /packages/all/src/index.js.
 * @type {string}
 */
const FOLDR_ALL_INDEX_DESTINATION = path.join(FOLDR_ALL_PACKAGE_ROOT, 'src', 'index.js');

const EXTRAS = ({ packageJson }) => ({
  variables: [
    'const { _ } = curry',
    `const VERSION = '${packageJson.version}'`,
  ],
  exports: [
    '_',
    'VERSION',
  ],
});

/**
 * Gets the package.json contents for the /packages/all package.
 * @returns {Promise<Object>} The package.json contents.
 */
function getFoldrAllPackageJson() {
  const foldrAllPackageJsonSource = path.join(FOLDR_ALL_PACKAGE_ROOT, 'package.json');
  return fs.readJsonAsync(foldrAllPackageJsonSource);
}

/**
 * Renames some packages.
 * @param {string} camelizedFunctionName The camel cased function name.
 * @returns {string} The renamed function name.
 */
function fixCamelizeNamingIssues(camelizedFunctionName) {
  return camelizedFunctionName
    .replace(/Regexp/g, 'RegExp')
    .replace(/Nan/g, 'NaN')
    .replace(/^false$/, 'False')
    .replace(/^true$/, 'True');
}

/**
 * Generates the contents for the /packages/all/src/index.js file.
 * @param {Object<Object>} packageJsons An object containing all of the package.json files
 * this package is dependent on (keyed by package name).
 * @returns {Proimse<string>} Resolves with the generated contents for /packages/all/src/index.js.
 */
async function generateFoldrAllIndexContent(packageJsons) {
  const modules = Object.keys(packageJsons);
  const sorted = modules.sort();

  const symbols = sorted.map(module => module.replace(/^@foldr\//, ''))
    .map(camelize)
    .map(fixCamelizeNamingIssues);

  // All of the `import x from 'y';` statements.
  const imports = sorted.map((module, i) => `import ${symbols[i]} from '${module}';`).join('\n');
  const extras = EXTRAS({ packageJson: await getFoldrAllPackageJson() });

  // An { x, y, z } like statement.
  // Will be prepended with `export` and `export default` below.
  const exported = `{
    ${extras.exports.join(',\n    ')},
    ${symbols.join(',\n    ')},
  }`;

  const rendered = `
  /**
   * The @foldr library.
   * This is an automatically generated file that aggregates all of the individual
   * packages in the @foldr mono-repo and exports them as a single requirable module.
   * Only "non-internal" packages and some other useful things (such as the curry/partial
   * placeholder symbol) are exposed via this module.
   * @since ${new Date().toLocaleDateString()}
   * @file
   */

  ${imports}

  ${extras.variables.join(';\n  ')};

  export ${exported};
  `;

  return rendered.trim().replace(/^ {2}/gm, '').concat('\n');
}

/**
 * Generates the /packages/all/src/index.js file.
 * @param {Object<Object>} packageJsons An object containing all of the package.json files
 * this package is dependent on (keyed by package name).
 * @returns {Proimse<string>} Resolves with the generated contents for /packages/all/src/index.js.
 */
async function generateFoldrAllPackageIndexFile(packageJsons) {
  const banner = 'Found %s total exports for @foldr/all package...';
  log(magenta.bold(banner), Object.keys(packageJsons).length);

  const rendered = await generateFoldrAllIndexContent(packageJsons);
  await fs.outputFileAsync(FOLDR_ALL_INDEX_DESTINATION, rendered);
  log(green.bold('Index file for `@foldr/all` generated successfully!'));
}

function makeAllPackageJson() {
  return {
    name: '@foldr/all',
    version: '0.0.0',
    main: 'dist',
    sideEffects: false,
  };
}

/**
 * Updates the package.json for the `@foldr/all` package by updating the
 * `dependencies` with the latest version of each dependent package.
 * @param {Object<Object>} packageJsons An object containing all of the package.json files
 * this package is dependent on (keyed by package name).
 * @returns {Proimse<void>} Resolves when the package.json has been updated.
 */
async function updateFoldrAllPackageDependencies(packageJsons) {
  const foldrAllPackageJsonSource = path.join(FOLDR_ALL_PACKAGE_ROOT, 'package.json');

  const foldrAllPackageJsonContents = await fs
    .readJsonAsync(foldrAllPackageJsonSource)
    .catch(makeAllPackageJson);

  // Reset dependencies and the version of the package.
  foldrAllPackageJsonContents.dependencies = {};
  foldrAllPackageJsonContents.version = mainPackageJson.version;

  Object.keys(packageJsons).sort().forEach((key) => {
    const { name, version } = packageJsons[key];
    foldrAllPackageJsonContents.dependencies[name] = `^${version}`;
  });

  await fs.outputJsonAsync(foldrAllPackageJsonSource, foldrAllPackageJsonContents);
  log(green.bold('Package.json file for `@foldr/all` updated successfully!'));
}

/**
 * Loads the package json files for all the non-internal packages in
 * the /packages library.
 * @param {*} packages The absolute filepaths to all the non-internal packages.
 * @returns {Promise<Object<Object>>} An object containing all of the packages
 * keyed by the package name.
 */
async function getLibraryPackageJsonFiles(packages) {
  const results = {};

  const getPackageJson = async (pkg) => {
    const packageJson = await fs.readJsonAsync(path.join(pkg, 'package.json'));
    results[packageJson.name] = packageJson;
  };

  await Promise.map(packages, getPackageJson, { concurrency: MAP_CONCURRENCY });
  return results;
}

const setup = compose(
  getLibraryPackageJsonFiles,
  filterIgnoredAndInternalPackages(['all']),
  getPackageDirectories,
  getPackageFilelist,
  logTap(cyan.bold('[BUILDING ALL PACKAGE]')),
);

const build = async (dependencies) => {
  await updateFoldrAllPackageDependencies(dependencies);
  await generateFoldrAllPackageIndexFile(dependencies);
};

setup(PACKAGES_DIRECTORY).then(build).catch((e) => {
  log(red.bold(e.stack));
  process.exit(1);
});
