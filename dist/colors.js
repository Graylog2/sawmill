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
exports.teint = exports.noir = exports.PropTypeColors = void 0;
var PropTypes = __importStar(require("prop-types"));
var teint_1 = __importDefault(require("./variants/teint"));
exports.teint = teint_1.default;
var noir_1 = __importDefault(require("./variants/noir"));
exports.noir = noir_1.default;
exports.PropTypeColors = PropTypes.shape({
    brand: PropTypes.shape({
        primary: PropTypes.string,
        secondary: PropTypes.string,
        tertiary: PropTypes.string,
    }),
    global: PropTypes.shape({
        background: PropTypes.string,
        contentBackground: PropTypes.string,
        inputBackground: PropTypes.string,
        link: PropTypes.string,
        linkHover: PropTypes.string,
        navigationBackground: PropTypes.string,
        navigationBoxShadow: PropTypes.string,
        textAlt: PropTypes.string,
        textDefault: PropTypes.string,
    }),
    gray: PropTypes.shape({
        10: PropTypes.string,
        20: PropTypes.string,
        30: PropTypes.string,
        40: PropTypes.string,
        50: PropTypes.string,
        60: PropTypes.string,
        70: PropTypes.string,
        80: PropTypes.string,
        90: PropTypes.string,
        100: PropTypes.string,
    }),
    input: PropTypes.shape({
        background: PropTypes.string,
        backgroundDisabled: PropTypes.string,
        border: PropTypes.string,
        borderFocus: PropTypes.string,
        boxShadow: PropTypes.string,
        color: PropTypes.string,
        colorDisabled: PropTypes.string,
    }),
    table: PropTypes.shape({
        background: PropTypes.string,
        backgroundAlt: PropTypes.string,
        backgroundHover: PropTypes.string,
        variant: PropTypes.shape({
            active: PropTypes.string,
            danger: PropTypes.string,
            info: PropTypes.string,
            primary: PropTypes.string,
            success: PropTypes.string,
            warning: PropTypes.string,
        }),
        variantHover: PropTypes.shape({
            active: PropTypes.string,
            danger: PropTypes.string,
            info: PropTypes.string,
            primary: PropTypes.string,
            success: PropTypes.string,
            warning: PropTypes.string,
        }),
    }),
    variant: PropTypes.shape({
        danger: PropTypes.string,
        dark: PropTypes.shape({
            danger: PropTypes.string,
            default: PropTypes.string,
            info: PropTypes.string,
            primary: PropTypes.string,
            success: PropTypes.string,
            warning: PropTypes.string,
        }),
        darker: PropTypes.shape({
            danger: PropTypes.string,
            default: PropTypes.string,
            info: PropTypes.string,
            primary: PropTypes.string,
            success: PropTypes.string,
            warning: PropTypes.string,
        }),
        darkest: PropTypes.shape({
            danger: PropTypes.string,
            default: PropTypes.string,
            info: PropTypes.string,
            primary: PropTypes.string,
            success: PropTypes.string,
            warning: PropTypes.string,
        }),
        default: PropTypes.string,
        info: PropTypes.string,
        light: PropTypes.shape({
            danger: PropTypes.string,
            default: PropTypes.string,
            info: PropTypes.string,
            primary: PropTypes.string,
            success: PropTypes.string,
            warning: PropTypes.string,
        }),
        lighter: PropTypes.shape({
            danger: PropTypes.string,
            default: PropTypes.string,
            info: PropTypes.string,
            primary: PropTypes.string,
            success: PropTypes.string,
            warning: PropTypes.string,
        }),
        lightest: PropTypes.shape({
            danger: PropTypes.string,
            default: PropTypes.string,
            info: PropTypes.string,
            primary: PropTypes.string,
            success: PropTypes.string,
            warning: PropTypes.string,
        }),
        primary: PropTypes.string,
        success: PropTypes.string,
        warning: PropTypes.string,
    }),
});
var colors = {
    teint: teint_1.default,
    noir: noir_1.default,
};
exports.default = colors;
