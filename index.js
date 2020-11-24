const fs = require("fs");

const path = require("path");

const { spawnSync } = require("child_process");

const info = console.info;

function createDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
  info(`create dir ${dir}`);
}

function copyDir(dir, dst) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const srcfilePath = path.join(dir, file);
    const dstFilePath = path.join(dst, file);
    const stat = fs.statSync(srcfilePath);
    if (stat.isDirectory()) {
      fs.mkdirSync(dstFilePath);
      info(`mkdir ${dstFilePath}`);
      copyDir(srcfilePath, dstFilePath);
    } else {
      fs.copyFileSync(srcfilePath, dstFilePath);
      info(`copy ${srcfilePath} to ${dstFilePath}`);
    }
  });
}

function npmInstall(dir) {
  const { output, stdout, stderr, status, error } = spawnSync(
    "npm",
    ["install"],
    { cwd: dir }
  );
  info(output.toString("utf8"), stdout.toString("utf8"));
}

function gitInit(dir) {
  const { output, stdout, stderr, status, error } = spawnSync("git", ["init"], {
    cwd: dir,
  });
  info(output.toString("utf8"), stdout.toString("utf8"));
}

module.exports = function create(dir) {
  createDir(dir);
  copyDir(path.join(__dirname, "./templates"), dir);
  gitInit(dir);
  npmInstall(dir);
};
