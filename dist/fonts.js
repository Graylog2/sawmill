"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PropTypeFonts = exports.size = exports.family = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("./_constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * Copyright (C) 2020 Graylog, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the Server Side Public License, version 1,
 * as published by MongoDB, Inc.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Server Side Public License for more details.
 *
 * You should have received a copy of the Server Side Public License
 * along with this program. If not, see
 * <http://www.mongodb.com/licensing/server-side-public-license>.
 */
var PropTypeFonts = _propTypes["default"].shape({
  family: _propTypes["default"].shape({
    body: _propTypes["default"].string,
    monospace: _propTypes["default"].string
  }),
  size: _propTypes["default"].shape({
    root: _propTypes["default"].string,
    body: _propTypes["default"].string,
    huge: _propTypes["default"].string,
    large: _propTypes["default"].string,
    small: _propTypes["default"].string,
    tiny: _propTypes["default"].string,
    h1: _propTypes["default"].string,
    h2: _propTypes["default"].string,
    h3: _propTypes["default"].string,
    h4: _propTypes["default"].string,
    h5: _propTypes["default"].string,
    h6: _propTypes["default"].string
  })
});

exports.PropTypeFonts = PropTypeFonts;
var family = {
  body: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  monospace: '"Roboto Mono", Menlo, Monaco, Consolas, "Courier New", monospace'
};
/* Scaled 1.125 Major Second - https://type-scale.com/ */

exports.family = family;
var size = {
  root: "".concat(_constants.ROOT_FONT_SIZE, "px"),
  body: '1rem',
  huge: '2.027rem',
  large: '1.125rem',
  small: '0.889rem',
  tiny: '0.79rem',
  h1: '1.802rem',
  h2: '1.602rem',
  h3: '1.424rem',
  h4: '1.266rem',
  h5: '1.125rem',
  h6: '1rem'
};
exports.size = size;
var fonts = {
  family: family,
  size: size
};
var _default = fonts;
exports["default"] = _default;