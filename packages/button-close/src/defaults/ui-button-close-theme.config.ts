import { UiButtonCloseThemeConfigModel } from '../models/ui-button-close-theme-config.model'

export const uiButtonCloseThemeConfigDefaults: UiButtonCloseThemeConfigModel = {
  cssClass: {
    main:
      'ui-btn-close box-content w-2 h-2 m-1/2 bg-gray-500 border-0 bg-transparent bg-no-repeat bg-center disabled:pointer-events-none disabled:select-none disabled:bg-gray-100',
    inverted: 'bg-gray-100 disabled:bg-gray-400',
  },
}
// this is important for the storybook: bg-gray-600
