import { BootstrapVariants } from '@uicr/common-bs'
import { SizeVariants, cssClassPrefix, enumToObjectByValue } from '@uicr/core'
import { UiButtonThemeConfigModel } from '@uicr/button'

const baseClass = 'btn'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`
const variantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(variantClasses).forEach(
  value => (variantClasses[value] = getPrefixedClass(value))
)
const getOtlinePrefixedClass = (value: string) =>
  `${classPrefix}outline-${value}`
const outlineVariantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(outlineVariantClasses).forEach(
  value => (outlineVariantClasses[value] = getOtlinePrefixedClass(value))
)

const darkVariantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(darkVariantClasses).forEach(
  value =>
    (darkVariantClasses[value] = getPrefixedClass(value) + ' ui-dark-mode')
)
const darkOutlineVariantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(darkOutlineVariantClasses).forEach(
  value =>
    (darkOutlineVariantClasses[value] =
      getOtlinePrefixedClass(value) + ' ui-dark-mode')
)

export const bsUiButtonThemeConfigDefaults: UiButtonThemeConfigModel = {
  cssClass: {
    main: baseClass,
    active: 'active',
    disabled: {
      [BootstrapVariants.Primary]: 'opacity-50 pointer-events-none',
    },
    outline: '',
    variants: {
      ...variantClasses,
    },
    outlineVariants: {
      ...outlineVariantClasses,
    },
    sizes: {
      [SizeVariants.Large]: getPrefixedClass(SizeVariants.Large),
      [SizeVariants.Medium]: getPrefixedClass(SizeVariants.Medium),
      [SizeVariants.Small]: getPrefixedClass(SizeVariants.Small),
    },
  },
  cssDark: {
    variants: {
      ...darkVariantClasses,
    },
    outlineVariants: {
      ...darkOutlineVariantClasses,
    },
  },
}
