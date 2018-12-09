/**
 * Prepares each package by normalizing each package's package.json file
 * and copying over readme.md files, etc.
 * @since 12/9/18
 * @file
 */

import path from 'path';
import Promise from 'bluebird';
import compose from 'p-compose';
import fs from 'fs-extra-promise';
import handlebars from 'handlebars';

import {
  red,
  cyan,
  green,
} from 'chalk';

import constants from '../constants';
import lernaConfig from '../../lerna.json';

import packageJsonTemplate from '../../resources/templates/package.json';

import {
  log,
  logTap,
  getPackageFilelist,
  getPackageDirectories,
  camelize,
} from '../utils';

const {
  PROJECT_ROOT,
  DOCS_DESTNATION,
  PROJECT_RESOURCES_ROOT,
} = constants;

const TEMPLATES_ROOT = path.join(PROJECT_RESOURCES_ROOT, 'templates');

const docs = fs.readJsonSync(path.join(DOCS_DESTNATION, `${lernaConfig.version}.json`));

const readmeTemplate = handlebars.compile(
  fs.readFileSync(path.join(TEMPLATES_ROOT, 'readme.hbs'), 'utf8'),
);

const npmignoreTemplate = handlebars.compile(
  fs.readFileSync(path.join(TEMPLATES_ROOT, 'npmignore.hbs'), 'utf8'),
);

async function outputPackageJson(pkg, tokens) {
  const pkgJsonSourcepath = path.join(pkg, 'package.json');
  return fs.writeJsonAsync(pkgJsonSourcepath, tokens.package);
}

async function copyPackageReadme(pkg, tokens) {
  const destination = path.join(pkg, 'readme.md');
  return fs.writeFileAsync(destination, readmeTemplate(tokens));
}

async function copyPackageNPMIgnore(pkg, tokens) {
  const destination = path.join(pkg, '.npmignore');
  return fs.writeFileAsync(destination, npmignoreTemplate(tokens));
}

/**
 * Builds a single package.
 * @param {string} pkg The current working directory for the package.
 * @returns {Promise} Resolves once the package has been transpiled.
 */
async function preparePackage(pkg) {
  const pkgJsonSourcepath = path.join(pkg, 'package.json');
  const packageJson = await fs.readJsonAsync(pkgJsonSourcepath);

  const formattedPackageJson = {
    ...packageJsonTemplate,
    ...packageJson,
  };

  const camelCasedName = camelize(formattedPackageJson.name);

  const tokens = {
    constants,
    package: formattedPackageJson,
    docs: docs[camelCasedName],
    derived: {
      camelCasedName,
    },
  };

  return Promise.all([
    outputPackageJson(pkg, tokens),
    copyPackageReadme(pkg, tokens),
    copyPackageNPMIgnore(pkg, tokens),
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
async function preparePackages(packages) {
  return Promise.mapSeries(packages, preparePackage);
}

const prepare = compose(
  logTap(green.bold('\nPackages Prepared Successfully!')),
  preparePackages,
  logTap(cyan.bold('[PREPARING %s PACKAGES]'), pkgs => pkgs.length),
  getPackageDirectories,
  getPackageFilelist,
);

prepare(PROJECT_ROOT).catch((e) => {
  log(red.bold(e.stack));
  process.exit(1);
});
