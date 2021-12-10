import {
  ResponsiveVariants,
  SizeVariants,
  UiComponentThemeConfigModel,
} from '@unicodernsui/core'

export interface UiModalThemeConfigModel extends UiComponentThemeConfigModel {
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
    fullscreenAll: string
    fullscreenVariants: {
      [ResponsiveVariants.ExtraExtraLarge]: string
      [ResponsiveVariants.ExtraLarge]: string
      [ResponsiveVariants.Large]: string
      [ResponsiveVariants.Medium]: string
      [ResponsiveVariants.Small]: string
      [ResponsiveVariants.ExtraSmall]: string
    }
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
