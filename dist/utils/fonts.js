"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.generateFontSizes = void 0;

var fontSizesIsValid = function fontSizesIsValid(fontSizes) {
  return !!fontSizes.root && !!fontSizes.body && !!fontSizes.tiny && !!fontSizes.small && !!fontSizes.medium && !!fontSizes.large && !!fontSizes.huge && !!fontSizes.h1 && !!fontSizes.h2 && !!fontSizes.h3 && !!fontSizes.h4 && !!fontSizes.h5 && !!fontSizes.h6;
};

var generateFontSizes = function generateFontSizes(rootFontSize, scale, sizePowers) {
  var fontSizes = {
    root: {
      value: rootFontSize,
      px: "".concat(rootFontSize, "px")
    }
  };
  Object.keys(sizePowers).forEach(function (s) {
    var size = s;
    var rem = Math.pow(scale, sizePowers[size]);
    var px = rootFontSize * rem;
    fontSizes[size] = {
      value: px,
      px: "".concat(px, "px"),
      rem: "".concat(rem, "rem")
    };
  });

  if (!fontSizesIsValid(fontSizes)) {
    throw new Error('Generated font sizes is missing some properties. This is a bug.');
  }

  return fontSizes;
};

exports.generateFontSizes = generateFontSizes;
var _default = {
  generateFontSizes: generateFontSizes
};
exports["default"] = _default;