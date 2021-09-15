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
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("../utils/colors");
var _constants_1 = require("../_constants");
var brand = {
    primary: '#ff3633',
    secondary: '#888',
    tertiary: '#fff',
};
var globalDefault = {
    background: '#222',
    contentBackground: '#303030',
    link: '#00bc8c',
    textAlt: '',
    textDefault: '',
    linkHover: '',
    navigationBackground: '',
    navigationBoxShadow: '',
};
var variantDefault = {
    danger: '#E74C3C',
    default: '#595959',
    info: '#3498DB',
    primary: '#375a7f',
    success: '#00bc8c',
    warning: '#F39C12',
};
var variant = __assign(__assign({}, variantDefault), colors_1.generateVariantColors(_constants_1.THEME_MODE_DARK, variantDefault));
var global = colors_1.generateGlobalColors(_constants_1.THEME_MODE_DARK, brand, globalDefault, variant);
var gray = colors_1.generateGrayScale(brand.tertiary, brand.secondary);
var table = colors_1.generateTableColors(_constants_1.THEME_MODE_DARK, variant);
var input = colors_1.generateInputColors(_constants_1.THEME_MODE_DARK, global, gray, variant);
var noir = {
    brand: brand,
    global: global,
    gray: gray,
    input: input,
    table: table,
    variant: variant,
};
exports.default = noir;
