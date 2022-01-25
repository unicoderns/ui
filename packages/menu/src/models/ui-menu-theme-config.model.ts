import { UiComponentThemeConfigModel } from '@uicr/core'

export interface UiMenuThemeConfigModel extends UiComponentThemeConfigModel {
  tags: {
    headerItem: string
  }
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
