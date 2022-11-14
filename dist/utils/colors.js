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
import chroma from 'chroma-js';
import { THEME_MODE_LIGHT, THEME_MODE_DARK } from '../_constants';
var lightThemeRatio = [0.22, 0.55, 0.88];
var darkThemeRatio = [0.15, 0.55, 0.95];
var lighten = function (color, ratio) { return chroma.mix(color, '#fff', ratio).hex(); };
var darken = function (color, ratio) { return chroma.mix(color, '#000', ratio).hex(); };
var generateGrayScale = function (colorStart, colorEnd) {
    var gray = {
        10: '', 20: '', 30: '', 40: '', 50: '', 60: '', 70: '', 80: '', 90: '', 100: '',
    };
    var scale = chroma.scale([colorStart, colorEnd]).colors(10);
    scale.forEach(function (tint, index) {
        var key = "" + (index + 1) * 10;
        gray[key] = tint;
    });
    return gray;
};
var generateTableColors = function (mode, variant) {
    if (![THEME_MODE_DARK, THEME_MODE_LIGHT].includes(mode)) {
        throw new Error("Requires \"" + THEME_MODE_DARK + "\" or \"" + THEME_MODE_LIGHT + "\" mode option.");
    }
    var adjust = mode === THEME_MODE_DARK ? darken : lighten;
    return {
        background: adjust(variant.default, 0.95),
        backgroundAlt: adjust(variant.default, 0.85),
        backgroundHover: adjust(variant.default, 0.9),
        variant: {
            danger: adjust(variant.danger, 0.75),
            active: adjust(variant.default, 0.75),
            info: adjust(variant.info, 0.75),
            primary: adjust(variant.primary, 0.75),
            success: adjust(variant.success, 0.75),
            warning: adjust(variant.warning, 0.75),
        },
        variantHover: {
            danger: variant.lighter.danger,
            active: variant.lighter.default,
            info: variant.lighter.info,
            primary: variant.lighter.primary,
            success: variant.lighter.success,
            warning: variant.lighter.warning,
        },
    };
};
var generateVariantColors = function (mode, variant) {
    if (![THEME_MODE_DARK, THEME_MODE_LIGHT].includes(mode)) {
        throw new Error("Requires \"" + THEME_MODE_DARK + "\" or \"" + THEME_MODE_LIGHT + "\" mode option.");
    }
    var adjustLight = mode === THEME_MODE_DARK ? darken : lighten;
    var adjustDark = mode === THEME_MODE_DARK ? lighten : darken;
    var ratio = mode === THEME_MODE_DARK ? darkThemeRatio : lightThemeRatio;
    var getDefaultVariant = function () { return ({
        danger: '', default: '', info: '', primary: '', success: '', warning: '',
    }); };
    var variantColors = {
        lightest: getDefaultVariant(),
        lighter: getDefaultVariant(),
        light: getDefaultVariant(),
        dark: getDefaultVariant(),
        darker: getDefaultVariant(),
        darkest: getDefaultVariant(),
    };
    Object.keys(variant).forEach(function (name) {
        variantColors.light[name] = adjustLight(variant[name], ratio[0]);
        variantColors.lighter[name] = adjustLight(variant[name], ratio[1]);
        variantColors.lightest[name] = adjustLight(variant[name], ratio[2]);
        variantColors.dark[name] = adjustDark(variant[name], ratio[0]);
        variantColors.darker[name] = adjustDark(variant[name], ratio[1]);
        variantColors.darkest[name] = adjustDark(variant[name], ratio[2]);
    });
    return variantColors;
};
var generateInputColors = function (mode, global, gray, variant) { return ({
    background: global.contentBackground,
    backgroundDisabled: darken(global.contentBackground, 0.25),
    border: variant.light.default,
    borderFocus: variant.light.info,
    boxShadow: "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px " + chroma(variant.light.info).alpha(0.4).css(),
    color: global.textDefault,
    colorDisabled: gray[60],
    placeholder: gray[60],
}); };
var generateGlobalColors = function (mode, brand, global, variant) { return (__assign(__assign({}, global), { linkHover: chroma(global.link)[mode === THEME_MODE_DARK ? 'brighten' : 'darken'](1).hex(), navigationBackground: global.contentBackground, navigationBoxShadow: chroma(variant.lightest.default).alpha(0.5).css(), textAlt: brand.secondary, textDefault: brand.tertiary })); };
export { darken, lighten, generateGlobalColors, generateGrayScale, generateInputColors, generateTableColors, generateVariantColors, };
