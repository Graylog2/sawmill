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
exports.PropTypeSpacings = void 0;
var prop_types_1 = require("prop-types");
var _constants_1 = require("./_constants");
var SPACE = 0.08; // ratio we use for our calculations
var SIZES = ['0', '1', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var FIBONACCI = [0, 1, 3, 5, 8, 13, 21, 34, 55, 89, 144]; // skipped [1, 2]
var props = SIZES.reduce(function (acc, key) {
    var _a;
    return (__assign(__assign({}, acc), (_a = {}, _a[key] = prop_types_1["default"].string, _a)));
}, {
    px: prop_types_1["default"].shape(SIZES.reduce(function (acc, key) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[key] = prop_types_1["default"].number, _a)));
    }, {}))
});
exports.PropTypeSpacings = prop_types_1["default"].shape(props);
var spacings = {
    px: {}
};
SIZES.forEach(function (size, index) {
    if (size === '0') {
        spacings[size] = '0px';
        spacings.px[size] = 0;
    }
    else if (size === '1') {
        spacings[size] = '1px';
        spacings.px[size] = 1;
    }
    else {
        var value = SPACE * FIBONACCI[index];
        spacings[size] = value.toFixed(2) + "rem";
        spacings.px[size] = Math.round(value * _constants_1.ROOT_FONT_SIZE);
    }
});
exports["default"] = spacings;
