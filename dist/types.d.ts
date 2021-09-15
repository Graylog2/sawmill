declare type TThemeMode = 'teint' | 'noir';
declare type TColorLevel = (colorHex: string, level?: number) => string;
declare type TContrastingColor = {
    (color: string, wcagLevel?: string): string;
};
declare type TOpacify = {
    (color: string, amount: number): string;
};
declare type TReadableColor = (hex: string, darkColor?: string, lightColor?: string) => string;
declare type TUtils = {
    colorLevel: TColorLevel;
    contrastingColor: TContrastingColor;
    opacify: TOpacify;
    readableColor: TReadableColor;
};
declare type TBreakpoint = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
};
declare type TBreakpoints = {
    min: TBreakpoint;
    max: TBreakpoint;
    px: {
        min: Record<keyof TBreakpoint, number>;
        max: Record<keyof TBreakpoint, number>;
    };
};
declare type TColorVariantKeys = 'active' | 'danger' | 'default' | 'link' | 'info' | 'primary' | 'success' | 'warning';
declare type TColorVariants = Partial<Record<TColorVariantKeys, string>>;
declare type TColors = {
    brand: {
        primary: string;
        secondary: string;
        tertiary: string;
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
declare type TFonts = {
    family: {
        body: string;
        monospace: string;
    };
    size: {
        root: string;
        body: string;
        huge: string;
        large: string;
        small: string;
        tiny: string;
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
};
declare type TSpacingSizes = '0' | '1' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
declare type TSpacings = Record<TSpacingSizes, string> & {
    px: Record<TSpacingSizes, number>;
};
declare type TThemeColorModes = {
    teint: TColors;
    noir: TColors;
};
declare type TChangeMode = (nextMode: TThemeMode) => void;
declare type TButtons = {
    colors: TColors;
    utils: TUtils;
};
export type { TBreakpoints, TButtons, TChangeMode, TColors, TColorLevel, TContrastingColor, TColorVariants, TColorVariantKeys, TFonts, TSpacings, TSpacingSizes, TThemeColorModes, TThemeMode, TUtils, TOpacify, TReadableColor, };
