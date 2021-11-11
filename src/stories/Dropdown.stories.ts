import { MenuItem, MenuItemTypes, ControlDropdownComponent } from '../index';

export default {
  title: 'UI/Dropdown',
  component: ControlDropdownComponent,
  argTypes: {
    size: { control: { type: 'select', options: ['sm', 'md', 'lg'] } },
    arrowDirection: { control: { type: 'select', options: ['left', 'up', 'right', 'down'] } },
    variant: { control: { type: 'select', options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] } },
    onClick: {},
  },
};

const datasource: MenuItem[] =
  [{
    type: MenuItemTypes.Header,
    content: 'This is a header item',
  },
  {
    type: MenuItemTypes.Text,
    content: 'This is a text item',
  },
  {
    type: MenuItemTypes.Divider,
  },
  {
    type: MenuItemTypes.Link,
    elementAttrs: { href: 'https://unicoderns.com/', target: '_blank' },
    content: 'This is a link item',
  },
  {
    type: MenuItemTypes.Button,
    content: 'This is a button item',
  },
  {
    type: MenuItemTypes.Divider,
  },
  {
    type: MenuItemTypes.Link,
    elementAttrs: { href: 'https://unicoderns.com/', target: '_blank' },
    content: 'This is an active link item',
    disabled: false,
  },
  {
    type: MenuItemTypes.Button,
    content: 'This is an active button item',
    disabled: false,
  },
  {
    type: MenuItemTypes.Divider,
  },
  {
    type: MenuItemTypes.Link,
    elementAttrs: { href: 'https://unicoderns.com/', target: '_blank' },
    content: 'This is a disabled link item',
    disabled: true,
  },
  {
    type: MenuItemTypes.Button,
    content: 'This is a disabled button item',
    disabled: true,
  },
  {
    type: MenuItemTypes.Raw,
    content: '<i>This is a <b>raw</b> item</i>',
  },
  ];
  
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ControlDropdownComponent },
  /*
  */
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<control-dropdown-component v-bind="args">Button</control-dropdown-component>',
});

export const Primary = Template.bind({});
Primary.args = {
  datasource,
  variant: "primary",
  label: "Label",
  outline: false,
  anchor: false,
  active: false,
  key: "size",
  invert: true,
  size: "sm",
  defaultSelectedIndex: -1,
  splitButton: true,
  arrowDirection: "down",
};

export const Secondary = Template.bind({});
Secondary.args = {
  datasource,
  variant: "secondary",
  label: "Label",
  outline: false,
  anchor: false,
  active: false,
  key: "size",
  invert: true,
  size: "sm",
  defaultSelectedIndex: -1,
  splitButton: true,
  arrowDirection: "down",
};

export const Success = Template.bind({});
Success.args = {
  datasource,
  variant: "success",
  label: "Label",
  outline: false,
  anchor: false,
  active: false,
  key: "size",
  invert: true,
  size: "sm",
  defaultSelectedIndex: -1,
  splitButton: true,
  arrowDirection: "down",
};

export const Danger = Template.bind({});
Danger.args = {
  datasource,
  variant: "danger",
  label: "Label",
  outline: false,
  anchor: false,
  active: false,
  key: "size",
  invert: true,
  size: "sm",
  defaultSelectedIndex: -1,
  splitButton: true,
  arrowDirection: "down",
};

export const Warning = Template.bind({});
Warning.args = {
  datasource,
  variant: "warning",
  label: "Label",
  outline: false,
  anchor: false,
  active: false,
  key: "size",
  invert: true,
  size: "sm",
  defaultSelectedIndex: -1,
  splitButton: true,
  arrowDirection: "down",
};

export const Info = Template.bind({});
Info.args = {
  datasource,
  variant: "info",
  label: "Label",
  outline: false,
  anchor: false,
  active: false,
  key: "size",
  invert: true,
  size: "sm",
  defaultSelectedIndex: -1,
  splitButton: true,
  arrowDirection: "down",
};

export const Light = Template.bind({});
Light.args = {
  datasource,
  variant: "light",
  label: "Label",
  outline: false,
  anchor: false,
  active: false,
  key: "size",
  invert: true,
  size: "sm",
  defaultSelectedIndex: -1,
  splitButton: true,
  arrowDirection: "down",
};

export const Dark = Template.bind({});
Dark.args = {
  datasource,
  variant: "dark",
  label: "Label",
  outline: false,
  anchor: false,
  active: false,
  key: "size",
  invert: true,
  size: "sm",
  defaultSelectedIndex: -1,
  splitButton: true,
  arrowDirection: "down",
};