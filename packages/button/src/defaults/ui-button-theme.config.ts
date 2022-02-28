import { SizeVariants, UiVariants } from '@uicr/core'
import { UiButtonThemeConfigModel } from '../'

export const uiButtonThemeConfigDefaults: UiButtonThemeConfigModel = {
  cssClass: {
    main:
      'inline-block text-base font-normal leading-normal text-center no-underline align-middle cursor-pointer select-none bg-transparent border border-solid border-transparent rounded-lg  p-1 pr-2 pl-2 focus-within:ring-4 ring-gray-200 outline-none text-white',
    active: 'filter contrast-75',
    outline: 'bg-transparent text-black',
    disabled: {
      [UiVariants.Primary]: 'opacity-50 pointer-events-none',
      [UiVariants.Secondary]: 'opacity-50 pointer-events-none bg-secondary-800',
    },
    variants: {
      [UiVariants.Success]: 'bg-blue-300 text-blue-800 border-blue-400',
      [UiVariants.Danger]: 'bg-pink-300 text-pink-800 border-pink-400',
      [UiVariants.Warning]: 'bg-purple-300 text-purple-800 border-purple-400',
      [UiVariants.Primary]:
        'bg-primary-400 w-20 h-6 flex flex-row absolute justify-center items-center hover:bg-primary-300',
      [UiVariants.Secondary]:
        'bg-secondary-400 w-20 h-6 flex flex-row absolute justify-center items-center hover:bg-secondary-200',
      [UiVariants.Danger]: 'bg-pink-300 text-pink-800 border-pink-400',
      [UiVariants.Info]: 'bg-pink-300 text-pink-800 border-pink-400',
      [UiVariants.Gray]: 'bg-pink-300 text-pink-800 border-pink-400',
    },
    outlineVariants: {
      [UiVariants.Success]: 'text-blue-800 border-blue-800',
      [UiVariants.Danger]: 'text-pink-800 border-pink-800',
      [UiVariants.Warning]: 'text-purple-800 border-purple-800',
      [UiVariants.Primary]: 'text-pink-800 border-pink-800',
      [UiVariants.Secondary]: 'text-pink-800 border-pink-800',
      [UiVariants.Danger]: 'text-pink-800 border-pink-800',
      [UiVariants.Info]: 'text-pink-800 border-pink-800',
      [UiVariants.Gray]: 'text-pink-800 border-pink-800',
    },
    sizes: {
      [SizeVariants.Large]: 'p-3 pr-4 pl-4 rounded-2xl text-lg',
      [SizeVariants.Medium]: 'p-2 pr-3 pl-3 rounded-xl text-md',
      [SizeVariants.Small]: '',
    },
  },
  // cssDark: {
  //   variants: {
  //     ...darkVariantClasses,
  //   },
  //   outlineVariants: {
  //     ...darkOutlineVariantClasses,
  //   },
  // },
}
