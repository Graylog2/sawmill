"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropTypeFonts = exports.size = exports.family = void 0;
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
var PropTypes = __importStar(require("prop-types"));
var _constants_1 = require("./_constants");
var PropTypeFonts = PropTypes.shape({
    family: PropTypes.shape({
        body: PropTypes.string,
        monospace: PropTypes.string,
    }),
    size: PropTypes.shape({
        root: PropTypes.string,
        body: PropTypes.string,
        huge: PropTypes.string,
        large: PropTypes.string,
        small: PropTypes.string,
        tiny: PropTypes.string,
        h1: PropTypes.string,
        h2: PropTypes.string,
        h3: PropTypes.string,
        h4: PropTypes.string,
        h5: PropTypes.string,
        h6: PropTypes.string,
    }),
});
exports.PropTypeFonts = PropTypeFonts;
var family = {
    body: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: '"Roboto Mono", Menlo, Monaco, Consolas, "Courier New", monospace',
};
exports.family = family;
/* Scaled 1.125 Major Second - https://type-scale.com/ */
var size = {
    root: _constants_1.ROOT_FONT_SIZE + "px",
    body: '1rem',
    huge: '2.027rem',
    large: '1.125rem',
    small: '0.889rem',
    tiny: '0.79rem',
    h1: '1.802rem',
    h2: '1.602rem',
    h3: '1.424rem',
    h4: '1.266rem',
    h5: '1.125rem',
    h6: '1rem',
};
exports.size = size;
var fonts = {
    family: family,
    size: size,
};
exports.default = fonts;
