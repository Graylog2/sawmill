"use strict";

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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorLevel = _interopRequireDefault(require("./colorLevel"));

var _contrastingColor = _interopRequireDefault(require("./contrastingColor"));

var _opacify = _interopRequireDefault(require("./opacify"));

var _readableColor = _interopRequireDefault(require("./readableColor"));

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
var PropTypeUtils = _propTypes["default"].shape({
  colorLevel: _propTypes["default"].func,
  contrastingColor: _propTypes["default"].func,
  opacify: _propTypes["default"].func,
  readableColor: _propTypes["default"].func
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