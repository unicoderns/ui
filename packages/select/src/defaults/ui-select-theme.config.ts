import { cssClassPrefix, InputSizeVariants } from '@unicodernsui/core'
import { UiSelectThemeConfigModel } from '../'

const baseClass = 'form-select'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`
export const uiSelectThemeConfigDefaults: UiSelectThemeConfigModel = {
  cssClass: {
    main: baseClass,
    sizes: {
      [InputSizeVariants.Large]: getPrefixedClass(InputSizeVariants.Large),
      [InputSizeVariants.Medium]: getPrefixedClass(InputSizeVariants.Medium),
      [InputSizeVariants.Small]: getPrefixedClass(InputSizeVariants.Small),
    },
  },
}
