import chroma from 'chroma-js';

import generateColorVariants from './colorVariants';
import tableColors from './tableColors';
import generateGrayScale from './grayColors';
import inputColors from './inputColors';
import generateGlobalColors from './globalColors';
import generateButtonColors from './buttonColors';
import generatePaginationColors from './paginationColors';

import {
  ContrastColors, DisabledColors, StyledComponentsTheme, TColors,
} from '../types';
import { MantineColors, MantineTheme } from '../../mantine/types';
import THEME_BASE, { COLOR_SCHEME_LIGHT, COLOR_WHITE } from '../../THEME_BASE';
import { ColorVariant } from '../../types';
import { contrastingColor, mixColor, opacify } from '../../utils';

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
  const isLightTheme = mantineTheme.colorScheme === COLOR_SCHEME_LIGHT;

  const primaryShade = mantineTheme.primaryShade[mantineTheme.colorScheme];
  const baseColors = THEME_BASE.colors[mantineTheme.colorScheme];
  const brandColors = mantineTheme.other.customColors?.brand
    ? { ...baseColors.brand, ...mantineTheme.other.customColors.brand }
    : baseColors.brand;
  const baseGlobalColors = mantineTheme.other.customColors?.global
    ? { ...baseColors.global, ...mantineTheme.other.customColors.global }
    : baseColors.global;

  const completeVariant = generateColorVariants(mantineTheme.colorScheme, mantineTheme.colors, primaryShade);
  const completeGlobal = generateGlobalColors(mantineTheme.colorScheme, mantineTheme.colors, brandColors, baseGlobalColors);

  const gray = generateGrayScale(brandColors.tertiary, brandColors.secondary);
  const table = tableColors(mantineTheme.colorScheme, completeVariant, completeGlobal, mantineTheme.colors);
  const input = inputColors(completeGlobal, gray, completeVariant, mantineTheme.colorScheme, mantineTheme.colors);
  const disabledColors = Object.fromEntries(Object.keys(mantineTheme.colors)
    .map((variant) => [variant, mixDisabledColors(variant, mantineTheme.colors, primaryShade, completeGlobal)])) as DisabledColors;
  const contrastColors = Object.fromEntries(Object.keys(mantineTheme.colors)
    .map((variant) => [variant, contrastingColor(mantineTheme.colors[variant as ColorVariant][primaryShade])])) as ContrastColors;
  const buttonColors = generateButtonColors(mantineTheme.colorScheme, mantineTheme.colors, primaryShade);
  const pagination = generatePaginationColors(mantineTheme.colors);

  return {
    brand: brandColors,
    button: buttonColors,
    cards: {
      background: isLightTheme ? COLOR_WHITE : mantineTheme.colors.gray[4],
      border: isLightTheme ? mantineTheme.colors.gray[1] : mantineTheme.colors.gray[7],
    },
    contrast: contrastColors,
    disabled: disabledColors,
    section: {
      filled: {
        border: isLightTheme ? mantineTheme.colors.gray[1] : mantineTheme.colors.gray[9],
        background: isLightTheme ? mantineTheme.colors.gray[0] : mantineTheme.colors.gray[7],
      },
    },
    global: completeGlobal,
    gray,
    newsCards: {
      background: isLightTheme ? mantineTheme.colors.gray[1] : mantineTheme.colors.gray[5],
    },
    input,
    pagination,
    severity: {
      high: isLightTheme ? mantineTheme.colors.danger[5] : mantineTheme.colors.danger[4],
      low: isLightTheme ? mantineTheme.colors.gray[4] : mantineTheme.colors.gray[2],
    },
    table,
    variant: completeVariant,
  };
};

export default generateColors;
