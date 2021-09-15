import { $PropertyType } from 'utility-types';
import type { TColors, TThemeMode, TColorVariants } from '../../types';
declare const lighten: (color: string, ratio: number) => string;
declare const darken: (color: string, ratio: number) => string;
declare const generateGrayScale: (colorStart: string, colorEnd: string) => TColorVariants;
declare const generateTableColors: (mode: TThemeMode, variant: $PropertyType<TColors, 'variant'>) => $PropertyType<TColors, 'table'>;
declare const generateVariantColors: (mode: TThemeMode, variant: TColorVariants) => $PropertyType<TColors, 'variant'>;
declare const generateInputColors: (mode: TThemeMode, global: $PropertyType<TColors, 'global'>, gray: $PropertyType<TColors, 'gray'>, variant: $PropertyType<TColors, 'variant'>) => {
    background: string;
    backgroundDisabled: string;
    border: string;
    borderFocus: string;
    boxShadow: string;
    color: string;
    colorDisabled: string;
    placeholder: string;
};
declare const generateGlobalColors: (mode: TThemeMode, brand: $PropertyType<TColors, 'brand'>, global: $PropertyType<TColors, 'global'>, variant: $PropertyType<TColors, 'variant'>) => $PropertyType<TColors, 'global'>;
export { darken, lighten, generateGlobalColors, generateGrayScale, generateInputColors, generateTableColors, generateVariantColors, };
