---
to: packages/<%= h.changeCase.param(name) %>/src/stories/<%= h.changeCase.pascal(name) %>.bs.stories.ts
---
import { action } from '@storybook/addon-actions'
import { BootstrapVariants } from '@unicodernsui/core'
import { Ui<%= h.changeCase.pascal(name) %>, Ui<%= h.changeCase.pascal(name) %>Model } from '../'

export default {
  title: 'UI/Bootstrap/<%= h.changeCase.pascal(name) %>',
  component: Ui<%= h.changeCase.pascal(name) %>,
  argTypes: {
    label: { control: { type: 'text' } },
    variant: {
      control: { type: 'select' },
      options: Object.values(BootstrapVariants),
    },
    toggle: { control: { type: 'boolean' } },
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
    return { args }
  },
  methods: {
    click: action('click'),
  },
  template: `
    <ui-<%= h.changeCase.pascal(name) %> :="args" @click="click" >{{ args.label }}</ui-<%= h.changeCase.pascal(name) %>>
  `,
})

const baseArgs: StoryModel = {
  label: 'Label',
  variant: BootstrapVariants.Primary,
}

export const Primary = Template.bind({})
Primary.args = {
  ...baseArgs,
  variant: BootstrapVariants.Primary,
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...baseArgs,
  variant: BootstrapVariants.Secondary,
}

export const Success = Template.bind({})
Success.args = {
  ...baseArgs,
  variant: BootstrapVariants.Success,
}

export const Danger = Template.bind({})
Danger.args = {
  ...baseArgs,
  variant: BootstrapVariants.Danger,
}

export const Warning = Template.bind({})
Warning.args = {
  ...baseArgs,
  variant: BootstrapVariants.Warning,
}

export const Info = Template.bind({})
Info.args = {
  ...baseArgs,
  variant: BootstrapVariants.Info,
}

export const Light = Template.bind({})
Light.args = {
  ...baseArgs,
  variant: BootstrapVariants.Light,
}

export const Dark = Template.bind({})
Dark.args = {
  ...baseArgs,
  variant: BootstrapVariants.Dark,
}
