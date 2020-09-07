#!/usr/bin/env node
const path = require("path");

process.env.SET_LOC = path.join(__dirname, "../set.json");

require("./commands/setCommand");
require("./commands/listCommand");
require("./commands/initCommand");
