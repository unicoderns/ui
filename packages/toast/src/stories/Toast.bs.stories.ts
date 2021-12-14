import { inject } from 'vue'
import { action } from '@storybook/addon-actions'
import { app } from '@storybook/vue3'
import { BootstrapVariants, Position } from '@unicodernsui/core'
import { UiToastModel, UiToastMessagePlugin, UiToastService } from '../'
import { UiToastDoc } from '../dev'

app.use(UiToastMessagePlugin)

export default {
  title: 'UI/Bootstrap/Toast',
  argTypes: {
    position: { control: { type: 'select' }, options: Object.values(Position) },
    variant: {
      control: { type: 'select' },
      options: Object.values(BootstrapVariants),
    },
    headerText: { control: { type: 'text' } },
    message: { control: { type: 'text' } },
    animate: { control: { type: 'boolean' } },
    dismissible: { control: { type: 'boolean' } },
    msTimer: { control: { type: 'number', required: false } },
    ['aria:live']: { name: 'aria:live', control: { type: 'text' } },
    ['aria:role']: { name: 'aria:role', control: { type: 'text' } },
    ['aria:buttonClose']: {
      name: 'aria:buttonClose',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      page: UiToastDoc,
    },
  },
}

type StoryModel = UiToastModel
let service: UiToastService | undefined

const Template = (args: StoryModel) => ({
  setup() {
    service = inject(UiToastMessagePlugin.ServiceInjectionToken)
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
  position: Position.BottomRight,
}

export const Normal = Template.bind({})
Normal.args = {
  ...baseArgs,
}

export const Positioned = Template.bind({})
Positioned.args = {
  ...baseArgs,
  variant: BootstrapVariants.Warning,
  position: Position.MiddleCenter,
}

export const Timer = Template.bind({})
Timer.args = {
  ...baseArgs,
  msTimer: 3000,
  variant: BootstrapVariants.Danger,
  position: Position.TopRight,
}

export const NoDismissable = Template.bind({})
NoDismissable.args = {
  ...baseArgs,
  dismissible: false,
  msTimer: 3000,
  variant: BootstrapVariants.Success,
  position: Position.TopCenter,
}

export const NoHeader = Template.bind({})
NoHeader.args = {
  ...baseArgs,
  headerText: undefined,
  variant: BootstrapVariants.Info,
  position: Position.BottomLeft,
}
