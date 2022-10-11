"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colors = require("../utils/colors");

var _constants = require("../_constants");

var _brandColors = _interopRequireDefault(require("../brandColors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var globalDefault = {
  primary: _brandColors["default"].primary.houstonRed,
  secondary: _brandColors["default"].primary.white,
  tertiary: '#1f1f1f',
  background: '#e8e8e8',
  contentBackground: _brandColors["default"].primary.white,
  link: '#702785',
  textAlt: '',
  textDefault: '',
  linkHover: '',
  navigationBackground: '',
  navigationBoxShadow: ''
};
var variantDefault = {
  danger: '#ad0707',
  "default": (0, _colors.lighten)(globalDefault.tertiary, 0.25),
  info: '#0063be',
  primary: '#702785',
  success: '#00ae42',
  warning: '#ffd200'
};

var variant = _objectSpread(_objectSpread({}, variantDefault), (0, _colors.generateVariantColors)(_constants.THEME_MODE_LIGHT, variantDefault));

var global = (0, _colors.generateGlobalColors)(_constants.THEME_MODE_LIGHT, globalDefault, variant);
var gray = (0, _colors.generateGrayScale)(globalDefault.tertiary, globalDefault.secondary);
var table = (0, _colors.generateTableColors)(_constants.THEME_MODE_LIGHT, variant);
var input = (0, _colors.generateInputColors)(_constants.THEME_MODE_LIGHT, global, gray, variant);
var teint = {
  brand: _brandColors["default"],
  global: global,
  gray: gray,
  input: input,
  table: table,
  variant: variant
};
var _default = teint;
exports["default"] = _default;