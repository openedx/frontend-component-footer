#!/usr/bin/env node
/**
 * This code originally came from https://github.com/efischer19/reactifex/blob/master/main.js,
 * which should be edx/reactifex. It is temporarily being copied here until we find it a new home.
 */

// NOTE: This script is called from Jenkins using devDependencies, so eslint is being
// disabled so it doesn't force you to make these real dependencies.
const fs = require('fs'); // eslint-disable-line import/no-extraneous-dependencies
const glob = require('glob'); // eslint-disable-line import/no-extraneous-dependencies
const path = require('path'); // eslint-disable-line import/no-extraneous-dependencies

// Expected input: a directory, possibly containing subdirectories, with .json files.  Each .json
// file is an array of translation triplets (id, description, defaultMessage).
function gatherJson(dir) {
  const ret = [];
  const files = glob.sync(`${dir}/**/*.json`);

  files.forEach((filename) => {
    const messages = JSON.parse(fs.readFileSync(filename));
    ret.push(...messages);
  });
  return ret;
}

const jsonDir = process.argv[2];
const messageObjects = gatherJson(jsonDir);

if (process.argv[3] === '--comments') { // prepare to handle the translator notes
  const thisFile = path.basename(`${__filename}`);
  const bashScriptsPath = './node_modules/reactifex/bash_scripts';

  process.stdout.write(`${thisFile}: generating bash scripts...\n`);
  process.stdout.write(`${thisFile}: info file at ${bashScriptsPath}/hashmap.json\n`);

  const messageInfo = JSON.parse(fs.readFileSync(`${bashScriptsPath}/hashmap.json`));
  const dataPath = `${bashScriptsPath}/hashed_data.txt`;

  process.stdout.write(`${thisFile}: data path is ${dataPath}\n`);
  fs.writeFileSync(dataPath, '');

  messageObjects.forEach((message) => {
    const info = messageInfo.find(mi => mi.key === message.id);
    if (info) {
      fs.appendFileSync(dataPath, `${info.string_hash}|${message.description}\n`);
    } else {
      process.stdout.write(`${thisFile}: string ${message.id} does not yet exist on transifex!\n`);
    }
  });
} else {
  const output = {};

  messageObjects.forEach((message) => {
    output[message.id] = message.defaultMessage;
  });
  fs.writeFileSync(process.argv[3], JSON.stringify(output, null, 2));
}
