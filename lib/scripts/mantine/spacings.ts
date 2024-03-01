import { ThemeBase } from '../../types';

const SPACE = 0.08; // ratio we use for our calculations
const FIBONACCI = [3, 5, 8, 13, 21, 34, 55, 89, 144]; // skipped [1, 2]

const generateSpacings = (spacingNames: ThemeBase['spacings']) => {
  const result: Record<string, string> = {};

  spacingNames.forEach((spacingName, index) => {
    const value = SPACE * FIBONACCI[index];
    result[spacingName] = `${value.toFixed(2)}rem`;
  });

  return result;
};

export default generateSpacings;
