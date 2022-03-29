import type { TFontSizes, TSizePowers } from '../types';

const fontSizesIsValid = (fontSizes: Partial<TFontSizes>): fontSizes is TFontSizes => (
  !!fontSizes.root && !!fontSizes.body
  && !!fontSizes.tiny && !!fontSizes.small && !!fontSizes.medium && !!fontSizes.large && !!fontSizes.huge
  && !!fontSizes.h1 && !!fontSizes.h2 && !!fontSizes.h3 && !!fontSizes.h4 && !!fontSizes.h5 && !!fontSizes.h6
);

export const generateFontSizes = (rootFontSize: number, scale: number, sizePowers: TSizePowers): TFontSizes => {
  const fontSizes: Partial<TFontSizes> = {
    root: {
      value: rootFontSize,
      px: `${rootFontSize}px`,
    },
  };

  Object.keys(sizePowers)
    .forEach((s) => {
      const size = s as keyof TSizePowers;

      const rem = scale ** sizePowers[size];
      const px = rootFontSize * rem;

      fontSizes[size] = {
        value: px,
        px: `${px}px`,
        rem: `${rem}rem`,
      };
    });

  if (!fontSizesIsValid(fontSizes)) {
    throw new Error('Generated font sizes is missing some properties. This is a bug.');
  }

  return fontSizes;
};

export default {
  generateFontSizes,
};
