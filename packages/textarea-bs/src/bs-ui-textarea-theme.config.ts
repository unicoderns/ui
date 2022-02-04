import { UiTextareaThemeConfigModel } from '@uicr/textarea'

const baseClass = 'input-group'

export const bsUiTextareaThemeConfigDefaults: UiTextareaThemeConfigModel = {
  cssClass: {
    main: baseClass,
    disabled: 'disabled',
    label: 'form-label',
    textArea: 'form-control',
  },
}
