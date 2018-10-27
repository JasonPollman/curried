/**
 * Utility function used by multiple scripts.
 * @since 10/24/18
 * @file
 */

import os from 'os';
import path from 'path';
import Promise from 'bluebird';
import fs from 'fs-extra-promise';

export const { log } = console;

/**
 * This project's root directory.
 * @type {string}
 */
export const PROJECT_ROOT = path.join(__dirname, '..');

/**
 * This absolute path to the /packages directory.
 * @type {string}
 */
export const PACKAGES_DIRECTORY = path.join(PROJECT_ROOT, 'packages');

/**
 * The maximum number of concurrent operations
 * to run at once when using Promise.map.
 * @type {number}
 */
export const MAP_CONCURRENCY = os.cpus().length - 1;

/**
 * Used to match package filepaths to determine if
 * they are internal packages or not.
 * @type {RegExp}
 */
export const INTERNAL_PACKAGES = /^internal-/;

/**
 * Curried nth function.
 * @param {number} n The nth item in the array to get.
 * @returns {function} A function to get the nth value in the array.
 * @export
 */
export const nth = n => x => x[n];

export const getBasename = filepath => path.basename(filepath);
export const isDirectory = data => nth(1)(data).isDirectory();
export const toStatsTuple = pkg => fs.lstatAsync(pkg).then(stat => [pkg, stat]);

/**
 * Creates a filter function to ignore non-internal and `ignored` packages.
 * @param {Array<string>=} ignored A set of packages to ignore.
 * @returns {function} A "package filtering" function.
 */
export const filterIgnoredAndInternalPackages = (ignored = []) => packages => (
  packages.filter((pkg) => {
    const basename = getBasename(pkg);
    return ignored.indexOf(basename) === -1 && !INTERNAL_PACKAGES.test(basename);
  })
);

/**
 * Reads the /packages directory and returns a list of absolute paths contained within.
 * @param {string} [basepath=PACKAGES_DIRECTORY] The basepath of the directory to read.
 * @returns {Array<string>} An array of absolute filepaths contained in `basepath`.
 * @export
 */
export function getPackageFilelist(basepath) {
  return fs.readdirAsync(basepath).map(pkg => path.join(basepath, pkg));
}

/**
 * Filters a list of filepaths to only include directories using `Stat#isDirectory`.
 * @param {Array<string>} filepaths The list of filepaths to filter.
 * @returns {Array<string>} The filtered filepaths.
 * @export
 */
export function getPackageDirectories(filepaths) {
  return Promise.map(filepaths, toStatsTuple).filter(isDirectory).map(nth(0));
}

/**
 * Functional log/passthrough function.
 * @param {string} message The message to log.
 * @param {function} getMessageData A function to get data
 * from the input to the returned function.
 * @returns {function} A function that will log message and
 * return the first argument it receives.
 * @export
 */
export function logTap(message, getMessageData) {
  return x => (getMessageData ? log(message, getMessageData(x)) : log(message)) || x;
}
