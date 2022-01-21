import {
  BootstrapVariants,
  Directions,
  cssClassPrefix,
  enumToObjectByValue,
} from '@unicodernsui/core'
import { UiDropdownThemeConfigModel } from '../'

const baseClass = 'dropdown'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`
const variantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(variantClasses).forEach(
  value => (variantClasses[value] = getPrefixedClass(value))
)

export const uiDropdownThemeConfigDefaults: UiDropdownThemeConfigModel = {
  cssClass: {
    main: baseClass,
    menuEndAll: 'dropdown-menu-end',
    variants: {
      ...variantClasses,
    },
    components: {
      buttonToggle: 'dropdown-toggle',
      buttonSplit: 'dropdown-toggle dropdown-toggle-split',
      buttonGroup: 'btn-group',
      buttonAtStart: 'btn-group dropstart',
    },
    directions: {
      [Directions.Up]: 'dropup',
      [Directions.Down]: '',
      [Directions.Left]: 'dropstart',
      [Directions.Right]: 'dropend',
    },
  },
}
