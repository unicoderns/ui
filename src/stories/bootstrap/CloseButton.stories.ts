import { ButtonCloseModel } from '../../components';
import { UiButtonClose } from '../../index';
import { action } from '@storybook/addon-actions'

export default {
  title: 'UI/Bootstrap/CloseButton',
  component: UiButtonClose,
};

const Template = (args: ButtonCloseModel) => ({
  components: { UiButtonClose },
  setup() {
    return { args };
  },
  methods: {
    close: action('close'),
  },
  template: `
    <div :class="{ 'bg-dark': args.invert }">
      <ui-button-close v-bind="args" @close="close" >Button</ui-button-close>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  invert: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  invert: false
};

export const Inverted = Template.bind({});
Inverted.args = {
  disabled: false,
  invert: true
};
