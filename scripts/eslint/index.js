/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var CLIEngine = require('eslint').CLIEngine;

var config = require('./eslint.config');

function lint() {
  var cli = new CLIEngine(config);
  var formatter = cli.getFormatter();
  var report = cli.executeOnFiles(['**/*.js']);

  var results = {
    output: formatter(report.results),
    errorCount: report.errorCount,
    warningCount: report.warningCount,
  };

  console.log(results.output);

  return results.errorCount === 0 && results.warningCount === 0;
};


console.log('Linting all files...');

if (lint()) {
  console.log('Lint passed.');
} else {
  console.log('Lint failed.');
  process.exit(1);
}