import { COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT } from '../../THEME_BASE';
import { StyledComponentsTheme } from '../types';
import { ColorScheme } from '../../types';
import { MantineColors } from '../../mantine/types';
import { opacify } from '../../utils';

const tableColors = (colorScheme: ColorScheme, completeVariant: StyledComponentsTheme['colors']['variant'], global: StyledComponentsTheme['colors']['global'], colors: MantineColors) => {
  if (![COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT].includes(colorScheme)) {
    throw new Error(`Requires "${COLOR_SCHEME_DARK}" or "${COLOR_SCHEME_LIGHT}" color scheme option.`);
  }

  const isLightTheme = colorScheme === COLOR_SCHEME_LIGHT;

  return {
    head: {
      background: isLightTheme ? opacify(colors.gray[1], 0.18) : colors.gray[5],
    },
    row: {
      background: isLightTheme ? colors.gray[0] : colors.gray[8],
      backgroundAlt: isLightTheme ? opacify(colors.gray[1], 0.2) : opacify(colors.gray[1], 0.08),
      backgroundHover: opacify(colors.gray[2], 0.2),
      border: isLightTheme ? opacify(colors.gray[1], 0.75) : opacify(colors.gray[1], 0.20),
    },
    variant: {
      danger: completeVariant.light.danger,
      active: opacify(colors.gray[2], 0.2),
      info: completeVariant.light.info,
      primary: completeVariant.light.primary,
      success: completeVariant.light.success,
      warning: completeVariant.light.warning,
    },
    variantHover: {
      danger: completeVariant.lighter.danger,
      active: opacify(colors.gray[2], 0.2),
      info: completeVariant.lighter.info,
      primary: completeVariant.lighter.primary,
      success: completeVariant.lighter.success,
      warning: completeVariant.lighter.warning,
    },
    highlightBackground: colors.info[5],
    highlightText: colors.gray[0],
  };
};

export default tableColors;
