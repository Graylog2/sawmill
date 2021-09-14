"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PropTypeSpacings = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("./_constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SPACE = 0.08; // ratio we use for our calculations

var SIZES = ['0', '1', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var FIBONACCI = [0, 1, 3, 5, 8, 13, 21, 34, 55, 89, 144]; // skipped [1, 2]

var props = SIZES.reduce(function (acc, key) {
  return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, _propTypes["default"].string));
}, {
  px: _propTypes["default"].shape(SIZES.reduce(function (acc, key) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, _propTypes["default"].number));
  }, {}))
});

var PropTypeSpacings = _propTypes["default"].shape(props);

exports.PropTypeSpacings = PropTypeSpacings;
var spacings = {
  px: {}
};
SIZES.forEach(function (size, index) {
  if (size === '0') {
    spacings[size] = '0px';
    spacings.px[size] = 0;
  } else if (size === '1') {
    spacings[size] = '1px';
    spacings.px[size] = 1;
  } else {
    var value = SPACE * FIBONACCI[index];
    spacings[size] = "".concat(value.toFixed(2), "rem");
    spacings.px[size] = Math.round(value * _constants.ROOT_FONT_SIZE);
  }
});
var _default = spacings;
exports["default"] = _default;