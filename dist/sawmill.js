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
import utils, { colorLevel, readableColor } from './utils';
import breakpoints from './breakpoints';
import fonts from './fonts';
import spacings from './spacings';
import buttons from './styles/buttons';
import aceEditor from './styles/aceEditor';
var Sawmill = /** @class */ (function () {
    function Sawmill(themeColors, mode, changeMode) {
        this.colors = themeColors;
        this.breakpoints = breakpoints;
        this.fonts = fonts;
        this.spacings = spacings;
        this.mode = mode;
        this.changeMode = changeMode;
        this.utils = __assign(__assign({}, utils), { colorLevel: colorLevel(this.colors), readableColor: readableColor(this.colors) });
        this.components = {
            button: buttons({ colors: this.colors, utils: this.utils }),
            aceEditor: aceEditor({ colors: this.colors }),
        };
    }
    return Sawmill;
}());
export default Sawmill;
