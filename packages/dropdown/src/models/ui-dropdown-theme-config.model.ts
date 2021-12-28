import {
  KeyPairString,
  Directions,
  UiComponentThemeConfigModel,
} from '@unicodernsui/core'

export interface UiDropdownThemeConfigModel
  extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    menuEndAll: string
    variants: KeyPairString
    components: {
      buttonToggle: string
      buttonSplit: string
      buttonGroup: string
      buttonAtStart: string
    }
    directions: {
      [Directions.Up]: string
      [Directions.Down]: string
      [Directions.Left]: string
      [Directions.Right]: string
    }
  }
}
