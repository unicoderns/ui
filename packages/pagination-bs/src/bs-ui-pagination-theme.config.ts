import { SizeVariants } from '@uicr/core'
import { UiPaginationThemeConfigModel } from '@uicr/pagination'

const baseClass = 'pagination'
const getPrefixedClass = (value: string) => `${baseClass}-${value}`

export const bsUiPaginationThemeConfigDefaults: UiPaginationThemeConfigModel = {
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
