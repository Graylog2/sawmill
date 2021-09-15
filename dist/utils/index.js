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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readableColor = exports.opacify = exports.contrastingColor = exports.colorLevel = exports.PropTypeUtils = void 0;
var PropTypes = __importStar(require("prop-types"));
var colorLevel_1 = __importDefault(require("./colorLevel"));
exports.colorLevel = colorLevel_1.default;
var contrastingColor_1 = __importDefault(require("./contrastingColor"));
exports.contrastingColor = contrastingColor_1.default;
var opacify_1 = __importDefault(require("./opacify"));
exports.opacify = opacify_1.default;
var readableColor_1 = __importDefault(require("./readableColor"));
exports.readableColor = readableColor_1.default;
exports.PropTypeUtils = PropTypes.shape({
    colorLevel: PropTypes.func,
    contrastingColor: PropTypes.func,
    opacify: PropTypes.func,
    readableColor: PropTypes.func,
});
var utils = {
    colorLevel: colorLevel_1.default,
    contrastingColor: contrastingColor_1.default,
    opacify: opacify_1.default,
    readableColor: readableColor_1.default,
};
exports.default = utils;
