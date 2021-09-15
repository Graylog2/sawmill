"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PropTypeFonts", {
  enumerable: true,
  get: function get() {
    return _fonts.PropTypeFonts;
  }
});
Object.defineProperty(exports, "PropTypeBreakpoints", {
  enumerable: true,
  get: function get() {
    return _breakpoints.PropTypeBreakpoints;
  }
});
Object.defineProperty(exports, "colors", {
  enumerable: true,
  get: function get() {
    return _colors["default"];
  }
});
Object.defineProperty(exports, "PropTypeColors", {
  enumerable: true,
  get: function get() {
    return _colors.PropTypeColors;
  }
});
Object.defineProperty(exports, "PropTypeSpacings", {
  enumerable: true,
  get: function get() {
    return _spacings.PropTypeSpacings;
  }
});
Object.defineProperty(exports, "PropTypeUtils", {
  enumerable: true,
  get: function get() {
    return _utils.PropTypeUtils;
  }
});
exports["default"] = void 0;

var _fonts = _interopRequireWildcard(require("./fonts"));

var _breakpoints = _interopRequireWildcard(require("./breakpoints"));

var _colors = _interopRequireWildcard(require("./colors"));

var _spacings = _interopRequireWildcard(require("./spacings"));

var _utils = _interopRequireWildcard(require("./utils"));

var _buttons = _interopRequireDefault(require("./styles/buttons"));

var _aceEditor = _interopRequireDefault(require("./styles/aceEditor"));

var _fonts2 = _interopRequireDefault(require("./styles/fonts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sawmill = // eslint-disable-next-line no-unused-vars
function Sawmill(themeColors, mode, changeMode) {
  _classCallCheck(this, Sawmill);

  this.colors = themeColors;
  this.breakpoints = _breakpoints["default"];
  this.fonts = _fonts["default"];
  this.spacings = _spacings["default"];
  this.mode = mode;
  this.changeMode = changeMode;
  this.utils = _objectSpread(_objectSpread({}, _utils["default"]), {}, {
    colorLevel: (0, _utils.colorLevel)(this.colors),
    readableColor: (0, _utils.readableColor)(this.colors)
  });
  this.components = {
    button: (0, _buttons["default"])({
      colors: this.colors,
      utils: this.utils
    }),
    aceEditor: (0, _aceEditor["default"])({
      colors: this.colors
    }),
    fonts: (0, _fonts2["default"])()
  };
};

exports["default"] = Sawmill;