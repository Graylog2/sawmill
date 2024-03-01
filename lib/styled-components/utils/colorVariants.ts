import { TColorVariants, TColorVariantShades } from '../types';
import THEME_BASE, {
  COLOR_SCHEME_DARK,
  COLOR_SCHEME_LIGHT,
} from '../../THEME_BASE';
import { ColorScheme, ColorVariant } from '../../types';
import { MantineColors } from '../../mantine/types';

const ColorVariants = Object.keys(THEME_BASE.colors[COLOR_SCHEME_LIGHT].variant) as Array<ColorVariant>;

const generateVariantColors = (colorScheme: ColorScheme, colors: MantineColors, primaryShade: number) => {
  if (![COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT].includes(colorScheme)) {
    throw new Error(`Requires "${COLOR_SCHEME_DARK}" or "${COLOR_SCHEME_LIGHT}" color scheme option.`);
  }

  const variantBaseColors = Object.fromEntries(ColorVariants.map((colorVariant) => [colorVariant, colors[colorVariant][primaryShade]]));
  const variantColorShades = {
    light: {}, lighter: {}, lightest: {}, dark: {}, darker: {}, darkest: {},
  } as Record<TColorVariantShades, TColorVariants>;

  const shade = (difference: number) => {
    if (colorScheme === COLOR_SCHEME_LIGHT) {
      return primaryShade + difference;
    }

    return primaryShade - difference;
  };

  ColorVariants.forEach((colorVariant) => {
    variantColorShades.light[colorVariant] = colors[colorVariant][shade(-1)];
    variantColorShades.lighter[colorVariant] = colors[colorVariant][shade(-2)];
    variantColorShades.lightest[colorVariant] = colors[colorVariant][shade(-3)];
    variantColorShades.dark[colorVariant] = colors[colorVariant][shade(+1)];
    variantColorShades.darker[colorVariant] = colors[colorVariant][shade(+2)];
    variantColorShades.darkest[colorVariant] = colors[colorVariant][shade(+3)];
  });

  return {
    ...variantBaseColors,
    ...variantColorShades,
  };
};

export default generateVariantColors;
