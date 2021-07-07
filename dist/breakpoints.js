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
exports.PropTypeBreakpoints = void 0;
var prop_types_1 = require("prop-types");
var sizes = {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200
};
var min = {};
var max = {};
Object.keys(sizes).forEach(function (bp) {
    min[bp] = sizes[bp] + "px";
    max[bp] = sizes[bp] - 1 + "px";
});
exports.PropTypeBreakpoints = prop_types_1["default"].shape({
    min: prop_types_1["default"].shape({
        xs: prop_types_1["default"].string,
        sm: prop_types_1["default"].string,
        md: prop_types_1["default"].string,
        lg: prop_types_1["default"].string
    }),
    max: prop_types_1["default"].shape({
        xs: prop_types_1["default"].string,
        sm: prop_types_1["default"].string,
        md: prop_types_1["default"].string,
        lg: prop_types_1["default"].string
    })
});
var breakpoints = {
    min: min,
    max: max
};
exports["default"] = breakpoints;
