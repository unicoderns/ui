import { inject } from 'vue'
import { action } from '@storybook/addon-actions'
import { app } from '@storybook/vue3'
import { BootstrapVariants, Positions } from '@unicodernsui/core'
import {
  UiToastContainer,
  UiToastModel,
  UiToastMessagePlugin,
  UiToastService,
} from '../'
import { UiToastDoc } from '../dev'

app.use(UiToastMessagePlugin)

export default {
  title: 'UI/Bootstrap/Toast',
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
  parameters: {
    docs: {
      page: UiToastDoc,
    },
  },
}

type StoryModel = UiToastModel
let service: UiToastService | undefined

const Template = (args: StoryModel) => ({
  components: { UiToastContainer },
  setup() {
    service = inject(UiToastMessagePlugin.ServiceInjectionToken)
    return { args, service }
  },
  methods: {
    show: action('show'),
    hide: action('hide'),
    close: action('close'),
    open: () => {
      const { position, ...params } = args
      service?.add(params)
    },
    clear: () => {
      service?.clear()
    },
  },
  template: `
  <a href="" @click.prevent="open">Click here to open Toast</a>
  <br>
  <a href="" @click.prevent="clear">Click here to close all</a>
    <div style="background: red; margin: 10px; height: 200px; position: relative; ">
      <ui-toast-container 
        :defaultPosition="args.position"
        style="position: absolute; width: 100%; height: 100%; "
      >
      <template #toastHeader="{ item }"> &#9917 {{ item.headerText }}</template>
      <template #toastBody="{ item }"> &#9917 <a>{{ item.message }}</a></template>
      </ui-toast-container>
    </div>
  `,
})

const baseArgs: StoryModel = {
  animate: true,
  headerText: 'Header text',
  message: 'Some message',
  dismissible: true,
  msTimer: undefined,
  variant: BootstrapVariants.Primary,
  position: Positions.BottomRight,
}

export const CustomContainer = Template.bind({})
CustomContainer.args = {
  ...baseArgs,
}
