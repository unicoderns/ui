import { AlertMessageComponent } from '../index';

export default {
  title: 'UI/Alert',
  component: AlertMessageComponent,
  argTypes: {
    variant: { control: { type: 'select', options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] } },
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AlertMessageComponent },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<alert-message-component v-bind="args" >Button</alert-message-component>',
});

export const Primary = Template.bind({});
Primary.args = {
  key: "variant",
  variant: "primary",
  dismissible: true,
  animate: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  key: "variant",
  variant: "secondary",
  dismissible: true,
  animate: true,
};

export const Success = Template.bind({});
Success.args = {
  key: "variant",
  variant: "success",
  dismissible: true,
  animate: true,
};

export const Danger = Template.bind({});
Danger.args = {
  key: "variant",
  variant: "danger",
  dismissible: true,
  animate: true,
};

export const Warning = Template.bind({});
Warning.args = {
  key: "variant",
  variant: "warning",
  dismissible: true,
  animate: true,
};

export const Info = Template.bind({});
Info.args = {
  key: "variant",
  variant: "info",
  dismissible: true,
  animate: true,
};

export const Light = Template.bind({});
Light.args = {
  key: "variant",
  variant: "light",
  dismissible: true,
  animate: true,
};

export const Dark = Template.bind({});
Dark.args = {
  key: "variant",
  variant: "dark",
  dismissible: true,
  animate: true,
};