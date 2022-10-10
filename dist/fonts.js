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
import * as PropTypes from 'prop-types';
import { BODY_LINE_HEIGHT, ROOT_FONT_SIZE } from './_constants';
import { generateFontSizes } from './utils/fonts';
import '@fontsource/source-sans-pro';
import '@fontsource/source-code-pro';
import '@fontsource/dm-sans';
var PropTypeRootFontSize = PropTypes.shape({
    value: PropTypes.number,
    px: PropTypes.string,
});
var PropTypeFontSize = PropTypes.shape({
    value: PropTypes.number,
    px: PropTypes.string,
    rem: PropTypes.string,
});
var PropTypeFonts = PropTypes.shape({
    family: PropTypes.shape({
        body: PropTypes.string,
        monospace: PropTypes.string,
        navigation: PropTypes.string,
    }),
    size: PropTypes.shape({
        root: PropTypeRootFontSize,
        body: PropTypeFontSize,
        huge: PropTypeFontSize,
        large: PropTypeFontSize,
        small: PropTypeFontSize,
        tiny: PropTypeFontSize,
        navigation: PropTypeFontSize,
        h1: PropTypeFontSize,
        h2: PropTypeFontSize,
        h3: PropTypeFontSize,
        h4: PropTypeFontSize,
        h5: PropTypeFontSize,
        h6: PropTypeFontSize,
    }),
});
var family = {
    body: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: '"Source Code Pro", Menlo, Monaco, Consolas, "Courier New", monospace',
    navigation: '"DM Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
};
/* Scaled 1.067 Minor Second - https://type-scale.com/ */
var scale = 1.067;
var sizePowers = {
    body: 0,
    huge: 5,
    large: 1,
    medium: 0,
    small: -2,
    tiny: -3,
    navigation: -1,
    h1: 7,
    h2: 4,
    h3: 3,
    h4: 2,
    h5: 1,
    h6: 0,
};
var size = generateFontSizes(ROOT_FONT_SIZE, scale, sizePowers);
var lineHeight = BODY_LINE_HEIGHT + "px";
var fonts = {
    family: family,
    lineHeight: lineHeight,
    size: size,
};
export { family, lineHeight, size, PropTypeFonts, };
export default fonts;
