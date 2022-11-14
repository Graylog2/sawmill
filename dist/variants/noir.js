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
import { generateTableColors, generateGrayScale, generateGlobalColors, generateInputColors, generateVariantColors, } from '../utils/colors';
import { THEME_MODE_DARK } from '../_constants';
import { brand as staticBrandColors } from '../staticColors';
var brand = __assign(__assign({}, staticBrandColors), {
    primary: '#ff3633',
    secondary: '#888',
    tertiary: '#fff',
    logo: '#fff',
});
var globalDefault = {
    background: '#222',
    contentBackground: '#303030',
    link: '#629de2',
    textAlt: '',
    textDefault: '',
    linkHover: '',
    navigationBackground: '',
    navigationBoxShadow: '',
};
var variantDefault = {
    danger: '#e74c3c',
    default: '#595959',
    info: '#578dcc',
    primary: '#697586',
    success: '#709e4c',
    warning: '#E3D45F',
};
var variant = __assign(__assign({}, variantDefault), generateVariantColors(THEME_MODE_DARK, variantDefault));
var global = generateGlobalColors(THEME_MODE_DARK, brand, globalDefault, variant);
var gray = generateGrayScale(brand.tertiary, brand.secondary);
var table = generateTableColors(THEME_MODE_DARK, variant);
var input = generateInputColors(THEME_MODE_DARK, global, gray, variant);
var noir = {
    brand: brand,
    global: global,
    gray: gray,
    input: input,
    table: table,
    variant: variant,
};
export default noir;
