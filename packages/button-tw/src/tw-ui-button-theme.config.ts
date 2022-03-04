import { SizeVariants } from '@uicr/core'
import { TailwindVariants } from '@uicr/common-tw'
import { UiButtonThemeConfigModel } from '@uicr/button'

export const twUiButtonThemeConfigDefaults: UiButtonThemeConfigModel = {
  cssClass: {
    main:
      'inline-block text-base font-normal leading-normal text-center no-underline align-middle cursor-pointer select-none bg-transparent border border-solid border-transparent rounded-lg  p-1 pr-2 pl-2 focus-within:ring-4 ring-gray-200 outline-none',
    active: 'filter contrast-75',
    disabled: {
      [TailwindVariants.Blue]: 'opacity-50 pointer-events-none',
    },
    outline: 'bg-transparent',
    variants: {
      [TailwindVariants.Blue]: 'bg-blue-300 text-blue-800 border-blue-400',
      [TailwindVariants.Pink]: 'bg-pink-300 text-pink-800 border-pink-400',
      [TailwindVariants.Purple]:
        'bg-purple-300 text-purple-800 border-purple-400',
    },
    outlineVariants: {
      [TailwindVariants.Blue]: 'text-blue-800 border-blue-800',
      [TailwindVariants.Pink]: 'text-pink-800 border-pink-800',
      [TailwindVariants.Purple]: 'text-purple-800 border-purple-800',
    },
    sizes: {
      [SizeVariants.Large]: 'p-3 pr-4 pl-4 rounded-2xl text-lg',
      [SizeVariants.Medium]: 'p-2 pr-3 pl-3 rounded-xl text-md',
      [SizeVariants.Small]: '',
    },
  },
}
