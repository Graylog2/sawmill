"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PropTypeFonts = exports.size = exports.lineHeight = exports.family = void 0;

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _constants = require("./_constants");

var _fonts = require("./utils/fonts");

require("@openfonts/dm-sans_latin");

require("@openfonts/source-sans-pro_latin");

require("@openfonts/ubuntu-mono_latin");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
var PropTypeRootFontSize = PropTypes.shape({
  value: PropTypes.number,
  px: PropTypes.string
});
var PropTypeFontSize = PropTypes.shape({
  value: PropTypes.number,
  px: PropTypes.string,
  rem: PropTypes.string
});
var PropTypeFonts = PropTypes.shape({
  family: PropTypes.shape({
    body: PropTypes.string,
    monospace: PropTypes.string,
    navigation: PropTypes.string
  }),
  size: PropTypes.shape({
    root: PropTypeRootFontSize,
    body: PropTypeFontSize,
    huge: PropTypeFontSize,
    large: PropTypeFontSize,
    small: PropTypeFontSize,
    tiny: PropTypeFontSize,
    navigation: PropTypeFontSize,
    h1: PropTypeFontSize,
    h2: PropTypeFontSize,
    h3: PropTypeFontSize,
    h4: PropTypeFontSize,
    h5: PropTypeFontSize,
    h6: PropTypeFontSize
  })
});
exports.PropTypeFonts = PropTypeFonts;
var family = {
  body: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  monospace: '"Ubuntu Mono", Menlo, Monaco, Consolas, "Courier New", monospace',
  navigation: '"DM Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
};
/* Scaled 1.067 Minor Second - https://type-scale.com/ */

exports.family = family;
var scale = 1.067;
var sizePowers = {
  body: 0,
  huge: 5,
  large: 1,
  medium: 0,
  small: -2,
  tiny: -3,
  navigation: -1,
  h1: 7,
  h2: 4,
  h3: 3,
  h4: 2,
  h5: 1,
  h6: 0
};
var size = (0, _fonts.generateFontSizes)(_constants.ROOT_FONT_SIZE, scale, sizePowers);
exports.size = size;
var lineHeight = "".concat(_constants.BODY_LINE_HEIGHT, "px");
exports.lineHeight = lineHeight;
var fonts = {
  family: family,
  lineHeight: lineHeight,
  size: size
};
var _default = fonts;
exports["default"] = _default;