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
var colorLevel = function colorLevel(colors) {
  return function (colorHex) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

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
    return chroma.mix(colorBase, colorHex, mixLevel).css();
  };
};

var _default = colorLevel;
exports["default"] = _default;