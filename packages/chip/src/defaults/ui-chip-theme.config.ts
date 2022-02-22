import {
  BootstrapVariants,
  enumToObjectByValue,
  cssClassPrefix,
} from '@uicr/core'
import { UiChipThemeConfigModel } from '../'

const baseClass = 'badge'
const variantPrefix = 'bg'
const pillClass = 'rounded-pill'
const textClass = 'text-dark'
const classPrefix = cssClassPrefix(variantPrefix)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`
const variantClasses = enumToObjectByValue(BootstrapVariants)

Object.keys(variantClasses).forEach(
  value => (variantClasses[value] = getPrefixedClass(value))
)

export const uiChipThemeConfigDefaults: UiChipThemeConfigModel = {
  cssClass: {
    main: baseClass,
    pill: pillClass,
    textDark: textClass,
    variants: {
      ...variantClasses,
    },
  },
}
