import chroma from 'chroma-js';

const generateGrayScale = (colorStart: string, colorEnd: string) => {
  const gray = {
    10: '',
    20: '',
    30: '',
    40: '',
    50: '',
    60: '',
    70: '',
    80: '',
    90: '',
    100: '',
  };
  const scale = chroma.scale([colorStart, colorEnd]).colors(10);

  scale.forEach((tint, index) => {
    const key = ((index + 1) * 10) as keyof typeof gray;

    gray[key] = tint;
  });

  return gray;
};

export default generateGrayScale;
