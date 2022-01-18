import { provide } from 'vue'
import { action } from '@storybook/addon-actions'
import {
  ButtonSizeVariants,
  uiUseDarkThemeInjectionToken,
} from '@unicodernsui/core'
import { TailwindVariants } from '@unicodernsui/base-tw'
import { UiButton, UiButtonModel } from '@unicodernsui/button'
import { install } from '../'

export default {
  title: 'UI/Tailwind/Button',
  component: UiButton,
  argTypes: {
    label: { control: { type: 'text' } },
    size: {
      control: { type: 'select' },
      options: Object.values(ButtonSizeVariants),
    },
    variant: {
      control: { type: 'select' },
      options: Object.values(TailwindVariants),
    },
    toggle: { control: { type: 'boolean' } },
  },
}

type StoryModel =
  | UiButtonModel
  | {
      label: string
    }

const Template = (args: StoryModel, { globals }: { globals: any }) => ({
  components: { UiButton },
  setup() {
    install()
    if (globals.backgrounds && globals.backgrounds.value !== 'transparent') {
      provide(uiUseDarkThemeInjectionToken, true)
    }

    return { args }
  },
  methods: {
    toggle: action('toggle'),
  },
  template: `
    <ui-button :="args" @toggle="toggle" >{{ args.label }}</ui-button>
  `,
})

const baseArgs: StoryModel = {
  label: 'Label',
  variant: TailwindVariants.Blue,
  size: ButtonSizeVariants.Small,
  anchor: false,
  outline: false,
  active: false,
  toggle: false,
}

export const Blue = Template.bind({})
Blue.args = {
  ...baseArgs,
  variant: TailwindVariants.Blue,
}

export const Pink = Template.bind({})
Pink.args = {
  ...baseArgs,
  variant: TailwindVariants.Pink,
}

export const Purple = Template.bind({})
Purple.args = {
  ...baseArgs,
  variant: TailwindVariants.Purple,
}

export const Medium = Template.bind({})
Medium.args = {
  ...baseArgs,
  size: ButtonSizeVariants.Medium,
}

export const Large = Template.bind({})
Large.args = {
  ...baseArgs,
  size: ButtonSizeVariants.Large,
}

export const Active = Template.bind({})
Active.args = {
  ...baseArgs,
  variant: TailwindVariants.Purple,
  active: true,
}

export const Toggle = Template.bind({})
Toggle.args = {
  ...baseArgs,
  variant: TailwindVariants.Purple,
  toggle: true,
}

export const Anchor = Template.bind({})
Anchor.args = {
  ...baseArgs,
  anchor: true,
}
