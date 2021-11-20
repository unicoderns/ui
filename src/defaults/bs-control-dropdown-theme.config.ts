import { ControlDropdownThemeConfigModel } from '../components'
import { BootstrapVariants } from './bootstrap-variant'
import { Directions, ResponsiveVariants } from '../types'
import { cssClassPrefix, enumToObjectByValue } from '../utils'

const baseClass = 'dropdown'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`
const variantClasses = enumToObjectByValue(BootstrapVariants);
Object.keys(variantClasses).forEach(
  value => (variantClasses[value] = getPrefixedClass(value))
)
const menuVariantClasses = enumToObjectByValue(ResponsiveVariants);
Object.keys(menuVariantClasses).forEach(
  value => (menuVariantClasses[value] = `dropdown-menu-${value}-end`)
)

export const bsControlDropdownThemeConfigDefaults: ControlDropdownThemeConfigModel = {
  cssClass: {
    main: baseClass,
    menuEndAll: 'dropdown-menu-end',
    variants: {
      ...variantClasses,
    },
    menuEndVariants: {
      ...menuVariantClasses,
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
    }
  },
}
