import {
  BootstrapVariants,
  cssClassPrefix,
  enumToObjectByValue,
} from '@unicodernsui/core'
import { UiCardThemeConfigModel } from '..'

const baseClass = 'card'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`
const variantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(variantClasses).forEach(
  value => (variantClasses[value] = `bg-${value}`)
)
const outlineVariantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(outlineVariantClasses).forEach(
  value => (outlineVariantClasses[value] = `border-${value}`)
)
const textOutlineVariantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(textOutlineVariantClasses).forEach(
  value => (textOutlineVariantClasses[value] = `text-${value}`)
)
export const uiCardThemeConfigDefaults: UiCardThemeConfigModel = {
  cssClass: {
    main: baseClass,
    header: getPrefixedClass('header'),
    body: getPrefixedClass('body'),
    title: getPrefixedClass('title'),
    subtitle: getPrefixedClass('subtitle'),
    img: getPrefixedClass('img'),
    imgBottom: getPrefixedClass('img-bottom'),
    footer: getPrefixedClass('footer'),
    center: 'text-center',
    text: 'card-text',
    variants: {
      ...variantClasses,
    },
    textVariants: {
      primary: 'text-white',
      secondary: 'text-white',
      success: 'text-white',
      danger: 'text-white',
      warning: 'text-dark',
      info: 'text-dark',
      light: 'text-dark',
      dark: 'text-white',
    },
    outlineVariants: {
      ...outlineVariantClasses,
    },
    outlineTextVariants: {
      ...textOutlineVariantClasses,
      warning: '',
      info: '',
      light: '',
    },
  },
}
