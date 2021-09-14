"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.darken = darken;
exports.lighten = lighten;
exports.generateVariantColors = exports.generateTableColors = exports.generateInputColors = exports.generateGrayScale = exports.generateGlobalColors = void 0;

var _chromaJs = _interopRequireDefault(require("chroma-js"));

var _constants = require("../_constants");

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
var lightThemeRatio = ['0.22', '0.55', '0.88'];
var darkThemeRatio = ['0.15', '0.55', '0.95'];

function lighten(color, ratio) {
  return _chromaJs["default"].mix(color, '#fff', ratio).hex();
}

function darken(color, ratio) {
  return _chromaJs["default"].mix(color, '#000', ratio).hex();
}

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

  var scale = _chromaJs["default"].scale([colorStart, colorEnd]).colors(10);

  scale.forEach(function (tint, index) {
    var key = (index + 1) * 10;
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
  var tableColors = {
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
  return tableColors;
};

exports.generateTableColors = generateTableColors;

var generateVariantColors = function generateVariantColors(mode, variant) {
  if (![_constants.THEME_MODE_DARK, _constants.THEME_MODE_LIGHT].includes(mode)) {
    throw new Error("Requires \"".concat(_constants.THEME_MODE_DARK, "\" or \"").concat(_constants.THEME_MODE_LIGHT, "\" mode option."));
  }

  var adjustLight = mode === _constants.THEME_MODE_DARK ? darken : lighten;
  var adjustDark = mode === _constants.THEME_MODE_DARK ? lighten : darken;
  var ratio = mode === _constants.THEME_MODE_DARK ? darkThemeRatio : lightThemeRatio;
  var variantColors = {
    lightest: {
      danger: '',
      "default": '',
      info: '',
      primary: '',
      success: '',
      warning: ''
    },
    lighter: {
      danger: '',
      "default": '',
      info: '',
      primary: '',
      success: '',
      warning: ''
    },
    light: {
      danger: '',
      "default": '',
      info: '',
      primary: '',
      success: '',
      warning: ''
    },
    dark: {
      danger: '',
      "default": '',
      info: '',
      primary: '',
      success: '',
      warning: ''
    },
    darker: {
      danger: '',
      "default": '',
      info: '',
      primary: '',
      success: '',
      warning: ''
    },
    darkest: {
      danger: '',
      "default": '',
      info: '',
      primary: '',
      success: '',
      warning: ''
    }
  };
  Object.keys(variant).forEach(function (name) {
    if (typeof variant[name] === 'string') {
      variantColors.light[name] = adjustLight(variant[name], ratio[0]);
      variantColors.lighter[name] = adjustLight(variant[name], ratio[1]);
      variantColors.lightest[name] = adjustLight(variant[name], ratio[2]);
      variantColors.dark[name] = adjustDark(variant[name], ratio[0]);
      variantColors.darker[name] = adjustDark(variant[name], ratio[1]);
      variantColors.darkest[name] = adjustDark(variant[name], ratio[2]);
    }
  });
  return variantColors;
};

exports.generateVariantColors = generateVariantColors;

var generateInputColors = function generateInputColors(mode, global, gray, variant) {
  var input = {
    background: global.contentBackground,
    backgroundDisabled: darken(global.contentBackground, 0.25),
    border: variant.light["default"],
    borderFocus: variant.light.info,
    boxShadow: "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px ".concat((0, _chromaJs["default"])(variant.light.info).alpha(0.4).css()),
    color: global.textDefault,
    colorDisabled: gray[60],
    placeholder: gray[60]
  };
  return input;
};

exports.generateInputColors = generateInputColors;

var generateGlobalColors = function generateGlobalColors(mode, brand, global, variant) {
  return {
    linkHover: (0, _chromaJs["default"])(global.link)[mode === _constants.THEME_MODE_DARK ? 'brighten' : 'darken'](1).hex(),
    navigationBackground: global.contentBackground,
    navigationBoxShadow: (0, _chromaJs["default"])(variant.lightest["default"]).alpha(0.5).css(),
    textAlt: brand.secondary,
    textDefault: brand.tertiary
  };
};

exports.generateGlobalColors = generateGlobalColors;