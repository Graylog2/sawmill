"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colors = require("../utils/colors");

var _constants = require("../_constants");

var _staticColors = require("../staticColors");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var brand = _objectSpread(_objectSpread({}, _staticColors.brand), {
  primary: '#ff3633',
  secondary: '#888',
  tertiary: '#fff',
  logo: '#fff'
});

var globalDefault = {
  background: '#222',
  contentBackground: '#303030',
  link: '#629de2',
  textAlt: '',
  textDefault: '',
  linkHover: '',
  navigationBackground: '',
  navigationBoxShadow: ''
};
var variantDefault = {
  danger: '#e74c3c',
  "default": '#595959',
  info: '#578dcc',
  primary: '#697586',
  success: '#709e4c',
  warning: '#E3D45F'
};

var variant = _objectSpread(_objectSpread({}, variantDefault), (0, _colors.generateVariantColors)(_constants.THEME_MODE_DARK, variantDefault));

var global = (0, _colors.generateGlobalColors)(_constants.THEME_MODE_DARK, brand, globalDefault, variant);
var gray = (0, _colors.generateGrayScale)(brand.tertiary, brand.secondary);
var table = (0, _colors.generateTableColors)(_constants.THEME_MODE_DARK, variant);
var input = (0, _colors.generateInputColors)(_constants.THEME_MODE_DARK, global, gray, variant);
var noir = {
  brand: brand,
  global: global,
  gray: gray,
  input: input,
  table: table,
  variant: variant
};
var _default = noir;
exports["default"] = _default;