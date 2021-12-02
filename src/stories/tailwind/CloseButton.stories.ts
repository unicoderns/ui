import { ButtonCloseModel } from '../../components';
import { ButtonCloseComponent } from '../../index';
import { action } from '@storybook/addon-actions'
import { provideTailwind } from './theme'

export default {
  title: 'UI/Tailwind/CloseButton',
  component: ButtonCloseComponent,
};

const Template = (args: ButtonCloseModel) => ({
  components: { ButtonCloseComponent },
  setup() {
    provideTailwind()

    return { args };
  },
  methods: {
    close: action('close'),
  },
  template: `
    <div :class="{ 'bg-gray-500': args.invert }">
      <button-close-component v-bind="args" @close="close" >Button</button-close-component>
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
