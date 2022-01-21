import { UiRadioThemeConfigModel } from '../'

const baseClass = 'form-check'

export const uiRadioThemeConfigDefaults: UiRadioThemeConfigModel = {
  cssClass: {
    main: baseClass,
    input: `${baseClass}-input`,
    label: `${baseClass}-label`,
    inline: `${baseClass}-inline`,
    switch: 'form-switch',
  },
}
