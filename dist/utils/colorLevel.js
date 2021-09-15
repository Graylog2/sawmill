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
var colorLevel = function (colors) { return function (colorHex, level) {
    if (level === void 0) { level = 0; }
    /**
     * Recreating `color-level` from Bootstrap's SCSS functions
     * https://github.com/twbs/bootstrap/blob/08ba61e276a6393e8e2b97d56d2feb70a24fe22c/scss/_functions.scss#L97
     *
     * @param {string} color - any string that represents a color (ex: "#f00" or "rgb(255, 0, 0)")
     * @param {number} level - any positive or negative number
     */
    var colorBase = level > 0 ? colors.global.textDefault : colors.global.textAlt;
    var absLevel = Math.abs(level) * 0.08; // TODO: make 8% a theme variable
    var upperLevel = absLevel > 1 ? 1 : absLevel;
    var mixLevel = absLevel < 0 ? 0 : upperLevel;
    return chroma_js_1.default.mix(colorBase, colorHex, mixLevel).css();
}; };
exports.default = colorLevel;
