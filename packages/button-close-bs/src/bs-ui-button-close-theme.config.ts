import { cssClassPrefix } from '@uicr/core'
import { UiButtonCloseThemeConfigModel } from '@uicr/button-close'

const baseClass = 'btn-close'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`

export const bsUiButtonCloseThemeConfigDefaults: UiButtonCloseThemeConfigModel = {
  cssClass: {
    main: baseClass,
    inverted: getPrefixedClass('white'),
  },
}
