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

import { css, FlattenSimpleInterpolation } from 'styled-components';

import { TColors } from '../types';

const aceEditorStyles = ({ colors }: { colors: TColors}): FlattenSimpleInterpolation => css`
    .ace_editor {
      border: 1px solid var(--colors-gray-80);
      border-radius: 5px;
    }
    
    .ace-graylog {
      background-color: var(--colors-global-contentBackground);
      color: var(--colors-global-contentBackground);
    
      &.ace_multiselect .ace_selection.ace_start {
        box-shadow: 0 0 3px 0 var(--colors-global-contentBackground);
      }
    
      .ace_gutter {
        background: var(--colors-variant-lightest-default);
        color: var(--colors-global-contentBackground);
      }
    
      .ace_print-margin {
        width: 1px;
        background: var(--colors-variant-lightest-default);
      }
    
      .ace_cursor {
        color: var(--colors-variant-light-default);
      }
    
      .ace_marker-layer {
        .ace_selection {
          background: var(--colors-gray-70);
        }
    
        .ace_step {
          background: rgb(255, 255, 0);
        }
    
        .ace_bracket {
          margin: -1px 0 0 -1px;
          border: 1px solid var(--colors-gray-70);
        }
    
        .ace_selected-word {
          border: 1px solid ${colors.gray[60]};
        }
    
        .ace_active-line {
          background: var(--colors-variant-lighter-default);
        }
      }
    
      .ace_gutter-active-line {
        background-color: var(--colors-variant-lighter-default);
      }
    
      .ace_invisible {
        color: var(--colors-gray-70);
      }
    
      .ace_keyword,
      .ace_meta,
      .ace_storage,
      .ace_storage.ace_type,
      .ace_support.ace_type {
        color: ${colors.global.link};
      }
    
      .ace_keyword.ace_operator {
        color: ${colors.variant.darker.info};
      }
    
      .ace_constant.ace_character,
      .ace_constant.ace_language,
      .ace_constant.ace_numeric,
      .ace_keyword.ace_other.ace_unit,
      .ace_support.ace_constant,
      .ace_variable.ace_parameter {
        color: var(--colors-variant-darker-primary);
      }
    
      .ace_constant.ace_other {
        color: var(--colors-variant-darker-default);
      }
    
      .ace_invalid {
        color: var(--colors-global-altText);
        background-color: ${colors.variant.light.danger};
      }
    
      .ace_invalid.ace_deprecated {
        color: var(--colors-global-altText);
        background-color: var(--colors-variant-primary);
      }
    
      .ace_fold {
        background-color: ${colors.variant.info};
        border-color: var(--colors-variant-darkest-default);
      }
    
      .ace_entity.ace_name.ace_function,
      .ace_support.ace_function,
      .ace_variable {
        color: ${colors.variant.info};
      }
    
      .ace_support.ace_class,
      .ace_support.ace_type {
        color: ${colors.variant.darker.warning};
      }
    
      .ace_heading,
      .ace_markup.ace_heading,
      .ace_string {
        color: ${colors.variant.darker.success};
      }
    
      .ace_entity.ace_name.ace_tag,
      .ace_entity.ace_other.ace_attribute-name,
      .ace_meta.ace_tag,
      .ace_string.ace_regexp,
      .ace_variable {
        color: ${colors.variant.light.danger};
      }
    
      .ace_comment {
        color: ${colors.variant.dark.default};
      }
    }
  `;

export default aceEditorStyles;
