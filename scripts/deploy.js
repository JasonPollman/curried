/**
 * Uploads all json files in the /meta directory to S3.
 * @since 11/10/18
 * @file
 */

import glob from 'glob';
import path from 'path';
import AWS from 'aws-sdk';
import Promise from 'bluebird';
import compose from 'p-compose';
import fs from 'fs-extra-promise';
import { promisify } from 'util';

import {
  dim,
  red,
  cyan,
  green,
} from 'chalk';

import {
  log,
  logTap,
  getENV,
  PROJECT_ROOT,
  MAP_CONCURRENCY,
  PROJECT_META_ROOT,
} from './utils';

const globAsync = promisify(glob);
const AWS_REGION = getENV('AWS_REGION', 'us-east-1');
const META_BUCKET = getENV('FOLDR_META_BUCKET', null);

const S3 = new AWS.S3({ region: AWS_REGION });

/**
 * Uploads a file to S3.
 * @param {Object} Upload options (as returned from the `read` function below).
 * @returns {Promise} Resolves once the file has been put to S3.
 */
function upload({ file, buff }) {
  const destination = path.relative(PROJECT_ROOT, file);

  const params = {
    Body: buff,
    Bucket: META_BUCKET,
    Key: destination,
  };

  log(dim('Putting => S3://%s/%s '), META_BUCKET, destination);
  return S3.putObject(params).promise();
}

/**
 * Reads the file from the meta directory.
 * @param {string} file The filepath to read.
 * @returns {Promise<Object>} Resolves with an object containing the `file` and
 * a `buff` property, which are the file's filepath and contents, respectively.
 */
async function read(file) {
  return {
    file,
    buff: await fs.readFileAsync(file),
  };
}

/**
 * Iterates over the globbed JSON files MAP_CONCURRENCY (7) at a time
 * and reads, then uploads them to S3.
 * @param {Array<string>} files The list of files to process.
 * @returns {Promise} Resolves once all files have been uploaded to S3.
 */
function processJSONMetaFiles(files) {
  return Promise.map(files, compose(upload, read), { concurrency: MAP_CONCURRENCY });
}

/**
 * Gets the list of all JSON files in the /meta directory.
 * @returns {Promise<Array<string>>} Resolves with a list of absoulte filepaths.
 */
function globJSONFiles() {
  return globAsync(`${PROJECT_META_ROOT}/**/*.json`);
}

const putMetaJSONFiles = compose(
  logTap(green.bold('[%s META FILES UPLOADED]'), results => results.length),
  processJSONMetaFiles,
  globJSONFiles,
  logTap(cyan.bold('[UPLOADING META DIRECTORY TO S3]')),
);

putMetaJSONFiles().catch((e) => {
  log(red.bold(e.stack));
  process.exit(1);
});
