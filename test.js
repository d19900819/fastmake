const fs = require("fs");

const path = require("path");

const dirpath = path.join(__dirname, "./demo");

fs.rmdirSync(dirpath, { recursive: true });

require('./index')(dirpath)
