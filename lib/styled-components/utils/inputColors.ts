import chroma from 'chroma-js';

import { StyledComponentsTheme } from '../types';

const darken = (color: string, ratio: number) => chroma.mix(color, '#000', ratio).hex();

const inputColors = (
  completeGlobal: StyledComponentsTheme['colors']['global'],
  gray: StyledComponentsTheme['colors']['gray'],
  variant: StyledComponentsTheme['colors']['variant'],
) => ({
  background: completeGlobal.inputBackground,
  backgroundDisabled: darken(completeGlobal.inputBackground, 0.25),
  border: completeGlobal.inputBorder as string,
  borderFocus: variant.light.info as string,
  boxShadow: `inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px ${chroma(variant.light.info as string).alpha(0.4).css()}`,
  color: completeGlobal.textDefault,
  colorDisabled: gray[60],
  placeholder: gray[60],
});

export default inputColors;
