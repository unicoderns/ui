import { AlertMessageThemeConfigModel } from '../components'
import { BootstrapVariants } from './bootstrap-variant'
import { cssClassPrefix, enumToObjectByValue } from '../utils'

const baseClass = 'alert'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`
const variantClasses = enumToObjectByValue(BootstrapVariants);
Object.keys(variantClasses).forEach(
  value => (variantClasses[value] = getPrefixedClass(value))
)

export const bsAlertMessageThemeConfigDefaults: AlertMessageThemeConfigModel = {
  cssClass: {
    main: baseClass,
    dismissible: getPrefixedClass('dismissible'),
    animated: 'fade',
    variants: {
      ...variantClasses,
    },
    components: {
      buttonClose: ''
    }
  },
}
