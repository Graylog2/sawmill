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
exports.readableColor = exports.opacify = exports.contrastingColor = exports.colorLevel = exports.PropTypeUtils = void 0;
var prop_types_1 = require("prop-types");
var colorLevel_1 = require("./colorLevel");
exports.colorLevel = colorLevel_1["default"];
var contrastingColor_1 = require("./contrastingColor");
exports.contrastingColor = contrastingColor_1["default"];
var opacify_1 = require("./opacify");
exports.opacify = opacify_1["default"];
var readableColor_1 = require("./readableColor");
exports.readableColor = readableColor_1["default"];
exports.PropTypeUtils = prop_types_1["default"].shape({
    colorLevel: prop_types_1["default"].func,
    contrastingColor: prop_types_1["default"].func,
    opacify: prop_types_1["default"].func,
    readableColor: prop_types_1["default"].func
});
var utils = {
    colorLevel: colorLevel_1["default"],
    contrastingColor: contrastingColor_1["default"],
    opacify: opacify_1["default"],
    readableColor: readableColor_1["default"]
};
exports["default"] = utils;
