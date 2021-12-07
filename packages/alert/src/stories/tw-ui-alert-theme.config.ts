import { TailwindVariants } from '@unicodernsui/custom-theme'
import { UiAlertThemeConfigModel } from '../'

export const twUiAlertThemeConfigDefaults: UiAlertThemeConfigModel = {
  cssClass: {
    main: 'relative p-4 m-1 border border-solid border-transparent rounded-xl',
    dismissible: 'pr-11 opacity-0',
    animated: 'transition transition-opacity ease-linear duration-1000',
    variants: {
      [TailwindVariants.Blue]: 'bg-blue-300 text-blue-800 border-blue-400',
      [TailwindVariants.Pink]: 'bg-pink-300 text-pink-800 border-pink-400',
      [TailwindVariants.Purple]: 'bg-purple-300 text-purple-800 border-purple-400',
    },
    components: {
      buttonClose: 'absolute top-0 right-0 pt-5 pb-5 pr-4 pl-4 z-2',
    },
  },
}
