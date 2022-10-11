import * as PropTypes from 'prop-types';
import brand from './brandColors';
import teint from './variants/teint';
import noir from './variants/noir';
import { TThemeColorModes } from './types';
export declare const PropTypeColors: PropTypes.Requireable<PropTypes.InferProps<{
    brand: PropTypes.Requireable<PropTypes.InferProps<{
        primary: PropTypes.Requireable<PropTypes.InferProps<{
            houstonRed: PropTypes.Requireable<string>;
            accentRed: PropTypes.Requireable<string>;
            concrete: PropTypes.Requireable<string>;
            gravelGray: PropTypes.Requireable<string>;
            darkBlue: PropTypes.Requireable<string>;
            accentBlue: PropTypes.Requireable<string>;
            orange: PropTypes.Requireable<string>;
            white: PropTypes.Requireable<string>;
            black: PropTypes.Requireable<string>;
        }>>;
        grays: PropTypes.Requireable<PropTypes.InferProps<{
            gray1: PropTypes.Requireable<string>;
            gray2: PropTypes.Requireable<string>;
            gray3: PropTypes.Requireable<string>;
            gray4: PropTypes.Requireable<string>;
            gray5: PropTypes.Requireable<string>;
            gray6: PropTypes.Requireable<string>;
            gray7: PropTypes.Requireable<string>;
            gray8: PropTypes.Requireable<string>;
            gray9: PropTypes.Requireable<string>;
            gray10: PropTypes.Requireable<string>;
            gray11: PropTypes.Requireable<string>;
            gray12: PropTypes.Requireable<string>;
            gray13: PropTypes.Requireable<string>;
            gray14: PropTypes.Requireable<string>;
        }>>;
        gradients: PropTypes.Requireable<PropTypes.InferProps<{
            redToOrange: PropTypes.Requireable<string>;
            orangeToRed: PropTypes.Requireable<string>;
            redToWhite: PropTypes.Requireable<string>;
            whiteToOrange: PropTypes.Requireable<string>;
            grayToRed: PropTypes.Requireable<string>;
            redToGray: PropTypes.Requireable<string>;
        }>>;
        dataVisualization: PropTypes.Requireable<PropTypes.InferProps<{
            blue: PropTypes.Requireable<string>;
            green: PropTypes.Requireable<string>;
            orange: PropTypes.Requireable<string>;
            yellow: PropTypes.Requireable<string>;
            red: PropTypes.Requireable<string>;
            lightGray: PropTypes.Requireable<string>;
            darkGray: PropTypes.Requireable<string>;
        }>>;
    }>>;
    global: PropTypes.Requireable<PropTypes.InferProps<{
        primary: PropTypes.Requireable<string>;
        secondary: PropTypes.Requireable<string>;
        tertiary: PropTypes.Requireable<string>;
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
export { brand, noir, teint, };
