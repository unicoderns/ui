import { action } from '@storybook/addon-actions'
import { setComponentThemeConfig } from '@unicodernsui/core'
import { TailwindVariants } from '@unicodernsui/custom-theme'
import { twUiInputGroupThemeConfigDefaults } from './tw-ui-input-group-theme.config'
import { UiInputGroup, UiInputGroupModel } from '../'

export default {
  title: 'UI/Tailwind/InputGroup',
  component: UiInputGroup,
  argTypes: {
    label: { control: { type: 'text' } },
    variant: {
      control: { type: 'select' },
      options: Object.values(TailwindVariants),
    },
  },
}

type StoryModel =
  | UiInputGroupModel
  | {
      label: string
    }

const Template = (args: StoryModel) => ({
  components: { UiInputGroup },
  setup() {
    setComponentThemeConfig(UiInputGroup, twUiInputGroupThemeConfigDefaults)

    return { args }
  },
  methods: {
    click: action('click'),
  },
  template: `
    <ui-input-group :="args" @click="click" >{{ args.label }}</ui-input-group>
  `,
})

const baseArgs: StoryModel = {
  label: 'Label',
  variant: TailwindVariants.Blue,
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
