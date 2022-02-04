import { UiRadioThemeConfigModel } from '@uicr/radio'

const baseClass = 'form-check'

export const bsUiRadioThemeConfigDefaults: UiRadioThemeConfigModel = {
  cssClass: {
    main: baseClass,
    input: `${baseClass}-input`,
    label: `${baseClass}-label`,
    inline: `${baseClass}-inline`,
    switch: 'form-switch',
  },
}
