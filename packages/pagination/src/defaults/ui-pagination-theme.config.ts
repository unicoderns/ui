import { SizeVariants } from '@uicr/core'
import { UiPaginationThemeConfigModel } from '..'

const baseClass = 'pagination'
const getPrefixedClass = (value: string) => `${baseClass}-${value}`

export const uiPaginationThemeConfigDefaults: UiPaginationThemeConfigModel = {
  cssClass: {
    main: baseClass,
    item: 'page-item',
    link: 'page-link',
    itemActive: 'active',
    disabled: 'disabled',
    sizes: {
      [SizeVariants.Large]: getPrefixedClass(SizeVariants.Large),
      [SizeVariants.Medium]: getPrefixedClass(SizeVariants.Medium),
      [SizeVariants.Small]: getPrefixedClass(SizeVariants.Small),
    },
  },
}
