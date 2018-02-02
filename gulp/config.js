'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const destPath = resolveApp('public');
const resolveDest = path => `${destPath}/${path}`;

module.exports = {
  src: {
    images: resolveDest('images-original')
  },
  dest: {
    images: resolveDest('images')
  }
};
