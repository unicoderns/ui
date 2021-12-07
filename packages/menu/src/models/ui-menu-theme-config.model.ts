import { UiComponentThemeConfigModel } from '@unicodernsui/core'

export interface UiMenuThemeConfigModel extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    invert: string
    static: string
    item: string
    itemActive: string
    itemDisabled: string
    header: string
    text: string
    divider: string
  }
}
