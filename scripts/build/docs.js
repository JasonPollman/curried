/**
 * Builds the docs/[version].json metadata for the docs site.
 * @since 10/27/18
 * @file
 */

import path from 'path';
import fs from 'fs-extra-promise';
import jsdoc from 'jsdoc-api';
import Promise from 'bluebird';
import compose from 'p-compose';
import marked from 'marked';

import {
  red,
  cyan,
  green,
} from 'chalk';

import {
  PROJECT_ROOT,
  MAP_CONCURRENCY,
  PROJECT_META_ROOT,
} from '../constants';

import {
  log,
  logTap,
  camelize,
  getPackageFilelist,
  getPackageDirectories,
} from '../utils';

import packageJson from '../../package.json';

/**
 * Docs.json ouput destination/
 * @type {string}
 */
const DOCS_DESTNATION = path.join(PROJECT_META_ROOT, 'docs');

/**
 * Walks an object and renders all strings as inline markdown.
 * @param {Object} object The object to walk.
 * @returns {Object} The originally passed in object.
 */
function walkRecursiveInlineMarkdownRender(object) {
  if (object) {
    Object.keys(object).forEach((key) => {
      const type = typeof object[key];

      // eslint-disable-next-line no-param-reassign
      if (type === 'string') object[key] = marked.inlineLexer(object[key], []);
      if (type === 'object') walkRecursiveInlineMarkdownRender(object[key]);
    });
  }

  return object;
}

/**
 * Formats a single JSDOC block and adds it to the `docsMapping` collection.
 * @param {string} pkg The package filename this doc belongs to.
 * @param {Object} packageJson The packageJson information for this doc.
 * @param {Object} docsMapping A bucket for collectin docs.
 * @returns {undefined}
 */
function formatDoc(pkg, { name, version }, docsMapping) {
  return (doc) => {
    const {
      tags = [],
      meta = {},
      since = '',
      params,
      returns,
      examples,
      longname,
      description,
    } = doc;

    // If you do `export default function foo()` then `longname`
    // will be module.exports. Hackily rectifying that here.
    const symbol = longname === 'module.exports' ? camelize(name.replace(/^@foldr\//, '')) : longname;

    // eslint-disable-next-line no-param-reassign
    docsMapping[symbol] = {
      name: symbol,
      since: since.replace(/^v/, ''),
      package: { name, version },
      description: marked(description),
      arity: tags.find(tag => tag.title === 'arity') || 'Infinity',
      categories: tags.filter(tag => tag.title === 'category').map(x => x.value),
      params: walkRecursiveInlineMarkdownRender(params),
      returns: walkRecursiveInlineMarkdownRender(returns),
      examples,
      location: {
        source: path.relative(PROJECT_ROOT, path.join(meta.path, meta.filename)),
        lineno: meta.lineno,
        range: meta.range,
      },
    };
  };
}

/**
 * Returns a function that's passed to Promise.map and bound to the given
 * `docsMapping`. This function will read the current package's package.json
 * and parse it's JSDocs, then add the appropriate information to `docsMapping`.
 * @param {Array<object>} docsMapping An array of documents that will be written to `docs.json`.
 * @returns {function} An iteratee function for Promise.map below.
 */
function buildPackageDoc(docsMapping) {
  return async (pkg) => {
    const [filePackageJson, rawDocs] = await Promise.all([
      fs.readJsonAsync(path.join(pkg, 'package.json')),
      jsdoc.explain({ files: [path.join(pkg, 'src', 'index.js')] }),
    ]);

    // Only document stuff with `@publishdoc`
    const docs = rawDocs.filter(doc => (doc.tags || []).find(x => x.title === 'publishdoc'));
    docs.forEach(formatDoc(pkg, filePackageJson, docsMapping));
  };
}

/**
 * Generates the `docs/docs.json` metadata file.
 * @param {Array<string>} packages The list of packages to generate docs for.
 * @returns {Promise} Resolves once the docs file has been written to disk.
 */
async function buildDocs(packages) {
  const docs = {};
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

buildJSDocs(PROJECT_ROOT).catch((e) => {
  log(red.bold(e.stack));
  process.exit(1);
});
