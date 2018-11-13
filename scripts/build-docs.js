/**
 * Builds the docs-[version].json metadata for the docs site.
 * @since 10/27/18
 * @file
 */

import path from 'path';
import fs from 'fs-extra-promise';
import jsdoc from 'jsdoc-api';
import Promise from 'bluebird';
import compose from 'p-compose';

import {
  red,
  cyan,
  green,
} from 'chalk';

import {
  log,
  logTap,
  PROJECT_ROOT,
  MAP_CONCURRENCY,
  PROJECT_META_ROOT,
  PACKAGES_DIRECTORY,
  getPackageFilelist,
  getPackageDirectories,
} from './utils';

import packageJson from '../package.json';

/**
 * Docs.json ouput destination/
 * @type {string}
 */
const DOCS_DESTNATION = path.join(PROJECT_META_ROOT, 'docs');

/**
 * Returns a function that's passed to Promise.map and bound to the given
 * `docsBucket`. This function will read the current package's package.json
 * and parse it's JSDocs, then add the appropriate information to `docsBucket`.
 * @param {Array<object>} docsBucket An array of documents that will be written to `docs.json`.
 * @returns {function} An iteratee function for Promise.map below.
 */
function buildPackageDoc(docsBucket) {
  return async (pkg) => {
    const [{ name, version }, docs] = await Promise.all([
      fs.readJsonAsync(path.join(pkg, 'package.json')),
      jsdoc.explain({ files: [path.join(pkg, 'src', 'index.js')] }),
    ]);

    // Only document stuff with `@memberof foldr`
    const doc = docs.find(d => d.memberof === 'foldr');
    if (!doc) return;

    const {
      tags = [],
      meta = {},
      since = '',
      params,
      returns,
      examples,
      description,
    } = doc;

    docsBucket.push({
      name: path.basename(pkg),
      since: since.replace(/^v/, ''),
      package: { name, version },
      description,
      category: (tags.find(tag => tag.title === 'category') || {}).value || null,
      params,
      returns,
      examples,
      location: {
        source: path.relative(PROJECT_ROOT, path.join(meta.path, meta.filename)),
        lineno: meta.lineno,
        range: meta.range,
      },
    });
  };
}

/**
 * Generates the `docs/docs.json` metadata file.
 * @param {Array<string>} packages The list of packages to generate docs for.
 * @returns {Promise} Resolves once the docs file has been written to disk.
 */
async function buildDocs(packages) {
  const docs = [];
  const datetime = new Date().toISOString();
  const { version } = packageJson;

  await Promise.map(packages, buildPackageDoc(docs), { concurrency: MAP_CONCURRENCY });

  const destination = path.join(DOCS_DESTNATION, `${version}.json`);
  return fs.outputFileAsync(destination, JSON.stringify({ datetime, version, docs }));
}

const buildJSDocs = compose(
  logTap(green.bold('Docs metadata built successfully!')),
  buildDocs,
  logTap(cyan.bold('[BUILDING DOCS METADATA]')),
  getPackageDirectories,
  getPackageFilelist,
);

buildJSDocs(PACKAGES_DIRECTORY).catch((e) => {
  log(red.bold(e.stack));
  process.exit(1);
});
