import type { TColors, TThemeMode, TColorVariants } from '../types';
declare const lighten: (color: string, ratio: number) => string;
declare const darken: (color: string, ratio: number) => string;
declare const generateGrayScale: (colorStart: string, colorEnd: string) => TColors['gray'];
declare const generateTableColors: (mode: TThemeMode, variant: TColors['variant']) => TColors['table'];
declare const generateVariantColors: (mode: TThemeMode, variant: TColorVariants) => TColors['variant'];
declare const generateInputColors: (mode: TThemeMode, global: TColors['global'], gray: TColors['gray'], variant: TColors['variant']) => TColors['input'];
declare const generateGlobalColors: (mode: TThemeMode, brand: TColors['brand'], global: TColors['global'], variant: TColors['variant']) => TColors['global'];
export { darken, lighten, generateGlobalColors, generateGrayScale, generateInputColors, generateTableColors, generateVariantColors, };
