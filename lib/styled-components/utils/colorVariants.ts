import { TColorVariants, TColorVariantShades } from '../types';
import THEME_BASE, {
  COLOR_SCHEME_DARK,
  COLOR_SCHEME_LIGHT,
} from '../../THEME_BASE';
import { ColorScheme, ColorVariant } from '../../types';
import { MantineColors } from '../../mantine/types';

const ColorVariants = Object.keys(THEME_BASE.colors[COLOR_SCHEME_LIGHT].variant) as Array<ColorVariant>;

const shades: Array<TColorVariantShades> = ['light', 'lighter', 'lightest', 'dark', 'darker', 'darkest'];

const shadesMap = {
  [COLOR_SCHEME_LIGHT]: {
    light: -1,
    lighter: -3,
    lightest: -5,
    dark: 1,
    darker: 3,
    darkest: 4,
  },
  [COLOR_SCHEME_DARK]: {
    light: 1,
    lighter: 3,
    lightest: 4,
    dark: -1,
    darker: -3,
    darkest: -5,
  },
};

const variantColors = (colorScheme: ColorScheme, colors: MantineColors, primaryShade: number) => {
  if (![COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT].includes(colorScheme)) {
    throw new Error(`Requires "${COLOR_SCHEME_DARK}" or "${COLOR_SCHEME_LIGHT}" color scheme option.`);
  }

  const variantBaseColors = Object.fromEntries(ColorVariants.map((colorVariant) => [colorVariant, colors[colorVariant][primaryShade]]));
  const variantColorShades = Object.fromEntries(shades.map((shade) => ([shade, {}]))) as Record<TColorVariantShades, TColorVariants>;
  const schemeShadesMap = shadesMap[colorScheme];

  ColorVariants.forEach((colorVariant) => {
    shades.forEach((shade) => {
      variantColorShades[shade][colorVariant] = colors[colorVariant][primaryShade + schemeShadesMap[shade]];
    });
  });

  return {
    ...variantBaseColors,
    ...variantColorShades,
  };
};

export default variantColors;
