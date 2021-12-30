import { action } from '@storybook/addon-actions'
import { UiButtonCloseModel, UiButtonClose } from '../'
import { UiButtonCloseDoc } from '../dev'

export default {
  title: 'UI/Bootstrap/CloseButton',
  component: UiButtonClose,
  argTypes: {
    ['aria:label']: { name: 'label (aria)', control: { type: 'text' } },
  },
  parameters: {
    docs: {
      page: UiButtonCloseDoc,
    },
  },
}

const Template = (args: UiButtonCloseModel) => ({
  components: { UiButtonClose },
  setup() {
    return { args }
  },
  methods: {
    close: action('close'),
  },
  template: `
    <div :class="{ 'bg-dark': args.invert }">
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
