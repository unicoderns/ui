---
to: packages/<%= h.changeCase.param(name) %>/src/stories/<%= h.changeCase.pascal(name) %>.tw.stories.ts
---
import { action } from '@storybook/addon-actions'
import { setComponentThemeConfig } from '@unicodernsui/core'
import { TailwindVariants } from '@unicodernsui/custom-theme'
import { twUi<%= h.changeCase.pascal(name) %>ThemeConfigDefaults } from './tw-ui-<%= h.changeCase.param(name) %>-theme.config'
import { Ui<%= h.changeCase.pascal(name) %>, Ui<%= h.changeCase.pascal(name) %>Model } from '../'

export default {
  title: 'UI/Tailwind/<%= h.changeCase.pascal(name) %>',
  component: Ui<%= h.changeCase.pascal(name) %>,
  argTypes: {
    label: { control: { type: 'text' } },
    variant: {
      control: { type: 'select' },
      options: Object.values(TailwindVariants),
    },
  },
}

type StoryModel =
  | Ui<%= h.changeCase.pascal(name) %>Model
  | {
      label: string
    }

const Template = (args: StoryModel) => ({
  components: { Ui<%= h.changeCase.pascal(name) %> },
  setup() {
    setComponentThemeConfig(Ui<%= h.changeCase.pascal(name) %>, twUi<%= h.changeCase.pascal(name) %>ThemeConfigDefaults)

    return { args }
  },
  methods: {
    click: action('click'),
  },
  template: `
    <ui-<%= h.changeCase.param(name) %> :="args" @click="click" >{{ args.label }}</ui-<%= h.changeCase.param(name) %>>
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
