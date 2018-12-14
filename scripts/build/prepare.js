/**
 * Prepares each package by normalizing each package's package.json file
 * and copying over readme.md files, .npmignore, etc.
 *
 * IMPORTANT: This script requires that the `npm run build:docs` is run prior!
 *
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
  camelize,
  getPackageFilelist,
  filterCategoriesOnly,
  getPackageDirectories,
} from '../utils';

const {
  PROJECT_ROOT,
  MAP_CONCURRENCY,
  DOCS_DESTNATION,
  PROJECT_RESOURCES_ROOT,
} = constants;

const TEMPLATES_ROOT = path.join(PROJECT_RESOURCES_ROOT, 'templates');

// Read in the most recently published docs.
const { docs } = fs.readJsonSync(path.join(DOCS_DESTNATION, `${lernaConfig.version}.json`));

// Compile the standalone package readme template
const readmeTemplate = handlebars.compile(fs.readFileSync(path.join(TEMPLATES_ROOT, 'readme.hbs'), 'utf8'));

// Compile the standalone package .npmignore template
const npmignoreTemplate = handlebars.compile(fs.readFileSync(path.join(TEMPLATES_ROOT, 'npmignore.hbs'), 'utf8'));

/**
 * Emits the "filled" in package.json for the specified package.
 * @param {string} pkg The current package to write the package.json for.
 * @param {Object} tokens Replacement tokens.
 * @returns {Promise} Resolves once the package.json file has been written to disk.
 */
async function updatePackageJson(pkg, tokens) {
  const pkgJsonSourcepath = path.join(pkg, 'package.json');
  return fs.writeJsonAsync(pkgJsonSourcepath, tokens.package);
}

/**
 * Renders and copies over the readme.md file for a package.
 * @param {string} pkg The current package to write the readmd.md file for.
 * @param {Object} tokens Replacement tokens.
 * @returns {Promise} Resolves once the readme.md file has been written to disk.
 */
async function maybeCopyPackageReadme(pkg, tokens) {
  const destination = path.join(pkg, 'readme.md');
  return fs.writeFileAsync(destination, readmeTemplate(tokens));
}

/**
 * Renders and copies over the .npmignore file for a package.
 * @param {string} pkg The current package to write the .npmignore file for.
 * @param {Object} tokens Replacement tokens.
 * @returns {Promise} Resolves once the .npmignore file has been written to disk.
 */
async function maybeCopyPackageNPMIgnore(pkg, tokens) {
  const destination = path.join(pkg, '.npmignore');
  return fs.writeFileAsync(destination, npmignoreTemplate(tokens));
}

/**
 * Prepares a standalone package by coping over boilerplate files (readme.md, .npmignore, etc.).
 * This also "fills in" missing information from the package's package.json file.
 * @param {string} pkg The current working directory for the package.
 * @returns {Promise} Resolves once the package has been "prepared".
 */
async function preparePackage(pkg) {
  const pkgJsonSourcepath = path.join(pkg, 'package.json');
  const packageJson = await fs.readJsonAsync(pkgJsonSourcepath);

  const basename = path.basename(pkg);
  const camelCasedName = camelize(basename);

  const formattedPackageJson = {
    name: `@foldr/${basename}`,
    ...packageJsonTemplate,
    ...packageJson,
  };

  const example = ((docs[camelCasedName] || {}).examples || [])[0];

  // Replacement tokens used when interpolating the handlebars
  // templates for readme.md, .npmignore files, etc.
  const tokens = {
    constants,
    package: formattedPackageJson,
    docs: {
      ...docs[camelCasedName],
      // For standalone readme.md's replace the import for that specific module.
      // This can be overwritten by manually editing the readme.md file in the
      // specific package. It will not be overwritten if the file already exists.
      example: example && example.trim().replace(
        new RegExp(`^import \\{ ${camelCasedName} \\} from '@foldr/all';\\s*$`, 'm'),
        `import ${camelCasedName} from '${formattedPackageJson.name}';\n`,
      ),
    },
    derived: {
      basename,
      camelCasedName,
    },
  };

  return Promise.all([
    updatePackageJson(pkg, tokens),
    maybeCopyPackageReadme(pkg, tokens),
    maybeCopyPackageNPMIgnore(pkg, tokens),
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
  return Promise.map(packages, preparePackage, { concurrency: MAP_CONCURRENCY });
}

const prepare = compose(
  logTap(green.bold('Packages Prepared Successfully!')),
  preparePackages,
  logTap(cyan.bold('[PREPARING %s PACKAGES]'), pkgs => pkgs.length),
  filterCategoriesOnly,
  getPackageDirectories,
  getPackageFilelist,
);

prepare(PROJECT_ROOT).catch((e) => {
  log(red.bold(e.stack));
  process.exit(1);
});
