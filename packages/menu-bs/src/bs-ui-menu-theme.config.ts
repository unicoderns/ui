import { cssClassPrefix } from '@uicr/core'
import { UiMenuThemeConfigModel } from '@uicr/menu'

const baseClass = 'dropdown-menu'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`

export const bsUiMenuThemeConfigDefaults: UiMenuThemeConfigModel = {
  tags: {
    headerItem: 'h6',
  },
  cssClass: {
    main: baseClass,
    invert: getPrefixedClass('dark'),
    static: getPrefixedClass('static'),
    item: 'dropdown-item',
    itemActive: 'active',
    itemDisabled: 'disabled',
    header: 'dropdown-header',
    text: 'dropdown-item-text',
    divider: 'dropdown-divider',
  },
}
