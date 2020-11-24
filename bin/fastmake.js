#!/usr/bin/env node

const create = require("../index.js");
try {
  const path = require("path");
  let dir = process.argv[2];
  if (!path.isAbsolute(dir)) {
    dir = path.join(process.cwd(), dir);
  }
  create(dir);
} catch (ex) {
  console.error(ex);
}
