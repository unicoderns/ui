import { action } from '@storybook/addon-actions'
import { setComponentThemeConfig } from '@unicodernsui/core'
import { TailwindVariants } from '@unicodernsui/custom-theme'
import { twUiSelectThemeConfigDefaults } from './tw-ui-select-theme.config'
import { UiSelect, UiSelectModel } from '../'

export default {
  title: 'UI/Tailwind/Select',
  component: UiSelect,
  argTypes: {
    label: { control: { type: 'text' } },
    variant: {
      control: { type: 'select' },
      options: Object.values(TailwindVariants),
    },
  },
}

type StoryModel =
  | UiSelectModel
  | {
      label: string
    }

const Template = (args: StoryModel) => ({
  components: { UiSelect },
  setup() {
    setComponentThemeConfig(UiSelect, twUiSelectThemeConfigDefaults)

    return { args }
  },
  methods: {
    click: action('click'),
  },
  template: `
    <ui-select :="args" @click="click" >{{ args.label }}</ui-select>
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
