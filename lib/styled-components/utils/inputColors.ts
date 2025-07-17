import chroma from 'chroma-js';

import { StyledComponentsTheme } from '../types';
import { ColorScheme } from '../../types';
import { COLOR_SCHEME_LIGHT } from '../../THEME_BASE';
import { MantineColors } from '../../mantine/types';
import { opacify } from '../../utils';

const darken = (color: string, ratio: number) => chroma.mix(color, '#000', ratio).hex();

const inputColors = (
  completeGlobal: StyledComponentsTheme['colors']['global'],
  gray: StyledComponentsTheme['colors']['gray'],
  variant: StyledComponentsTheme['colors']['variant'],
  colorScheme: ColorScheme,
  colors: MantineColors,
  primaryTextColor: string,
) => {
  const background = colorScheme === COLOR_SCHEME_LIGHT ? completeGlobal.contentBackground : colors.gray[7];

  return ({
    background,
    backgroundDisabled: darken(background, 0.25),
    border: colorScheme === COLOR_SCHEME_LIGHT ? colors.gray[2] : opacify(colors.default[3], 0.74),
    borderFocus: variant.light.info as string,
    boxShadow: `inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px ${chroma(variant.light.info as string).alpha(0.4).css()}`,
    color: primaryTextColor,
    colorDisabled: gray[60],
    placeholder: gray[60],
  });
};

export default inputColors;
