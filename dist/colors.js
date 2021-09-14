"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "teint", {
  enumerable: true,
  get: function get() {
    return _teint["default"];
  }
});
Object.defineProperty(exports, "noir", {
  enumerable: true,
  get: function get() {
    return _noir["default"];
  }
});
exports["default"] = exports.PropTypeColors = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _teint = _interopRequireDefault(require("./variants/teint"));

var _noir = _interopRequireDefault(require("./variants/noir"));

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
var PropTypeColors = _propTypes["default"].shape({
  brand: _propTypes["default"].shape({
    primary: _propTypes["default"].string,
    secondary: _propTypes["default"].string,
    tertiary: _propTypes["default"].string
  }),
  global: _propTypes["default"].shape({
    background: _propTypes["default"].string,
    contentBackground: _propTypes["default"].string,
    inputBackground: _propTypes["default"].string,
    link: _propTypes["default"].string,
    linkHover: _propTypes["default"].string,
    navigationBackground: _propTypes["default"].string,
    navigationBoxShadow: _propTypes["default"].string,
    textAlt: _propTypes["default"].string,
    textDefault: _propTypes["default"].string
  }),
  gray: _propTypes["default"].shape({
    10: _propTypes["default"].string,
    20: _propTypes["default"].string,
    30: _propTypes["default"].string,
    40: _propTypes["default"].string,
    50: _propTypes["default"].string,
    60: _propTypes["default"].string,
    70: _propTypes["default"].string,
    80: _propTypes["default"].string,
    90: _propTypes["default"].string,
    100: _propTypes["default"].string
  }),
  input: _propTypes["default"].shape({
    background: _propTypes["default"].string,
    backgroundDisabled: _propTypes["default"].string,
    border: _propTypes["default"].string,
    borderFocus: _propTypes["default"].string,
    boxShadow: _propTypes["default"].string,
    color: _propTypes["default"].string,
    colorDisabled: _propTypes["default"].string
  }),
  table: _propTypes["default"].shape({
    background: _propTypes["default"].string,
    backgroundAlt: _propTypes["default"].string,
    backgroundHover: _propTypes["default"].string,
    variant: _propTypes["default"].shape({
      active: _propTypes["default"].string,
      danger: _propTypes["default"].string,
      info: _propTypes["default"].string,
      primary: _propTypes["default"].string,
      success: _propTypes["default"].string,
      warning: _propTypes["default"].string
    }),
    variantHover: _propTypes["default"].shape({
      active: _propTypes["default"].string,
      danger: _propTypes["default"].string,
      info: _propTypes["default"].string,
      primary: _propTypes["default"].string,
      success: _propTypes["default"].string,
      warning: _propTypes["default"].string
    })
  }),
  variant: _propTypes["default"].shape({
    danger: _propTypes["default"].string,
    dark: _propTypes["default"].shape({
      danger: _propTypes["default"].string,
      "default": _propTypes["default"].string,
      info: _propTypes["default"].string,
      primary: _propTypes["default"].string,
      success: _propTypes["default"].string,
      warning: _propTypes["default"].string
    }),
    darker: _propTypes["default"].shape({
      danger: _propTypes["default"].string,
      "default": _propTypes["default"].string,
      info: _propTypes["default"].string,
      primary: _propTypes["default"].string,
      success: _propTypes["default"].string,
      warning: _propTypes["default"].string
    }),
    darkest: _propTypes["default"].shape({
      danger: _propTypes["default"].string,
      "default": _propTypes["default"].string,
      info: _propTypes["default"].string,
      primary: _propTypes["default"].string,
      success: _propTypes["default"].string,
      warning: _propTypes["default"].string
    }),
    "default": _propTypes["default"].string,
    info: _propTypes["default"].string,
    light: _propTypes["default"].shape({
      danger: _propTypes["default"].string,
      "default": _propTypes["default"].string,
      info: _propTypes["default"].string,
      primary: _propTypes["default"].string,
      success: _propTypes["default"].string,
      warning: _propTypes["default"].string
    }),
    lighter: _propTypes["default"].shape({
      danger: _propTypes["default"].string,
      "default": _propTypes["default"].string,
      info: _propTypes["default"].string,
      primary: _propTypes["default"].string,
      success: _propTypes["default"].string,
      warning: _propTypes["default"].string
    }),
    lightest: _propTypes["default"].shape({
      danger: _propTypes["default"].string,
      "default": _propTypes["default"].string,
      info: _propTypes["default"].string,
      primary: _propTypes["default"].string,
      success: _propTypes["default"].string,
      warning: _propTypes["default"].string
    }),
    primary: _propTypes["default"].string,
    success: _propTypes["default"].string,
    warning: _propTypes["default"].string
  })
});

exports.PropTypeColors = PropTypeColors;
var colors = {
  teint: _teint["default"],
  noir: _noir["default"]
};
var _default = colors;
exports["default"] = _default;