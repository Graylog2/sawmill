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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __importStar(require("./utils"));
var breakpoints_1 = __importDefault(require("./breakpoints"));
var fonts_1 = __importDefault(require("./fonts"));
var spacings_1 = __importDefault(require("./spacings"));
var buttons_1 = __importDefault(require("./styles/buttons"));
var aceEditor_1 = __importDefault(require("./styles/aceEditor"));
var fonts_2 = __importDefault(require("./styles/fonts"));
var Sawmill = /** @class */ (function () {
    function Sawmill(themeColors, mode, changeMode) {
        this.colors = themeColors;
        this.breakpoints = breakpoints_1.default;
        this.fonts = fonts_1.default;
        this.spacings = spacings_1.default;
        this.mode = mode;
        this.changeMode = changeMode;
        this.utils = __assign(__assign({}, utils_1.default), { colorLevel: utils_1.colorLevel(this.colors), readableColor: utils_1.readableColor(this.colors) });
        this.components = {
            button: buttons_1.default({ colors: this.colors, utils: this.utils }),
            aceEditor: aceEditor_1.default({ colors: this.colors }),
            fonts: fonts_2.default(),
        };
    }
    return Sawmill;
}());
exports.default = Sawmill;
