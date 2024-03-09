import { COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT } from '../../THEME_BASE';
import { StyledComponentsTheme } from '../types';
import { darken, lighten } from '../../utils/colors';
import { ColorScheme } from '../../types';
import { MantineColors } from '../../mantine/types';
import { opacify } from '../../utils';

const tableColors = (colorScheme: ColorScheme, completeVariant: StyledComponentsTheme['colors']['variant'], global: StyledComponentsTheme['colors']['global'], colors: MantineColors) => {
  if (![COLOR_SCHEME_DARK, COLOR_SCHEME_LIGHT].includes(colorScheme)) {
    throw new Error(`Requires "${COLOR_SCHEME_DARK}" or "${COLOR_SCHEME_LIGHT}" color scheme option.`);
  }

  const adjust = colorScheme === COLOR_SCHEME_DARK ? lighten : darken;

  return {
    head: {
      background: colorScheme === COLOR_SCHEME_LIGHT ? opacify(colors.gray[1], 0.18) : colors.gray[5],
    },
    row: {
      background: 'transparent',
      backgroundAlt: colorScheme === COLOR_SCHEME_LIGHT ? opacify(colors.gray[1], 0.2) : opacify(colors.gray[1], 0.08),
      backgroundHover: opacify(colors.gray[2], 0.2),
      border: colorScheme === COLOR_SCHEME_LIGHT ? opacify(colors.gray[1], 0.75) : opacify(colors.gray[1], 0.20),
    },
    variant: {
      danger: adjust(completeVariant.danger as string, 0.75),
      active: adjust(completeVariant.default as string, 0.75),
      info: adjust(completeVariant.info as string, 0.75),
      primary: adjust(completeVariant.primary as string, 0.75),
      success: adjust(completeVariant.success as string, 0.75),
      warning: adjust(completeVariant.warning as string, 0.75),
    },
    variantHover: {
      danger: completeVariant.lighter.danger,
      active: completeVariant.lighter.default,
      info: completeVariant.lighter.info,
      primary: completeVariant.lighter.primary,
      success: completeVariant.lighter.success,
      warning: completeVariant.lighter.warning,
    },
  };
};

export default tableColors;
