'use strict';

const OFF = 0;
const ERROR = 2;

module.exports = {
  'root': true,

  plugins: [
    'example-internal',
  ],

  rules: {
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
