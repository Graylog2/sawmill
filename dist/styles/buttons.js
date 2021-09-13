"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
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
var chroma_js_1 = require("chroma-js");
var styled_components_1 = require("styled-components");
var buttons = function (_a) {
    var colors = _a.colors, utils = _a.utils;
    var transparentLink = 'rgba(255, 255, 255, 0)';
    var variants = {
        danger: colors.variant.danger,
        "default": colors.gray[90],
        info: colors.variant.info,
        link: transparentLink,
        primary: colors.variant.primary,
        success: colors.variant.success,
        warning: colors.variant.warning
    };
    var mixColor = function (originalColor, adjustColor, ratio) {
        if (adjustColor === void 0) { adjustColor = colors.global.textDefault; }
        if (ratio === void 0) { ratio = 0.15; }
        return chroma_js_1["default"].mix(originalColor, adjustColor, ratio).hex();
    };
    return Object.keys(variants).map(function (variant) {
        var variantColor = variants[variant];
        var isLink = variant === 'link';
        var buttonAdjustColor = chroma_js_1["default"](variantColor).luminance() > 0.5 ? colors.global.textDefault : colors.global.textAlt;
        var defaultBackground = variantColor;
        var defaultBorder = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.05);
        var defaultColor = isLink ? 'var(--color-global-link)' : utils.contrastingColor(defaultBackground);
        var activeBackground = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.10);
        var activeBorder = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.15);
        var activeColor = isLink ? 'var(--color-global-linkHover)' : utils.contrastingColor(activeBackground);
        var disabledBackground = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.20);
        var disabledBorder = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.15);
        var disabledColor = isLink ? 'var(--color-global-link)' : utils.contrastingColor(disabledBackground, 'AA');
        var hoverBackground = isLink ? 'transparent' : mixColor(defaultBackground);
        var hoverBorderColor = isLink ? 'transparent' : mixColor(defaultBorder);
        var hoverColor = isLink ? 'var(--color-global-linkHover)' : mixColor(defaultColor);
        var activeHoverBackground = isLink ? 'transparent' : mixColor(activeBackground);
        var activeHoverBorderColor = isLink ? 'transparent' : mixColor(activeBorder);
        var activeHoverColor = isLink ? 'var(--color-global-linkHover)' : mixColor(activeColor);
        return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      &.btn-", " {\n        background-color: ", ";\n        border-color: ", ";\n        color: ", ";\n        transition: background-color 150ms ease-in-out,\n          border 150ms ease-in-out,\n          color 150ms ease-in-out;\n\n        :hover {\n          background-color: ", ";\n          border-color: ", ";\n          color: ", ";\n        }\n\n        &.active {\n          background-color: ", ";\n          border-color: ", ";\n          color: ", ";\n\n          :hover {\n            background-color: ", ";\n            border-color: ", ";\n            color: ", ";\n          }\n        }\n\n        &[disabled],\n        &.disabled {\n          background-color: ", ";\n          border-color: ", ";\n          color: ", ";\n\n          :hover {\n            background-color: ", ";\n            border-color: ", ";\n            color: ", ";\n          }\n        }\n      }\n    "], ["\n      &.btn-", " {\n        background-color: ", ";\n        border-color: ", ";\n        color: ", ";\n        transition: background-color 150ms ease-in-out,\n          border 150ms ease-in-out,\n          color 150ms ease-in-out;\n\n        :hover {\n          background-color: ", ";\n          border-color: ", ";\n          color: ", ";\n        }\n\n        &.active {\n          background-color: ", ";\n          border-color: ", ";\n          color: ", ";\n\n          :hover {\n            background-color: ", ";\n            border-color: ", ";\n            color: ", ";\n          }\n        }\n\n        &[disabled],\n        &.disabled {\n          background-color: ", ";\n          border-color: ", ";\n          color: ", ";\n\n          :hover {\n            background-color: ", ";\n            border-color: ", ";\n            color: ", ";\n          }\n        }\n      }\n    "])), variant, defaultBackground, defaultBorder, defaultColor, hoverBackground, hoverBorderColor, hoverColor, activeBackground, activeBorder, activeColor, isLink ? transparentLink : activeHoverBackground, activeHoverBorderColor, activeHoverColor, isLink ? transparentLink : disabledBackground, disabledBorder, disabledColor, disabledBackground, disabledBorder, disabledColor);
    });
};
exports["default"] = buttons;
var templateObject_1;
