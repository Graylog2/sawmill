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
exports.PropTypeBreakpoints = void 0;
var PropTypes = __importStar(require("prop-types"));
var breakpointSizes = {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200,
};
var breakpoints = Object.entries(breakpointSizes).reduce(function (sizes, _a) {
    var _b, _c, _d, _e;
    var bp = _a[0], size = _a[1];
    var min = size;
    var max = size - 1;
    return {
        min: __assign(__assign({}, sizes.min), (_b = {}, _b[bp] = min + "px", _b)),
        max: __assign(__assign({}, sizes.max), (_c = {}, _c[bp] = max + "px", _c)),
        px: {
            min: __assign(__assign({}, sizes.px.min), (_d = {}, _d[bp] = min, _d)),
            max: __assign(__assign({}, sizes.px.max), (_e = {}, _e[bp] = max, _e)),
        },
    };
}, {
    min: {},
    max: {},
    px: {
        min: {},
        max: {},
    },
});
var breakpointPropType = PropTypes.shape({
    xs: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
});
var breakpointPxPropType = PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
});
exports.PropTypeBreakpoints = PropTypes.shape({
    min: breakpointPropType,
    max: breakpointPropType,
    px: PropTypes.shape({
        min: breakpointPxPropType,
        max: breakpointPxPropType,
    }),
});
exports.default = breakpoints;
