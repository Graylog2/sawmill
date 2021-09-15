"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chroma_js_1 = __importDefault(require("chroma-js"));
var readableColor = function (colors) { return function (hex, darkColor, lightColor) {
    /**
     * Returns `textDefault` or `textAlt` (or optional light and dark return colors) for best contrast depending on the luminosity of the given color. Follows [W3C specs for readability](https://www.w3.org/TR/WCAG20-TECHS/G18.html).
     *
     * @param {string} color - any string that represents a color (ex: "#f00" or "rgb(255, 0, 0)")
     * @param {string} darkColor - defaults to theme's darkest gray
     * @param {string} lightColor - defaults to theme's lightest gray
     */
    if (darkColor === void 0) { darkColor = colors.global.textDefault; }
    if (lightColor === void 0) { lightColor = colors.global.textAlt; }
    var luminanceRatio = 0.179;
    return chroma_js_1.default(hex).luminance() < luminanceRatio ? lightColor : darkColor;
}; };
exports.default = readableColor;
