"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chromaJs = _interopRequireDefault(require("chroma-js"));

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
var readableColor = function readableColor(colors) {
  return function (hex) {
    var darkColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : colors.global.textDefault;
    var lightColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : colors.global.textAlt;

    /**
     * Returns `textDefault` or `textAlt` (or optional light and dark return colors) for best contrast depending on the luminosity of the given color. Follows [W3C specs for readability](https://www.w3.org/TR/WCAG20-TECHS/G18.html).
     *
     * @param {string} color - any string that represents a color (ex: "#f00" or "rgb(255, 0, 0)")
     * @param {string} darkColor - defaults to theme's darkest gray
     * @param {string} lightColor - defaults to theme's lightest gray
     */
    var luminanceRatio = 0.179;
    return (0, _chromaJs["default"])(hex).luminance() < luminanceRatio ? lightColor : darkColor;
  };
};

var _default = readableColor;
exports["default"] = _default;