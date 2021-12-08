import { ref } from 'vue'
import { action } from '@storybook/addon-actions'
import { setThemeConfig } from '@unicodernsui/core'
import { TailwindVariants } from '@unicodernsui/custom-theme'
import {
  UiButtonClose,
  twUiButtonCloseThemeConfigDefaults,
} from '@unicodernsui/button-close'
import {
  UiTransition,
  twUiTransitionThemeConfigDefaults,
} from '@unicodernsui/transition'
import { UiAlert, UiAlertModel } from '../'
import { twUiAlertThemeConfigDefaults } from './tw-ui-alert-theme.config'

export default {
  title: 'UI/Tailwind/Alert',
  component: UiAlert,
  argTypes: {
    label: { control: { type: 'text' } },
    variant: {
      control: { type: 'select' },
      options: Object.values(TailwindVariants),
    },
  },
}

type StoryModel =
  | UiAlertModel
  | {
      label: string
    }

const Template = (args: StoryModel) => ({
  components: { UiAlert },
  setup() {
    setThemeConfig({
      [UiTransition.TAG_NAME]: twUiTransitionThemeConfigDefaults,
      [UiButtonClose.TAG_NAME]: twUiButtonCloseThemeConfigDefaults,
      [UiAlert.TAG_NAME]: twUiAlertThemeConfigDefaults,
    })

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
    <ui-alert :="args" :show="toggle" @show="show" @close="close" @hide="hide">{{ args.label }}</ui-alert>
  `,
})

const baseArgs: StoryModel = {
  label: 'Label',
  variant: TailwindVariants.Blue,
  animate: true,
  dismissible: true,
  show: true,
}

export const Blue = Template.bind({})
Blue.args = {
  ...baseArgs,
  variant: 'blue',
}

export const Pink = Template.bind({})
Pink.args = {
  ...baseArgs,
  variant: 'pink',
}

export const Purple = Template.bind({})
Purple.args = {
  ...baseArgs,
  variant: 'purple',
}

export const Inverted = Template.bind({})
Inverted.args = {
  ...baseArgs,
  invert: true,
  dismissible: true,
  variant: TailwindVariants.Blue,
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
