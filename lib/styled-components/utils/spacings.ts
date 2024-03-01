import { ThemeBase } from '../../types';

const SPACE = 0.08; // ratio we use for our calculations

const FIBONACCI = [3, 5, 8, 13, 21, 34, 55, 89, 144]; // skipped [1, 2]

const generateSpacings = (spacingNames: ThemeBase['spacings'], rootFontSize: number) => {
  const spacings: { [key: string]: string } = {};
  const spacingsPx: { [key: string]: number } = {};

  spacingNames.forEach((spacingName, index) => {
    const value = SPACE * FIBONACCI[index];

    spacings[spacingName] = `${value.toFixed(2)}rem`;
    spacingsPx[spacingName] = Math.round(value * rootFontSize);
  });

  return { ...spacings, px: spacingsPx };
};

export default generateSpacings;
