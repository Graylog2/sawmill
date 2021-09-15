"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var chroma = _interopRequireWildcard(require("chroma-js"));

var _styledComponents = require("styled-components");

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
var buttons = function buttons(_ref) {
  var colors = _ref.colors,
      utils = _ref.utils;
  var transparentLink = 'rgba(255, 255, 255, 0)';
  var variants = {
    danger: colors.variant.danger,
    "default": colors.gray[90],
    info: colors.variant.info,
    link: transparentLink,
    primary: colors.variant.primary,
    success: colors.variant.success,
    warning: colors.variant.warning
  };

  var mixColor = function mixColor(originalColor) {
    var adjustColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : colors.global.textDefault;
    var ratio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.15;
    return chroma.mix(originalColor, adjustColor, ratio).hex();
  };

  return Object.keys(variants).map(function (variant) {
    var variantColor = variants[variant];
    var isLink = variant === 'link';
    var buttonAdjustColor = chroma(variantColor).luminance() > 0.5 ? colors.global.textDefault : colors.global.textAlt;
    var defaultBackground = variantColor;
    var defaultBorder = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.05);
    var defaultColor = isLink ? 'var(--color-global-link)' : utils.contrastingColor(defaultBackground);
    var activeBackground = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.10);
    var activeBorder = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.15);
    var activeColor = isLink ? 'var(--color-global-linkHover)' : utils.contrastingColor(activeBackground);
    var disabledBackground = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.20);
    var disabledBorder = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.15);
    var disabledColor = isLink ? 'var(--color-global-link)' : utils.contrastingColor(disabledBackground, 'AA');
    var hoverBackground = isLink ? 'transparent' : mixColor(defaultBackground);
    var hoverBorderColor = isLink ? 'transparent' : mixColor(defaultBorder);
    var hoverColor = isLink ? 'var(--color-global-linkHover)' : mixColor(defaultColor);
    var activeHoverBackground = isLink ? 'transparent' : mixColor(activeBackground);
    var activeHoverBorderColor = isLink ? 'transparent' : mixColor(activeBorder);
    var activeHoverColor = isLink ? 'var(--color-global-linkHover)' : mixColor(activeColor);
    return (0, _styledComponents.css)(["&.btn-", "{background-color:", ";border-color:", ";color:", ";transition:background-color 150ms ease-in-out,border 150ms ease-in-out,color 150ms ease-in-out;:hover{background-color:", ";border-color:", ";color:", ";}&.active{background-color:", ";border-color:", ";color:", ";:hover{background-color:", ";border-color:", ";color:", ";}}&[disabled],&.disabled{background-color:", ";border-color:", ";color:", ";:hover{background-color:", ";border-color:", ";color:", ";}}}"], variant, defaultBackground, defaultBorder, defaultColor, hoverBackground, hoverBorderColor, hoverColor, activeBackground, activeBorder, activeColor, isLink ? transparentLink : activeHoverBackground, activeHoverBorderColor, activeHoverColor, isLink ? transparentLink : disabledBackground, disabledBorder, disabledColor, disabledBackground, disabledBorder, disabledColor);
  });
};

var _default = buttons;
exports["default"] = _default;