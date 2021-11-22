import { ControlMenuThemeConfigModel } from '../components'
import { cssClassPrefix } from '../utils'

const baseClass = 'dropdown-menu'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`

export const bsControlMenuThemeConfigDefaults: ControlMenuThemeConfigModel = {
  cssClass: {
    main: baseClass,
    invert: getPrefixedClass('invert'),
    static: getPrefixedClass('static'),
    item: 'dropdown-item',
    itemActive: 'active',
    itemDisabled: 'disabled',
    header: 'dropdown-header',
    text: 'dropdown-item-text',
    divider: 'dropdown-divider',
  },
}
