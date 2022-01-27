---
to: packages/<%= h.changeCase.param(name) %>/src/stories/<%= h.changeCase.pascal(name) %>.bs.stories.ts
---
import { provide } from 'vue'
import { action } from '@storybook/addon-actions'
import { BootstrapVariants, uiUseDarkThemeInjectionToken } from '@uicr/core'
import { Ui<%= h.changeCase.pascal(name) %>, Ui<%= h.changeCase.pascal(name) %>Model } from '../'
import { Ui<%= h.changeCase.pascal(name) %>Doc } from '../dev'

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
  parameters: {
    docs: {
      page: Ui<%= h.changeCase.pascal(name) %>Doc,
    },
  },
}

type StoryModel =
  | Ui<%= h.changeCase.pascal(name) %>Model
  | {
      label: string
    }

const Template = (args: StoryModel, { globals }: { globals: any }) => ({
  components: { Ui<%= h.changeCase.pascal(name) %> },
  setup() {
    if (globals.backgrounds && globals.backgrounds.value !== 'transparent') {
      provide(uiUseDarkThemeInjectionToken, true)
    }

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
  variant: BootstrapVariants.Primary,
}

export const Primary = Template.bind({})
Primary.args = {
  ...baseArgs,
  variant: BootstrapVariants.Primary,
}
Primary.parameters = {
  docs: {
    source: {
      code: '<ui-<%= h.changeCase.param(name) %> variant="primary">Primary</ui-<%= h.changeCase.param(name) %>>',
    },
  },
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...baseArgs,
  variant: BootstrapVariants.Secondary,
}
Secondary.parameters = {
  docs: {
    source: {
      code: '<ui-<%= h.changeCase.param(name) %> variant="secondary">Secondary</ui-<%= h.changeCase.param(name) %>>',
    },
  },
}

export const Success = Template.bind({})
Success.args = {
  ...baseArgs,
  variant: BootstrapVariants.Success,
}
Success.parameters = {
  docs: {
    source: {
      code: '<ui-<%= h.changeCase.param(name) %> variant="success">Success</ui-<%= h.changeCase.param(name) %>>',
    },
  },
}

export const Danger = Template.bind({})
Danger.args = {
  ...baseArgs,
  variant: BootstrapVariants.Danger,
}
Danger.parameters = {
  docs: {
    source: {
      code: '<ui-<%= h.changeCase.param(name) %> variant="danger">Danger</ui-<%= h.changeCase.param(name) %>>',
    },
  },
}

export const Warning = Template.bind({})
Warning.args = {
  ...baseArgs,
  variant: BootstrapVariants.Warning,
}
Warning.parameters = {
  docs: {
    source: {
      code: '<ui-<%= h.changeCase.param(name) %> variant="warning">Warning</ui-<%= h.changeCase.param(name) %>>',
    },
  },
}

export const Info = Template.bind({})
Info.args = {
  ...baseArgs,
  variant: BootstrapVariants.Info,
}
Info.parameters = {
  docs: {
    source: {
      code: '<ui-<%= h.changeCase.param(name) %> variant="info">Info</ui-<%= h.changeCase.param(name) %>>',
    },
  },
}

export const Light = Template.bind({})
Light.args = {
  ...baseArgs,
  variant: BootstrapVariants.Light,
}
Light.parameters = {
  docs: {
    source: {
      code: '<ui-<%= h.changeCase.param(name) %> variant="light">Light</ui-<%= h.changeCase.param(name) %>>',
    },
  },
}

export const Dark = Template.bind({})
Dark.args = {
  ...baseArgs,
  variant: BootstrapVariants.Dark,
}
Dark.parameters = {
  docs: {
    source: {
      code: '<ui-<%= h.changeCase.param(name) %> variant="dark">Dark</ui-<%= h.changeCase.param(name) %>>',
    },
  },
}
