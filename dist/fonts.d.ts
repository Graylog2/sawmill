import * as PropTypes from 'prop-types';
import { TFonts } from '../types';
declare const PropTypeFonts: PropTypes.Requireable<PropTypes.InferProps<{
    family: PropTypes.Requireable<PropTypes.InferProps<{
        body: PropTypes.Requireable<string>;
        monospace: PropTypes.Requireable<string>;
    }>>;
    size: PropTypes.Requireable<PropTypes.InferProps<{
        root: PropTypes.Requireable<string>;
        body: PropTypes.Requireable<string>;
        huge: PropTypes.Requireable<string>;
        large: PropTypes.Requireable<string>;
        small: PropTypes.Requireable<string>;
        tiny: PropTypes.Requireable<string>;
        h1: PropTypes.Requireable<string>;
        h2: PropTypes.Requireable<string>;
        h3: PropTypes.Requireable<string>;
        h4: PropTypes.Requireable<string>;
        h5: PropTypes.Requireable<string>;
        h6: PropTypes.Requireable<string>;
    }>>;
}>>;
declare const family: Partial<TFonts>;
declare const size: Partial<TFonts>;
declare const fonts: TFonts;
export { family, size, PropTypeFonts, };
export default fonts;
