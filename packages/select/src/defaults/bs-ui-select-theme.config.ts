import {
  BootstrapVariants,
  cssClassPrefix,
  enumToObjectByValue,
  InputSizeVariants,
} from '@unicodernsui/core'
import { UiSelectThemeConfigModel } from '../'

const baseClass = 'form-select'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`
const variantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(variantClasses).forEach(
  value => (variantClasses[value] = getPrefixedClass(value))
)
export const bsUiSelectThemeConfigDefaults: UiSelectThemeConfigModel = {
  cssClass: {
    main: baseClass,
    sizes: {
      [InputSizeVariants.Large]: getPrefixedClass(InputSizeVariants.Large),
      [InputSizeVariants.Medium]: getPrefixedClass(InputSizeVariants.Medium),
      [InputSizeVariants.Small]: getPrefixedClass(InputSizeVariants.Small),
    },
  },
}
