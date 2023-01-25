"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _noir = require("./noir");

Object.keys(_noir).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _noir[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _noir[key];
    }
  });
});

var _teint = require("./teint");

Object.keys(_teint).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _teint[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _teint[key];
    }
  });
});