import { provide } from 'vue'
import { action } from '@storybook/addon-actions'
import { BootstrapVariants, uiUseDarkThemeInjectionToken } from '@uicr/core'
import { UiChip, UiChipModel } from '../'
import { UiChipDoc } from '../dev'

export default {
  title: 'UI/Chip',
  component: UiChip,
  argTypes: {
    label: { control: { type: 'text' } },
    variant: {
      control: { type: 'select' },
      options: Object.values(BootstrapVariants),
    },
    pill: { control: { type: 'boolean' } },
    textDark: { control: { type: 'boolean' } },
  },
  parameters: {
    docs: {
      page: UiChipDoc,
    },
  },
}

type StoryModel =
  | UiChipModel
  | {
      label: string
    }

const Template = (args: StoryModel, { globals }: { globals: any }) => ({
  components: { UiChip },
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
    <ui-chip :="args" @click="click" >{{ args.label }}</ui-chip>
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
      code: '<ui-chip variant="primary">Primary</ui-chip>',
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
      code: '<ui-chip variant="secondary">Secondary</ui-chip>',
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
      code: '<ui-chip variant="success">Success</ui-chip>',
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
      code: '<ui-chip variant="danger">Danger</ui-chip>',
    },
  },
}

export const Warning = Template.bind({})
Warning.args = {
  ...baseArgs,
  variant: BootstrapVariants.Warning,
  textDark: true,
}
Warning.parameters = {
  docs: {
    source: {
      code: '<ui-chip variant="warning">Warning</ui-chip>',
    },
  },
}

export const Info = Template.bind({})
Info.args = {
  ...baseArgs,
  variant: BootstrapVariants.Info,
  textDark: true,
}
Info.parameters = {
  docs: {
    source: {
      code: '<ui-chip variant="info">Info</ui-chip>',
    },
  },
}

export const Light = Template.bind({})
Light.args = {
  ...baseArgs,
  variant: BootstrapVariants.Light,
  textDark: true,
}
Light.parameters = {
  docs: {
    source: {
      code: '<ui-chip variant="light">Light</ui-chip>',
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
      code: '<ui-chip variant="dark">Dark</ui-chip>',
    },
  },
}

export const Pill = Template.bind({})
Pill.args = {
  ...baseArgs,
  variant: BootstrapVariants.Primary,
  pill: true,
}
Pill.parameters = {
  docs: {
    source: {
      code: '<ui-chip pill variant="primary">Primary</ui-chip>',
    },
  },
}
