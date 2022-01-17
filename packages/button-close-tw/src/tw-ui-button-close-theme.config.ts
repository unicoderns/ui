import { UiButtonCloseThemeConfigModel } from '@unicodernsui/button-close'

export const twUiButtonCloseThemeConfigDefaults: UiButtonCloseThemeConfigModel = {
  cssClass: {
    main:
      'box-content w-4 h-4 p-1 text-black border-0 rounded opacity-50 bg-transparent bg-no-repeat bg-center ui-btn-close disabled:pointer-events-none disabled:select-none disabled:opacity-25 disabled:bg-red',
    inverted: 'filter invert grayscale brigthness',
  },
}
