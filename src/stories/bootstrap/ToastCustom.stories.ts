import { action } from '@storybook/addon-actions'
import { inject } from 'vue'
import { UiToastContainer, ToastMessageModel, UiToastMessagePlugin, ToastMessageService } from '../../components'
import { app } from '@storybook/vue3'
import { BootstrapVariants } from '../../defaults'
import { Position } from '../../types/position'

app.use(UiToastMessagePlugin)

export default {
  title: 'UI/Bootstrap/Toast',
  argTypes: {
    position: { control: { type: 'select' }, options: Object.values(Position) },
    variant: { control: { type: 'select' }, options: Object.values(BootstrapVariants) },
    headerText: { control: { type: 'text' } },
    message: { control: { type: 'text' } },
    animate: { control: { type: 'boolean' } },
    dismissible: { control: { type: 'boolean' } },
    msTimer: { control: { type: 'number', required: false } },
    ['aria:live']: { name:'aria:live', control: { type: 'text' } },
    ['aria:role']: { name:'aria:role', control: { type: 'text' } },
    ['aria:buttonClose']: { name:'aria:buttonClose', control: { type: 'text' } },
  }
}

type StoryModel = ToastMessageModel
let service: ToastMessageService | undefined

const Template = (args: StoryModel) => ({
  components: { UiToastContainer },
  setup() {
    service = inject(UiToastMessagePlugin.ServiceInjectionToken);
    return { args, service }
  },
  methods: {
    show: action('show'),
    hide: action('hide'),
    close: action('close'),
    open: () => {
      const { position, ...params } = args;
      service?.add(params);
    }
  },
  template: `
    <a href="" @click.prevent="open">Open Toast</a>
    <div style="background: red; margin: 10px; height: 200px; position: relative; ">
      <ui-toast-container 
        :defaultPosition="args.position"
        style="position: absolute; width: 100%; height: 100%; "
      ></ui-toast-container>
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
  position: Position.BottomRight,
}

export const CustomContainer = Template.bind({})
CustomContainer.args = {
  ...baseArgs,
}
