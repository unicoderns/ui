import { UiCheckboxThemeConfigModel } from '@uicr/checkbox'

const baseClass = 'form-check'

export const bsUiCheckboxThemeConfigDefaults: UiCheckboxThemeConfigModel = {
  cssClass: {
    main: baseClass,
    input: `${baseClass}-input`,
    label: `${baseClass}-label`,
    inline: `${baseClass}-inline`,
    switch: 'form-switch',
  },
}
