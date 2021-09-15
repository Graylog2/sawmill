import * as PropTypes from 'prop-types';
import { TBreakpoints } from '../types';
declare const breakpoints: TBreakpoints;
export declare const PropTypeBreakpoints: PropTypes.Requireable<PropTypes.InferProps<{
    min: PropTypes.Requireable<PropTypes.InferProps<{
        xs: PropTypes.Requireable<string>;
        sm: PropTypes.Requireable<string>;
        md: PropTypes.Requireable<string>;
        lg: PropTypes.Requireable<string>;
    }>>;
    max: PropTypes.Requireable<PropTypes.InferProps<{
        xs: PropTypes.Requireable<string>;
        sm: PropTypes.Requireable<string>;
        md: PropTypes.Requireable<string>;
        lg: PropTypes.Requireable<string>;
    }>>;
    px: PropTypes.Requireable<PropTypes.InferProps<{
        min: PropTypes.Requireable<PropTypes.InferProps<{
            xs: PropTypes.Requireable<number>;
            sm: PropTypes.Requireable<number>;
            md: PropTypes.Requireable<number>;
            lg: PropTypes.Requireable<number>;
        }>>;
        max: PropTypes.Requireable<PropTypes.InferProps<{
            xs: PropTypes.Requireable<number>;
            sm: PropTypes.Requireable<number>;
            md: PropTypes.Requireable<number>;
            lg: PropTypes.Requireable<number>;
        }>>;
    }>>;
}>>;
export default breakpoints;
