import { ButtonCloseComponent } from '../index';

export default {
  title: 'UI/CloseButton',
  component: ButtonCloseComponent,
  argTypes: {
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ButtonCloseComponent },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<button-close-component v-bind="args" >Button</button-close-component>',
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
