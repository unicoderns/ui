import { ButtonControlComponent } from '../index';

export default {
  title: 'UI/Button',
  component: ButtonControlComponent,
  argTypes: {
    size: { control: { type: 'select', options: ['sm', 'md', 'lg'] } },
    variant: { control: { type: 'select', options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] } },
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ButtonControlComponent },
  /*
  components: {
    UiBtn: ButtonControlComponent,
  },
  */
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<button-control-component v-bind="args" >Button</button-control-component>',
});

export const Primary = Template.bind({});
Primary.args = {
  key: "size",
  variant: "primary",
  size: "sm",
  anchor: false,
  outline: false,
  active: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  key: "size",
  variant: "secondary",
  size: "sm",
  anchor: false,
  outline: false,
  active: false
};

export const Success = Template.bind({});
Success.args = {
  key: "size",
  variant: "success",
  size: "sm",
  anchor: false,
  outline: false,
  active: false
};

export const Danger = Template.bind({});
Danger.args = {
  key: "size",
  variant: "danger",
  size: "sm",
  anchor: false,
  outline: false,
  active: false
};

export const Warning = Template.bind({});
Warning.args = {
  key: "size",
  variant: "warning",
  size: "sm",
  anchor: false,
  outline: false,
  active: false
};

export const Info = Template.bind({});
Info.args = {
  key: "size",
  variant: "info",
  size: "sm",
  anchor: false,
  outline: false,
  active: false
};

export const Light = Template.bind({});
Light.args = {
  key: "size",
  variant: "light",
  size: "sm",
  anchor: false,
  outline: false,
  active: false
};

export const Dark = Template.bind({});
Dark.args = {
  key: "size",
  variant: "dark",
  size: "sm",
  anchor: false,
  outline: false,
  active: false
};