import { BootstrapVariants } from '@uicr/common-bs'
import { cssClassPrefix, enumToObjectByValue } from '@uicr/core'
import { UiAlertThemeConfigModel } from '@uicr/alert'

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
