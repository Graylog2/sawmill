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
exports.__esModule = true;
exports.teint = exports.noir = exports.PropTypeColors = void 0;
var prop_types_1 = require("prop-types");
var teint_1 = require("./variants/teint");
exports.teint = teint_1["default"];
var noir_1 = require("./variants/noir");
exports.noir = noir_1["default"];
exports.PropTypeColors = prop_types_1["default"].shape({
    brand: prop_types_1["default"].shape({
        primary: prop_types_1["default"].string,
        secondary: prop_types_1["default"].string,
        tertiary: prop_types_1["default"].string
    }),
    global: prop_types_1["default"].shape({
        background: prop_types_1["default"].string,
        contentBackground: prop_types_1["default"].string,
        inputBackground: prop_types_1["default"].string,
        link: prop_types_1["default"].string,
        linkHover: prop_types_1["default"].string,
        navigationBackground: prop_types_1["default"].string,
        navigationBoxShadow: prop_types_1["default"].string,
        textAlt: prop_types_1["default"].string,
        textDefault: prop_types_1["default"].string
    }),
    gray: prop_types_1["default"].shape({
        10: prop_types_1["default"].string,
        20: prop_types_1["default"].string,
        30: prop_types_1["default"].string,
        40: prop_types_1["default"].string,
        50: prop_types_1["default"].string,
        60: prop_types_1["default"].string,
        70: prop_types_1["default"].string,
        80: prop_types_1["default"].string,
        90: prop_types_1["default"].string,
        100: prop_types_1["default"].string
    }),
    input: prop_types_1["default"].shape({
        background: prop_types_1["default"].string,
        backgroundDisabled: prop_types_1["default"].string,
        border: prop_types_1["default"].string,
        borderFocus: prop_types_1["default"].string,
        boxShadow: prop_types_1["default"].string,
        color: prop_types_1["default"].string,
        colorDisabled: prop_types_1["default"].string
    }),
    table: prop_types_1["default"].shape({
        background: prop_types_1["default"].string,
        backgroundAlt: prop_types_1["default"].string,
        backgroundHover: prop_types_1["default"].string,
        variant: prop_types_1["default"].shape({
            active: prop_types_1["default"].string,
            danger: prop_types_1["default"].string,
            info: prop_types_1["default"].string,
            primary: prop_types_1["default"].string,
            success: prop_types_1["default"].string,
            warning: prop_types_1["default"].string
        }),
        variantHover: prop_types_1["default"].shape({
            active: prop_types_1["default"].string,
            danger: prop_types_1["default"].string,
            info: prop_types_1["default"].string,
            primary: prop_types_1["default"].string,
            success: prop_types_1["default"].string,
            warning: prop_types_1["default"].string
        })
    }),
    variant: prop_types_1["default"].shape({
        danger: prop_types_1["default"].string,
        dark: prop_types_1["default"].shape({
            danger: prop_types_1["default"].string,
            "default": prop_types_1["default"].string,
            info: prop_types_1["default"].string,
            primary: prop_types_1["default"].string,
            success: prop_types_1["default"].string,
            warning: prop_types_1["default"].string
        }),
        darker: prop_types_1["default"].shape({
            danger: prop_types_1["default"].string,
            "default": prop_types_1["default"].string,
            info: prop_types_1["default"].string,
            primary: prop_types_1["default"].string,
            success: prop_types_1["default"].string,
            warning: prop_types_1["default"].string
        }),
        darkest: prop_types_1["default"].shape({
            danger: prop_types_1["default"].string,
            "default": prop_types_1["default"].string,
            info: prop_types_1["default"].string,
            primary: prop_types_1["default"].string,
            success: prop_types_1["default"].string,
            warning: prop_types_1["default"].string
        }),
        "default": prop_types_1["default"].string,
        info: prop_types_1["default"].string,
        light: prop_types_1["default"].shape({
            danger: prop_types_1["default"].string,
            "default": prop_types_1["default"].string,
            info: prop_types_1["default"].string,
            primary: prop_types_1["default"].string,
            success: prop_types_1["default"].string,
            warning: prop_types_1["default"].string
        }),
        lighter: prop_types_1["default"].shape({
            danger: prop_types_1["default"].string,
            "default": prop_types_1["default"].string,
            info: prop_types_1["default"].string,
            primary: prop_types_1["default"].string,
            success: prop_types_1["default"].string,
            warning: prop_types_1["default"].string
        }),
        lightest: prop_types_1["default"].shape({
            danger: prop_types_1["default"].string,
            "default": prop_types_1["default"].string,
            info: prop_types_1["default"].string,
            primary: prop_types_1["default"].string,
            success: prop_types_1["default"].string,
            warning: prop_types_1["default"].string
        }),
        primary: prop_types_1["default"].string,
        success: prop_types_1["default"].string,
        warning: prop_types_1["default"].string
    })
});
var colors = {
    teint: teint_1["default"],
    noir: noir_1["default"]
};
exports["default"] = colors;
