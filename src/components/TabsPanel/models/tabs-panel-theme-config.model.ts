import { UiComponentThemeConfigModel } from '../../../types'

export interface TabsPanelThemeConfigModel extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    item: string
    link: string
    itemActive: string
    itemDisabled: string
  }
}
