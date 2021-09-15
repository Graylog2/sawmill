"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var chroma = _interopRequireWildcard(require("chroma-js"));

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

/**
 * Accepts a color and [WCAG distinguishable level](https://www.w3.org/TR/WCAG21/#distinguishable), it then returns a properly contrasting color.
 *
 * @param {string} color - any string that represents a color (ex: "#f00" or "rgb(255, 0, 0)")
 * @param {string} [wcagLevel="AAA"] - Based on the [contrast calculations recommended by W3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html). (available levels: "AA", "AALarge", "AAA", "AAALarge")
 *
 * @returns {string}
 *
 */
var contrastRatios = {
  AA: 4.5,
  // https://www.w3.org/TR/WCAG21/#contrast-minimum
  AALarge: 3,
  AAA: 7,
  // https://www.w3.org/TR/WCAG21/#contrast-enhanced
  AAALarge: 4.5
};

var contrastingColor = function contrastingColor(color) {
  var wcagLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'AAA';
  var mixStep = 0.05;
  var mixColor = chroma(color).luminance() < 0.5 ? '#fff' : '#000';
  var mixture = 0;
  var outputColor = chroma.mix(color, mixColor, mixture).css();

  while (mixture <= 1) {
    outputColor = chroma.mix(color, mixColor, mixture).css();

    if (chroma.contrast(color, outputColor) >= contrastRatios[wcagLevel]) {
      break;
    }

    mixture += mixStep;
  }

  return outputColor;
};

var _default = contrastingColor;
exports["default"] = _default;