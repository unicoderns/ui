import { Positions, BootstrapVariants, enumToObjectByValue } from '@uicr/core'
import { UiToastThemeConfigModel } from '../'

const baseClass = 'toast'
const bgVariantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(bgVariantClasses).forEach(
  value => (bgVariantClasses[value] = `bg-${value}`)
)

export const uiToastThemeConfigDefaults: UiToastThemeConfigModel = {
  cssClass: {
    main: baseClass,
    container: 'ui-toast-container',
    animated: 'fade',
    textLight: 'text-light',
    header: 'toast-header',
    body: 'toast-body',
    message: 'me-auto',
    variants: {
      ...bgVariantClasses,
    },
    components: {
      buttonCloseHeader: 'ms-auto',
      buttonCloseBody: 'me-2 m-auto',
    },
    positions: {
      [Positions.TopLeft]:
        'toast-container position-absolute p-3 top-0 start-0',
      [Positions.TopCenter]:
        'toast-container position-absolute p-3 top-0 start-50 translate-middle-x',
      [Positions.TopRight]: 'toast-container position-absolute p-3 top-0 end-0',
      [Positions.MiddleLeft]:
        'toast-container position-absolute p-3 top-50 start-0 translate-middle-y',
      [Positions.MiddleCenter]:
        'toast-container position-absolute p-3 top-50 start-50 translate-middle',
      [Positions.MiddleRight]:
        'toast-container position-absolute p-3 top-50 end-0 translate-middle-y',
      [Positions.BottomLeft]:
        'toast-container position-absolute p-3 bottom-0 start-0',
      [Positions.BottomCenter]:
        'toast-container position-absolute p-3 bottom-0 start-50 translate-middle-x',
      [Positions.BottomRight]:
        'toast-container position-absolute p-3 bottom-0 end-0',
    },
  },
}
