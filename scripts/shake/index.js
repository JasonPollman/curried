/**
 * Creates a webpack bundle from the resources/tree-shake-test/index.js
 * file and emits the output bundle to ensure that tree-shaking is working.
 * @since 10/27/18
 * @file
 */

import path from 'path';
import assert from 'assert';
import fs from 'fs-extra-promise';
import webpack from 'webpack';
import Promise from 'bluebird';
import compose from 'p-compose';

import {
  dim,
  red,
  cyan,
  green,
} from 'chalk';

import {
  log,
  logTap,
} from '../utils';

import { PROJECT_ROOT } from '../constants';

const webpackAsync = Promise.promisify(webpack);

const OUTPUT_DIRNAME = path.join(PROJECT_ROOT, 'temp', 'tree-shake');
const OUTPUT_FILENAME = 'shake.min.js';

const WEBPACK_CONFIG = {
  entry: {
    shake: path.join(PROJECT_ROOT, 'resources', 'tree-shake-test', 'index.js'),
  },
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: OUTPUT_DIRNAME,
    filename: OUTPUT_FILENAME,
  },
  module: {
    rules: [
      {
        type: 'javascript/auto',
        test: /\.m?js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: {
                    node: '6.9.0',
                    browsers: [
                      'last 2 versions',
                      'ie 11',
                    ],
                  },
                }],
              ],
            },
          },
        ],
      },
    ],
  },
};

/**
 * Validates that the output from bundling the resource file
 * was less than 5.5 KB. If *all* of foldr was included it would be over 54 ungzipped!
 * @returns {undefined}
 */
async function validateOutput() {
  const source = path.join(OUTPUT_DIRNAME, OUTPUT_FILENAME);
  const stat = await fs.lstatAsync(source);
  const sizeKB = (stat.size / 1000);

  try {
    assert(sizeKB < 5.5, 'Bundle size is too big!');
    log(green.bold('Tree shaking was okay. Bundle size was %skb.'), sizeKB.toFixed(2));
  } catch (e) {
    log(red.bold('Filesize is too big (%skb), tree-shaking failed!'), sizeKB.toFixed(2));
    process.exit(1);
  }
}

/**
 * Removes any files created from this process.
 * @returns {Promise} Resolves once the files have been deleted.
 */
function cleanup() {
  return fs.removeAsync(OUTPUT_DIRNAME).catchReturn();
}

const bundle = compose(
  cleanup,
  validateOutput,
  logTap(dim('Tree shaking bundle emitted...')),
  webpackAsync,
  logTap(cyan.bold('[TESTING TREE SHAKING CAPABILITIES]')),
);

bundle(WEBPACK_CONFIG).catch((e) => {
  log(red.bold(e.stack));
  process.exit(1);
});
