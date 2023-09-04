/*
 * Copyright (C) 2020 Graylog, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the Server Side Public License, version 1,
 * as published by MongoDB, Inc.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Server Side Public License for more details.
 *
 * You should have received a copy of the Server Side Public License
 * along with this program. If not, see
 * <http://www.mongodb.com/licensing/server-side-public-license>.
 */
import chroma from 'chroma-js';
import type { Color } from 'chroma-js';

import { ColorVariant, Utils } from '../../types';
import { StyledComponentsTheme } from '../types';

const button = (colors: StyledComponentsTheme['colors'], utils: Utils) => {
  const transparentLink = 'rgba(255, 255, 255, 0)';

  const variants: Record<ColorVariant, string> & { link: string } = {
    danger: colors.variant.danger as string,
    default: colors.gray[90],
    info: colors.variant.info as string,
    link: transparentLink,
    primary: colors.variant.primary as string,
    success: colors.variant.success as string,
    warning: colors.variant.warning as string,
  };

  const mixColor = (originalColor: string | Color, adjustColor: string | Color = colors.global.textDefault, ratio = 0.15) => chroma.mix(originalColor, adjustColor, ratio).hex();

  return Object.keys(variants).map((variant) => {
    const variantColor = variants[variant as ColorVariant];
    const isLink = variant === 'link';

    const buttonAdjustColor = chroma(variantColor).luminance() > 0.5 ? colors.global.textDefault : colors.global.textAlt;

    const defaultBackground = variantColor;
    const defaultBorder = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.05);
    const defaultColor = isLink ? 'var(--color-global-link)' : utils.contrastingColor(defaultBackground);

    const activeBackground = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.10);
    const activeBorder = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.15);
    const activeColor = isLink ? 'var(--color-global-linkHover)' : utils.contrastingColor(activeBackground);

    const disabledBackground = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.20);
    const disabledBorder = isLink ? transparentLink : mixColor(variantColor, buttonAdjustColor, 0.15);
    const disabledColor = isLink ? 'var(--color-global-link)' : utils.contrastingColor(disabledBackground, 'AA');

    const hoverBackground = isLink ? 'transparent' : mixColor(defaultBackground);
    const hoverBorderColor = isLink ? 'transparent' : mixColor(defaultBorder);
    const hoverColor = isLink ? 'var(--color-global-linkHover)' : mixColor(defaultColor);

    const activeHoverBackground = isLink ? 'transparent' : mixColor(activeBackground);
    const activeHoverBorderColor = isLink ? 'transparent' : mixColor(activeBorder);
    const activeHoverColor = isLink ? 'var(--color-global-linkHover)' : mixColor(activeColor);

    return `
      &.btn-${variant} {
        background-color: ${defaultBackground};
        border-color: ${defaultBorder};
        color: ${defaultColor};
        transition: background-color 150ms ease-in-out,
          border 150ms ease-in-out,
          color 150ms ease-in-out;

        :hover {
          background-color: ${hoverBackground};
          border-color: ${hoverBorderColor};
          color: ${hoverColor};
        }

        &.active {
          background-color: ${activeBackground};
          border-color: ${activeBorder};
          color: ${activeColor};

          :hover {
            background-color: ${isLink ? transparentLink : activeHoverBackground};
            border-color: ${activeHoverBorderColor};
            color: ${activeHoverColor};
          }
        }

        &[disabled],
        &.disabled {
          background-color: ${isLink ? transparentLink : disabledBackground};
          border-color: ${disabledBorder};
          color: ${disabledColor};

          :hover {
            background-color: ${disabledBackground};
            border-color: ${disabledBorder};
            color: ${disabledColor};
          }
        }
      }
    `;
  });
};

export default button;
