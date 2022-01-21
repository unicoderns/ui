import { action } from '@storybook/addon-actions'
import { UiButtonCloseModel, UiButtonClose } from '@unicodernsui/button-close'
import { install } from '../'

export default {
  title: 'UI/Tailwind/CloseButton',
  component: UiButtonClose,
}

const Template = (args: UiButtonCloseModel) => ({
  components: { UiButtonClose },
  setup() {
    install()

    return { args }
  },
  methods: {
    close: action('close'),
  },
  template: `
    <div :class="{ 'bg-gray-500': args.invert }">
      <ui-button-close v-bind="args" @close="close" >Button</ui-button-close>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  disabled: false,
  invert: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  invert: false,
}

export const Inverted = Template.bind({})
Inverted.args = {
  disabled: false,
  invert: true,
}
