// @remove-on-eject-begin
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end
'use strict';

const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [[require.resolve('babel-preset-react-app'), { flow: false }]],
  plugins: [
    require.resolve('@babel/plugin-transform-typescript'),
    [require.resolve('@babel/plugin-proposal-decorators'), { legacy: true }],
    [
      require.resolve('@babel/plugin-proposal-class-properties'),
      { loose: true },
    ],
  ],
  // @remove-on-eject-begin
  babelrc: false,
  // @remove-on-eject-end
});
