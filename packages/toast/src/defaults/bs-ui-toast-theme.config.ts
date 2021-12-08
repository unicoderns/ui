import {
  Position,
  BootstrapVariants,
  enumToObjectByValue,
} from '@unicodernsui/core'
import { UiToastThemeConfigModel } from '../'

const baseClass = 'toast'
const bgVariantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(bgVariantClasses).forEach(
  value => (bgVariantClasses[value] = `bg-${value}`)
)

export const bsUiToastThemeConfigDefaults: UiToastThemeConfigModel = {
  cssClass: {
    main: baseClass,
    container: 'ui-toast-container',
    animated: 'fade',
    textLight: 'text-light',
    header: 'toast-header',
    body: 'toast-body',
    message: 'me-auto',
    bgVariants: {
      ...bgVariantClasses,
    },
    components: {
      buttonCloseHeader: 'ms-auto',
      buttonCloseBody: 'me-2 m-auto',
    },
    positions: {
      [Position.TopLeft]: 'toast-container position-absolute p-3 top-0 start-0',
      [Position.TopCenter]:
        'toast-container position-absolute p-3 top-0 start-50 translate-middle-x',
      [Position.TopRight]: 'toast-container position-absolute p-3 top-0 end-0',
      [Position.MiddleLeft]:
        'toast-container position-absolute p-3 top-50 start-0 translate-middle-y',
      [Position.MiddleCenter]:
        'toast-container position-absolute p-3 top-50 start-50 translate-middle',
      [Position.MiddleRight]:
        'toast-container position-absolute p-3 top-50 end-0 translate-middle-y',
      [Position.BottomLeft]:
        'toast-container position-absolute p-3 bottom-0 start-0',
      [Position.BottomCenter]:
        'toast-container position-absolute p-3 bottom-0 start-50 translate-middle-x',
      [Position.BottomRight]:
        'toast-container position-absolute p-3 bottom-0 end-0',
    },
  },
}
