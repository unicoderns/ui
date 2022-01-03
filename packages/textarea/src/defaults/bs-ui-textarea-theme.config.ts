import {
  BootstrapVariants,
  enumToObjectByValue,
  cssClassPrefix,
  SizeVariants,
} from '@unicodernsui/core'
import { UiTextareaThemeConfigModel } from '../'

const baseClass = 'input-group'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`
const variantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(variantClasses).forEach(
  value => (variantClasses[value] = getPrefixedClass(value))
)
export const bsUiTextareaThemeConfigDefaults: UiTextareaThemeConfigModel = {
  cssClass: {
    main: baseClass,
    disabled: 'disabled',
    inputGroupText: 'input-group-text',
    label: 'form-label',
    textArea: 'form-control',
    sizes: {
      [SizeVariants.Large]: getPrefixedClass(SizeVariants.Large),
      [SizeVariants.Medium]: getPrefixedClass(SizeVariants.Medium),
      [SizeVariants.Small]: getPrefixedClass(SizeVariants.Small),
    },
  },
}
