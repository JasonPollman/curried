/**
 * Creates a bundled, full UMD versions of each package using webpack.
 * This will emit a UMD version and source map for each non-internal package
 * at `dist/[package].min.js`.
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
  getENV,
  PROJECT_ROOT,
  PACKAGES_DIRECTORY,
} from './utils';

import packageJson from '../package.json';

const webpackAsync = Promise.promisify(webpack);

/**
 * The banner applied to the top of each bundle file.
 * @todo This could use some TLC and a copyright.
 * @type {string}
 */
const banner = `
The @foldr library.
@version ${packageJson.version}
@built ${new Date().toISOString()}
@license ${packageJson.license}
`;

/**
 * Base webpack config applied to each entry.
 * @type {Object}
 */
const BASE_WEBPACK_CONFIG = {
  mode: getENV('BUNDLE_MODE', 'production'),
  devtool: 'source-map',
  target: 'web',
  // Tell webpack not to shim node globals, since @folder/internal-env
  // handles this in a way that's agnostic to webpack.
  // This also reduces about 2kb in bundle sizes.
  node: false,
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].min.js',
    library: '[name]',
    libraryTarget: 'umd',
    // Fixes sourcemapping file paths.
    // Since each package is independently bundled, we don't
    // need to sourcemaps to reference actual project paths.
    devtoolModuleFilenameTemplate(info) {
      return `foldr:///${info.absoluteResourcePath}`;
    },
  },
  module: {
    rules: [
      {
        type: 'javascript/auto',
        test: /\.m?js$/,
        // Uses the source map in `[package]/dist/index.js.map`
        // So we don't have to re-transpile the code to get
        // proper source maps.
        use: ['source-map-loader'],
        enforce: 'pre',
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({ banner: banner.trim() }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(getENV('NODE_ENV', 'production')),
      },
    }),
  ],
};

/**
 * Creates the webpack config for bundling.
 * @param {Array<string>} packages The list packages to bundle (absolute filepaths).
 * @returns {Object} The prepared webpack configuration.
 */
function generateWebpackConfig() {
  const entries = {
    foldr: path.join(PROJECT_ROOT, 'packages', 'all', 'dist', 'index.mjs'),
  };

  return { ...BASE_WEBPACK_CONFIG, entry: entries };
}

/**
 * Prints information about the `full` bundle size.
 * @returns {undefined}
 */
async function logBundleSizeStats() {
  const source = path.join(__dirname, '..', 'dist', 'foldr.min.js');
  const contents = await fs.readFileAsync(source);

  const gzipped = await new Promise((resolve, reject) => zlib.gzip(contents, (err, results) => {
    if (err) return reject(err);
    return resolve(results);
  }));

  log(
    magenta.bold('Size of `foldr.min.js` distributable is %skb (%skb gizpped)'),
    (Buffer.byteLength(contents) / 1000).toFixed(2),
    (Buffer.byteLength(gzipped) / 1000).toFixed(2),
  );
}

/**
 * Throws an error if bundling failed at all.
 * @param {Object} stats The status object from webpack compilation.
 * @returns {undefined}
 */
function validateBundles(stats) {
  if (!stats.hasErrors()) {
    return log('\n%s\n', stats.toString({
      colors: true,
      assets: true,
      chunks: false,
      modules: false,
      children: false,
      entrypoints: false,
      chunkModules: false,
      chunkOrigins: false,
    }));
  }

  throw new Error(stats.toJson().errors[0]);
}

const transpile = compose(
  logBundleSizeStats,
  logTap(green.bold('Packages bundled successfully!')),
  validateBundles,
  webpackAsync,
  generateWebpackConfig,
  logTap(cyan.bold('[BUNDLING PACKAGES]')),
);

transpile(PACKAGES_DIRECTORY).catch((e) => {
  log(red.bold(e.stack));
  process.exit(1);
});
