/**
 * This file contains constant variables that are used
 * during build-time to replace values that could change.
 * For the most part, these are used for interpolating templates,
 * such as default readme files.
 * @since 12/9/18
 * @file
 */

const os = require('os');
const path = require('path');

const GITHUB_URL = 'https://github.com/CloudVessel/foldr';
const PROJECT_ROOT = path.join(__dirname, '..');
const PROJECT_PACKAGES_ROOT = path.join(PROJECT_ROOT, 'packages');

// Extra variables/exports for aggregate packages.
const extras = ({ packageJson }) => ({
  variables: [
    'const { _ } = curry',
    `const VERSION = '${packageJson.version}'`,
  ],
  exports: [
    '_',
    'VERSION',
  ],
});

module.exports = Object.freeze({
  PROJECT_ROOT,
  // The path to this project's /meta directory.
  PROJECT_META_ROOT: path.join(PROJECT_ROOT, 'meta'),
  // The path to this project's /caches directory.
  PROJECT_CACHES_ROOT: path.join(PROJECT_ROOT, 'caches'),
  // The path to this project's /resources directory.
  PROJECT_RESOURCES_ROOT: path.join(PROJECT_ROOT, 'resources'),
  // The path to this project's /packages directory.
  PROJECT_PACKAGES_ROOT,
  // The path to the distributable package (the "all" package).
  DIST_PACKAGE_ROOT: path.join(PROJECT_PACKAGES_ROOT, 'aggregates', 'all'),
  // The path to emit dist files to.
  DIST_DESTINATION: path.join(PROJECT_ROOT, 'dist'),
  // The maximum number of concurrent operations to run at once when using `Promise.map`.
  MAP_CONCURRENCY: os.cpus().length - 1,
  // Used to differentiate from internal/public packages.
  INTERNAL_PACKAGES: /^internal-/,
  // Docs.json ouput destination directory.
  DOCS_DESTNATION: path.join(PROJECT_ROOT, 'meta', 'docs'),
  // The public URL to the documentation website
  DOCS_SITE_URL: 'http://foldr.com',
  // The GitHub URL for this project
  GITHUB_URL: 'https://github.com/CloudVessel/foldr',
  // The GitHub URL to the categories directory.
  GITHUB_CATEGORIES_URL: path.join(GITHUB_URL, 'blob/master/packages/categories'),
  // The path to the generated packages directory.
  AGGREGATE_PACKAGES_ROOT: path.join(PROJECT_PACKAGES_ROOT, 'aggregates'),
  // Configuration for the building of aggregate packages...
  AGGREGATE_CONFIG: {
    aggregates: [
      {
        name: 'all',
        test: /.*/,
        extras,
        packageJsonConfigOverrides: {
          description: 'The entire foldr library collection',
        },
        banner: () => `
        /**
         * The @foldr library.
         * This is an automatically generated file that aggregates all of the individual
         * packages in the @foldr mono-repo and exports them as a single requirable module.
         * Only "non-internal" packages and some other useful things (such as the curry/partial
         * placeholder symbol) are exposed via this module.
         * @since ${new Date().toLocaleDateString()}
         * @file
         */
        `,
      },
      {
        name: 'functional',
        test: /function(al)?\//,
        extras,
        packageJsonConfigOverrides: {
          description: 'The foldr functional collection',
          keywords: [
            'foldr',
            'functional',
            'utility',
            'library',
            'fp',
          ],
        },
        banner: () => `
        /**
         * The @foldr functional library.
         * This is an automatically generated file that aggregates all of the functional
         * packages in the @foldr mono-repo and exports them as a single requirable module.
         * Only functional packages and some other useful things (such as the curry/partial
         * placeholder symbol) are exposed via this module.
         * @since ${new Date().toLocaleDateString()}
         * @file
         */
        `,
      },
    ],
  },
});
