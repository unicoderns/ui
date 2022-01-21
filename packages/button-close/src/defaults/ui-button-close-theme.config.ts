import { UiButtonCloseThemeConfigModel } from '../models/ui-button-close-theme-config.model'
import { cssClassPrefix } from '@unicodernsui/core'

const baseClass = 'btn-close'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`

export const uiButtonCloseThemeConfigDefaults: UiButtonCloseThemeConfigModel = {
  cssClass: {
    main: baseClass,
    inverted: getPrefixedClass('white'),
  },
}
