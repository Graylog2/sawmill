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
import * as PropTypes from 'prop-types';
import { ROOT_FONT_SIZE } from './_constants';
var SPACE = 0.08; // ratio we use for our calculations
var SIZES = ['0', '1', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var FIBONACCI = [0, 1, 3, 5, 8, 13, 21, 34, 55, 89, 144]; // skipped [1, 2]
var props = SIZES.reduce(function (acc, key) {
    var _a;
    return (__assign(__assign({}, acc), (_a = {}, _a[key] = PropTypes.string, _a)));
}, {
    px: PropTypes.shape(SIZES.reduce(function (acc, key) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[key] = PropTypes.number, _a)));
    }, {})),
});
export var PropTypeSpacings = PropTypes.shape(props);
var spacings = {
    0: '0px',
    1: '1px',
    xxs: '',
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
    xxl: '',
    px: {
        0: 0, 1: 1, xxs: 0, xs: 0, sm: 0, md: 0, lg: 0, xl: 0, xxl: 0,
    },
};
SIZES.forEach(function (size, index) {
    if (size !== '0' && size !== '1') {
        var value = SPACE * FIBONACCI[index];
        spacings[size] = value.toFixed(2) + "rem";
        spacings.px[size] = Math.round(value * ROOT_FONT_SIZE);
    }
});
export default spacings;
