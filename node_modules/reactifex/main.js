#!/usr/bin/env node
const path = require("path");
const fs = require("fs");

var combineInputs = (dir) => {
  // expected input: a directory containing subdirs, each of which contains displayMessages.json
  var ret = [];
  var subDirs = fs.readdirSync(dir);
  subDirs.forEach((subdir) => {
    var messageFile = path.join(dir, subdir, "displayMessages.json");
    var messages = JSON.parse(fs.readFileSync(messageFile));
    messages.forEach((message) => {ret.push(message);});
  });
  return ret;
};
var inData = combineInputs(process.argv[2]);

var outData = {};
inData.forEach((message) => {
  outData[message["id"]] = message["defaultMessage"];
});

if (process.argv[3] === "--comments") {
  process.stdout.write("generating bash scripts...\n");
  var messageInfo = JSON.parse(fs.readFileSync(__dirname + "/bash_scripts/hashmap.json"));
  var dataPath = __dirname + "/bash_scripts/hashed_data.txt";
  fs.writeFileSync(dataPath, "");
  inData.forEach((message) => {
    var info = messageInfo.find(mi => mi.key == message.id);
    if (info) {
      fs.appendFileSync(dataPath, info.string_hash + "|" + message.description + "\n");
    } else {
      process.stdout.write("string " + message.id + " does not yet exist on transifex!\n");
    }
  });
} else {
  fs.writeFileSync(process.argv[3], JSON.stringify(outData, null, 2));
}
