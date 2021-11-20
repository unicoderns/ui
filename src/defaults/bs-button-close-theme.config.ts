import { ButtonCloseThemeConfigModel } from '../components'
import { cssClassPrefix } from '../utils'

const baseClass = 'btn-close'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`

export const bsButtonCloseThemeConfigDefaults: ButtonCloseThemeConfigModel = {
  cssClass: {
    main: baseClass,
    inverted: getPrefixedClass('white'),
  }
}
