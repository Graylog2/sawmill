import { COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT, VARIANT_NAMES } from '../../THEME_BASE';
import { ColorScheme, ColorVariant } from '../../types';
import { MantineColors } from '../../mantine/types';
import opacify from '../../utils/opacify';
import { contrastingColor } from '../../utils';
import { ButtonColors } from '../types';

const buttonColors = (colorScheme: ColorScheme, colors: MantineColors, primaryShade: number) => {
  const customColors: Partial<Record<ColorVariant, Partial<Record<ColorScheme, string>>>> = {
    gray: {
      [COLOR_SCHEME_LIGHT]: opacify(colors.gray[2], 0.4),
      [COLOR_SCHEME_DARK]: colors.gray[3],
    },
  };

  return Object.fromEntries(VARIANT_NAMES.map((variantName) => {
    const background = customColors[variantName]?.[colorScheme] ?? colors[variantName][primaryShade];

    return [
      variantName,
      { background, color: contrastingColor(background) },
    ];
  })) as ButtonColors;
};

export default buttonColors;
