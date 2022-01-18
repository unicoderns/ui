import {
  BootstrapVariants,
  cssClassPrefix,
  enumToObjectByValue,
} from '@unicodernsui/core'
import { UiCardThemeConfigModel } from '../'

const baseClass = 'card'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`
const variantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(variantClasses).forEach(
  value => (variantClasses[value] = `bg-${value}`)
)
const borderVariantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(borderVariantClasses).forEach(
  value => (borderVariantClasses[value] = `border-${value}`)
)
const textVariantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(textVariantClasses).forEach(
  value => (textVariantClasses[value] = `text-${value}`)
)
export const bsUiCardThemeConfigDefaults: UiCardThemeConfigModel = {
  cssClass: {
    main: baseClass,
    header: getPrefixedClass('header'),
    body: getPrefixedClass('body'),
    title: getPrefixedClass('title'),
    subtitle: getPrefixedClass('subtitle'),
    link: getPrefixedClass('link'),
    img: getPrefixedClass('img'),
    imgBottom: getPrefixedClass('img-bottom'),
    footer: getPrefixedClass('footer'),
    center: 'text-center',
    text: 'card-text',
    variants: {
      primary: 'text-white bg-primary',
      secondary: 'text-white bg-secondary',
      success: 'text-white bg-success',
      danger: 'text-white bg-danger',
      warning: 'text-dark bg-warning',
      info: 'text-dark bg-info',
      light: 'text-dark bg-light',
      dark: 'text-white bg-dark',
    },
    borderVariants: {
      ...borderVariantClasses,
    },
    textBorderVariants: {
      ...textVariantClasses,
      warning: '',
      info: '',
      light: '',
    },
  },
}
