import chroma from 'chroma-js';

import { mixColor } from '../../utils';
import { ColorVariant, Utils } from '../../types';
import { StyledComponentsTheme } from '../types';

const button = (colors: StyledComponentsTheme['colors'], utils: Utils) => {
  const variants = {
    danger: colors.variant.danger,
    default: colors.gray[90],
    info: colors.variant.info,
    link: 'rgba(255, 255, 255, 0)',
    primary: colors.variant.primary,
    success: colors.variant.success,
    warning: colors.variant.warning,
    gray: colors.variant.gray,
  };

  return Object.keys(variants).map((variant) => {
    const variantColor = variants[variant as ColorVariant] as string;
    const isLink = variant === 'link';

    const buttonAdjustColor = chroma(variantColor).luminance() > 0.5 ? colors.global.textDefault : colors.global.textAlt;

    const defaultBackground = variantColor;
    const defaultBorder = isLink ? variants.link : mixColor(variantColor, buttonAdjustColor, 0.05);
    const defaultColor = isLink ? colors.global.link : utils.contrastingColor(defaultBackground);

    const activeBackground = isLink ? variants.link : mixColor(variantColor, buttonAdjustColor, 0.10);
    const activeBorder = isLink ? variants.link : mixColor(variantColor, buttonAdjustColor, 0.15);
    const activeColor = isLink ? colors.global.linkHover : utils.contrastingColor(activeBackground);

    const disabledBackground = isLink ? variants.link : mixColor(variantColor, buttonAdjustColor, 0.20);
    const disabledBorder = isLink ? variants.link : mixColor(variantColor, buttonAdjustColor, 0.15);
    const disabledColor = isLink ? colors.global.link : utils.contrastingColor(disabledBackground, 'AA');

    const hoverBackground = isLink ? 'transparent' : mixColor(defaultBackground, colors.global.textDefault);
    const hoverBorderColor = isLink ? 'transparent' : mixColor(defaultBorder, colors.global.textDefault);
    const hoverColor = isLink ? colors.global.linkHover : mixColor(defaultColor, colors.global.textDefault);

    const activeHoverBackground = isLink ? 'transparent' : mixColor(activeBackground, colors.global.textDefault);
    const activeHoverBorderColor = isLink ? 'transparent' : mixColor(activeBorder, colors.global.textDefault);
    const activeHoverColor = isLink ? colors.global.linkHover : mixColor(activeColor, colors.global.textDefault);

    return `
      &.btn-${variant} {
        background-color: ${defaultBackground};
        border-color: ${defaultBorder};
        color: ${defaultColor};
        transition: background-color 150ms ease-in-out,
          border 150ms ease-in-out,
          color 150ms ease-in-out;

        &:hover {
          background-color: ${hoverBackground};
          border-color: ${hoverBorderColor};
          color: ${hoverColor};
        }

        &.active {
          background-color: ${activeBackground};
          border-color: ${activeBorder};
          color: ${activeColor};

          &:hover {
            background-color: ${isLink ? variants.link : activeHoverBackground};
            border-color: ${activeHoverBorderColor};
            color: ${activeHoverColor};
          }
        }

        &[disabled],
        &.disabled {
          background-color: ${isLink ? variants.link : disabledBackground};
          border-color: ${disabledBorder};
          color: ${disabledColor};

          &:hover {
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
