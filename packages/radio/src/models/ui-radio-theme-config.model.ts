import { UiComponentThemeConfigModel } from '@uicr/core'

export interface UiRadioThemeConfigModel extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    input: string
    label: string
    inline: string
    switch: string
  }
}
