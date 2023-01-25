"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "colorLevel", {
  enumerable: true,
  get: function get() {
    return _colorLevel["default"];
  }
});
Object.defineProperty(exports, "contrastingColor", {
  enumerable: true,
  get: function get() {
    return _contrastingColor["default"];
  }
});
Object.defineProperty(exports, "opacify", {
  enumerable: true,
  get: function get() {
    return _opacify["default"];
  }
});
Object.defineProperty(exports, "readableColor", {
  enumerable: true,
  get: function get() {
    return _readableColor["default"];
  }
});
exports["default"] = exports.PropTypeUtils = void 0;

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _colorLevel = _interopRequireDefault(require("./colorLevel"));

var _contrastingColor = _interopRequireDefault(require("./contrastingColor"));

var _opacify = _interopRequireDefault(require("./opacify"));

var _readableColor = _interopRequireDefault(require("./readableColor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
var PropTypeUtils = PropTypes.shape({
  colorLevel: PropTypes.func,
  contrastingColor: PropTypes.func,
  opacify: PropTypes.func,
  readableColor: PropTypes.func
});
exports.PropTypeUtils = PropTypeUtils;
var utils = {
  colorLevel: _colorLevel["default"],
  contrastingColor: _contrastingColor["default"],
  opacify: _opacify["default"],
  readableColor: _readableColor["default"]
};
var _default = utils;
exports["default"] = _default;