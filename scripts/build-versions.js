/**
 * Builds the versions.json metadata for the docs site.
 * This will output a file (per `npm info`) that will list
 * all versions of the `@foldr/all` module.
 * @since 11/10/18
 * @file
 */

import path from 'path';
import fs from 'fs-extra-promise';
import compose from 'p-compose';
import { exec } from 'child_process';
import { promisify } from 'util';

import {
  red,
  cyan,
  green,
  yellow,
} from 'chalk';

import {
  log,
  logTap,
  PROJECT_META_ROOT,
} from './utils';

const execAsync = promisify(exec);

/**
 * Executes `npm info --json` on the provided module name.
 * @param {string} module The name of the module to call `npm info` on.
 * @returns {Object} The parsed npm info output.
 */
async function getModuleNPMInfo(module) {
  try {
    return JSON.parse((await execAsync(`npm info "${module}" --json`)).stdout.trim());
  } catch (e) {
    log(yellow.bold('[WARNING] `npm info` on module "%s" failed: %s'), module, e.message);
    return { 'dist-tags': {}, versions: [] };
  }
}

/**
 * Writes the versions.json file to disk, provided an `npm info` object.
 * @param {Object} info The `npm info` object.
 * @returns {Promise} Resolves once the file has been written to disk.
 */
function writeVersionsJSON(info) {
  const destination = path.join(PROJECT_META_ROOT, 'versions.json');

  const data = {
    tags: info['dist-tags'],
    versions: info.versions,
  };

  return fs.outputFileAsync(destination, JSON.stringify(data));
}

const buildVersionsJSON = compose(
  logTap(green.bold('[VERSION FILE DUMPED SUCCESSFULLY]')),
  writeVersionsJSON,
  getModuleNPMInfo,
  logTap(cyan.bold('[DUMPING VERSIONS]')),
);

buildVersionsJSON('@foldr/all').catch((e) => {
  log(red.bold(e.stack));
  process.exit(1);
});
