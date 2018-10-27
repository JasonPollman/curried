/**
 * Creates a bundled, full UMD version of each package using webpack.
 * This will emit a UMD version and source map for each non-internal package
 * at `dist/[package]`.
 * @since 10/27/18
 * @file
 */

import zlib from 'zlib';
import path from 'path';
import webpack from 'webpack';
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
  getBasename,
  PACKAGES_DIRECTORY,
  getPackageFilelist,
  getPackageDirectories,
  filterIgnoredAndInternalPackages,
} from './utils';

import packageJson from '../package.json';

const webpackAsync = Promise.promisify(webpack);

/**
 * The banner applied to the top of each bundle file.
 * @type {string}
 */
const banner = `
The @foldr/[name] library.
@filename [filebase]
@license ${packageJson.license}
`;

/**
 * Base webpack config applied to each entry.
 * @type {Object}
 */
const BASE_WEBPACK_CONFIG = {
  mode: 'production',
  devtool: 'source-map',
  target: 'web',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].min.js',
    library: '[name]',
    libraryTarget: 'umd',
    // Fixes sourcemapping file paths, since each package is independently
    // bundled, we don't need to sourcemaps to reference actual project paths.
    devtoolModuleFilenameTemplate(info) {
      const src = info.absoluteResourcePath;
      return `foldr:///${path.relative(path.dirname(path.dirname(src)), src)}`;
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // Uses the source map in `[package]/dist/index.js.map`
        // So we don't have to re-transpile the code.
        use: ['source-map-loader'],
        enforce: 'pre',
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({ banner: banner.trim() }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  // Tell webpack not to shim these node globals, since @folder/internal-env
  // handles this in a way that's agnostic to webpack.
  // This also reduces about 2kb in bundle sizes.
  node: {
    global: false,
    process: false,
  },
};

/**
 * Creates the webpack config for bundling.
 * @param {Array<string>} packages The list packages to bundle (absolute filepaths).
 * @returns {Object} The prepared webpack configuration.
 */
function generateWebpackConfig(packages) {
  const entries = {};

  packages.forEach((pkg) => {
    const basename = getBasename(pkg);
    entries[basename === 'all' ? 'foldr' : basename] = `${pkg}/dist/index.js`;
  });

  return { ...BASE_WEBPACK_CONFIG, entry: entries };
}

/**
 * Prints information about the `full` bundle size.
 * @returns {undefined}
 */
async function printBundleSizes() {
  const source = path.join(__dirname, '..', 'dist', 'foldr.min.js');
  const contents = await fs.readFileAsync(source);

  const gzipped = await new Promise((resolve, reject) => zlib.gzip(contents, (err, results) => {
    if (err) return reject(err);
    return resolve(results);
  }));

  log(
    magenta.bold('\nSize of `foldr.min.js` distributable is %skb (%skb gizpped)\n'),
    Math.trunc(Buffer.byteLength(contents) / 1000),
    Math.trunc(Buffer.byteLength(gzipped) / 1000),
  );
}

const transpile = compose(
  printBundleSizes,
  logTap(green.bold('Packages bundled successfully!')),
  webpackAsync,
  generateWebpackConfig,
  logTap(cyan.bold('Bundling %s packages...'), pkgs => pkgs.length),
  filterIgnoredAndInternalPackages(),
  getPackageDirectories,
  getPackageFilelist,
);

transpile(PACKAGES_DIRECTORY).catch((e) => {
  log(red.bold(e.stack));
  process.exit(1);
});
