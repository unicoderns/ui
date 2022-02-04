import { cssClassPrefix, InputSizeVariants } from '@uicr/core'
import { UiSelectThemeConfigModel } from '@uicr/select'

const baseClass = 'form-select'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`
export const bsUiSelectThemeConfigDefaults: UiSelectThemeConfigModel = {
  cssClass: {
    main: baseClass,
    sizes: {
      [InputSizeVariants.Large]: getPrefixedClass(InputSizeVariants.Large),
      [InputSizeVariants.Medium]: getPrefixedClass(InputSizeVariants.Medium),
      [InputSizeVariants.Small]: getPrefixedClass(InputSizeVariants.Small),
    },
  },
}
