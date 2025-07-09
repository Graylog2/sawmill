import { ColorScheme, CustomColors } from '../../types';
import { MantineColors } from '../types';
import { darken, lighten } from '../../utils/colors';
import THEME_BASE from '../../THEME_BASE';

const colorShades = (colorScheme: ColorScheme, customBaseVariantColors?: CustomColors['variant']): MantineColors => {
  const defaultVariantColors = THEME_BASE.colors[colorScheme].variant;

  if (!customBaseVariantColors || !Object.keys(customBaseVariantColors).length) {
    return defaultVariantColors;
  }

  const customVariantColors = Object.fromEntries(
    Object.entries(customBaseVariantColors).map(([variantName, color]) => ([
      variantName,
      [
        lighten(color, 0.85),
        lighten(color, 0.73),
        lighten(color, 0.56),
        lighten(color, 0.35),
        lighten(color, 0.14),
        color,
        darken(color, 0.10),
        darken(color, 0.28),
        darken(color, 0.45),
        darken(color, 0.66),
      ],
    ])),
  ) as MantineColors;

  return { ...defaultVariantColors, ...customVariantColors };
};

export default colorShades;
