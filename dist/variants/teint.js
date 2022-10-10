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
import { generateTableColors, generateGrayScale, lighten, generateGlobalColors, generateInputColors, generateVariantColors, } from '../utils/colors';
import { THEME_MODE_LIGHT } from '../_constants';
var brand = {
    primary: '#f44040',
    secondary: '#fff',
    tertiary: '#1f1f1f',
    accentRed: '#e22e2e',
    concrete: '#697586',
    gravelGray: '#9aa8bd',
    darkBlue: '#26354c',
    accentBlue: '#364D71',
    orange: '#F98A3A',
};
var globalDefault = {
    background: '#e8e8e8',
    contentBackground: '#fff',
    link: '#702785',
    textAlt: '',
    textDefault: '',
    linkHover: '',
    navigationBackground: '',
    navigationBoxShadow: '',
};
var variantDefault = {
    danger: '#ad0707',
    default: lighten(brand.tertiary, 0.25),
    info: '#0063be',
    primary: '#702785',
    success: '#00ae42',
    warning: '#ffd200',
};
var variant = __assign(__assign({}, variantDefault), generateVariantColors(THEME_MODE_LIGHT, variantDefault));
var global = generateGlobalColors(THEME_MODE_LIGHT, brand, globalDefault, variant);
var gray = generateGrayScale(brand.tertiary, brand.secondary);
var table = generateTableColors(THEME_MODE_LIGHT, variant);
var input = generateInputColors(THEME_MODE_LIGHT, global, gray, variant);
var teint = {
    brand: brand,
    global: global,
    gray: gray,
    input: input,
    table: table,
    variant: variant,
};
export default teint;
