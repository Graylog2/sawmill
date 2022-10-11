"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "brand", {
  enumerable: true,
  get: function get() {
    return _brandColors["default"];
  }
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

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _brandColors = _interopRequireDefault(require("./brandColors"));

var _teint = _interopRequireDefault(require("./variants/teint"));

var _noir = _interopRequireDefault(require("./variants/noir"));

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
var PropTypeColors = PropTypes.shape({
  brand: PropTypes.shape({
    primary: PropTypes.shape({
      houstonRed: PropTypes.string,
      accentRed: PropTypes.string,
      concrete: PropTypes.string,
      gravelGray: PropTypes.string,
      darkBlue: PropTypes.string,
      accentBlue: PropTypes.string,
      orange: PropTypes.string,
      white: PropTypes.string,
      black: PropTypes.string
    }),
    grays: PropTypes.shape({
      gray1: PropTypes.string,
      gray2: PropTypes.string,
      gray3: PropTypes.string,
      gray4: PropTypes.string,
      gray5: PropTypes.string,
      gray6: PropTypes.string,
      gray7: PropTypes.string,
      gray8: PropTypes.string,
      gray9: PropTypes.string,
      gray10: PropTypes.string,
      gray11: PropTypes.string,
      gray12: PropTypes.string,
      gray13: PropTypes.string,
      gray14: PropTypes.string
    }),
    gradients: PropTypes.shape({
      redToOrange: PropTypes.string,
      orangeToRed: PropTypes.string,
      redToWhite: PropTypes.string,
      whiteToOrange: PropTypes.string,
      grayToRed: PropTypes.string,
      redToGray: PropTypes.string
    }),
    dataVisualization: PropTypes.shape({
      blue: PropTypes.string,
      green: PropTypes.string,
      orange: PropTypes.string,
      yellow: PropTypes.string,
      red: PropTypes.string,
      lightGray: PropTypes.string,
      darkGray: PropTypes.string
    })
  }),
  global: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    tertiary: PropTypes.string,
    background: PropTypes.string,
    contentBackground: PropTypes.string,
    inputBackground: PropTypes.string,
    link: PropTypes.string,
    linkHover: PropTypes.string,
    navigationBackground: PropTypes.string,
    navigationBoxShadow: PropTypes.string,
    textAlt: PropTypes.string,
    textDefault: PropTypes.string
  }),
  gray: PropTypes.shape({
    10: PropTypes.string,
    20: PropTypes.string,
    30: PropTypes.string,
    40: PropTypes.string,
    50: PropTypes.string,
    60: PropTypes.string,
    70: PropTypes.string,
    80: PropTypes.string,
    90: PropTypes.string,
    100: PropTypes.string
  }),
  input: PropTypes.shape({
    background: PropTypes.string,
    backgroundDisabled: PropTypes.string,
    border: PropTypes.string,
    borderFocus: PropTypes.string,
    boxShadow: PropTypes.string,
    color: PropTypes.string,
    colorDisabled: PropTypes.string
  }),
  table: PropTypes.shape({
    background: PropTypes.string,
    backgroundAlt: PropTypes.string,
    backgroundHover: PropTypes.string,
    variant: PropTypes.shape({
      active: PropTypes.string,
      danger: PropTypes.string,
      info: PropTypes.string,
      primary: PropTypes.string,
      success: PropTypes.string,
      warning: PropTypes.string
    }),
    variantHover: PropTypes.shape({
      active: PropTypes.string,
      danger: PropTypes.string,
      info: PropTypes.string,
      primary: PropTypes.string,
      success: PropTypes.string,
      warning: PropTypes.string
    })
  }),
  variant: PropTypes.shape({
    danger: PropTypes.string,
    dark: PropTypes.shape({
      danger: PropTypes.string,
      "default": PropTypes.string,
      info: PropTypes.string,
      primary: PropTypes.string,
      success: PropTypes.string,
      warning: PropTypes.string
    }),
    darker: PropTypes.shape({
      danger: PropTypes.string,
      "default": PropTypes.string,
      info: PropTypes.string,
      primary: PropTypes.string,
      success: PropTypes.string,
      warning: PropTypes.string
    }),
    darkest: PropTypes.shape({
      danger: PropTypes.string,
      "default": PropTypes.string,
      info: PropTypes.string,
      primary: PropTypes.string,
      success: PropTypes.string,
      warning: PropTypes.string
    }),
    "default": PropTypes.string,
    info: PropTypes.string,
    light: PropTypes.shape({
      danger: PropTypes.string,
      "default": PropTypes.string,
      info: PropTypes.string,
      primary: PropTypes.string,
      success: PropTypes.string,
      warning: PropTypes.string
    }),
    lighter: PropTypes.shape({
      danger: PropTypes.string,
      "default": PropTypes.string,
      info: PropTypes.string,
      primary: PropTypes.string,
      success: PropTypes.string,
      warning: PropTypes.string
    }),
    lightest: PropTypes.shape({
      danger: PropTypes.string,
      "default": PropTypes.string,
      info: PropTypes.string,
      primary: PropTypes.string,
      success: PropTypes.string,
      warning: PropTypes.string
    }),
    primary: PropTypes.string,
    success: PropTypes.string,
    warning: PropTypes.string
  })
});
exports.PropTypeColors = PropTypeColors;
var colors = {
  teint: _teint["default"],
  noir: _noir["default"]
};
var _default = colors;
exports["default"] = _default;