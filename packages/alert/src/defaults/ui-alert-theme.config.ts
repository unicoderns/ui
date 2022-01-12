import {
  BootstrapVariants,
  cssClassPrefix,
  enumToObjectByValue,
} from '@unicodernsui/core'
import { UiAlertThemeConfigModel } from '../'

const baseClass = 'alert'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`
const variantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(variantClasses).forEach(
  value => (variantClasses[value] = getPrefixedClass(value))
)

export const bsUiAlertThemeConfigDefaults: UiAlertThemeConfigModel = {
  cssClass: {
    main: baseClass,
    dismissible: getPrefixedClass('dismissible'),
    animated: 'fade',
    variants: {
      ...variantClasses,
    },
    components: {
      buttonClose: '',
    },
  },
}
