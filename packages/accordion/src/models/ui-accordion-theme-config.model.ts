import { UiComponentThemeConfigModel } from '@uicr/core'

export interface UiAccordionThemeConfigModel
  extends UiComponentThemeConfigModel {
  tags: {
    header: string
  }
  cssClass: {
    main: string
    container: string
    containerFlush: string
    header: string
    button: string
    buttonCollapsed: string
    bodyWrapper: string
    body: string
    disabled: string
  }
}
