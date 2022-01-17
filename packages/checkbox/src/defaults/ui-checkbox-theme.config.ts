import { UiCheckboxThemeConfigModel } from '../'

const baseClass = 'form-check'

export const uiCheckboxThemeConfigDefaults: UiCheckboxThemeConfigModel = {
  cssClass: {
    main: baseClass,
    input: `${baseClass}-input`,
    label: `${baseClass}-label`,
    inline: `${baseClass}-inline`,
    switch: 'form-switch',
  },
}
