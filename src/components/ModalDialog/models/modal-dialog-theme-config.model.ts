import { SizeVariants, UiComponentThemeConfigModel } from '../../../types'

export interface ModalDialogThemeConfigModel
  extends UiComponentThemeConfigModel {
  tags: {
    title: string
  }
  cssClass: {
    main: string
    animated: string
    wrapper: string
    verticallyCentered: string
    scrollable: string
    content: string
    header: string
    headerTitle: string
    body: string
    footer: string
    components: {
      buttonClose: string
    }
    sizes: {
      [SizeVariants.Small]: string
      [SizeVariants.Large]: string
      [SizeVariants.ExtraLarge]: string
    }
  }
}
