"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.THEME_MODE_DARK = exports.THEME_MODE_LIGHT = exports.ROOT_FONT_SIZE = void 0;

/*
 * Copyright (C) 2020 Graylog, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the Server Side Public License, version 1,
 * as published by MongoDB, Inc.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Server Side Public License for more details.
 *
 * You should have received a copy of the Server Side Public License
 * along with this program. If not, see
 * <http://www.mongodb.com/licensing/server-side-public-license>.
 */
// const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// const PREFERENCES_THEME_MODE: PreferencesThemeMode = 'themeMode';
var ROOT_FONT_SIZE = 14;
exports.ROOT_FONT_SIZE = ROOT_FONT_SIZE;
var THEME_MODE_LIGHT = 'teint';
exports.THEME_MODE_LIGHT = THEME_MODE_LIGHT;
var THEME_MODE_DARK = 'noir'; // const DEFAULT_THEME_MODE: ThemeMode = prefersDarkMode ? THEME_MODE_DARK : THEME_MODE_LIGHT;
// const THEME_MODES: Array<ThemeMode> = [THEME_MODE_LIGHT, THEME_MODE_DARK];

exports.THEME_MODE_DARK = THEME_MODE_DARK;