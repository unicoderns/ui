import { UiComponentThemeConfigModel } from '@unicodernsui/core'

export interface UiTabsPanelThemeConfigModel
  extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    item: string
    link: string
    itemActive: string
    itemDisabled: string
  }
}
