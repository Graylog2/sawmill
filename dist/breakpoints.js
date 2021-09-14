"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PropTypeBreakpoints = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

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
var sizes = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200
};
var min = {};
var max = {};
Object.keys(sizes).forEach(function (bp) {
  min[bp] = "".concat(sizes[bp], "px");
  max[bp] = "".concat(sizes[bp] - 1, "px");
});

var PropTypeBreakpoints = _propTypes["default"].shape({
  min: _propTypes["default"].shape({
    xs: _propTypes["default"].string,
    sm: _propTypes["default"].string,
    md: _propTypes["default"].string,
    lg: _propTypes["default"].string
  }),
  max: _propTypes["default"].shape({
    xs: _propTypes["default"].string,
    sm: _propTypes["default"].string,
    md: _propTypes["default"].string,
    lg: _propTypes["default"].string
  })
});

exports.PropTypeBreakpoints = PropTypeBreakpoints;
var breakpoints = {
  min: min,
  max: max
};
var _default = breakpoints;
exports["default"] = _default;