import { ControlDropdownThemeConfigModel } from '../../../components'
import { Directions, ResponsiveVariants } from '../../../types'
import { TailwindVariants } from './variants'

export const twControlDropdownThemeConfigDefaults: ControlDropdownThemeConfigModel = {
  cssClass: {
    main: '',
    menuEndAll: 'dropdown-menu-end',
    variants: {
      [TailwindVariants.Blue]: 'bg-blue-300',
      [TailwindVariants.Pink]: 'bg-pink-300',
      [TailwindVariants.Purple]: 'bg-purple-300',
    },
    menuEndVariants: {
      [ResponsiveVariants.ExtraExtraLarge]: '',
      [ResponsiveVariants.ExtraLarge]: '',
      [ResponsiveVariants.ExtraSmall]: '',
      [ResponsiveVariants.Large]: '',
      [ResponsiveVariants.Medium]: '',
      [ResponsiveVariants.Small]: '',
    },
    components: {
      buttonToggle: 'dropdown-toggle',
      buttonSplit: 'dropdown-toggle dropdown-toggle-split',
      buttonGroup: 'btn-group',
      buttonAtStart: 'btn-group dropstart',
    },
    directions: {
      [Directions.Up]: 'dropup',
      [Directions.Down]: '',
      [Directions.Left]: 'dropstart',
      [Directions.Right]: 'dropend',
    }
  },
}
