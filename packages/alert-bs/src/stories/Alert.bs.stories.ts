import { ref } from 'vue'
import { action } from '@storybook/addon-actions'
import { BootstrapVariants } from '@uicr/common-bs'
import { UiAlert, UiAlertModel } from '@uicr/alert'
import { install } from '..'

export default {
  title: 'Bootstrap/Alert',
  component: UiAlert,
  argTypes: {
    default: { control: { type: 'text' } },
    variant: {
      control: { type: 'select' },
      options: Object.values(BootstrapVariants),
    },
    ['aria:role']: { name: 'role (aria)', control: { type: 'text' } },
    ['aria:buttonClose']: {
      name: 'button close (aria)',
      control: { type: 'text' },
    },
  },
}

type StoryModel =
  | UiAlertModel
  | {
      default: string
      [key: string]: string
    }

const Template = (args: StoryModel) => ({
  components: { UiAlert },
  setup() {
    const toggle = ref(true)

    install()

    return { args, toggle }
  },
  methods: {
    show: action('show'),
    hide: action('hide'),
    close: action('close'),
  },
  template: `
    <a href="" @click.prevent="toggle=!toggle">Toggle visible</a>
    <br>
    <ui-alert :="args" :show="toggle" @show="show" @close="close" @hide="hide">{{ args.default }}</ui-alert>
  `,
})

const baseArgs: StoryModel = {
  default: 'Some content',
  animate: false,
  dismissible: false,
  show: true,
  variant: BootstrapVariants.Primary,
}

export const Primary = Template.bind({})
Primary.args = {
  ...baseArgs,
}

Primary.parameters = {
  docs: {
    source: {
      code: '<ui-alert variant="primary">Primary</ui-alert>',
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
      code: '<ui-alert variant="secondary">Secondary</ui-alert>',
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
      code: '<ui-alert variant="success">Success</ui-alert>',
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
      code: '<ui-alert variant="danger">Danger</ui-alert>',
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
      code: '<ui-alert variant="warning">Warning</ui-alert>',
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
      code: '<ui-alert variant="info">Info</ui-alert>',
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
      code: '<ui-alert variant="light">Light</ui-alert>',
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
      code: '<ui-alert variant="dark">Dark</ui-alert>',
    },
  },
}

export const Inverted = Template.bind({})
Inverted.args = {
  ...baseArgs,
  invert: true,
  dismissible: true,
  variant: BootstrapVariants.Dark,
  ['theme:variants:dark']: 'bg-dark text-white',
}

Inverted.parameters = {
  docs: {
    source: {
      code: '<ui-alert variant="dark" invert dismissible>Inverted</ui-alert>',
    },
  },
}

export const Dismissible = Template.bind({})
Dismissible.args = {
  ...baseArgs,
  dismissible: true,
}

Dismissible.parameters = {
  docs: {
    source: {
      code: '<ui-alert dismissible>Dismissible</ui-alert>',
    },
  },
}

export const Animated = Template.bind({})
Animated.args = {
  ...baseArgs,
  animate: true,
}

Animated.parameters = {
  docs: {
    source: {
      code: '<ui-alert animated>Animated</ui-alert>',
    },
  },
}
