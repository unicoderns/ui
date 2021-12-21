import { action } from '@storybook/addon-actions'
import { setComponentThemeConfig } from '@unicodernsui/core'
import { UiButtonCloseModel, UiButtonClose } from '../'
import { twUiButtonCloseThemeConfigDefaults } from './tw-ui-button-close-theme.config'

export default {
  title: 'UI/Tailwind/CloseButton',
  component: UiButtonClose,
}

const Template = (args: UiButtonCloseModel) => ({
  components: { UiButtonClose },
  setup() {
    setComponentThemeConfig(UiButtonClose, twUiButtonCloseThemeConfigDefaults)

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
