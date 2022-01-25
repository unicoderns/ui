import { cssClassPrefix, InputSizeVariants } from '@uicr/core'
import { UiInputGroupThemeConfigModel } from '../'

const baseClass = 'input-group'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`

export const uiInputGroupThemeConfigDefaults: UiInputGroupThemeConfigModel = {
  cssClass: {
    main: baseClass,
    nowrap: 'flex-nowrap',
    label: 'form-label',
    inputGroupText: 'input-group-text',
    sizes: {
      [InputSizeVariants.Large]: getPrefixedClass(InputSizeVariants.Large),
      [InputSizeVariants.Medium]: getPrefixedClass(InputSizeVariants.Medium),
      [InputSizeVariants.Small]: getPrefixedClass(InputSizeVariants.Small),
    },
  },
}
