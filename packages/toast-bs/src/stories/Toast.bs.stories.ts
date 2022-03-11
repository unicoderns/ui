import { inject } from 'vue'
import { action } from '@storybook/addon-actions'
import { app } from '@storybook/vue3'
import { BootstrapVariants, Positions } from '@uicr/core'
import { UiToastModel, UiToastMessagePlugin, UiToastService } from '@uicr/toast'
import { install } from '..'

app.use(UiToastMessagePlugin)

export default {
  title: 'Bootstrap/Toast',
  argTypes: {
    position: {
      control: { type: 'select' },
      options: Object.values(Positions),
    },
    variant: {
      control: { type: 'select' },
      options: Object.values(BootstrapVariants),
    },
    headerText: { control: { type: 'text' } },
    message: { control: { type: 'text' } },
    animate: { control: { type: 'boolean' } },
    dismissible: { control: { type: 'boolean' } },
    msTimer: { control: { type: 'number', required: false } },
    ['aria:live']: { name: 'live (aria)', control: { type: 'text' } },
    ['aria:role']: { name: 'role (aria)', control: { type: 'text' } },
    ['aria:buttonClose']: {
      name: 'button close (aria)',
      control: { type: 'text' },
    },
  },
}

type StoryModel = UiToastModel
let service: UiToastService | undefined

const Template = (args: StoryModel) => ({
  setup() {
    service = inject(UiToastMessagePlugin.ServiceInjectionToken)
    install()

    return { args, service }
  },
  methods: {
    show: action('show'),
    hide: action('hide'),
    close: action('close'),
    open: () => {
      service?.add(args)
    },
    clear: () => {
      service?.clear()
    },
  },
  template: `
    <a href="" @click.prevent="open">Click here to open Toast</a>
    <br>
    <a href="" @click.prevent="clear">Click here to close all</a>
  `,
})

const baseArgs: StoryModel = {
  animate: true,
  headerText: 'Header text',
  message: 'Some message',
  dismissible: true,
  msTimer: undefined,
  variant: BootstrapVariants.Primary,
}

export const Normal = Template.bind({})
Normal.args = {
  ...baseArgs,
}
Normal.parameters = {
  docs: {
    source: {
      type: 'code',
      code: `
inject(UiToastMessagePlugin.ServiceInjectionToken)
service?.add({ headerText: 'some header', message: 'some message' })
      `,
    },
  },
}

export const Positioned = Template.bind({})
Positioned.args = {
  ...baseArgs,
  headerText: 'Warning variant',
  message: 'Middle position',
  variant: BootstrapVariants.Warning,
  position: Positions.MiddleCenter,
}
Positioned.parameters = {
  docs: {
    source: {
      type: 'code',
      code: `
inject(UiToastMessagePlugin.ServiceInjectionToken)
service?.add({
  headerText: 'Warning variant',
  message: 'Middle position',
  variant: BootstrapVariants.Warning,
  position: Positions.MiddleCenter,
})
      `,
    },
  },
}

export const Timer = Template.bind({})
Timer.args = {
  ...baseArgs,
  headerText: 'Danger variant',
  message: '3s Timer',
  msTimer: 3000,
  variant: BootstrapVariants.Danger,
  position: Positions.TopRight,
}
Timer.parameters = {
  docs: {
    source: {
      type: 'code',
      code: `
inject(UiToastMessagePlugin.ServiceInjectionToken)
service?.add({
  headerText: 'Danger variant',
  message: '3s Timer',
  msTimer: 3000,
  variant: BootstrapVariants.Danger,
  position: Positions.TopRight,
})
      `,
    },
  },
}

export const NonDismissable = Template.bind({})
NonDismissable.args = {
  ...baseArgs,
  headerText: 'Success variant',
  message: 'Non dismissible',
  dismissible: false,
  msTimer: 3000,
  variant: BootstrapVariants.Success,
  position: Positions.TopCenter,
}
NonDismissable.parameters = {
  docs: {
    source: {
      type: 'code',
      code: `
inject(UiToastMessagePlugin.ServiceInjectionToken)
service?.add({
  headerText: 'Success variant',
  message: 'Non dismissible',
  dismissible: false,
  msTimer: 3000,
  variant: BootstrapVariants.Success,
  position: Positions.TopCenter,
})
      `,
    },
  },
}

export const NoHeader = Template.bind({})
NoHeader.args = {
  ...baseArgs,
  headerText: undefined,
  message: 'No header',
  variant: BootstrapVariants.Info,
  position: Positions.BottomLeft,
}
NoHeader.parameters = {
  docs: {
    source: {
      type: 'code',
      code: `
inject(UiToastMessagePlugin.ServiceInjectionToken)
service?.add({
  headerText: undefined,
  message: 'No header',
  variant: BootstrapVariants.Info,
  position: Positions.BottomLeft,
})
      `,
    },
  },
}
