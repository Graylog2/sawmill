import chroma from 'chroma-js';

import generateColorVariants from './colorVariants';
import tableColors from './tableColors';
import generateGrayScale from './grayColors';
import inputColors from './inputColors';
import generateGlobalColors from './globalColors';
import generateButtonColors from './buttonColors';

import {
  ContrastColors, DisabledColors, StyledComponentsTheme, TColors,
} from '../types';
import { MantineColors, MantineTheme } from '../../mantine/types';
import THEME_BASE from '../../THEME_BASE';
import { ColorVariant } from '../../types';
import { contrastingColor, mixColor } from '../../utils';

const mixDisabledColors = (variant: string, colors: MantineColors, primaryShade: number, { textAlt, textDefault }: TColors['global']) => {
  const variantColor = colors[variant as ColorVariant][primaryShade];
  const buttonAdjustColor = chroma(variantColor).luminance() > 0.5 ? textDefault : textAlt;
  const disabledBackground = mixColor(variantColor, buttonAdjustColor, 0.20);
  const disabledColor = contrastingColor(disabledBackground, 'AA');

  return {
    background: disabledBackground,
    color: disabledColor,
  };
};

const generateColors = (mantineTheme: MantineTheme): StyledComponentsTheme['colors'] => {
  const primaryShade = mantineTheme.primaryShade[mantineTheme.colorScheme];
  const baseColors = THEME_BASE.colors[mantineTheme.colorScheme];
  const brandColors = mantineTheme.other.customColors?.brand
    ? { ...baseColors.brand, ...mantineTheme.other.customColors.brand }
    : baseColors.brand;
  const baseGlobalColors = mantineTheme.other.customColors?.global
    ? { ...baseColors.global, ...mantineTheme.other.customColors.global }
    : baseColors.global;

  const completeVariant = generateColorVariants(mantineTheme.colorScheme, mantineTheme.colors, primaryShade);
  const completeGlobal = generateGlobalColors(mantineTheme.colorScheme, brandColors, baseGlobalColors);

  const gray = generateGrayScale(brandColors.tertiary, brandColors.secondary);
  const table = tableColors(mantineTheme.colorScheme, completeVariant, completeGlobal);
  const input = inputColors(completeGlobal, gray, completeVariant);
  const disabledColors = Object.fromEntries(Object.keys(mantineTheme.colors)
    .map((variant) => [variant, mixDisabledColors(variant, mantineTheme.colors, primaryShade, completeGlobal)])) as DisabledColors;
  const contrastColors = Object.fromEntries(Object.keys(mantineTheme.colors)
    .map((variant) => [variant, contrastingColor(mantineTheme.colors[variant as ColorVariant][primaryShade])])) as ContrastColors;
  const buttonColors = generateButtonColors(mantineTheme.colorScheme, mantineTheme.colors, primaryShade);

  return {
    variant: completeVariant,
    global: completeGlobal,
    brand: brandColors,
    table,
    gray,
    input,
    disabled: disabledColors,
    contrast: contrastColors,
    button: buttonColors,
  };
};

export default generateColors;
