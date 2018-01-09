'use strict';

const OFF = 0;
const ERROR = 2;

module.exports = {
  'root': true,

  plugins: [
    'example-internal',
  ],

  rules: {
    // Turning this rule on here runs it for all tests.
    // Turning it OFF (or omitting it) suppresses it for all tests,
    // Despite the below override.
    'example-internal/no-focused-tests': OFF,
  },

  overrides: [
    {
      files: '**/__tests__/*.js',
      rules: {
        'example-internal/no-focused-tests': ERROR,
      }
    }
  ],
};
