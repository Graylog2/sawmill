import { StyledComponentsTheme } from '../types';
import Theme from '../generated/theme.json';

const aceEditorStyles = (colors: StyledComponentsTheme['colors']) => `
  .ace_editor {
    border: 1px solid ${colors.input.border} !important;
    border-radius: 0;
    background-color: ${colors.input.background};
    color: ${colors.variant.darkest.default};

    &.ace_multiselect .ace_selection.ace_start {
      box-shadow: 0 0 3px 0 ${colors.input.background};
    }

    .ace_gutter {
      background: ${colors.input.background};
      color: ${colors.text.secondary};
      border-right: 1px solid ${colors.input.border};
    }

    .ace_print-margin {
      width: 1px;
      background: ${colors.input.background};
    }

    .ace_cursor {
      border-color: ${colors.text.primary};
      color: ${colors.text.primary};
    }

    .ace_marker {
      border-bottom: 2px dashed;
      position: absolute;
      border-radius: 0;
      margin-top: 1px;
    }

    .ace_marker.ace_validation_error {
      border-color: ${colors.variant.danger};
    }

    .ace_marker.ace_validation_warning {
      border-color: ${colors.variant.dark.warning};
    }

    .ace_marker-layer {
      .ace_selection {
        background: Highlight;
        border-radius: 0;
      }

      .ace_step {
        background: ${colors.variant.warning};
      }

      .ace_bracket {
        margin: -1px 0 0 -1px;
        border: 1px solid ${colors.gray[70]};
      }

      .ace_selected-word {
        border: 1px solid ${colors.gray[60]};
        background: transparent;
      }

      .ace_active-line {
        background: var(--ace-active-line-bg, ${colors.input.background});
      }
    }

    .ace_gutter-active-line {
      background-color: ${colors.variant.lightest.default};
    }

    .ace_invisible {
      color: var(--ace-invisible-color, ${colors.input.background});
    }

    .ace_placeholder {
      left: 0;
      right: 0;
      padding: 0;
      margin-top: 6px;
      margin-left: 4px;
      margin-right: 4px;
      transform: none;
      opacity: 1;
      z-index: auto !important;
      font-family: ${Theme.fonts.family.monospace} !important;
      font-size: ${Theme.fonts.size.body};
      color: ${colors.input.placeholder};
      text-overflow: ellipsis;
      max-width: 100%;
      overflow: hidden;
    }

    .ace_keyword,
    .ace_meta,
    .ace_storage,
    .ace_storage.ace_type,
    .ace_support.ace_type {
      color: var(--ace-token-keyword);
    }

    .ace_keyword.ace_operator {
      color: var(--ace-token-operator);
    }

    .ace_constant.ace_character,
    .ace_constant.ace_language,
    .ace_constant.ace_numeric,
    .ace_keyword.ace_other.ace_unit,
    .ace_support.ace_constant,
    .ace_variable.ace_parameter {
      color: var(--ace-token-constant);
    }

    .ace_constant.ace_other {
      color: var(--ace-token-constant-other);
    }

    .ace_invalid {
      color: var(--ace-token-invalid-color);
      background-color: var(--ace-token-invalid-bg);
    }

    .ace_invalid.ace_deprecated {
      color: var(--ace-token-invalid-deprecated-color);
      background-color: var(--ace-token-invalid-deprecated-bg);
    }

    .ace_fold {
      background-color: ${colors.variant.info};
      border-color: var(--ace-token-fold-border);
    }

    .ace_entity.ace_name.ace_function,
    .ace_support.ace_function,
    .ace_variable,
    .ace_term {
      color: var(--ace-token-function);
    }

    .ace_support.ace_class,
    .ace_support.ace_type {
      color: var(--ace-token-class);
    }

    .ace_heading,
    .ace_markup.ace_heading,
    .ace_string {
      color: var(--ace-token-heading);
    }

    .ace_entity.ace_name.ace_tag,
    .ace_entity.ace_other.ace_attribute-name,
    .ace_meta.ace_tag,
    .ace_string.ace_regexp,
    .ace_variable {
      color: var(--ace-token-tag);
    }

    .ace_comment {
      color: ${colors.text.secondary};
    }

    .ace_tooltip {
      background-color: ${colors.global.background};
      padding: 4px;
      padding-left: 0;
      line-height: 1.5;

      .ace_icon {
        margin-right: 3px;
      }
    }
  }

  .ace-graylog {
    --ace-active-line-bg: ${colors.variant.lightest.default};
    --ace-invisible-color: ${colors.gray[70]};

    // Code syntax highlighting
    --ace-token-keyword: ${colors.global.link};
    --ace-token-operator: ${colors.variant.darker.info};
    --ace-token-constant: ${colors.variant.darker.primary};
    --ace-token-constant-other: ${colors.variant.darker.default};
    --ace-token-invalid-color: ${colors.global.textAlt};
    --ace-token-invalid-bg: ${colors.variant.light.danger};
    --ace-token-invalid-deprecated-color: ${colors.global.textAlt};
    --ace-token-invalid-deprecated-bg: ${colors.variant.primary};
    --ace-token-fold-border: ${colors.variant.darkest.default};
    --ace-token-function: ${colors.variant.info};
    --ace-token-class: ${colors.variant.darker.warning};
    --ace-token-heading: ${colors.variant.darker.success};
    --ace-token-tag: ${colors.variant.light.danger};
  }

  .ace-queryinput {
    // Code syntax highlighting
    --ace-token-keyword: ${colors.variant.info};
    --ace-token-operator: ${colors.text.primary};
    --ace-token-constant: ${colors.variant.dark.danger};
    --ace-token-constant-other: ${colors.variant.default};
    --ace-token-invalid-bg: ${colors.variant.danger};
    --ace-token-invalid-deprecated-bg: ${colors.variant.dark.primary};
    --ace-token-function: ${colors.variant.darker.info};
    --ace-token-class: ${colors.variant.dark.warning};
    --ace-token-heading: ${colors.variant.dark.success};
    --ace-token-tag: ${colors.variant.danger};
  }
`;

export default aceEditorStyles;
