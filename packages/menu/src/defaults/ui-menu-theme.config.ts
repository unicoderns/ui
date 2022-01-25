import { cssClassPrefix } from '@uicr/core'
import { UiMenuThemeConfigModel } from '../'

const baseClass = 'dropdown-menu'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`

export const uiMenuThemeConfigDefaults: UiMenuThemeConfigModel = {
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
