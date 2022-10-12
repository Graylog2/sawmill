import * as PropTypes from 'prop-types';
import teint from './variants/teint';
import noir from './variants/noir';
import { TThemeColorModes } from './types';
export declare const PropTypeColors: PropTypes.Requireable<PropTypes.InferProps<{
    brand: PropTypes.Requireable<PropTypes.InferProps<{
        primary: PropTypes.Requireable<string>;
        secondary: PropTypes.Requireable<string>;
        tertiary: PropTypes.Requireable<string>;
        logo: PropTypes.Requireable<string>;
        houstonRed: PropTypes.Requireable<string>;
        accentRed: PropTypes.Requireable<string>;
        concrete: PropTypes.Requireable<string>;
        gravelGray: PropTypes.Requireable<string>;
        darkBlue: PropTypes.Requireable<string>;
        accentBlue: PropTypes.Requireable<string>;
        orange: PropTypes.Requireable<string>;
    }>>;
    global: PropTypes.Requireable<PropTypes.InferProps<{
        background: PropTypes.Requireable<string>;
        contentBackground: PropTypes.Requireable<string>;
        inputBackground: PropTypes.Requireable<string>;
        link: PropTypes.Requireable<string>;
        linkHover: PropTypes.Requireable<string>;
        navigationBackground: PropTypes.Requireable<string>;
        navigationBoxShadow: PropTypes.Requireable<string>;
        textAlt: PropTypes.Requireable<string>;
        textDefault: PropTypes.Requireable<string>;
    }>>;
    gray: PropTypes.Requireable<PropTypes.InferProps<{
        10: PropTypes.Requireable<string>;
        20: PropTypes.Requireable<string>;
        30: PropTypes.Requireable<string>;
        40: PropTypes.Requireable<string>;
        50: PropTypes.Requireable<string>;
        60: PropTypes.Requireable<string>;
        70: PropTypes.Requireable<string>;
        80: PropTypes.Requireable<string>;
        90: PropTypes.Requireable<string>;
        100: PropTypes.Requireable<string>;
    }>>;
    input: PropTypes.Requireable<PropTypes.InferProps<{
        background: PropTypes.Requireable<string>;
        backgroundDisabled: PropTypes.Requireable<string>;
        border: PropTypes.Requireable<string>;
        borderFocus: PropTypes.Requireable<string>;
        boxShadow: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        colorDisabled: PropTypes.Requireable<string>;
    }>>;
    table: PropTypes.Requireable<PropTypes.InferProps<{
        background: PropTypes.Requireable<string>;
        backgroundAlt: PropTypes.Requireable<string>;
        backgroundHover: PropTypes.Requireable<string>;
        variant: PropTypes.Requireable<PropTypes.InferProps<{
            active: PropTypes.Requireable<string>;
            danger: PropTypes.Requireable<string>;
            info: PropTypes.Requireable<string>;
            primary: PropTypes.Requireable<string>;
            success: PropTypes.Requireable<string>;
            warning: PropTypes.Requireable<string>;
        }>>;
        variantHover: PropTypes.Requireable<PropTypes.InferProps<{
            active: PropTypes.Requireable<string>;
            danger: PropTypes.Requireable<string>;
            info: PropTypes.Requireable<string>;
            primary: PropTypes.Requireable<string>;
            success: PropTypes.Requireable<string>;
            warning: PropTypes.Requireable<string>;
        }>>;
    }>>;
    variant: PropTypes.Requireable<PropTypes.InferProps<{
        danger: PropTypes.Requireable<string>;
        dark: PropTypes.Requireable<PropTypes.InferProps<{
            danger: PropTypes.Requireable<string>;
            default: PropTypes.Requireable<string>;
            info: PropTypes.Requireable<string>;
            primary: PropTypes.Requireable<string>;
            success: PropTypes.Requireable<string>;
            warning: PropTypes.Requireable<string>;
        }>>;
        darker: PropTypes.Requireable<PropTypes.InferProps<{
            danger: PropTypes.Requireable<string>;
            default: PropTypes.Requireable<string>;
            info: PropTypes.Requireable<string>;
            primary: PropTypes.Requireable<string>;
            success: PropTypes.Requireable<string>;
            warning: PropTypes.Requireable<string>;
        }>>;
        darkest: PropTypes.Requireable<PropTypes.InferProps<{
            danger: PropTypes.Requireable<string>;
            default: PropTypes.Requireable<string>;
            info: PropTypes.Requireable<string>;
            primary: PropTypes.Requireable<string>;
            success: PropTypes.Requireable<string>;
            warning: PropTypes.Requireable<string>;
        }>>;
        default: PropTypes.Requireable<string>;
        info: PropTypes.Requireable<string>;
        light: PropTypes.Requireable<PropTypes.InferProps<{
            danger: PropTypes.Requireable<string>;
            default: PropTypes.Requireable<string>;
            info: PropTypes.Requireable<string>;
            primary: PropTypes.Requireable<string>;
            success: PropTypes.Requireable<string>;
            warning: PropTypes.Requireable<string>;
        }>>;
        lighter: PropTypes.Requireable<PropTypes.InferProps<{
            danger: PropTypes.Requireable<string>;
            default: PropTypes.Requireable<string>;
            info: PropTypes.Requireable<string>;
            primary: PropTypes.Requireable<string>;
            success: PropTypes.Requireable<string>;
            warning: PropTypes.Requireable<string>;
        }>>;
        lightest: PropTypes.Requireable<PropTypes.InferProps<{
            danger: PropTypes.Requireable<string>;
            default: PropTypes.Requireable<string>;
            info: PropTypes.Requireable<string>;
            primary: PropTypes.Requireable<string>;
            success: PropTypes.Requireable<string>;
            warning: PropTypes.Requireable<string>;
        }>>;
        primary: PropTypes.Requireable<string>;
        success: PropTypes.Requireable<string>;
        warning: PropTypes.Requireable<string>;
    }>>;
}>>;
declare const colors: TThemeColorModes;
export default colors;
export { noir, teint, };
