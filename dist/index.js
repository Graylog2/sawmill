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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.PropTypeUtils = exports.PropTypeSpacings = exports.PropTypeFonts = exports.PropTypeColors = exports.PropTypeBreakpoints = exports.colors = void 0;
var fonts_1 = require("./fonts");
exports.PropTypeFonts = fonts_1.PropTypeFonts;
var breakpoints_1 = require("./breakpoints");
exports.PropTypeBreakpoints = breakpoints_1.PropTypeBreakpoints;
var colors_1 = require("./colors");
exports.colors = colors_1["default"];
exports.PropTypeColors = colors_1.PropTypeColors;
var spacings_1 = require("./spacings");
exports.PropTypeSpacings = spacings_1.PropTypeSpacings;
var utils_1 = require("./utils");
exports.PropTypeUtils = utils_1.PropTypeUtils;
var buttons_1 = require("./styles/buttons");
var aceEditor_1 = require("./styles/aceEditor");
var fonts_2 = require("./styles/fonts");
var Sawmill = /** @class */ (function () {
    function Sawmill(colors, mode, changeMode) {
        this.colors = colors;
        this.breakpoints = breakpoints_1["default"];
        this.fonts = fonts_1["default"];
        this.spacings = spacings_1["default"];
        this.mode = mode;
        this.changeMode = changeMode;
        this.utils = __assign(__assign({}, utils_1["default"]), { colorLevel: utils_1.colorLevel(this.colors), readableColor: utils_1.readableColor(this.colors) });
        this.components = {
            button: buttons_1["default"]({ colors: this.colors, utils: this.utils }),
            aceEditor: aceEditor_1["default"]({ colors: this.colors }),
            fonts: fonts_2["default"]()
        };
    }
    return Sawmill;
}());
exports["default"] = Sawmill;
