/**
 * Creates the `@foldr/{aggregate}` aggregate package by creating an {aggregate}/index.js file
 * that imports all of the non-internal packages in the /packages/aggregates directory.
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
  PROJECT_ROOT,
  MAP_CONCURRENCY,
  AGGREGATE_CONFIG,
  AGGREGATE_PACKAGES_ROOT,
} from '../constants';

import {
  log,
  logTap,
  camelize,
  getPackageFilelist,
  filterCategoriesOnly,
  getPackageDirectories,
} from '../utils';

import mainPackageJson from '../../package.json';
import packageJsonTemplate from '../../resources/templates/package.json';

/**
 * Filters the "global" list of category packages for the current aggregate
 * by testing the sourcepath of the module against the aggregate's `test` regular
 * expression configuration.
 * @param {Object<Object>} packageJsons The full list of category packages.
 * @param {RegExp} test The aggregate's `test` config.
 * @returns {Object} The filtered package object.
 */
function filterAggregateDependencies(packageJsons, test) {
  const results = {};

  Object.keys(packageJsons).forEach((key) => {
    const pkg = packageJsons[key];
    if (test.test(pkg.sourcepath)) results[key] = pkg;
  });

  return results;
}

/**
 * Gets the package.json contents for the /packages/all package.
 * @param {string} pkg The name of the aggregate package to get the package.json for.
 * @returns {Promise<Object>} The package.json contents.
 */
function getAggregatePackageJson(pkg) {
  const sourcepath = path.join(AGGREGATE_PACKAGES_ROOT, pkg, 'package.json');
  return fs.readJsonAsync(sourcepath);
}

/**
 * Generates the contents for the /packages/{aggregate.name}/src/index.js file.
 * @param {aggregate} aggregate The configuration for the current aggregate package being built.
 * @param {Object<Object>} memberPackageJsons An object containing all of the package.json files
 * this package is dependent on (keyed by package name).
 * @returns {Proimse<string>} Resolves with the generated contents for /packages/all/src/index.js.
 */
async function generateAggregateIndexContent({
  name,
  extras = () => ({}),
  banner = () => '',
}, memberPackageJsons) {
  const modules = Object.keys(memberPackageJsons);
  const sorted = modules.sort();
  const symbols = sorted.map(module => module.replace(/^@foldr\//, '')).map(camelize);

  // All of the `import x from 'y';` statements.
  const imports = sorted.map((module, i) => `import ${symbols[i]} from '${module}';`).join('\n');

  const xtras = extras({ packageJson: await getAggregatePackageJson(name) });
  xtras.symbols = xtras.symbols || [];
  xtras.variables = xtras.variables || [];

  // An { x, y, z } like statement.
  // Will be prepended with `export` and `export default` below.
  const exported = `{
    ${xtras.exports.join(',\n    ')},
    ${symbols.join(',\n    ')},
  }`;

  const rendered = `
  ${banner().trim().replace(/^ {2,}/mg, ' ')}

  ${imports}

  ${xtras.variables.join(';\n  ')};

  export ${exported};
  `;

  return rendered.trim().replace(/^ {2}/gm, '').concat('\n');
}

/**
 * Generates the /packages/{aggregate.name}/src/index.js file.
 * @param {aggregate} aggregate The configuration for the current aggregate package being built.
 * @param {Object<Object>} memberPackageJsons An object containing all of the package.json files
 * this package is dependent on (keyed by package name).
 * @returns {Proimse<string>} Resolves with the generated contents for /packages/all/src/index.js.
 */
async function generateAggregatePackageIndexFile(aggregate, memberPackageJsons) {
  const banner = `Found %s total exports for @foldr/${aggregate.name} package...`;
  log(magenta.bold(banner), Object.keys(memberPackageJsons).length);

  const rendered = await generateAggregateIndexContent(aggregate, memberPackageJsons);
  await fs.outputFileAsync(path.join(AGGREGATE_PACKAGES_ROOT, aggregate.name, 'src', 'index.js'), rendered);
  log(green.bold(`Index file for "@foldr/${aggregate.name}" generated successfully!`));
}

/**
 * Creates a "stubbed" (blank) package.json file for the current aggregate being built.
 * This is used if the aggregate has never been built before and the file doesn't exist.
 * @param {Object} aggregate The config for the current aggregate being built.
 * @returns {Object} A barebones package.json config.
 */
function stubAggregatePackageJson(aggregate) {
  return () => ({
    name: `@foldr/${aggregate.name}`,
    ...packageJsonTemplate,
  });
}

/**
 * Updates the package.json for the `@foldr/all` package by updating the
 * `dependencies` with the latest version of each dependent package.
 * @param {Object} aggregate The config for the current aggregate being built.
 * @param {Object<Object>} memberPackageJsons An object containing all of the package.json files
 * this package is dependent on (keyed by package name).
 * @returns {Proimse<void>} Resolves when the package.json has been updated.
 */
async function updateAggregatePackageDependencies(aggregate, memberPackageJsons) {
  const aggregatePackageJsonSource = path.join(AGGREGATE_PACKAGES_ROOT, aggregate.name, 'package.json');

  let aggregatePackageJsonContents = await fs
    .readJsonAsync(aggregatePackageJsonSource)
    .catch(stubAggregatePackageJson);

  // Reset dependencies and the version of the package.
  aggregatePackageJsonContents.dependencies = {};
  aggregatePackageJsonContents.version = mainPackageJson.version;

  aggregatePackageJsonContents = {
    ...aggregatePackageJsonContents,
    ...aggregate.packageJsonConfigOverrides,
  };

  Object.keys(memberPackageJsons).sort().forEach((key) => {
    const { name, version } = memberPackageJsons[key];
    aggregatePackageJsonContents.dependencies[name] = `^${version}`;
  });

  await fs.outputJsonAsync(aggregatePackageJsonSource, aggregatePackageJsonContents);
  log(green.bold(`Package.json file for "@foldr/${aggregate.name}" updated successfully!`));
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
    const sourcepath = path.join(pkg, 'package.json');
    const packageJson = await fs.readJsonAsync(sourcepath);
    results[packageJson.name] = { ...packageJson, sourcepath };
  };

  await Promise.map(packages, getPackageJson, { concurrency: MAP_CONCURRENCY });
  return results;
}

const setup = compose(
  getLibraryPackageJsonFiles,
  filterCategoriesOnly,
  getPackageDirectories,
  getPackageFilelist,
  logTap(cyan.bold('[BUILDING AGGREGATE PACKAGES]')),
);

const buildAggregate = async (aggregate, dependencies) => {
  log(cyan.bold('Building aggregate "%s"', aggregate.name));
  await updateAggregatePackageDependencies(aggregate, dependencies);
  await generateAggregatePackageIndexFile(aggregate, dependencies);
};

const buildAggregates = async dependencies => (
  Promise.mapSeries(AGGREGATE_CONFIG.aggregates, aggregate => buildAggregate(aggregate,
    filterAggregateDependencies(dependencies, aggregate.test),
  ))
);

setup(PROJECT_ROOT).then(buildAggregates).catch((e) => {
  log(red.bold(e.stack));
  process.exit(1);
});
