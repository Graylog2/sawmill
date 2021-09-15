import * as PropTypes from 'prop-types';
import colorLevel from './colorLevel';
import contrastingColor from './contrastingColor';
import opacify from './opacify';
import readableColor from './readableColor';
export declare const PropTypeUtils: PropTypes.Requireable<PropTypes.InferProps<{
    colorLevel: PropTypes.Requireable<(...args: any[]) => any>;
    contrastingColor: PropTypes.Requireable<(...args: any[]) => any>;
    opacify: PropTypes.Requireable<(...args: any[]) => any>;
    readableColor: PropTypes.Requireable<(...args: any[]) => any>;
}>>;
declare const utils: {
    colorLevel: (colors: import("../types").TColors) => import("../types").TColorLevel;
    contrastingColor: (color: string, wcagLevel?: string) => string;
    opacify: typeof opacify;
    readableColor: (colors: import("../types").TColors) => (hex: string, darkColor?: string, lightColor?: string) => string;
};
export { colorLevel, contrastingColor, opacify, readableColor, };
export default utils;
