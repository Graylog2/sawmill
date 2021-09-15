"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateVariantColors = exports.generateTableColors = exports.generateInputColors = exports.generateGrayScale = exports.generateGlobalColors = exports.lighten = exports.darken = void 0;

var chroma = _interopRequireWildcard(require("chroma-js"));

var _constants = require("../_constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lightThemeRatio = [0.22, 0.55, 0.88];
var darkThemeRatio = [0.15, 0.55, 0.95];

var lighten = function lighten(color, ratio) {
  return chroma.mix(color, '#fff', ratio).hex();
};

exports.lighten = lighten;

var darken = function darken(color, ratio) {
  return chroma.mix(color, '#000', ratio).hex();
};

exports.darken = darken;

var generateGrayScale = function generateGrayScale(colorStart, colorEnd) {
  var gray = {
    10: '',
    20: '',
    30: '',
    40: '',
    50: '',
    60: '',
    70: '',
    80: '',
    90: '',
    100: ''
  };
  var scale = chroma.scale([colorStart, colorEnd]).colors(10);
  scale.forEach(function (tint, index) {
    var key = "".concat((index + 1) * 10);
    gray[key] = tint;
  });
  return gray;
};

exports.generateGrayScale = generateGrayScale;

var generateTableColors = function generateTableColors(mode, variant) {
  if (![_constants.THEME_MODE_DARK, _constants.THEME_MODE_LIGHT].includes(mode)) {
    throw new Error("Requires \"".concat(_constants.THEME_MODE_DARK, "\" or \"").concat(_constants.THEME_MODE_LIGHT, "\" mode option."));
  }

  var adjust = mode === _constants.THEME_MODE_DARK ? darken : lighten;
  return {
    background: adjust(variant["default"], 0.95),
    backgroundAlt: adjust(variant["default"], 0.85),
    backgroundHover: adjust(variant["default"], 0.9),
    variant: {
      danger: adjust(variant.danger, 0.75),
      active: adjust(variant["default"], 0.75),
      info: adjust(variant.info, 0.75),
      primary: adjust(variant.primary, 0.75),
      success: adjust(variant.success, 0.75),
      warning: adjust(variant.warning, 0.75)
    },
    variantHover: {
      danger: variant.lighter.danger,
      active: variant.lighter["default"],
      info: variant.lighter.info,
      primary: variant.lighter.primary,
      success: variant.lighter.success,
      warning: variant.lighter.warning
    }
  };
};

exports.generateTableColors = generateTableColors;

var generateVariantColors = function generateVariantColors(mode, variant) {
  if (![_constants.THEME_MODE_DARK, _constants.THEME_MODE_LIGHT].includes(mode)) {
    throw new Error("Requires \"".concat(_constants.THEME_MODE_DARK, "\" or \"").concat(_constants.THEME_MODE_LIGHT, "\" mode option."));
  }

  var adjustLight = mode === _constants.THEME_MODE_DARK ? darken : lighten;
  var adjustDark = mode === _constants.THEME_MODE_DARK ? lighten : darken;
  var ratio = mode === _constants.THEME_MODE_DARK ? darkThemeRatio : lightThemeRatio;
  var variants = {
    danger: '',
    "default": '',
    info: '',
    primary: '',
    success: '',
    warning: ''
  };
  var variantColors = {
    lightest: variants,
    lighter: variants,
    light: variants,
    dark: variants,
    darker: variants,
    darkest: variants
  };
  Object.keys(variant).forEach(function (name) {
    variantColors.light[name] = adjustLight(variant[name], ratio[0]);
    variantColors.lighter[name] = adjustLight(variant[name], ratio[1]);
    variantColors.lightest[name] = adjustLight(variant[name], ratio[2]);
    variantColors.dark[name] = adjustDark(variant[name], ratio[0]);
    variantColors.darker[name] = adjustDark(variant[name], ratio[1]);
    variantColors.darkest[name] = adjustDark(variant[name], ratio[2]);
  });
  return variantColors;
};

exports.generateVariantColors = generateVariantColors;

var generateInputColors = function generateInputColors(mode, global, gray, variant) {
  return {
    background: global.contentBackground,
    backgroundDisabled: darken(global.contentBackground, 0.25),
    border: variant.light["default"],
    borderFocus: variant.light.info,
    boxShadow: "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px ".concat(chroma(variant.light.info).alpha(0.4).css()),
    color: global.textDefault,
    colorDisabled: gray[60],
    placeholder: gray[60]
  };
};

exports.generateInputColors = generateInputColors;

var generateGlobalColors = function generateGlobalColors(mode, brand, global, variant) {
  return _objectSpread(_objectSpread({}, global), {}, {
    linkHover: chroma(global.link)[mode === _constants.THEME_MODE_DARK ? 'brighten' : 'darken'](1).hex(),
    navigationBackground: global.contentBackground,
    navigationBoxShadow: chroma(variant.lightest["default"]).alpha(0.5).css(),
    textAlt: brand.secondary,
    textDefault: brand.tertiary
  });
};

exports.generateGlobalColors = generateGlobalColors;