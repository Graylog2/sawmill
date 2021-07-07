"use strict";
exports.__esModule = true;
exports.PropTypeFonts = exports.size = exports.family = void 0;
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
var prop_types_1 = require("prop-types");
var _constants_1 = require("./_constants");
require("opensans-npm-webfont/open_sans.css");
require("opensans-npm-webfont/open_sans_italic.css");
require("opensans-npm-webfont/open_sans_bold.css");
require("@openfonts/roboto-mono_latin/index.css");
var PropTypeFonts = prop_types_1["default"].shape({
    family: prop_types_1["default"].shape({
        body: prop_types_1["default"].string,
        monospace: prop_types_1["default"].string
    }),
    size: prop_types_1["default"].shape({
        root: prop_types_1["default"].string,
        body: prop_types_1["default"].string,
        huge: prop_types_1["default"].string,
        large: prop_types_1["default"].string,
        small: prop_types_1["default"].string,
        tiny: prop_types_1["default"].string,
        h1: prop_types_1["default"].string,
        h2: prop_types_1["default"].string,
        h3: prop_types_1["default"].string,
        h4: prop_types_1["default"].string,
        h5: prop_types_1["default"].string,
        h6: prop_types_1["default"].string
    })
});
exports.PropTypeFonts = PropTypeFonts;
var family = {
    body: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: '"Roboto Mono", Menlo, Monaco, Consolas, "Courier New", monospace'
};
exports.family = family;
/* Scaled 1.125 Major Second - https://type-scale.com/ */
var size = {
    root: _constants_1.ROOT_FONT_SIZE + "px",
    body: '1rem',
    huge: '2.027rem',
    large: '1.125rem',
    small: '0.889rem',
    tiny: '0.79rem',
    h1: '1.802rem',
    h2: '1.602rem',
    h3: '1.424rem',
    h4: '1.266rem',
    h5: '1.125rem',
    h6: '1rem'
};
exports.size = size;
var fonts = {
    family: family,
    size: size
};
exports["default"] = fonts;
