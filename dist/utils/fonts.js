var fontSizesIsValid = function (fontSizes) { return (!!fontSizes.root && !!fontSizes.body
    && !!fontSizes.tiny && !!fontSizes.small && !!fontSizes.medium && !!fontSizes.large && !!fontSizes.huge
    && !!fontSizes.h1 && !!fontSizes.h2 && !!fontSizes.h3 && !!fontSizes.h4 && !!fontSizes.h5 && !!fontSizes.h6); };
export var generateFontSizes = function (rootFontSize, scale, sizePowers) {
    var fontSizes = {
        root: {
            value: rootFontSize,
            px: rootFontSize + "px",
        },
    };
    Object.keys(sizePowers)
        .forEach(function (s) {
        var size = s;
        var rem = Math.pow(scale, sizePowers[size]);
        var px = rootFontSize * rem;
        fontSizes[size] = {
            value: px,
            px: px + "px",
            rem: rem + "rem",
        };
    });
    if (!fontSizesIsValid(fontSizes)) {
        throw new Error('Generated font sizes is missing some properties. This is a bug.');
    }
    return fontSizes;
};
export default {
    generateFontSizes: generateFontSizes,
};
