import { SizeVariants, UiVariants } from '@uicr/core'
import { UiButtonThemeConfigModel } from '../'

export const uiButtonThemeConfigDefaults: UiButtonThemeConfigModel = {
  cssClass: {
    main:
      'inline-block text-xs font-normal leading-3 text-center align-middle cursor-pointer select-none bg-transparent border border-solid border-transparent rounded-lg p-1 pr-2 pl-2 focus-within:ring-4 ring-gray-200 outline-none shadow-2 disabled:opacity-50 disabled:shadow-none',
    active: 'shadow-inset',
    outline: 'bg-transparent shadow-1',
    disabled: {},
    variants: {
      [UiVariants.Success]:
        'bg-success-200 text-success-600 hover:bg-success-100 hover:border-success-300',
      [UiVariants.Danger]:
        'bg-danger-200 text-danger-600 hover:bg-danger-100 hover:border-danger-300',
      [UiVariants.Warning]:
        'bg-warning-200 text-gray-600 hover:bg-warning-100 hover:border-warning-300',
      [UiVariants.Primary]:
        'bg-primary-200 text-white hover:bg-primary-100 hover:border-primary-300',
      [UiVariants.Secondary]:
        'bg-secondary-200 text-secondary-600 hover:bg-secondary-100 hover:border-secondary-300',
      [UiVariants.Info]:
        'bg-info-200 text-info-600 hover:bg-info-100 hover:border-info-300',
    },
    outlineVariants: {
      [UiVariants.Success]:
        'text-success-400 border-success-400 hover:bg-success-50 hover:text-success-300 hover:border-success-200',
      [UiVariants.Danger]:
        'text-danger-400 border-danger-400 hover:bg-danger-50 hover:text-danger-300 hover:border-danger-200',
      [UiVariants.Warning]:
        'text-warning-500 border-warning-500 hover:bg-warning-200 hover:border-warning-300',
      [UiVariants.Primary]:
        'text-primary-400 border-primary-400 hover:bg-primary-50 hover:text-primary-300 hover:border-primary-200',
      [UiVariants.Secondary]:
        'text-secondary-400 border-secondary-400 hover:bg-secondary-50 hover:text-secondary-300 hover:border-secondary-200',
      [UiVariants.Info]:
        'text-info-400 border-info-400 hover:bg-info-50 hover:text-info-300 hover:border-info-200',
    },
    activeVariants: {
      [UiVariants.Success]: 'bg-success-300',
      [UiVariants.Danger]: 'bg-danger-300',
      [UiVariants.Warning]: 'bg-warning-300',
      [UiVariants.Primary]: 'bg-primary-300',
      [UiVariants.Secondary]: 'bg-secondary-300',
      [UiVariants.Info]: 'bg-info-300',
    },
    sizes: {
      [SizeVariants.Large]: 'p-2 pr-3 pl-3 rounded-xxl text-lg',
      [SizeVariants.Medium]: '',
      [SizeVariants.Small]: 'p-1/2 pr-1 pl-1 rounded-lg text-xs',
    },
  },
  cssDark: {
    outline: 'bg-transparent shadow-1 text-white',
    variants: {
      [UiVariants.Success]: 'bg-success-400 hover:bg-success-300 text-white',
      [UiVariants.Danger]: 'bg-danger-400 hover:bg-danger-300 text-white',
      [UiVariants.Warning]: 'bg-warning-400 hover:bg-warning-300 text-gray-600',
      [UiVariants.Primary]: 'bg-primary-400 hover:bg-primary-300 text-white',
      [UiVariants.Secondary]:
        'bg-secondary-400 hover:bg-secondary-300 text-white',
      [UiVariants.Info]: 'bg-info-400 hover:bg-info-300 text-white',
    },
    outlineVariants: {
      [UiVariants.Success]:
        'text-success-400 border-success-400 hover:bg-gray-500 hover:text-success-300',
      [UiVariants.Danger]:
        'text-danger-400 border-danger-400 hover:bg-gray-500 hover:text-danger-300',
      [UiVariants.Warning]:
        'text-warning-400 border-warning-400 hover:bg-gray-500 hover:text-warning-300',
      [UiVariants.Primary]:
        'text-primary-300 border-primary-400 hover:bg-gray-500',
      [UiVariants.Secondary]:
        'text-secondary-400 border-secondary-400 hover:bg-gray-500 hover:text-secondary-300',
      [UiVariants.Info]:
        'text-info-400 border-info-400 hover:bg-gray-500 hover:text-info-300',
    },
    activeVariants: {
      [UiVariants.Success]: 'bg-success-700',
      [UiVariants.Danger]: 'bg-danger-700',
      [UiVariants.Warning]: 'bg-warning-700',
      [UiVariants.Primary]: 'bg-primary-700',
      [UiVariants.Secondary]: 'bg-secondary-700',
      [UiVariants.Info]: 'bg-info-700',
    },
  },
}
