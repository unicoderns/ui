import { provide } from 'vue'
import { action } from '@storybook/addon-actions'
import {
  BootstrapVariants,
  ButtonSizeVariants,
  uiUseDarkThemeInjectionToken,
} from '@unicodernsui/core'
import { UiButton, UiButtonModel } from '../'
import { UiButtonDoc } from '../dev'

export default {
  title: 'UI/Bootstrap/Button',
  component: UiButton,
  argTypes: {
    label: { control: { type: 'text' } },
    size: {
      control: { type: 'select' },
      options: Object.values(ButtonSizeVariants),
    },
    variant: {
      control: { type: 'select' },
      options: Object.values(BootstrapVariants),
    },
    toggle: { control: { type: 'boolean' } },
    ['aria:role']: { name: 'role (aria)', control: { type: 'text' } },
  },
  parameters: {
    docs: {
      page: UiButtonDoc,
    },
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
  variant: BootstrapVariants.Primary,
  size: ButtonSizeVariants.Medium,
  anchor: false,
  outline: false,
  active: false,
  toggle: false,
}

export const Primary = Template.bind({})
Primary.args = {
  ...baseArgs,
  label: 'Primary',
  variant: BootstrapVariants.Primary,
}
Primary.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="primary">Primary</ui-button>',
    },
  },
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...baseArgs,
  label: 'Secondary',
  variant: BootstrapVariants.Secondary,
}
Secondary.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="secondary">Secondary</ui-button>',
    },
  },
}

export const Success = Template.bind({})
Success.args = {
  ...baseArgs,
  label: 'Success',
  variant: BootstrapVariants.Success,
}
Success.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="success">Success</ui-button>',
    },
  },
}

export const Danger = Template.bind({})
Danger.args = {
  ...baseArgs,
  label: 'Danger',
  variant: BootstrapVariants.Danger,
}
Danger.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="danger">Danger</ui-button>',
    },
  },
}

export const Warning = Template.bind({})
Warning.args = {
  ...baseArgs,
  label: 'Warning',
  variant: BootstrapVariants.Warning,
}
Warning.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="warning">Warning</ui-button>',
    },
  },
}

export const Info = Template.bind({})
Info.args = {
  ...baseArgs,
  label: 'Info',
  variant: BootstrapVariants.Info,
}
Info.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="info">Info</ui-button>',
    },
  },
}

export const Light = Template.bind({})
Light.args = {
  ...baseArgs,
  label: 'Light',
  variant: BootstrapVariants.Light,
}
Light.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="light">Light</ui-button>',
    },
  },
}

export const Dark = Template.bind({})
Dark.args = {
  ...baseArgs,
  label: 'Dark',
  variant: BootstrapVariants.Dark,
}
Dark.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="dark">Dark</ui-button>',
    },
  },
}

export const OutlinePrimary = Template.bind({})
OutlinePrimary.args = {
  ...baseArgs,
  label: 'Primary',
  variant: BootstrapVariants.Primary,
  outline: true,
}
OutlinePrimary.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="primary" outline>Primary</ui-button>',
    },
  },
}

export const OutlineSecondary = Template.bind({})
OutlineSecondary.args = {
  ...baseArgs,
  label: 'Secondary',
  variant: BootstrapVariants.Secondary,
  outline: true,
}
OutlineSecondary.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="secondary" outline>Secondary</ui-button>',
    },
  },
}

export const OutlineSuccess = Template.bind({})
OutlineSuccess.args = {
  ...baseArgs,
  label: 'Success',
  variant: BootstrapVariants.Success,
  outline: true,
}
OutlineSuccess.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="success" outline>Success</ui-button>',
    },
  },
}

export const OutlineDanger = Template.bind({})
OutlineDanger.args = {
  ...baseArgs,
  label: 'Danger',
  variant: BootstrapVariants.Danger,
  outline: true,
}
OutlineDanger.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="danger" outline>Danger</ui-button>',
    },
  },
}

export const OutlineWarning = Template.bind({})
OutlineWarning.args = {
  ...baseArgs,
  label: 'Warning',
  variant: BootstrapVariants.Warning,
  outline: true,
}
OutlineWarning.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="warning" outline>Warning</ui-button>',
    },
  },
}

export const OutlineInfo = Template.bind({})
OutlineInfo.args = {
  ...baseArgs,
  label: 'Primary',
  variant: BootstrapVariants.Info,
  outline: true,
}
OutlineInfo.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="info" outline>Info</ui-button>',
    },
  },
}

export const OutlineLight = Template.bind({})
OutlineLight.args = {
  ...baseArgs,
  label: 'Light',
  variant: BootstrapVariants.Light,
  outline: true,
}
OutlineLight.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="light" outline>Light</ui-button>',
    },
  },
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  ...baseArgs,
  label: 'Dark',
  variant: BootstrapVariants.Dark,
  outline: true,
}
OutlineDark.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="dark" outline>Dark</ui-button>',
    },
  },
}

export const Small = Template.bind({})
Small.args = {
  ...baseArgs,
  label: 'Small',
  size: ButtonSizeVariants.Small,
}
Small.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="primary" size="sm">Small</ui-button>',
    },
  },
}

export const Medium = Template.bind({})
Medium.args = {
  ...baseArgs,
  label: 'Medium',
  size: ButtonSizeVariants.Medium,
}
Medium.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="primary" size="md">Medium</ui-button>',
    },
  },
}

export const Large = Template.bind({})
Large.args = {
  ...baseArgs,
  label: 'Large',
  size: ButtonSizeVariants.Large,
}
Large.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="primary" size="lg">Large</ui-button>',
    },
  },
}

export const Active = Template.bind({})
Active.args = {
  ...baseArgs,
  label: 'Active',
  variant: BootstrapVariants.Danger,
  active: true,
}
Active.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="danger" active>Active</ui-button>',
    },
  },
}

export const Toggle = Template.bind({})
Toggle.args = {
  ...baseArgs,
  label: 'Toggle',
  variant: BootstrapVariants.Danger,
  toggle: true,
}
Toggle.parameters = {
  docs: {
    source: {
      code:
        '<ui-button variant="danger" toggle @toggle="toggle">Toggle</ui-button>',
    },
  },
}
