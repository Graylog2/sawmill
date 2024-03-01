const fontSize = (scale: number, sizePower: number) => `${(scale ** sizePower).toFixed(3)}rem`;
export default fontSize;
