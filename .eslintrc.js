'use strict';

module.exports = {
  'root': true,

  plugins: [
    'example-internal',
  ],

  rules: {
    // Comment out the below line to make things work as they should:
    'example-internal/no-focused-tests': 0,
  },

  overrides: [
    {
      files: '**/__tests__/*.js',
      rules: {
        'example-internal/no-focused-tests': 2,
      }
    }
  ],
};
