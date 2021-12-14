import { ref } from 'vue'
import { action } from '@storybook/addon-actions'
import { BootstrapVariants } from '@unicodernsui/core'
import { UiAlert, UiAlertModel } from '../'
import { UiAlertDoc } from '../dev'

export default {
  title: 'UI/Bootstrap/Alert',
  component: UiAlert,
  argTypes: {
    default: { control: { type: 'text' } },
    variant: {
      control: { type: 'select' },
      options: Object.values(BootstrapVariants),
    },
  },
  parameters: {
    docs: {
      page: UiAlertDoc,
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

export const Inverted = Template.bind({})
Inverted.args = {
  ...baseArgs,
  invert: true,
  dismissible: true,
  variant: BootstrapVariants.Dark,
  ['theme:variants:dark']: 'bg-dark text-white',
}

export const Dismissible = Template.bind({})
Dismissible.args = {
  ...baseArgs,
  dismissible: true,
}

export const Animated = Template.bind({})
Animated.args = {
  ...baseArgs,
  animate: true,
}
