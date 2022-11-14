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
import teint from './variants/teint';
import noir from './variants/noir';
export var PropTypeColors = PropTypes.shape({
    brand: PropTypes.shape({
        primary: PropTypes.string,
        secondary: PropTypes.string,
        tertiary: PropTypes.string,
        logo: PropTypes.string,
        houstonRed: PropTypes.string,
        accentRed: PropTypes.string,
        concrete: PropTypes.string,
        gravelGray: PropTypes.string,
        darkBlue: PropTypes.string,
        accentBlue: PropTypes.string,
        orange: PropTypes.string,
    }),
    global: PropTypes.shape({
        background: PropTypes.string,
        contentBackground: PropTypes.string,
        inputBackground: PropTypes.string,
        link: PropTypes.string,
        linkHover: PropTypes.string,
        navigationBackground: PropTypes.string,
        navigationBoxShadow: PropTypes.string,
        textAlt: PropTypes.string,
        textDefault: PropTypes.string,
    }),
    gray: PropTypes.shape({
        10: PropTypes.string,
        20: PropTypes.string,
        30: PropTypes.string,
        40: PropTypes.string,
        50: PropTypes.string,
        60: PropTypes.string,
        70: PropTypes.string,
        80: PropTypes.string,
        90: PropTypes.string,
        100: PropTypes.string,
    }),
    input: PropTypes.shape({
        background: PropTypes.string,
        backgroundDisabled: PropTypes.string,
        border: PropTypes.string,
        borderFocus: PropTypes.string,
        boxShadow: PropTypes.string,
        color: PropTypes.string,
        colorDisabled: PropTypes.string,
    }),
    table: PropTypes.shape({
        background: PropTypes.string,
        backgroundAlt: PropTypes.string,
        backgroundHover: PropTypes.string,
        variant: PropTypes.shape({
            active: PropTypes.string,
            danger: PropTypes.string,
            info: PropTypes.string,
            primary: PropTypes.string,
            success: PropTypes.string,
            warning: PropTypes.string,
        }),
        variantHover: PropTypes.shape({
            active: PropTypes.string,
            danger: PropTypes.string,
            info: PropTypes.string,
            primary: PropTypes.string,
            success: PropTypes.string,
            warning: PropTypes.string,
        }),
    }),
    variant: PropTypes.shape({
        danger: PropTypes.string,
        dark: PropTypes.shape({
            danger: PropTypes.string,
            default: PropTypes.string,
            info: PropTypes.string,
            primary: PropTypes.string,
            success: PropTypes.string,
            warning: PropTypes.string,
        }),
        darker: PropTypes.shape({
            danger: PropTypes.string,
            default: PropTypes.string,
            info: PropTypes.string,
            primary: PropTypes.string,
            success: PropTypes.string,
            warning: PropTypes.string,
        }),
        darkest: PropTypes.shape({
            danger: PropTypes.string,
            default: PropTypes.string,
            info: PropTypes.string,
            primary: PropTypes.string,
            success: PropTypes.string,
            warning: PropTypes.string,
        }),
        default: PropTypes.string,
        info: PropTypes.string,
        light: PropTypes.shape({
            danger: PropTypes.string,
            default: PropTypes.string,
            info: PropTypes.string,
            primary: PropTypes.string,
            success: PropTypes.string,
            warning: PropTypes.string,
        }),
        lighter: PropTypes.shape({
            danger: PropTypes.string,
            default: PropTypes.string,
            info: PropTypes.string,
            primary: PropTypes.string,
            success: PropTypes.string,
            warning: PropTypes.string,
        }),
        lightest: PropTypes.shape({
            danger: PropTypes.string,
            default: PropTypes.string,
            info: PropTypes.string,
            primary: PropTypes.string,
            success: PropTypes.string,
            warning: PropTypes.string,
        }),
        primary: PropTypes.string,
        success: PropTypes.string,
        warning: PropTypes.string,
    }),
});
var colors = {
    teint: teint,
    noir: noir,
};
export default colors;
export { noir, teint, };
