import { uiThemeConfigInjectionToken, UiThemeConfigModel } from '../../types';
import { provide } from 'vue';
import { bsThemeDefauls } from '../../defaults';

export enum TailwindVariants {
  Blue = 'blue',
  Pink = 'pink',
  Purple = 'purple',
}

export const provideTailwind = () => {
  const globalThemeConfig: UiThemeConfigModel = {
    ...bsThemeDefauls,
    transitionPersist: {
      cssClass: {
        persistent: 'opacity-100',
      },
    },
    alertMessage: {
      cssClass: {
        main: 'relative p-4 m-1 border border-solid border-transparent rounded-xl',
        dismissible: 'pr-11 opacity-0',
        animated: 'transition transition-opacity ease-linear duration-1000',
        variants: {
          blue: 'bg-blue-300 text-blue-800 border-blue-400',
          pink: 'bg-pink-300 text-pink-800 border-pink-400',
          purple: 'bg-purple-300 text-purple-800 border-purple-400',
        },
        components: {
          buttonClose: 'absolute top-0 right-0 pt-5 pb-5 pr-4 pl-4 z-2',
        },
      },
    },
    buttonClose: {
      cssClass: {
        main: 'box-content w-4 h-4 p-1 text-black border-0 rounded opacity-50 bg-transparent bg-no-repeat bg-center ui-btn-close',
        inverted: 'text-white',
      },
    },
  }

  provide(uiThemeConfigInjectionToken, globalThemeConfig)
}