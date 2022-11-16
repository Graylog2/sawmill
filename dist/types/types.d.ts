import { FlattenSimpleInterpolation } from 'styled-components';
export declare type TThemeMode = 'teint' | 'noir';
export declare type TColorLevel = (colorHex: string, level?: number) => string;
export declare type TContrastingColor = {
    (color: string, wcagLevel?: string): string;
};
export declare type TOpacify = {
    (color: string, amount: number): string;
};
export declare type TReadableColor = (hex: string, darkColor?: string, lightColor?: string) => string;
export declare type TUtils = {
    colorLevel: TColorLevel;
    contrastingColor: TContrastingColor;
    opacify: TOpacify;
    readableColor: TReadableColor;
};
export declare type TBreakpoint = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
};
export declare type TBreakpoints = {
    min: TBreakpoint;
    max: TBreakpoint;
    px: {
        min: Record<keyof TBreakpoint, number>;
        max: Record<keyof TBreakpoint, number>;
    };
};
export declare type TColorVariantKeys = 'active' | 'danger' | 'default' | 'link' | 'info' | 'primary' | 'success' | 'warning';
export declare type TColorVariants = Partial<Record<TColorVariantKeys, string>>;
export declare type TColors = {
    brand: {
        primary: string;
        secondary: string;
        tertiary: string;
        accentRed: string;
        concrete: string;
        gravelGray: string;
        darkBlue: string;
        accentBlue: string;
        orange: string;
    };
    global: {
        background: string;
        contentBackground: string;
        link: string;
        linkHover: string;
        navigationBackground: string;
        navigationBoxShadow: string;
        textAlt: string;
        textDefault: string;
    };
    gray: {
        '10': string;
        '20': string;
        '30': string;
        '40': string;
        '50': string;
        '60': string;
        '70': string;
        '80': string;
        '90': string;
        '100': string;
    };
    input: {
        background: string;
        backgroundDisabled: string;
        border: string;
        borderFocus: string;
        boxShadow: string;
        color: string;
        colorDisabled: string;
        placeholder: string;
    };
    table: {
        background: string;
        backgroundAlt: string;
        backgroundHover: string;
        variant: TColorVariants;
        variantHover: TColorVariants;
    };
    variant: TColorVariants & {
        dark: TColorVariants;
        darker: TColorVariants;
        darkest: TColorVariants;
        light: TColorVariants;
        lighter: TColorVariants;
        lightest: TColorVariants;
    };
};
export declare type TRootFont = {
    value: number;
    px: string;
};
export declare type TFont = {
    value: number;
    px: string;
    rem: string;
};
export declare type TFonts = {
    family: {
        body: string;
        monospace: string;
    };
    lineHeight: string;
    size: {
        root: TRootFont;
        body: TFont;
        huge: TFont;
        large: TFont;
        medium: TFont;
        small: TFont;
        tiny: TFont;
        navigation: TFont;
        h1: TFont;
        h2: TFont;
        h3: TFont;
        h4: TFont;
        h5: TFont;
        h6: TFont;
    };
};
export declare type TFontSizes = TFonts['size'];
export declare type TSizes = keyof TFontSizes;
export declare type TSizePowers = Record<Exclude<TSizes, 'root'>, number>;
export declare type TSpacingSizes = '0' | '1' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export declare type TSpacings = Record<TSpacingSizes, string> & {
    px: Record<TSpacingSizes, number>;
};
export declare type TThemeColorModes = {
    teint: TColors;
    noir: TColors;
};
export declare type TChangeMode = (nextMode: TThemeMode) => void;
export declare type TButtons = {
    colors: TColors;
    utils: TUtils;
};
export interface GraylogTheme {
    breakpoints: TBreakpoints;
    colors: TColors;
    fonts: TFonts;
    utils: TUtils;
    mode: TThemeMode;
    spacings: TSpacings;
    changeMode: TChangeMode;
    components: {
        [component: string]: FlattenSimpleInterpolation | FlattenSimpleInterpolation[];
    };
}
