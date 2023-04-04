import * as PropTypes from 'prop-types';
import { TFonts } from './types';
import '@openfonts/dm-sans_latin';
import '@openfonts/source-sans-pro_latin';
import '@openfonts/ubuntu-mono_latin';
declare const PropTypeFonts: PropTypes.Requireable<PropTypes.InferProps<{
    family: PropTypes.Requireable<PropTypes.InferProps<{
        body: PropTypes.Requireable<string>;
        monospace: PropTypes.Requireable<string>;
        navigation: PropTypes.Requireable<string>;
    }>>;
    size: PropTypes.Requireable<PropTypes.InferProps<{
        root: PropTypes.Requireable<PropTypes.InferProps<{
            value: PropTypes.Requireable<number>;
            px: PropTypes.Requireable<string>;
        }>>;
        body: PropTypes.Requireable<PropTypes.InferProps<{
            value: PropTypes.Requireable<number>;
            px: PropTypes.Requireable<string>;
            rem: PropTypes.Requireable<string>;
        }>>;
        huge: PropTypes.Requireable<PropTypes.InferProps<{
            value: PropTypes.Requireable<number>;
            px: PropTypes.Requireable<string>;
            rem: PropTypes.Requireable<string>;
        }>>;
        large: PropTypes.Requireable<PropTypes.InferProps<{
            value: PropTypes.Requireable<number>;
            px: PropTypes.Requireable<string>;
            rem: PropTypes.Requireable<string>;
        }>>;
        small: PropTypes.Requireable<PropTypes.InferProps<{
            value: PropTypes.Requireable<number>;
            px: PropTypes.Requireable<string>;
            rem: PropTypes.Requireable<string>;
        }>>;
        tiny: PropTypes.Requireable<PropTypes.InferProps<{
            value: PropTypes.Requireable<number>;
            px: PropTypes.Requireable<string>;
            rem: PropTypes.Requireable<string>;
        }>>;
        navigation: PropTypes.Requireable<PropTypes.InferProps<{
            value: PropTypes.Requireable<number>;
            px: PropTypes.Requireable<string>;
            rem: PropTypes.Requireable<string>;
        }>>;
        h1: PropTypes.Requireable<PropTypes.InferProps<{
            value: PropTypes.Requireable<number>;
            px: PropTypes.Requireable<string>;
            rem: PropTypes.Requireable<string>;
        }>>;
        h2: PropTypes.Requireable<PropTypes.InferProps<{
            value: PropTypes.Requireable<number>;
            px: PropTypes.Requireable<string>;
            rem: PropTypes.Requireable<string>;
        }>>;
        h3: PropTypes.Requireable<PropTypes.InferProps<{
            value: PropTypes.Requireable<number>;
            px: PropTypes.Requireable<string>;
            rem: PropTypes.Requireable<string>;
        }>>;
        h4: PropTypes.Requireable<PropTypes.InferProps<{
            value: PropTypes.Requireable<number>;
            px: PropTypes.Requireable<string>;
            rem: PropTypes.Requireable<string>;
        }>>;
        h5: PropTypes.Requireable<PropTypes.InferProps<{
            value: PropTypes.Requireable<number>;
            px: PropTypes.Requireable<string>;
            rem: PropTypes.Requireable<string>;
        }>>;
        h6: PropTypes.Requireable<PropTypes.InferProps<{
            value: PropTypes.Requireable<number>;
            px: PropTypes.Requireable<string>;
            rem: PropTypes.Requireable<string>;
        }>>;
    }>>;
}>>;
declare const family: {
    body: string;
    monospace: string;
    navigation: string;
};
declare const size: {
    root: import("./types").TRootFont;
    body: import("./types").TFont;
    huge: import("./types").TFont;
    large: import("./types").TFont;
    medium: import("./types").TFont;
    small: import("./types").TFont;
    tiny: import("./types").TFont;
    navigation: import("./types").TFont;
    h1: import("./types").TFont;
    h2: import("./types").TFont;
    h3: import("./types").TFont;
    h4: import("./types").TFont;
    h5: import("./types").TFont;
    h6: import("./types").TFont;
};
declare const lineHeight: string;
declare const fonts: TFonts;
export { family, lineHeight, size, PropTypeFonts, };
export default fonts;
